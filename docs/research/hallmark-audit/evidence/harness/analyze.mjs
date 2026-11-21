import {readFile,writeFile,readdir,stat} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const root='C:/Git/Davio/docs/research/hallmark-audit',out=root+'/evidence';
const sha=b=>createHash('sha256').update(b).digest('hex'),lf=b=>Buffer.from(b.toString().replace(/\r\n/g,'\n'));
const git=(...args)=>execFileSync('git',args,{maxBuffer:30e6,stdio:['ignore','pipe','ignore']});
const refs=['d9e383e','6317497','98df0c6','23152db'];
const files=['index.html','app.js','styles.css','palette.css','palette.mjs','lesson-data.json'];const assets=[];
for(const file of files){let hosted;try{hosted=await readFile(`${out}/hosted-${file}`)}catch{continue}
 const paths=[`prototypes/explore-hall/${file}`,`src/web/src/swedish-practice-grammar.mockup/${file}`];const matches=[];
 for(const ref of refs)for(const path of paths)try{const b=git('show',`${ref}:${path}`);if(sha(lf(b))===sha(lf(hosted)))matches.push({revision:git('rev-parse',ref).toString().trim(),path,match:sha(b)===sha(hosted)?'byte-exact':'LF-normalized'});}catch{}
 assets.push({file,sha256:sha(hosted),lfSha256:sha(lf(hosted)),matches});
}
const docs=['README.md','explore-flow.md','swedish-explore-screen-decision.md','swedish-explore-mockup-spec.md','sitting.md','screen-consistency.md','brand-world.md','hall.md','learning-philosophy.md'];
const governing=[];for(const name of docs){const path=`docs/product-experience/${name}`,b=await readFile(path);governing.push({path,sha256:sha(b),lfSha256:sha(lf(b))});}
const hallmark=[];for(const path of ['SKILL.md','references/verbs/audit.md','references/anti-patterns.md','references/slop-test.md','references/responsive.md','references/interaction-and-states.md','references/contract.md']){const b=await readFile(`tmp/hallmark-upstream/skills/hallmark/${path}`);hallmark.push({path,sha256:sha(b)});}
const manifest={at:new Date().toISOString(),mainRevision:git('rev-parse','HEAD').toString().trim(),candidateRevision:git('-C','.worktrees/playable-explore-hall','rev-parse','HEAD').toString().trim(),hallmarkRevision:git('-C','tmp/hallmark-upstream','rev-parse','HEAD').toString().trim(),assets,governing,hallmark};
await writeFile(out+'/source-manifest.json',JSON.stringify(manifest,null,2));
const checks=JSON.parse(await readFile(out+'/browser-checks.json','utf8'));
function rgb(s){return s?.match(/[\d.]+/g)?.slice(0,3).map(Number)}
function luminance(a){return a.map(x=>x/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4).reduce((s,x,i)=>s+x*[.2126,.7152,.0722][i],0)}
function contrast(a,b){const[x,y]=[luminance(a),luminance(b)].sort((a,b)=>b-a);return(x+.05)/(y+.05)}
const pairs=[];for(const item of checks.logs)for(const n of item.nodes||[]){const a=rgb(n.color),b=rgb(n.background);if(a&&b)pairs.push({state:item.name,element:n.cls,text:n.text,color:n.color,background:n.background,ratio:contrast(a,b),fontSize:n.fontSize});}
const focusPairs=[{palette:'moss',ring:[233,172,128],overlay:[234,213,181]},{palette:'dusk',ring:[231,194,122],overlay:[36,48,51]}].map(x=>({...x,ratio:contrast(x.ring,x.overlay)}));
await writeFile(out+'/contrast.json',JSON.stringify({method:'WCAG relative luminance ratio; computed solid ancestor backgrounds only, not photograph compositing; decorative/disabled exclusions require manual interpretation',pairs,focusPairs},null,2));
console.log(JSON.stringify({assets,focusPairs,records:checks.logs.length,overflow:checks.logs.filter(x=>x.rootWidth>x.viewport?.[0]).map(x=>x.name),minTextContrast:Math.min(...pairs.map(x=>x.ratio))},null,2));
