// OCEAN WORLD
var worldEl  = document.getElementById('ocean-world');
var bubbleEl = document.getElementById('world-bubbles');
var jellEl   = document.getElementById('jelly-layer');
var fishEl   = document.getElementById('fish-layer');
var plankEl  = document.getElementById('plankton-layer');
var swEl     = document.getElementById('seaweed-layer');

// World bubbles
function spawnWB() {
  var wH = worldEl.offsetHeight;
  var b = document.createElement('div');
  b.className = 'w-bubble';
  var s = Math.random() * 24 + 4;
  var dur = Math.random() * 12 + 8;
  var delay = Math.random() * 6;
  b.style.cssText = 'width:' + s + 'px;height:' + s + 'px;left:' + (Math.random() * 100) + '%;top:' + (Math.random() * wH) + 'px;animation-duration:' + dur + 's;animation-delay:' + delay + 's;opacity:' + (0.1 + Math.random() * 0.3) + ';';
  bubbleEl.appendChild(b);
  setTimeout(function() { b.remove(); }, (dur + delay + 2) * 1000);
}
for (var i = 0; i < 40; i++) setTimeout(spawnWB, i * 300);
setInterval(spawnWB, 800);
