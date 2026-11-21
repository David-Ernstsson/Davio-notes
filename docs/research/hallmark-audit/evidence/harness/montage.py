from PIL import Image, ImageDraw
from pathlib import Path
root=Path('C:/Git/Davio/docs/research/hallmark-audit')
groups={
'widths': [f'explore-initial-{w}' for w in [320,360,375,390,414,768]],
'responsive-states': [f'{n}-{w}' for w in [320,375,414,768] for n in ['sitting-choice-end','sitting-typed','feedback-answer']],
'sitting': [f'{n}-{w}' for w in [390,360] for n in ['sitting-opening','sitting-choice-end','sitting-long-end','sitting-typed','sitting-continued','explore-ongoing']],
'feedback': [f'{n}-{w}' for w in [390,360] for n in ['feedback-retry','feedback-answer','feedback-technical','moss-feedback','hall']],
'enlarged': [f'text200-{n}-{w}' for w in [390,360] for n in ['typed','leave','explore']],
'extra': [f'{n}-{w}' for w in [390,360] for n in ['compose-checking','compose-info','reading-paused','scroll-assist-end']],
'text200': [f'text200-{n}-{p}-{w}' for w in [390,360] for p in ['dusk','moss'] for n in ['choice','header']]
}
for name,names in groups.items():
 images=[]
 for n in names:
  path=root/'screenshots'/f'{n}.png'
  if not path.exists():continue
  im=Image.open(path).convert('RGB');im.thumbnail((240,530));images.append((n,im.copy()))
 if not images:continue
 cols=min(4,len(images));rows=(len(images)+cols-1)//cols
 board=Image.new('RGB',(cols*260,rows*570),'#eeeae1');draw=ImageDraw.Draw(board)
 for i,(n,im) in enumerate(images):
  x=(i%cols)*260;y=(i//cols)*570
  draw.text((x+5,y+5),n,fill='black');board.paste(im,(x+5,y+30))
 board.save(root/'evidence'/f'board-{name}.jpg',quality=90)
