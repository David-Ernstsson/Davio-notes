// Shared local color preference; independent of learning state.
const key='davio-palette-v1'; let current='dusk';
try {if(localStorage.getItem(key)==='moss')current='moss';}catch{}
export const getPalette=()=>current;
export function setPalette(value){current=value==='moss'?'moss':'dusk';document.body.dataset.palette=current;document.querySelector('meta[name="theme-color"]')?.setAttribute('content',current==='moss'?'#142f29':'#1b2428');const control=document.querySelector('#palette');if(control)control.value=current;try{localStorage.setItem(key,current);}catch{}}
setPalette(current);
addEventListener('storage',event=>{if(event.key===key)setPalette(event.newValue);});
addEventListener('pageshow',()=>{try{setPalette(localStorage.getItem(key));}catch{setPalette(current);}});
