// Plankton
function spawnPlankton() {
  var wH = worldEl.offsetHeight;
  var p = document.createElement('div');
  p.className = 'plankton';
  var s = 1.5 + Math.random() * 3;
  var dur = 8 + Math.random() * 12;
  p.style.cssText = 'width:' + s + 'px;height:' + s + 'px;left:' + (Math.random() * 100) + '%;top:' + (100 + Math.random() * (wH - 200)) + 'px;animation-duration:' + dur + 's;animation-delay:' + (Math.random() * 8) + 's;opacity:' + (0.2 + Math.random() * 0.35) + ';';
  plankEl.appendChild(p);
  setTimeout(function() { p.remove(); }, (dur + 8) * 1000);
}
for (var i = 0; i < 60; i++) setTimeout(spawnPlankton, i * 150);
setInterval(spawnPlankton, 600);
