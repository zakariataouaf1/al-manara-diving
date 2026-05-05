// Jellyfish
var jellyShapes = [
  '<svg width="70" height="90" viewBox="0 0 70 90" xmlns="http://www.w3.org/2000/svg"><ellipse cx="35" cy="28" rx="32" ry="26" fill="rgba(26,184,184,0.12)" stroke="rgba(125,232,232,0.3)" stroke-width="1"/><line x1="20" y1="52" x2="15" y2="88" stroke="rgba(125,232,232,0.15)" stroke-width="1" stroke-dasharray="3,4"/><line x1="28" y1="53" x2="24" y2="90" stroke="rgba(125,232,232,0.12)" stroke-width="1" stroke-dasharray="3,5"/><line x1="36" y1="54" x2="36" y2="90" stroke="rgba(125,232,232,0.18)" stroke-width="1" stroke-dasharray="3,3"/><line x1="44" y1="53" x2="48" y2="90" stroke="rgba(125,232,232,0.12)" stroke-width="1" stroke-dasharray="3,5"/><line x1="52" y1="52" x2="57" y2="86" stroke="rgba(125,232,232,0.15)" stroke-width="1" stroke-dasharray="3,4"/><ellipse cx="35" cy="22" rx="18" ry="12" fill="rgba(125,232,232,0.06)"/></svg>',
  '<svg width="50" height="65" viewBox="0 0 50 65" xmlns="http://www.w3.org/2000/svg"><ellipse cx="25" cy="20" rx="22" ry="18" fill="rgba(13,122,122,0.15)" stroke="rgba(26,184,184,0.25)" stroke-width="1"/><line x1="14" y1="37" x2="10" y2="63" stroke="rgba(26,184,184,0.13)" stroke-width="1" stroke-dasharray="2,4"/><line x1="20" y1="38" x2="18" y2="65" stroke="rgba(26,184,184,0.10)" stroke-width="1" stroke-dasharray="2,5"/><line x1="26" y1="38" x2="26" y2="65" stroke="rgba(26,184,184,0.15)" stroke-width="1" stroke-dasharray="2,3"/><line x1="32" y1="38" x2="34" y2="65" stroke="rgba(26,184,184,0.10)" stroke-width="1" stroke-dasharray="2,5"/><line x1="38" y1="37" x2="42" y2="62" stroke="rgba(26,184,184,0.13)" stroke-width="1" stroke-dasharray="2,4"/></svg>'
];
function spawnJelly() {
  var wH = worldEl.offsetHeight;
  var j = document.createElement('div');
  j.className = 'jelly';
  j.innerHTML = jellyShapes[Math.floor(Math.random() * jellyShapes.length)];
  var dur = 6 + Math.random() * 10;
  j.style.cssText = 'top:' + (80 + Math.random() * (wH - 200)) + 'px;left:' + (Math.random() * 95) + '%;animation-duration:' + dur + 's;animation-delay:' + (Math.random() * 5) + 's;opacity:' + (0.1 + Math.random() * 0.2) + ';transform:scale(' + (0.6 + Math.random() * 0.8) + ');';
  jellEl.appendChild(j);
}
window.addEventListener('load', function() { setTimeout(function() { for (var i = 0; i < 8; i++) spawnJelly(); }, 400); });
