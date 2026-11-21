import {chromium} from 'file:///C:/Users/david/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import {writeFile,mkdir,readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const out='C:/Git/Davio/docs/research/hallmark-audit/evidence';
await mkdir(out,{recursive:true});
const browser=await chromium.launch({channel:'msedge',headless:true});
const page=await browser.newPage({viewport:{width:390,height:844}});
await page.goto('https://explore-hall-demo.davio-gym.pages.dev/',{waitUntil:'networkidle',timeout:45000});
const assets={};
for(const name of ['index.html','app.js','styles.css','palette.css','palette.mjs','lesson-data.json']){
 const response=await page.request.get(new URL(name,page.url()).href);const body=await response.body();await writeFile(`${out}/hosted-${name}`,body);
 const hash=b=>createHash('sha256').update(b).digest('hex');
 const matches=[],normalize=b=>Buffer.from(b.toString('utf8').replace(/\r\n/g,'\n'));
 for(const ref of ['d9e383e','6317497','98df0c6'])try{const bytes=execFileSync('git',['show',`${ref}:prototypes/explore-hall/${name}`],{maxBuffer:20e6,stdio:['ignore','pipe','ignore']});if(hash(bytes)===hash(body))matches.push({ref,kind:'byte-exact'});else if(hash(normalize(bytes))===hash(normalize(body)))matches.push({ref,kind:'LF-normalized'});}catch{}
 assets[name]={status:response.status(),bytes:body.length,sha256:hash(body),normalizedSha256:hash(normalize(body)),matches};
}
await page.screenshot({path:'C:/Git/Davio/docs/research/hallmark-audit/screenshots/initial-390.png'});
console.log(JSON.stringify({version:browser.version(),url:page.url(),assets,text:(await page.locator('body').innerText()).slice(0,1500)},null,2));
await writeFile(`${out}/baseline.json`,JSON.stringify({at:new Date().toISOString(),browser:browser.version(),url:page.url(),assets},null,2));
await browser.close();
