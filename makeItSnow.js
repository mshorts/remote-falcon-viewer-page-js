// widget by Embed.im (Licenses & Credits: https://app.embed.im/licenses.txt)
var embedimSnow = document.getElementById("embedim--snow");

if (!embedimSnow) {
  var EMBEDIM_PARTICLE_COUNT = 90;
  var EMBEDIM_PARTICLES = ["🎄", "🎄", "🎄", "🦌", "🦌"];

  function embRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function embRandParticle() {
    return EMBEDIM_PARTICLES[embRand(0, EMBEDIM_PARTICLES.length - 1)];
  }

  function embRandFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

  embedimSnow = document.createElement("div");
  embedimSnow.id = "embedim--snow";

  var style = document.createElement("style");
  style.textContent =
    "#embedim--snow{position:fixed;left:0;top:0;bottom:0;width:100vw;height:100vh;overflow:hidden;z-index:9999999;pointer-events:none}" +
    ".embedim-festive{position:absolute;top:-12vh;line-height:1;user-select:none;will-change:transform;animation-name:embedim-fall;animation-timing-function:linear;animation-iteration-count:infinite;filter:drop-shadow(0 2px 2px rgba(0,0,0,0.35))}" +
    "@keyframes embedim-fall{" +
    "0%{transform:translate3d(var(--x-start),-12vh,0) rotate(0deg)}" +
    "100%{transform:translate3d(var(--x-end),110vh,0) rotate(var(--spin))}" +
    "}";
  embedimSnow.appendChild(style);

  for (var i = 0; i < EMBEDIM_PARTICLE_COUNT; i++) {
    var particle = document.createElement("span");
    var startX = embRandFloat(-5, 105).toFixed(2) + "vw";
    var driftX = embRandFloat(-10, 10).toFixed(2) + "vw";
    var duration = embRandFloat(10, 28).toFixed(2) + "s";
    var delay = "-" + embRandFloat(0, 30).toFixed(2) + "s";
    var size = embRandFloat(1.1, 2.4).toFixed(2) + "rem";
    var opacity = embRandFloat(0.55, 1).toFixed(2);
    var spin = embRandFloat(-35, 35).toFixed(2) + "deg";

    particle.className = "embedim-festive";
    particle.textContent = embRandParticle();
    particle.style.setProperty("--x-start", startX);
    particle.style.setProperty("--x-end", "calc(" + startX + " + " + driftX + ")");
    particle.style.setProperty("--spin", spin);
    particle.style.animationDuration = duration;
    particle.style.animationDelay = delay;
    particle.style.fontSize = size;
    particle.style.opacity = opacity;
    embedimSnow.appendChild(particle);
  }

  document.body.appendChild(embedimSnow);
}
