// Seaweed
function buildSeaweed() {
  var wH = worldEl.offsetHeight;
  for (var i = 0; i < 14; i++) {
    var sw = document.createElement('div');
    sw.className = 'seaweed sw-sway';
    var h = 60 + Math.random() * 100;
    var hue = Math.random() > 0.5 ? '0d7a7a' : '0a3256';
    var dur = 3 + Math.random() * 3;
    var delay = Math.random() * 3;
    sw.style.cssText = 'left:' + ((i / 14) * 100 + Math.random() * 6) + '%;bottom:0;top:' + (wH - h) + 'px;height:' + h + 'px;animation-duration:' + dur + 's;animation-delay:' + delay + 's;';
    sw.innerHTML = '<svg viewBox="0 0 18 ' + h + '" xmlns="http://www.w3.org/2000/svg" style="height:' + h + 'px;opacity:0.18"><path d="M9,' + h + ' Q' + (3 + Math.random() * 12) + ',' + (h * 0.75) + ' ' + (6 + Math.random() * 6) + ',' + (h * 0.5) + ' Q' + (3 + Math.random() * 12) + ',' + (h * 0.25) + ' 9,0" fill="none" stroke="#' + hue + '" stroke-width="2.5" stroke-linecap="round"/><path d="M9,' + (h * 0.8) + ' Q' + (15 + Math.random() * 5) + ',' + (h * 0.65) + ' 18,' + (h * 0.55) + '" fill="none" stroke="#' + hue + '" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/><path d="M9,' + (h * 0.55) + ' Q' + (-2 + Math.random() * 5) + ',' + (h * 0.42) + ' 0,' + (h * 0.32) + '" fill="none" stroke="#' + hue + '" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/></svg>';
    swEl.appendChild(sw);
  }
}
window.addEventListener('load', function() { setTimeout(buildSeaweed, 300); });
