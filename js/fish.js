// Fish
var fishSVGs = [
  '<svg width="80" height="36" viewBox="0 0 80 36" xmlns="http://www.w3.org/2000/svg"><path d="M0,16 Q16,0 32,18 Q16,36 0,18 Z" fill="rgba(26,184,184,0.25)"/><path d="M28,18 Q52,6 72,18 Q52,30 28,18 Z" fill="rgba(26,184,184,0.2)"/><path d="M68,8 L80,18 L68,28 Z" fill="rgba(26,184,184,0.18)"/><circle cx="35" cy="16" r="2" fill="rgba(125,232,232,0.5)"/></svg>',
  '<svg width="55" height="24" viewBox="0 0 55 24" xmlns="http://www.w3.org/2000/svg"><path d="M0,10 Q10,0 22,12 Q10,24 0,12 Z" fill="rgba(13,122,122,0.3)"/><path d="M18,12 Q35,4 48,12 Q35,20 18,12 Z" fill="rgba(13,122,122,0.25)"/><path d="M45,5 L55,12 L45,19 Z" fill="rgba(13,122,122,0.22)"/><circle cx="24" cy="10" r="1.5" fill="rgba(125,232,232,0.6)"/></svg>',
  '<svg width="100" height="44" viewBox="0 0 100 44" xmlns="http://www.w3.org/2000/svg"><path d="M0,20 Q20,0 40,22 Q20,44 0,22 Z" fill="rgba(10,74,122,0.35)"/><path d="M36,22 Q65,8 88,22 Q65,36 36,22 Z" fill="rgba(10,74,122,0.28)"/><path d="M85,10 L100,22 L85,34 Z" fill="rgba(10,74,122,0.25)"/><circle cx="46" cy="19" r="2.5" fill="rgba(125,232,232,0.5)"/></svg>'
];
function spawnFish() {
  var wH = worldEl.offsetHeight;
  var f = document.createElement('div');
  f.className = 'fish' + (Math.random() > 0.5 ? ' rtl' : '');
  f.innerHTML = fishSVGs[Math.floor(Math.random() * fishSVGs.length)];
  var dur = 18 + Math.random() * 22;
  f.style.cssText = 'top:' + (60 + Math.random() * (wH - 150)) + 'px;animation-duration:' + dur + 's;animation-delay:' + (Math.random() * 15) + 's;opacity:' + (0.08 + Math.random() * 0.12) + ';';
  fishEl.appendChild(f);
  setTimeout(function() { f.remove(); }, (dur + 15) * 1000);
}
for (var i = 0; i < 5; i++) setTimeout(spawnFish, i * 3000);
setInterval(spawnFish, 9000);
