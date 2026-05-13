const tl = window.__timelines["main-content"];

function splitText(selector, text) {
  const el = document.querySelector(selector);
  el.innerHTML = "";
  for (const char of text) {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00a0" : char;
    el.appendChild(span);
  }
}

splitText("#typed-prompt", "write a technical plan");
splitText("#annotation-text", "use websocket instead of long-poll");
splitText("#annotation-text-2", "use sqlite instead of local file store");
splitText("#chat-text", "surface failure modes and recovery paths");

function focusPull(fromScene, toScene, at) {
  tl.set(toScene, { opacity: 0, filter: "blur(18px)", zIndex: 5 }, at);
  tl.set(fromScene, { zIndex: 4 }, at);
  tl.to(fromScene, { opacity: 0, filter: "blur(22px)", duration: 0.72, ease: "sine.inOut" }, at);
  tl.to(toScene, { opacity: 1, filter: "blur(0px)", duration: 0.72, ease: "sine.inOut" }, at + 0.08);
}

gsap.set("#pointer-1", { x: 1220, y: 780, opacity: 0 });
gsap.set("#click-ring-1", { x: 0, y: 0, scale: 0.5 });

tl.fromTo(
  ".terminal-shell",
  { y: 46, opacity: 0, scale: 0.985 },
  { y: 0, opacity: 1, scale: 1, duration: 0.76, ease: "power3.out" },
  0.18,
);
tl.to("#scene-terminal .caption-block", { y: 0, opacity: 1, duration: 0.48, ease: "power2.out" }, 3.05);
tl.from("#scene-terminal .caption-block h1", { y: 34, opacity: 0, duration: 0.72, ease: "expo.out" }, 3.18);
tl.from("#scene-terminal .caption-block p", { y: 22, opacity: 0, duration: 0.58, ease: "sine.out" }, 3.52);
tl.from(".terminal-turn", { y: 18, opacity: 0, duration: 0.4, stagger: 0.16, ease: "power2.out" }, 0.72);
tl.from(".prompt-line", { y: 18, opacity: 0, duration: 0.44, ease: "power3.out" }, 1.48);
tl.from("#typed-prompt span", { opacity: 0, duration: 0.018, stagger: 0.036, ease: "none" }, 1.82);
tl.to("#log-1", { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" }, 5.45);
tl.to("#log-2", { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" }, 6.25);
tl.to("#log-3", { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" }, 7.15);
tl.to("#log-4", { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" }, 7.95);

focusPull("#scene-terminal", "#scene-editor", 8.85);

tl.from(".editor-window-1", { y: 42, scale: 0.985, duration: 0.72, ease: "power3.out" }, 9.24);
tl.from("#scene-editor .browser-bar", { y: -18, opacity: 0, duration: 0.42, ease: "power2.out" }, 9.38);
tl.from(
  "#scene-editor .topbar > *",
  { y: -12, opacity: 0, duration: 0.36, stagger: 0.045, ease: "sine.out" },
  9.52,
);
tl.from("#scene-editor .report-header", { y: 28, opacity: 0, duration: 0.58, ease: "expo.out" }, 9.72);
tl.from(
  "#scene-editor .chart-card",
  { y: 28, opacity: 0, duration: 0.56, stagger: 0.1, ease: "power3.out" },
  10.0,
);
tl.from("#scene-editor .chat-panel", { x: 34, opacity: 0, duration: 0.52, ease: "power2.out" }, 10.42);
tl.from(
  "#scene-editor .bubble.agent:first-child",
  { x: 18, opacity: 0, duration: 0.38, ease: "sine.out" },
  10.78,
);
tl.from("#scene-editor .composer", { y: 24, opacity: 0, duration: 0.46, ease: "power1.out" }, 10.92);

tl.to("#pointer-1", { opacity: 1, duration: 0.24, ease: "power1.out" }, 11.48);
tl.to("#pointer-1", { x: 598, y: 612, duration: 0.82, ease: "power2.inOut" }, 11.64);
tl.to("#scene-editor .outline-target", { opacity: 1, duration: 0.22, ease: "sine.out" }, 12.36);
tl.set("#click-ring-1", { x: 598, y: 612 }, 12.48);
tl.to("#click-ring-1", { opacity: 1, scale: 1, duration: 0.22, ease: "power2.out" }, 12.48);
tl.to("#click-ring-1", { opacity: 0, scale: 1.5, duration: 0.34, ease: "sine.out" }, 12.71);
tl.to(".annotation-card.first", { opacity: 1, y: -8, duration: 0.38, ease: "power3.out" }, 12.8);
tl.to(".editor-window-1", { scale: 1.34, x: 6, y: -174, duration: 0.72, ease: "power2.inOut" }, 13.12);
tl.from("#annotation-text span", { opacity: 0, duration: 0.018, stagger: 0.07, ease: "none" }, 13.52);
tl.to("#pointer-1", { x: 1118, y: 684, duration: 0.56, ease: "power2.inOut" }, 15.02);
tl.set("#click-ring-1", { x: 1118, y: 684, scale: 0.55 }, 15.58);
tl.to("#click-ring-1", { opacity: 1, scale: 1, duration: 0.18, ease: "power2.out" }, 15.58);
tl.to("#click-ring-1", { opacity: 0, scale: 1.45, duration: 0.28, ease: "sine.out" }, 15.76);
tl.to(".annotation-card.first", { opacity: 0, y: 6, duration: 0.24, ease: "sine.out" }, 15.8);
tl.to(".editor-window-1", { scale: 1.18, x: -430, y: -76, duration: 0.74, ease: "power2.inOut" }, 15.92);
tl.to("#pointer-1", { x: 1538, y: 823, duration: 0.68, ease: "power2.inOut" }, 16.02);
tl.to(".pill-one", { opacity: 1, y: -2, duration: 0.32, ease: "power2.out" }, 16.48);

tl.to(".editor-window-1", { scale: 1.14, x: -210, y: -76, duration: 0.64, ease: "power2.inOut" }, 16.92);
tl.to("#pointer-1", { x: 1110, y: 642, duration: 0.7, ease: "power2.inOut" }, 17.04);
tl.to("#scene-editor .outline-target-2", { opacity: 1, duration: 0.22, ease: "sine.out" }, 17.64);
tl.set("#click-ring-1", { x: 1110, y: 642, scale: 0.55 }, 17.76);
tl.to("#click-ring-1", { opacity: 1, scale: 1, duration: 0.2, ease: "power2.out" }, 17.76);
tl.to("#click-ring-1", { opacity: 0, scale: 1.45, duration: 0.3, ease: "sine.out" }, 17.96);
tl.to(".annotation-card.second", { opacity: 1, y: -8, duration: 0.38, ease: "power3.out" }, 18.08);
tl.to(".editor-window-1", { scale: 1.25, x: -230, y: -164, duration: 0.62, ease: "power2.inOut" }, 18.26);
tl.from("#annotation-text-2 span", { opacity: 0, duration: 0.018, stagger: 0.07, ease: "none" }, 18.68);
tl.to("#pointer-1", { x: 1398, y: 704, duration: 0.52, ease: "power2.inOut" }, 19.72);
tl.set("#click-ring-1", { x: 1398, y: 704, scale: 0.55 }, 20.24);
tl.to("#click-ring-1", { opacity: 1, scale: 1, duration: 0.18, ease: "power2.out" }, 20.24);
tl.to("#click-ring-1", { opacity: 0, scale: 1.45, duration: 0.28, ease: "sine.out" }, 20.42);
tl.to(".annotation-card.second", { opacity: 0, y: 6, duration: 0.24, ease: "sine.out" }, 20.46);
tl.to(".editor-window-1", { scale: 1.18, x: -430, y: -76, duration: 0.74, ease: "power2.inOut" }, 20.58);
tl.to("#pointer-1", { x: 1480, y: 760, duration: 0.68, ease: "power2.inOut" }, 20.68);
tl.to(".pill-two", { opacity: 1, y: -2, duration: 0.32, ease: "power2.out" }, 20.98);
tl.set("#click-ring-1", { x: 1480, y: 760, scale: 0.55 }, 21.22);
tl.to("#click-ring-1", { opacity: 1, scale: 1, duration: 0.18, ease: "power2.out" }, 21.22);
tl.to("#click-ring-1", { opacity: 0, scale: 1.45, duration: 0.28, ease: "sine.out" }, 21.4);
tl.to(".textarea", { borderColor: "#f4c95d", duration: 0.18, ease: "sine.out" }, 21.26);
tl.to(".textarea .placeholder", { opacity: 0, duration: 0.16, ease: "sine.out" }, 21.34);
tl.from("#chat-text span", { opacity: 0, duration: 0.018, stagger: 0.052, ease: "none" }, 21.42);
tl.to("#pointer-1", { x: 1578, y: 833, duration: 0.5, ease: "power2.inOut" }, 22.86);
tl.set("#click-ring-1", { x: 1578, y: 833, scale: 0.55 }, 23.36);
tl.to("#click-ring-1", { opacity: 1, scale: 0.92, duration: 0.14, ease: "power2.out" }, 23.36);
tl.to(".send-button", { scale: 0.93, y: 2, backgroundColor: "#ffd877", duration: 0.1, ease: "power1.in" }, 23.36);
tl.to(".send-button", { scale: 1, y: 0, backgroundColor: "#f4c95d", duration: 0.16, ease: "power2.out" }, 23.48);
tl.to("#click-ring-1", { opacity: 0, scale: 1.5, duration: 0.28, ease: "sine.out" }, 23.5);
tl.to(".pill", { opacity: 0, y: 5, duration: 0.22, ease: "sine.out" }, 23.58);
tl.to(".chat-line", { opacity: 0, duration: 0.18, ease: "sine.out" }, 23.58);
tl.to(".textarea .placeholder", { opacity: 1, duration: 0.18, ease: "sine.out" }, 23.68);
tl.to(".textarea", { borderColor: "#303745", duration: 0.18, ease: "sine.out" }, 23.68);
tl.to(".user-bubble", { opacity: 1, y: -4, duration: 0.32, ease: "power2.out" }, 23.86);
tl.to(".working", { opacity: 1, y: -4, duration: 0.3, ease: "sine.out" }, 24.2);
tl.to(".spinner", { rotation: 360, duration: 0.8, repeat: 3, ease: "none" }, 24.2);
tl.to(".editor-window-1", { scale: 1, x: 0, y: 0, duration: 0.78, ease: "power2.inOut" }, 24.1);
tl.to("#pointer-1", { opacity: 0, duration: 0.28, ease: "sine.out" }, 24.16);
tl.to(".chart-before", { opacity: 0, duration: 0.28, ease: "sine.out" }, 24.9);
tl.to(".chart-after", { opacity: 1, duration: 0.42, ease: "power1.out" }, 25.04);
tl.from("#scene-editor .diagram-node.updated", { scale: 0.92, duration: 0.46, ease: "power3.out" }, 25.04);
tl.to("#scene-editor .before-token", { opacity: 0, duration: 0.24, ease: "sine.out" }, 25.12);
tl.to("#scene-editor .after-token", { opacity: 1, duration: 0.3, ease: "power2.out" }, 25.22);
tl.to(
  "#scene-editor .failure-item",
  { opacity: 1, y: -2, duration: 0.34, stagger: 0.08, ease: "power2.out" },
  25.2,
);
tl.to(".working", { opacity: 0, y: 4, duration: 0.24, ease: "sine.out" }, 26.2);
tl.to(".done-bubble", { opacity: 1, y: -4, duration: 0.34, ease: "power2.out" }, 26.36);

focusPull("#scene-editor", "#scene-outro", 29.7);

tl.from(".outro-brand", { y: 36, opacity: 0, duration: 0.74, ease: "power3.out" }, 30.08);
tl.from("#scene-outro p", { y: 22, opacity: 0, duration: 0.48, ease: "sine.out" }, 30.48);
tl.from("#scene-outro code", { y: 18, opacity: 0, scale: 0.98, duration: 0.44, ease: "power2.out" }, 30.72);
tl.to("#scene-outro", { opacity: 0, duration: 0.5, ease: "sine.inOut" }, 32.95);
