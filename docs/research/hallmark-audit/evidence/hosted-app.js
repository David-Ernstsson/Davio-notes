import './palette.mjs';
import {setWorldScenery,worldSceneryEnabled,beginWorldVisit} from './world-ambient.js';
import {layoutWorld} from './world-layout.js';
import {createImageWarmer} from './preload.js';
const phone=document.querySelector('#phone');
const overlay=document.querySelector('#overlay-root');
const settingsButton=document.querySelector('#demo-settings');
const storageKey='davio-explore-hall-demo-v1';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// Published text keeps its hyphens; a hyphenated name such as T-Centralen just never breaks at one.
const text=s=>esc(s).replace(/[\p{L}\p{N}]+(?:-[\p{L}\p{N}]+)+/gu,'<span class="nowrap">$&</span>');
const icon=p=>`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`;
const icons={world:icon('<path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2zM9 3v16M15 5v16"/>'),explore:icon('<circle cx="12" cy="12" r="9"/><path d="m16 8-2.6 5.4L8 16l2.6-5.4z"/>'),practice:icon('<path d="M12 5c-3-2-6-2-9-1v15c3-1 6-1 9 1 3-2 6-2 9-1V4c-3-1-6-1-9 1Zm0 0v15"/>'),profile:icon('<circle cx="12" cy="7" r="3.5"/><path d="M4.5 21v-2.5a7.5 7.5 0 0 1 15 0V21"/>')};
const arrow='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>';
const speaker='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4zM16 8a6 6 0 0 1 0 8M19 5a10 10 0 0 1 0 14"/></svg>';
const transport={pause:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 5v14M15.5 5v14"/></svg>',resume:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10-6.5z"/></svg>',replay:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12a7 7 0 1 0 2.05-4.95M5 4v4h4"/></svg>'};
const firstId='excursion_stockholm_pass_along',secondId='stockholm-central-excursion';
const lessonTitles={[firstId]:'Pass it along',[secondId]:'The locker code'};
const fresh=()=>({completed:[],sitting:null,hallStyle:'bench',closeCount:0});
let saved;try{saved=JSON.parse(localStorage.getItem(storageKey)||'null');}catch{}
let state=saved&&Array.isArray(saved.completed)&&['bench','door','fact','vary'].includes(saved.hallStyle)?saved:fresh();
let pendingRequest=null;
let phase='ready',questionReached=false,questionLeft=false,assistTarget=null,assistFrame=null,assistResolve=null,holdTimer=null,holdStart=0,holdRemaining=500,pausedForResponse=false,wantsNarration=false,manualPause=false,handoff=0;
const reduced=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
let data,view='explore',activeOverlay=null,lastFocus=null,failNextCheck=false,audio=null,audioIndex=null,loadError=false;
const availableCities=['Stockholm','Göteborg','Malmö'];
const cityImages={Stockholm:'stockholm-city-hall.jpg',Göteborg:'goteborg.jpg',Malmö:'malmo.jpg'};
let exploreCity='Stockholm',worldOrigin='Stockholm';
const imageWarmer=createImageWarmer();
let worldObserver=null,worldLayoutGeneration=0,worldPrevious=null;
function stopWorldLayout(){worldLayoutGeneration++;worldObserver?.disconnect();worldObserver=null;}
function hallImage(id,closeCount=state.closeCount+1){const style=state.hallStyle==='vary'?(closeCount%2===0?'fact':'bench'):state.hallStyle;return id===secondId?'assets/explore-scenes-fixture.png':style==='door'?'assets/door-scene.png':style==='fact'?'assets/station-fixture.png':'assets/bench-scene.png';}
function warmLessons(ids){imageWarmer.replace(ids.flatMap(id=>[id===firstId?'assets/station-warm.png':'assets/explore-scenes-fixture.png',hallImage(id)]));}
const locationSnapshot=()=>({view,city:exploreCity,origin:worldOrigin});
const persist=()=>{try{localStorage.setItem(storageKey,JSON.stringify(state));}catch{}};
const lesson=()=>data.lessons.find(l=>l.id===state.sitting?.id);
const scroller=()=>phone.querySelector('.reading-scroll');
const saveScroll=()=>{if(state.sitting&&scroller()){state.sitting.scroll=scroller().scrollTop;persist();}};
function stopAudio(){if(audio)audio.pause();audio=null;audioIndex=null;updateAudio();}
function updateAudio(){
  const slot=phone.querySelector('.audio-slot');
  if(slot){slot.innerHTML=audio?`<button class="audio-transport" aria-label="${audio.ended?'Replay':audio.paused?'Resume narration':'Pause narration'}">${audio.ended?transport.replay:audio.paused?transport.resume:transport.pause}</button>`:'';slot.querySelector('button')?.addEventListener('click',()=>{if(audio.ended)audio.currentTime=0;if(audio.paused){manualPause=false;wantsNarration=true;if(canNarrate())audio.play().catch(audioFailure);}else{manualPause=true;wantsNarration=false;audio.pause();}});}
  phone.querySelectorAll('.passage-play').forEach(b=>b.classList.toggle('playing',Number(b.dataset.audio)===audioIndex&&audio&&!audio.paused));
}
function audioFailure(error){if(error?.name==='AbortError')return;manualPause=true;wantsNarration=false;if(audio)audio.pause();const p=phone.querySelector(`[data-passage="${audioIndex}"]`);if(p&&!p.querySelector('.narration-status'))p.insertAdjacentHTML('afterend','<p class="narration-status" role="status">Audio couldn’t play. You can keep reading or try Play again.</p>');updateAudio();}
function playPassage(index){
  const file=lesson()?.beats[index]?.audio;if(!file)return;
  stopAudio();audioIndex=index;audio=new Audio(file);
  for(const event of ['play','pause','ended'])audio.addEventListener(event,updateAudio);
  audio.addEventListener('error',audioFailure);manualPause=false;wantsNarration=true;if(canNarrate())audio.play().catch(audioFailure);else pausedForResponse=true;updateAudio();
}
function canNarrate(){return phase==='ready'&&view==='sitting'&&!activeOverlay&&!document.hidden;}
function resumeNarration(){if(!pausedForResponse||!wantsNarration||manualPause||!canNarrate())return;pausedForResponse=false;const index=state.sitting.index;if(lesson().beats[index].audio&&audioIndex!==index)playPassage(index);else if(audio)audio.play().catch(audioFailure);}
function navigate(next,{history=true,city=exploreCity,origin=worldOrigin}={}){if(next==='world'&&view!=='world')beginWorldVisit();stopWorldLayout();imageWarmer.replace([]);cancelEvaluation('navigation');cancelAssist();pauseHold();handoff++;phase='ready';pausedForResponse=false;wantsNarration=false;manualPause=false;saveScroll();stopAudio();closeOverlay();exploreCity=availableCities.includes(city)?city:'Stockholm';worldOrigin=availableCities.includes(origin)?origin:exploreCity;view=next;if(history)window.history.pushState(locationSnapshot(),'');render();}
function openWorld(){navigate('world',{origin:exploreCity});}
function world(){
  stopWorldLayout();
  phone.innerHTML='<section class="world-screen" aria-label="World"><header class="world-header"><button class="world-back" aria-label="Back to originating Explore list">'+icon('<path d="m14 6-6 6 6 6"/>')+'</button><h1>World</h1><span class="world-brand">davio</span></header><div class="world-scroll"><section class="world-atlas" aria-label="Choose a Swedish destination"></section></div></section>';
  const atlas=phone.querySelector('.world-atlas');
  const current=state.sitting?'Stockholm':worldOrigin;
  const recommended=!state.sitting&&current!=='Stockholm'&&data.lessons.some(l=>!state.completed.includes(l.id))?'Stockholm':null;
  let timer;
  const refresh=async()=>{
    const focusedIntent=(activeOverlay?lastFocus:document.activeElement)?.dataset?.intent;
    const focusedCity=(activeOverlay?lastFocus:document.activeElement)?.dataset?.city;
    const generation=++worldLayoutGeneration;
    try{
      const result=await layoutWorld(atlas,{current,recommended,scenery:worldSceneryEnabled(),previous:worldPrevious,isActive:()=>generation===worldLayoutGeneration&&view==='world'});
      if(!result||generation!==worldLayoutGeneration)return;
      worldPrevious={placements:result.placements};atlas.worldEvidence=result.evidence;
      const replacement=focusedCity?atlas.querySelector(`[data-city="${focusedCity}"]`):focusedIntent?atlas.querySelector(`[data-intent="${focusedIntent}"]`):null;
      if(replacement){if(activeOverlay)lastFocus=replacement;else replacement.focus({preventScroll:true});}
      atlas.querySelectorAll('[data-city]').forEach(button=>button.addEventListener('click',()=>navigate('explore',{city:button.dataset.city})));
      atlas.querySelector('[data-intent="explain-lock"]').addEventListener('click',()=>explainPlace('Uppsala','Uppsala isn’t part of this preview.'));
      atlas.querySelector('[data-intent="explain-grey"]').addEventListener('click',()=>explainPlace('Visby','There’s nothing to explore in Visby right now.'));
    }catch(error){if(generation===worldLayoutGeneration&&view==='world'){atlas.replaceChildren();const message=document.createElement('p');message.textContent='The map couldn’t open. Return to Explore and try again.';atlas.append(message);console.error(error);}}
  };
  phone.querySelector('.world-back').addEventListener('click',()=>window.history.back());
  refresh();let size=atlas.clientWidth+','+atlas.clientHeight;
  worldObserver=new ResizeObserver(()=>{const next=atlas.clientWidth+','+atlas.clientHeight;if(next===size)return;size=next;clearTimeout(timer);timer=setTimeout(()=>{if(atlas.isConnected&&view==='world')refresh();},80);});worldObserver.observe(atlas);
}
function explainPlace(name,message){
  openOverlay(`<section class="bottom-sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title"><h2 id="sheet-title">${esc(name)}</h2><p>${esc(message)}</p><button class="sheet-action" id="place-ok">Got it</button></section>`,'place');
  overlay.querySelector('#place-ok').addEventListener('click',closeOverlay);
}
function begin(id){
  if(state.completed.includes(id))return;
  if(state.sitting?.id!==id)state.sitting={id,index:0,response:'',attempts:0,miss:null,answers:[],scroll:0};
  questionReached=Boolean(state.sitting.questionReached);questionLeft=Boolean(state.sitting.questionLeft);persist();navigate('sitting');
}
function explore(){
  const primary={id:firstId,title:lessonTitles[firstId],scene:'station',detail:'A stuck lift at T-Centralen — get the message through.'};
  const locker={id:secondId,title:lessonTitles[secondId],scene:'locker',detail:'Help Elin hear the sequence in the hall.'};
  let playable=(exploreCity==='Stockholm'?[primary,locker]:[]).filter(e=>!state.completed.includes(e.id));
  if(state.sitting)playable.sort((a,b)=>(b.id===state.sitting.id)-(a.id===state.sitting.id));
  warmLessons(playable.map(entry=>entry.id));
  const invitation={title:'The invitation',scene:'cafe',eyebrow:'Across the table · Chapter 3',detail:'An invitation over coffee.'};
  const path={title:'Handle a change of plan',art:'path',eyebrow:'Learning Path',detail:'Lesson 3 of 6'};
  const speed={title:'Speed Test',art:'speed',detail:'See how quickly you can recall familiar language.'};
  const entries=playable.length?[playable[0],invitation,...playable.slice(1),path,speed]:[];
  const card=(entry)=>{
    const ongoing=Boolean(entry.id&&entry.id===state.sitting?.id);
    const recommended=!state.sitting&&entry.id===playable[0]?.id;
    const art=entry.art==='path'?'<svg viewBox="0 0 48 48"><rect width="48" height="48" fill="#355547"/><path d="M10 36h10c10 0-2-23 8-23h10" fill="none" stroke="#e5cf9f" stroke-width="2"/><circle cx="10" cy="36" r="3.3" fill="#f5ebd9"/><circle cx="38" cy="13" r="3.3" fill="#f5ebd9"/></svg>':'<svg viewBox="0 0 48 48"><rect width="48" height="48" fill="#dfc5a4"/><circle cx="27" cy="27" r="12.5" fill="#f5ebd9" stroke="#7d543d" stroke-width="1.7"/><path d="M27 27V19m-3-12h6m-3 0v7" stroke="#7d543d" stroke-width="1.8"/></svg>';
    const tag=entry.id?'button':'article';
    return `<${tag} class="entry ${entry.art?'compact':''} ${entry.id?'':'visual-fixture'}" ${entry.id?`data-start="${entry.id}" aria-label="${ongoing?'Continue':'Start'} ${esc(entry.title)}"`:''}><span class="thumb ${entry.scene||''}" aria-hidden="true">${entry.art?art:''}</span><div class="entry-body"><span class="entry-arrow" aria-hidden="true">${ongoing?'Continue':''}${arrow}</span>${ongoing||recommended?`<div class="entry-status">${ongoing?'In progress':'Recommended'}</div>`:''}${entry.eyebrow?`<div class="kind-label">${esc(entry.eyebrow)}</div>`:''}<div class="entry-title">${esc(entry.title)}</div><p>${text(entry.detail)}</p></div></${tag}>`;
  };
  const headerImage=exploreCity==='Stockholm'?'stockholm-fixture.png':cityImages[exploreCity];
  phone.innerHTML=`<section class="screen ${entries.length?'':'is-empty'}"><div class="journey-scroll"><header class="destination" style="background-image:linear-gradient(180deg,#0d221dd6,#0d221d18),url('assets/${headerImage}')"><div class="destination-name"><span>davio</span><span>${esc(exploreCity)}</span></div>${entries.length?`<button class="world" aria-label="World">${icons.world}</button>`:''}</header>${entries.length?`<div class="entries">${entries.map(card).join('')}</div>`:'<div class="empty"><p>Nothing more to explore here right now.</p><p class="empty-detail">There’s more in the world.</p><button class="sheet-action empty-world">World</button></div>'}</div><nav class="tabs" aria-label="Main">${['Explore','Practice','Profile'].map((name,i)=>`<button class="tab ${i===0?'active':''}" ${i===0?'aria-current="page"':i===1?'data-practice':'data-profile'}><span>${name}</span></button>`).join('')}</nav></section>`;
  phone.querySelector('[data-profile]').addEventListener('click',()=>{location.href='practice/swedish-practice-grammar.mockup/index.html?host=1&tab=Profile';});
  phone.querySelector('[data-practice]').addEventListener('click',()=>{location.href='practice/swedish-practice-grammar.mockup/index.html?host=1';});
  phone.querySelector('.world')?.addEventListener('click',openWorld);
  phone.querySelector('.empty-world')?.addEventListener('click',openWorld);
  phone.querySelectorAll('[data-start]').forEach(b=>b.addEventListener('click',()=>begin(b.dataset.start)));
}
function promptMarkup(){
  const {response,index}=state.sitting;const item=lesson().beats[index].item;
  return `<form class="prompt" lang="sv"><h2 id="question" tabindex="-1">${text(item.prompt)}</h2>${item.choices?`<div role="group" aria-labelledby="question">${item.choices.map(choice=>`<button type="button" class="option ${response===choice?'selected':''}" aria-pressed="${response===choice}" data-choice="${esc(choice)}">${text(choice)}</button>`).join('')}</div>`:` ${item.type==='compose'?`<textarea class="typed-response compose-response" aria-labelledby="question" autocomplete="off" autocapitalize="none" spellcheck="false" maxlength="4000" rows="4">${esc(response)}</textarea>`:`<input class="typed-response" aria-labelledby="question" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" value="${esc(response)}">`}<button type="submit" class="check-response" ${response.trim()?'':'disabled'}>Submit</button>`}</form>`;
}
function pauseForResponse(){if(audio&&!audio.paused){wantsNarration=true;pausedForResponse=true;audio.pause();}updateAudio();}
function bindPrompt(){
  phone.querySelectorAll('[data-choice]').forEach(b=>b.addEventListener('click',()=>{
    if(phase!=='ready')return;pauseForResponse();state.sitting.response=b.dataset.choice;persist();
    phone.querySelectorAll('[data-choice]').forEach(o=>{const selected=o===b;o.classList.toggle('selected',selected);o.setAttribute('aria-pressed',String(selected));});check();
  }));
  phone.querySelector('.typed-response')?.addEventListener('focus',pauseForResponse);
  phone.querySelector('.typed-response')?.addEventListener('input',event=>{if(phase!=='ready')return;pauseForResponse();state.sitting.response=event.target.value;persist();phone.querySelector('.check-response').disabled=!event.target.value.trim();});
  phone.querySelector('.prompt')?.addEventListener('submit',event=>{event.preventDefault();check();});
}
function sitting(){
  const s=state.sitting;if(!s){view='explore';explore();return;}
  const l=lesson();let paragraphs='';
  for(let index=0;index<=s.index;index++){
    const beat=l.beats[index];
    if(beat.passage)paragraphs+=`<p class="passage" lang="sv" data-passage="${index}">${beat.audio?`<button class="passage-play" data-audio="${index}" aria-label="Play this passage">${speaker}</button>`:''}${text(beat.passage)}</p>`;
  }
  phone.innerHTML=`<section class="sitting"><header class="play-header"><button class="exit" aria-label="Leave sitting">×</button><span class="general-progress" role="progressbar" aria-label="Lesson progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(s.index/l.beats.length*100)}"><i style="width:${s.index/l.beats.length*100}%"></i></span><span class="audio-slot"></span></header><div class="reading-scroll" tabindex="-1"><article class="chapter"><figure class="chapter-photo ${s.id===firstId?'station':'locker'}" aria-label="The place you chose"></figure>${paragraphs}${promptMarkup()}</article></div><button id="scroll-assist" class="scroll-assist" data-design="centre" aria-label="Scroll down" hidden><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path class="single-chevron" d="m7 10 5 5 5-5"/><path class="double-chevron" d="m7 6 5 5 5-5m-10 4 5 5 5-5"/></svg></button><span id="status" class="sr-only" role="status"></span></section>`;
  scroller().scrollTop=s.scroll||0;
  scroller().addEventListener('scroll',event=>{if(state.sitting===s){s.scroll=event.currentTarget.scrollTop;persist();}},{passive:true});
  phone.querySelector('.exit').addEventListener('click',leaveWarning);
  phone.querySelectorAll('[data-audio]').forEach(b=>b.addEventListener('click',()=>playPassage(Number(b.dataset.audio))));
  bindPrompt();updateAudio();bindNavigation();
  if(s.pending){const requestId=s.pending.requestId;for(const trace of [...(s.composeTrace||[]),...(state.trace||[])])if(trace.requestId===requestId){trace.status='unchecked';trace.reason='restored-pending';}s.pending=null;s.miss='technical';persist();}
  if(s.composeFeedback)showComposeSuccess();else if(s.miss)showMiss();else if(s.accepted){phase='accepted';lockResponse();phone.querySelector('.option.selected,.check-response')?.classList.add('accepted-control');resumeReadingOverlay();}
}
const normalize=s=>String(s).normalize('NFC').trim().toLocaleLowerCase('sv').replace(/[.!?]+$/,'');
function distance(a,b){let row=Array.from({length:b.length+1},(_,i)=>i);for(let i=1;i<=a.length;i++){const next=[i];for(let j=1;j<=b.length;j++)next[j]=Math.min(next[j-1]+1,row[j]+1,row[j-1]+(a[i-1]!==b[j-1]));row=next;}return row[b.length];}
function check(){
  const s=state.sitting;if(!s||s.miss||phase!=='ready'||!s.response.trim())return;
  cancelAssist();phase='checking';lockResponse();updateAssist();
  phone.querySelector('.typed-response')?.blur();saveScroll();
  pauseForResponse();
  const item=lesson().beats[s.index].item;if(item.type==='compose'){checkCompose(s);return;}
  if(failNextCheck){failNextCheck=false;s.miss='technical';persist();showMiss();return;}
  const accepted=normalize(s.response)===normalize(item.expected);
  if(accepted){phase='accepted';s.accepted=true;persist();phone.querySelector('.option.selected,.check-response')?.classList.add('accepted-control');phone.querySelector('#status').textContent='Correct. Your response was accepted.';holdRemaining=500;startHold();return;}
  const retry=s.attempts===0&&(item.choices?item.choices.length>2:distance(normalize(s.response),normalize(item.expected))<=1);
  s.attempts++;s.miss=retry?'retry':'answer';persist();showMiss();
}
function lockResponse(){phone.querySelectorAll('.option,.typed-response,.check-response').forEach(el=>el.disabled=true);}
function startHold(){if(phase!=='accepted'||activeOverlay||document.hidden)return;holdStart=performance.now();holdTimer=setTimeout(()=>advance(true),reduced()?0:holdRemaining);}
function pauseHold(){if(holdTimer){clearTimeout(holdTimer);holdTimer=null;holdRemaining=Math.max(0,holdRemaining-(performance.now()-holdStart));}}
function resumeReadingOverlay(){pauseHold();openOverlay('<section class="bottom-sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title"><h2 id="sheet-title">Reading paused.</h2><button class="sheet-action" id="accept-continue">Resume reading</button></section>','accepted');overlay.querySelector('button').onclick=()=>advance(true);}
async function advance(accepted){
  const s=state.sitting,l=lesson();if(!s)return;pauseHold();phase='transition';const token=++handoff;
  const oldReading=scroller(),oldScroll=oldReading.scrollTop,oldHeight=oldReading.scrollHeight;
  s.answers.push({response:s.response,accepted,attempts:s.attempts,source:lesson().beats[s.index].source,fixture:lesson().beats[s.index].fixture,evaluations:s.composeTrace||[]});s.composeTrace=[];delete s.composeFeedback;delete s.composeResult;s.index++;s.response='';s.attempts=0;s.miss=null;delete s.accepted;questionReached=false;s.questionReached=false;questionLeft=false;s.questionLeft=false;
  closeOverlay();
  if(s.index===l.beats.length){state.lastClose={id:s.id,answers:s.answers};state.completed.push(s.id);(state.finished??=[]).push({id:s.id,title:lessonTitles[s.id]});state.closeCount++;state.sitting=null;persist();navigate('hall');return;}
  persist();sitting();lockResponse();
  const reading=scroller(),chapter=phone.querySelector('.chapter'),target=phone.querySelector(`[data-passage="${s.index}"]`)||phone.querySelector('.prompt h2');
  const continuation=document.createElement('div');continuation.className='story-continuation';
  if(target.matches('.passage')){
    const beat=l.beats[s.index],words=beat.passage.match(/\S+\s*|\s+/g)||[beat.passage],opening=words.slice(0,4);
    target.innerHTML=(beat.audio?`<button class="passage-play" data-audio="${s.index}" aria-label="Play this passage">${speaker}</button>`:'')+opening.map((w,n)=>`<span class="reveal-word" style="--arrival:${n*45}ms">${n===0?`<span class="reading-start"><span class="reading-marker" aria-hidden="true"></span>${text(w)}</span>`:text(w)}</span>`).join('')+`<span class="reveal-rest">${text(words.slice(4).join(''))}</span>`;
    target.before(continuation);continuation.append(target);const tail=document.createElement('div');tail.className='continuation-tail';tail.append(phone.querySelector('.prompt'));continuation.append(tail);
    target.querySelector('[data-audio]')?.addEventListener('click',()=>playPassage(s.index));
  }else{target.closest('.prompt').before(continuation);continuation.append(target.closest('.prompt'));}
  target.classList.add('reading-target');target.tabIndex=-1;
  const naturalHeight=reading.scrollHeight,naturalMax=Math.max(0,naturalHeight-reading.clientHeight);
  chapter.style.minHeight=`${Math.max(oldHeight,naturalHeight)}px`;reading.scrollTop=oldScroll;
  const frame=reading.getBoundingClientRect(),previous=[...chapter.querySelectorAll('.passage')].filter(p=>p!==target).at(-1),line=parseFloat(getComputedStyle(previous||target).lineHeight)||30,gap=previous?parseFloat(getComputedStyle(previous).marginBottom)||0:0;
  const destination=Math.max(0,Math.min(reading.scrollTop+target.getBoundingClientRect().top-frame.top-Math.max(target.querySelector('.passage-play')?20:12,Math.min(2.75*line+gap,frame.height-line-24)),naturalMax));
  if(!reduced())continuation.classList.add('revealing');
  const [motion]=await Promise.all([moveAssist(destination,false,'transition'),new Promise(r=>setTimeout(r,reduced()?0:385))]);
  continuation.classList.remove('revealing');chapter.style.minHeight='';if(token!==handoff)return;
  phase='ready';phone.querySelectorAll('.option,.typed-response').forEach(el=>el.disabled=false);if(phone.querySelector('.check-response'))phone.querySelector('.check-response').disabled=true;
  if(!motion.interrupted)target.focus({preventScroll:true});saveScroll();updateAssist();
  resumeNarration();
}
function hall(){
  const close=state.lastClose;const isLocker=close?.id===secondId;
  const accepted=close?.answers?.every(a=>a.accepted);
  const heading=accepted?(isLocker?'You heard the sequence.':'You made it clear.'):'You saw it through.';
  const style=state.hallStyle==='vary'?(state.closeCount%2===0?'fact':'bench'):state.hallStyle;
  const fact=style==='fact';
  const next=data.lessons.find(l=>!state.completed.includes(l.id));
  phone.innerHTML=`<section class="hall ${isLocker?'locker-hall':fact?'plain':style} ${fact?'with-fact':''}"><div class="hall-scene" aria-hidden="true"></div><div class="hall-shade"></div><div class="hall-place">${isLocker?'STOCKHOLM CENTRAL':'T-CENTRALEN'}</div><div class="hall-content"><h1>${heading}</h1>${fact?'<aside class="fact-panel"><div class="kind-label">Below your feet</div><p>The blue line runs about 30 metres below the street. This station keeps going long after the hall ends.</p></aside>':''}<div class="hall-actions">${next?`<button class="sheet-action hall-primary" id="hall-continue">Continue</button>`:''}<button class="sheet-action sheet-secondary" id="hall-explore">Explore</button></div></div></section>`;
  phone.querySelector('.hall-scene').style.backgroundImage=`url('${hallImage(close?.id,state.closeCount)}')`;
  phone.querySelector('#hall-continue')?.addEventListener('click',()=>begin(next.id));
  phone.querySelector('#hall-explore').addEventListener('click',()=>navigate('explore'));
}
function openOverlay(markup,kind){
  cancelAssist();pauseHold();pauseForResponse();lastFocus=document.activeElement;activeOverlay=kind;phone.inert=true;document.querySelector('.demo-header').inert=true;
  overlay.innerHTML=`<div class="veil"></div>${markup}`;
  const dialog=overlay.querySelector('[role="dialog"]');
  dialog.querySelector('button,input,select')?.focus();updateAssist();
}
function closeOverlay(){overlay.innerHTML='';activeOverlay=null;phone.inert=false;document.querySelector('.demo-header').inert=false;if(lastFocus?.isConnected)lastFocus.focus();lastFocus=null;updateAssist();}
function showMiss(){
  phase='miss';const s=state.sitting;if(s.composeTrace?.length){const trace=s.composeTrace.at(-1);trace.feedbackExposed=s.composeResult?.feedback??null;if(s.miss==='answer')trace.exampleExposed=true;}const item=lesson().beats[s.index].item;
  const technical=s.miss==='technical',retry=s.miss==='retry',compose=item.type==='compose',feedback=s.composeResult?.feedback;
  openOverlay(`<section class="bottom-sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title"><h2 id="sheet-title">${technical?'Your response couldn’t be checked.':retry?'Not quite.':'Here’s the answer.'}</h2>${compose&&feedback&&!technical?`<p>${esc(feedback.text)}</p>`:''}${!technical&&!retry?`<p lang="sv">${text(item.expected)}</p><button class="report" id="report-prompt">Report a problem with this prompt</button>`:''}<div class="sheet-actions"><button class="sheet-action" id="miss-action">${technical?'Try checking again':retry?'Try again':'Got it'}</button>${technical?'<button class="sheet-action sheet-secondary" id="technical-leave">Leave for now</button>':''}</div></section>`,'miss');
  overlay.querySelector('#miss-action').addEventListener('click',()=>{
    const kind=s.miss;s.miss=null;phase='ready';persist();closeOverlay();
    if(kind==='technical')check();
    else if(kind==='retry'){if(item.type!=='compose')s.response='';else s.feedbackSeen=true;persist();const previous=s.scroll;sitting();scroller().scrollTop=previous;phone.querySelector('.option,.typed-response')?.focus({preventScroll:true});}
    else advance(false);
  });
  overlay.querySelector('#technical-leave')?.addEventListener('click',()=>navigate('explore'));
  overlay.querySelector('#report-prompt')?.addEventListener('click',event=>{event.currentTarget.textContent='Marked for review in this preview';event.currentTarget.disabled=true;});
}
function leaveWarning(){
  saveScroll();pauseForResponse();if(phase==='checking')cancelEvaluation('leave');
  openOverlay('<section class="bottom-sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title"><h2 id="sheet-title">Leave for now?</h2><p>You can continue from here when you return.</p><div class="sheet-actions"><button class="sheet-action" id="stay">Stay</button><button class="sheet-action sheet-secondary" id="leave">Leave</button></div></section>','leave');
  overlay.querySelector('#stay').addEventListener('click',()=>{closeOverlay();if(state.sitting?.miss)showMiss();else{startHold();resumeNarration();}});
  overlay.querySelector('#leave').addEventListener('click',()=>navigate('explore'));
}
function exitSettings(){
  closeOverlay();if(view==='sitting'&&state.sitting?.composeFeedback)showComposeSuccess();else if(view==='sitting'&&state.sitting?.miss)showMiss();else{startHold();resumeNarration();}
}
function demoOptions(){
  openOverlay(`<section class="demo-dialog" role="dialog" aria-modal="true" aria-labelledby="options-title"><button class="dialog-close" id="close-options">Close</button><h2 id="options-title">Try the journey</h2><p>Pass it along and The locker code in Stockholm are playable. World opens city Explore lists; Göteborg and Malmö are navigation fixtures with no lessons. Uppsala and Visby demonstrate locked and grey explanations. Practice opens a bounded two-Activity B1 grammar trial. Other invitations show the visual layout only. Profile offers a local Palette choice. <a href="world-credits.md" target="_blank" rel="noopener">City artwork and map credits</a>. The four published Pass it along items use local matching. One added Compose test fixture uses a real local LLM judge with English feedback. It is not part of Published Edition f255244141de2040 and establishes no learning or mastery claim. Static hosted previews cannot run this local judge.</p><p>The published Pass it along lesson has known passage/question mismatches. Its wording is preserved for this design demonstration. Audio is available only when a recording matches the visible passage.</p><label for="hall-style">Hall appearance</label><select id="hall-style"><option value="bench">Davio on the bench</option><option value="door">Davio at the train door</option><option value="fact">Occasional place fact</option><option value="vary">Vary between Davio and a fact</option></select><p>This is a demonstration choice, not a decided frequency.</p><button id="reset-demo">Start a fresh demo</button><button id="fail-check">Make the next check fail technically</button><h2>World artwork</h2><p>A tiny seated Davio appears in one city landmark. Each time you open World again, he visits the next city: Stockholm, Göteborg, then Malmö. He stays still while the map is open and does not mark your current place.</p><label for="world-scenery">World companion</label><select id="world-scenery"><option value="on">With Davio</option><option value="off">Without Davio</option></select><h2>Earlier Explore alternatives</h2><p>Two earlier pictured layouts: one featured recommendation with the remaining choices below. These pictures retain historical tabs and copy.</p><div class="reference-pictures"><figure><img src="assets/explore-panorama.png" alt="Explore alternative with a Stockholm panorama and one featured recommendation"><figcaption>Panorama and featured recommendation</figcaption></figure><figure><img src="assets/explore-feature.png" alt="Explore alternative with one large recommended scene and compact choices below"><figcaption>Featured scene and smaller choices</figcaption></figure></div></section>`,'settings');
  overlay.querySelector('#world-scenery').value=worldSceneryEnabled()?'on':'off';
  overlay.querySelector('#world-scenery').addEventListener('change',event=>{setWorldScenery(event.target.value==='on');if(view==='world')world();});
  overlay.querySelector('#hall-style').value=state.hallStyle;
  overlay.querySelector('#hall-style').addEventListener('change',event=>{state.hallStyle=event.target.value;persist();if(view==='hall')hall();else if(view==='explore')warmLessons([...phone.querySelectorAll('[data-start]')].map(b=>b.dataset.start));else if(state.sitting)warmLessons([state.sitting.id]);});
  overlay.querySelector('#close-options').addEventListener('click',exitSettings);
  overlay.querySelector('#reset-demo').addEventListener('click',()=>{state=fresh();failNextCheck=false;persist();navigate('explore',{city:'Stockholm',origin:'Stockholm'});});
  overlay.querySelector('#fail-check').addEventListener('click',()=>{failNextCheck=true;exitSettings();});
}
document.addEventListener('keydown',event=>{
  if(!activeOverlay)return;
  if(event.key==='Escape'&&activeOverlay==='settings'){event.preventDefault();exitSettings();}
  if(event.key==='Escape'&&activeOverlay==='place'){event.preventDefault();closeOverlay();}
  if(event.key==='Escape'&&activeOverlay==='leave'){event.preventDefault();closeOverlay();if(state.sitting?.miss)showMiss();else{startHold();resumeNarration();}}
  if(event.key==='Tab'){
    const buttons=[...overlay.querySelectorAll('button:not(:disabled),input,select,a[href]')];
    if(!buttons.length)return;
    const first=buttons[0],last=buttons.at(-1);
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  }
});
window.addEventListener('popstate',event=>{
  if(view==='sitting'){window.history.pushState(locationSnapshot(),'');if(!activeOverlay)leaveWarning();}
  else {
    const target=event.state||{view:'explore',city:'Stockholm',origin:'Stockholm'};
    navigate(target.view==='sitting'&&!state.sitting?'explore':target.view,{history:false,city:target.city,origin:target.origin});
  }
});
window.addEventListener('pagehide',()=>{cancelEvaluation('reload');saveScroll();if(audio)audio.pause();});
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAssist();pauseHold();audio?.pause();}else {startHold();resumeNarration();}});
settingsButton.addEventListener('click',()=>{if(data)demoOptions();});
function render(){if(view!=='world')stopWorldLayout();if(view!=='explore')imageWarmer.replace([]);if(view==='sitting')sitting();else if(view==='hall')hall();else if(view==='world')world();else explore();}
phone.innerHTML='<p class="loading">Opening Stockholm…</p>';
try{
  const response=await fetch('lesson-data.json');if(!response.ok)throw Error('Content unavailable');data=await response.json();
  if(state.sitting&&(!data.lessons.some(l=>l.id===state.sitting.id)||!Number.isInteger(state.sitting.index)||state.sitting.index<0||state.sitting.index>=data.lessons.find(l=>l.id===state.sitting.id).beats.length))state=fresh();
  window.history.replaceState(locationSnapshot(),'');render();
}catch{loadError=true;phone.innerHTML='<p class="loading">Stockholm couldn’t open. Please reload to try again.</p>';settingsButton.disabled=true;}

