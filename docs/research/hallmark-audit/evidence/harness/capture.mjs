import {chromium} from 'file:///C:/Users/david/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import {writeFile,readFile} from 'node:fs/promises';
const root='C:/Git/Davio/docs/research/hallmark-audit',base='https://explore-hall-demo.davio-gym.pages.dev/';
if(process.argv.includes('--extras')){await import('./extras.mjs');process.exit(0)}
const browser=await chromium.launch({channel:'msedge',headless:true});
const logs=[], key='davio-explore-hall-demo-v1';
const fresh=()=>({completed:[],sitting:null,hallStyle:'bench',closeCount:0});
async function measure(page,name){
 return page.evaluate(name=>{
  const rect=e=>{const r=e.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height,bottom:r.bottom,right:r.right}};
  const sc=document.querySelector('.reading-scroll,.journey-scroll'),f=document.activeElement;
  const nodes=[...document.querySelectorAll('.entry-title,.entry-status,.kind-label,.passage,.prompt h2,.option,.check-response,.typed-response,.sheet-action,.bottom-sheet h2,.bottom-sheet p,.tab,.hall h1')];
  return {name,viewport:[innerWidth,innerHeight],rootWidth:document.documentElement.scrollWidth,palette:document.body.dataset.palette,scroll:sc?{top:sc.scrollTop,height:sc.clientHeight,total:sc.scrollHeight}:null,focused:f?{tag:f.tagName,label:f.getAttribute('aria-label')||f.textContent.slice(0,100),rect:rect(f),outline:getComputedStyle(f).outline,outlineOffset:getComputedStyle(f).outlineOffset}:null,nodes:nodes.map(e=>{const s=getComputedStyle(e);let bg=e;while(bg&&getComputedStyle(bg).backgroundColor==='rgba(0, 0, 0, 0)')bg=bg.parentElement;return {tag:e.tagName,cls:e.className,text:e.textContent.slice(0,130),rect:rect(e),font:s.fontFamily,fontSize:s.fontSize,lineHeight:s.lineHeight,color:s.color,background:bg?getComputedStyle(bg).backgroundColor:null,wrap:s.overflowWrap,whiteSpace:s.whiteSpace,scrollWidth:e.scrollWidth,clientWidth:e.clientWidth}})};
 },name);
}
async function shot(page,name){await page.screenshot({path:`${root}/screenshots/${name}.png`});logs.push(await measure(page,name));await writeFile(`${root}/evidence/browser-checks.json`,JSON.stringify({at:new Date().toISOString(),browser:browser.version(),base,logs},null,2));}
async function seed(page,sitting){await page.addInitScript(({key,sitting})=>{localStorage.setItem(key,JSON.stringify({completed:[],hallStyle:'bench',closeCount:0,sitting}));},{key,sitting});await page.reload();await page.locator('.entries').waitFor();await page.getByRole('button',{name:/Continue Pass/}).click();await page.locator('.prompt').waitFor();const index=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)).sitting.index,key);if(index!==sitting.index)throw Error(`Seed index mismatch ${index} != ${sitting.index}`);}
for(const viewport of [{width:390,height:844},{width:360,height:640},{width:320,height:844},{width:375,height:844},{width:414,height:844},{width:768,height:1000}]){
 const ctx=await browser.newContext({viewport}),page=await ctx.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base,{waitUntil:'networkidle'});await page.locator('.entries').waitFor();await page.evaluate(()=>document.fonts.ready);const data=await page.request.get(base+'lesson-data.json').then(r=>r.json());const l=data.lessons[0];
 await shot(page,`explore-initial-${viewport.width}`);
 await page.keyboard.press('Tab');await page.keyboard.press('Tab');await shot(page,`explore-focus-${viewport.width}`);
 await page.locator('.journey-scroll').evaluate(e=>e.scrollTop=e.scrollHeight);await shot(page,`explore-bottom-${viewport.width}`);
 await page.getByRole('button',{name:'Start Pass it along',exact:true}).click();await page.locator('.prompt').waitFor();await shot(page,`sitting-opening-${viewport.width}`);
 await page.locator('.prompt h2').scrollIntoViewIfNeeded();await shot(page,`sitting-choice-${viewport.width}`);await page.locator('.option').last().scrollIntoViewIfNeeded();await shot(page,`sitting-choice-end-${viewport.width}`);
 await page.locator('.option').last().click();await page.locator('.bottom-sheet').waitFor();await shot(page,`feedback-retry-${viewport.width}`);
 await page.getByRole('button',{name:'Try again',exact:true}).click();await shot(page,`retry-focus-${viewport.width}`);
 await page.getByRole('button',{name:l.beats[0].item.expected,exact:true}).click();await page.waitForTimeout(1150);await shot(page,`sitting-continued-${viewport.width}`);
 const current=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)).sitting,key);logs.push({name:`ordinary-first-transition-${viewport.width}`,index:current.index,expected:1});
 await page.getByRole('button',{name:'Leave sitting',exact:true}).click();await page.getByRole('button',{name:'Leave',exact:true}).click();await shot(page,`explore-ongoing-${viewport.width}`);
 const typedIndex=l.beats.findIndex(b=>!b.item.choices&&b.item.type!=='compose');const longIndex=l.beats.reduce((best,b,i)=>b.passage.length>l.beats[best].passage.length?i:best,0);
 const state=index=>({id:l.id,index,response:'',attempts:0,miss:null,answers:[],scroll:0});
 await seed(page,state(longIndex));await page.locator(`[data-passage="${longIndex}"]`).scrollIntoViewIfNeeded();await shot(page,`sitting-long-${viewport.width}`);
 await page.locator('.reading-scroll').evaluate(e=>e.scrollTop=e.scrollHeight);await shot(page,`sitting-long-end-${viewport.width}`);
 if(typedIndex>=0){await seed(page,state(typedIndex));await page.locator('.typed-response').fill('audittest');await page.locator('.typed-response').focus();await shot(page,`sitting-typed-${viewport.width}`);await page.getByRole('button',{name:'Submit',exact:true}).click();await page.locator('.bottom-sheet').waitFor();await shot(page,`feedback-answer-${viewport.width}`);}
 // Hosted native technical-check path, no evaluator call.
 await seed(page,state(0));await page.getByRole('button',{name:'Demo options'}).click();await page.locator('#fail-check').click();await page.locator('.option').first().click();await page.locator('.bottom-sheet').waitFor();await shot(page,`feedback-technical-${viewport.width}`);
 if(viewport.width===390||viewport.width===360){
  await seed(page,{...state(l.beats.length-1),miss:'answer'});await page.getByRole('button',{name:'Got it',exact:true}).click();await page.locator('.hall').waitFor();await shot(page,`hall-${viewport.width}`);
  await page.getByRole('button',{name:'Explore',exact:true}).click();
  // Palette only: compare same native states with Moss.
  await page.evaluate(async()=>{const m=await import('./palette.mjs');m.setPalette('moss')});await shot(page,`moss-explore-${viewport.width}`);
  await seed(page,state(0));await page.locator('.prompt h2').scrollIntoViewIfNeeded();await shot(page,`moss-choice-${viewport.width}`);await page.locator('.option').last().click();await page.keyboard.press('Tab');await page.locator('#miss-action').focus();await shot(page,`moss-feedback-${viewport.width}`);
  await seed(page,state(typedIndex));await page.locator('.typed-response').focus();await shot(page,`moss-input-focus-${viewport.width}`);
  // Whole-rendered-UI enlargement: freeze every computed font + line height before applying doubled pixels.
  await page.evaluate(()=>{const values=[...document.querySelectorAll('body,body *')].map(e=>{const s=getComputedStyle(e);return [e,parseFloat(s.fontSize),parseFloat(s.lineHeight)]});for(const [e,font,line]of values){e.style.setProperty('font-size',`${font*2}px`,'important');if(Number.isFinite(line))e.style.setProperty('line-height',`${line*2}px`,'important')}});
  await page.locator('.reading-scroll').evaluate(e=>e.scrollTop=e.scrollHeight);await shot(page,`text200-typed-${viewport.width}`);
  await page.getByRole('button',{name:'Leave sitting',exact:true}).click();
  await page.locator('.bottom-sheet').evaluate(e=>{const values=[e,...e.querySelectorAll('*')].map(n=>{const s=getComputedStyle(n);return[n,parseFloat(s.fontSize),parseFloat(s.lineHeight)]});for(const[n,f,l]of values){n.style.setProperty('font-size',`${f*2}px`,'important');if(Number.isFinite(l))n.style.setProperty('line-height',`${l*2}px`,'important')}});await shot(page,`text200-leave-${viewport.width}`);
  await page.getByRole('button',{name:'Leave',exact:true}).click();
  await page.evaluate(()=>{const values=[...document.querySelectorAll('body,body *')].filter(e=>!e.style.fontSize).map(e=>{const s=getComputedStyle(e);return[e,parseFloat(s.fontSize),parseFloat(s.lineHeight)]});for(const[e,f,l]of values){e.style.setProperty('font-size',`${f*2}px`,'important');if(Number.isFinite(l))e.style.setProperty('line-height',`${l*2}px`,'important')}});
  await shot(page,`text200-explore-${viewport.width}`);
 }
 logs.push({name:`console-${viewport.width}`,errors});await ctx.close();
}
await writeFile(`${root}/evidence/browser-checks.json`,JSON.stringify({at:new Date().toISOString(),browser:browser.version(),base,logs},null,2));await browser.close();console.log(`Captured ${logs.length} records`);
