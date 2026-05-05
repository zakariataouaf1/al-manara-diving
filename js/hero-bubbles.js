// HERO BUBBLES
var hb = document.getElementById('heroBubbles');
function spawnHB() {
  var b = document.createElement('div');
  b.className = 'h-bubble';
  var s = Math.random() * 20 + 6;
  b.style.cssText = 'width:' + s + 'px;height:' + s + 'px;left:' + (Math.random() * 100) + '%;animation-duration:' + (Math.random() * 8 + 6) + 's;animation-delay:' + (Math.random() * 4) + 's;';
  hb.appendChild(b);
  setTimeout(function() { b.remove(); }, 14000);
}
for (var i = 0; i < 18; i++) setTimeout(spawnHB, i * 600);
setInterval(spawnHB, 1200);