function updateAssist(){
 const reading=scroller(),chapter=phone.querySelector('.chapter'),button=phone.querySelector('#scroll-assist');
 if(!button)return;
 if(phase!=='ready'||view!=='sitting'||activeOverlay){button.hidden=true;return;}
 const frame=reading.getBoundingClientRect(),question=phone.querySelector('.prompt h2');
 const qb=question?.getBoundingClientRect();
 if(qb&&qb.top<frame.bottom-8){questionReached=true;if(state.sitting&&!state.sitting.questionReached){state.sitting.questionReached=true;persist();}}
 // Back to the question only once it has actually been passed: scrolled beyond, or left behind by looking back.
 if(questionReached&&qb&&(qb.bottom<=frame.top||qb.top>=frame.bottom)){questionLeft=true;if(state.sitting&&!state.sitting.questionLeft){state.sitting.questionLeft=true;persist();}}
 const end=phone.querySelector('.prompt')||[...chapter.querySelectorAll('.passage')].at(-1);
 const beyond=end&&end.getBoundingClientRect().bottom>frame.bottom+1;
 const wasFocused=document.activeElement===button;
 // Once reached, the question remains the destination until a new prompt arrives.
 assistTarget=questionReached?'question':'page';
 button.hidden=!beyond;
 const returning=questionReached&&qb?.top>frame.top+13;
 button.setAttribute('aria-label',questionReached?(returning?(questionLeft?'Back to question':'Scroll down'):'Scroll down through the question'):'Scroll down');
 button.dataset.double=String(questionReached);
 if(button.hidden&&wasFocused)(qb&&qb.top>=frame.top&&qb.top<frame.bottom?question:reading).focus({preventScroll:true});
}
function nextReadingView(frame,line){const reading=scroller(),chapter=phone.querySelector('.chapter');
 // A slightly longer step; hold this distance constant across timing options.
 const step=Math.max(line,Math.floor(frame.height*.7/line)*line);
 let destination=reading.scrollTop+step;
 const blocks=[...chapter.querySelectorAll('.passage,.prompt h2')].map(el=>({el,top:reading.scrollTop+el.getBoundingClientRect().top-frame.top,height:el.getBoundingClientRect().height}));
 const nearbyStart=blocks.find(block=>Math.abs(block.top-destination)<=line&&block.top>reading.scrollTop&&block.top<=reading.scrollTop+frame.height*.75);
 if(nearbyStart)destination=nearbyStart.top;
 else{
  const block=blocks.find(block=>block.top<=destination&&block.top+block.height>destination);
  if(block){const blockLine=parseFloat(getComputedStyle(block.el).lineHeight)||line;destination=block.top+Math.floor((destination-block.top)/blockLine)*blockLine;}
 }
 return Math.max(reading.scrollTop+line,Math.min(destination,reading.scrollTop+frame.height*.75));
}
function cancelAssist(){if(assistFrame!==null)cancelAnimationFrame(assistFrame);assistFrame=null;const resolve=assistResolve;assistResolve=null;resolve?.({interrupted:true});}
function moveAssist(destination,back,allowedPhase='ready'){
 cancelAssist();
 return new Promise(resolve=>{
 assistResolve=resolve;
 const reading=scroller();const start=reading.scrollTop,end=Math.max(0,Math.min(destination,reading.scrollHeight-reading.clientHeight));
 const duration=reduced()?0:450,started=performance.now();
 const finish=()=>{assistFrame=null;assistResolve=null;if(back)phone.querySelector('.prompt h2')?.focus({preventScroll:true});updateAssist();resolve({interrupted:false});};
 if(!duration||Math.abs(end-start)<1){reading.scrollTo({top:end,behavior:'instant'});finish();return;}

 const tick=now=>{
  if(phase!==allowedPhase||view!=='sitting'||activeOverlay||document.hidden){cancelAssist();return;}
  const t=Math.max(0,Math.min(1,(now-started)/duration)),eased=t*t*(3-2*t);
  reading.scrollTo({top:start+(end-start)*eased,behavior:'instant'});
  if(t<1)assistFrame=requestAnimationFrame(tick);else finish();
 };
 assistFrame=requestAnimationFrame(tick);
 });
}

var readingObserver;
function bindNavigation(){
  const reading=scroller(),chapter=phone.querySelector('.chapter');
  phone.querySelector('#scroll-assist').onclick=()=>{
    if(phase!=='ready')return;const question=phone.querySelector('.prompt h2'),frame=reading.getBoundingClientRect(),line=parseFloat(getComputedStyle(chapter.querySelector('.passage')||question).lineHeight)||30;
    const back=assistTarget==='question'&&question.getBoundingClientRect().top>frame.top+13;
    moveAssist(back?reading.scrollTop+question.getBoundingClientRect().top-frame.top-12:nextReadingView(frame,line),back);
  };
  reading.addEventListener('scroll',updateAssist,{passive:true});
  const intentional=()=>{cancelAssist();if(phase==='accepted'&&!activeOverlay)resumeReadingOverlay();};
  for(const name of ['wheel','touchmove'])reading.addEventListener(name,intentional,{passive:true});
  reading.addEventListener('pointerdown',cancelAssist,{passive:true});
  reading.addEventListener('keydown',e=>{if(['PageDown','PageUp','ArrowDown','ArrowUp','Home','End',' '].includes(e.key))intentional();});
  readingObserver?.disconnect();let lastWidth=reading.clientWidth,lastHeight=reading.clientHeight;readingObserver=new ResizeObserver(()=>{if(lastWidth!==reading.clientWidth||lastHeight!==reading.clientHeight){lastWidth=reading.clientWidth;lastHeight=reading.clientHeight;cancelAssist();}updateAssist();});readingObserver.observe(reading);updateAssist();
}
window.sittingPreview={get state(){return {phase,questionReached,questionLeft,assistTarget,index:state.sitting?.index,response:state.sitting?.response,wantsNarration,manualPause,audioPaused:audio?.paused??null};}};

function cancelEvaluation(reason){
  if(!pendingRequest)return;const pending=pendingRequest;pendingRequest=null;pending.controller.abort();pending.sitting.pending=null;pending.sitting.miss='technical';pending.trace.status='unchecked';pending.trace.reason=reason;pending.trace.finishedAt=new Date().toISOString();persist();
}
async function checkCompose(s){
  const beat=lesson().beats[s.index],requestId=crypto.randomUUID(),response=s.response,controller=new AbortController();
  const trace={requestId,response,taskId:beat.fixture.taskId,rubricVersion:beat.fixture.rubricVersion,fixtureVersion:beat.fixture.fixtureVersion,sourceEditionId:data.editionId,startedAt:new Date().toISOString(),status:'pending',support:{attempt:s.attempts+1,feedbackSeen:Boolean(s.feedbackSeen),exampleSeen:false}};
  state.trace??=[];state.trace.push(trace);s.composeTrace??=[];s.composeTrace.push(trace);s.pending={requestId};persist();
  pendingRequest={controller,sitting:s,trace};phone.querySelector('.check-response').textContent='Checking...';phone.querySelector('#status').textContent='Checking...';
  const current=pendingRequest;
  try{
    const result=failNextCheck?(failNextCheck=false,{requestId,status:'unchecked',reason:'technical-demo'}):await fetch('/api/compose/evaluate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({requestId,taskId:beat.fixture.taskId,response,support:trace.support}),signal:controller.signal}).then(async r=>{if(!r.ok)throw Error('check-unavailable');return r.json();});
    if(pendingRequest!==current||state.sitting!==s||view!=='sitting')return;
    if(result.requestId!==requestId||!['evaluated','unchecked'].includes(result.status))throw Error('invalid-result');
    pendingRequest=null;s.pending=null;Object.assign(trace,{status:result.status,result,finishedAt:new Date().toISOString()});s.composeResult=result;
    if(result.status==='unchecked'){s.miss='technical';persist();if(!activeOverlay)showMiss();return;}
    if(!result.evaluation||!['success','miss'].includes(result.evaluation.outcome))throw Error('invalid-result');
    if(result.evaluation.outcome==='success'){
      if(result.feedback){s.composeFeedback=result.feedback;phase='feedback';persist();if(!activeOverlay)showComposeSuccess();}
      else{phase='accepted';s.accepted=true;persist();phone.querySelector('.check-response').textContent='Submit';phone.querySelector('.check-response').classList.add('accepted-control');phone.querySelector('#status').textContent='Your message gets the job done.';holdRemaining=500;startHold();}
    }else{s.attempts++;s.miss=s.attempts===1&&result.retryable?'retry':'answer';persist();if(!activeOverlay)showMiss();}
  }catch(error){
    if(controller.signal.aborted||state.sitting!==s||view!=='sitting')return;
    pendingRequest=null;s.pending=null;trace.status='unchecked';trace.reason='check-unavailable';trace.finishedAt=new Date().toISOString();s.miss='technical';persist();if(!activeOverlay)showMiss();
  }
}
function showComposeSuccess(){
  phase='feedback';const s=state.sitting,feedback=s.composeFeedback;if(s.composeTrace?.length)s.composeTrace.at(-1).feedbackExposed=feedback;persist();
  openOverlay(`<section class="bottom-sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title"><h2 id="sheet-title">Your message gets the job done.</h2><p>${esc(feedback.text)}</p>${feedback.span?`<p><q>${esc(feedback.span)}</q></p>`:''}<button class="sheet-action" id="compose-ok">OK</button></section>`,'compose-success');
  overlay.querySelector('#compose-ok').onclick=()=>{s.feedbackSeen=true;delete s.composeFeedback;advance(true);};
}
