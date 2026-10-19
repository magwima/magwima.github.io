/* Builds the page from data.js. You shouldn't need to edit this file to add work. */
(() => {
  const D = window.PORTFOLIO, $ = (s, el = document) => el.querySelector(s), $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- icons ---------- */
  const I = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4A21 21 0 0 0 14.4 4C12 4 10.5 5.5 10.5 8.1v2.4H8v3h2.5V21z"/></svg>',
    artstation: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 17.3l2 3.4c.4.8 1.2 1.3 2.1 1.3h13.2L16.6 17.3zM22 17.4c0-.5-.1-.9-.4-1.3L13.9 2.7A2.4 2.4 0 0 0 11.8 1.5H7.6l12.2 21.1 1.9-3.3c.4-.6.3-.8.3-1.9zM12.9 14.5L8.5 6.9l-4.4 7.6z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/></svg>',
    itch: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.1 2.4C2.2 3 .3 5.1.3 5.7v1c0 1.3 1.2 2.4 2.3 2.4 1.3 0 2.4-1.1 2.4-2.4 0 1.3 1 2.4 2.3 2.4s2.3-1.1 2.3-2.4c0 1.3 1.1 2.4 2.4 2.4h.1c1.3 0 2.4-1.1 2.4-2.4 0 1.3 1 2.4 2.3 2.4s2.3-1.1 2.3-2.4c0 1.3 1.1 2.4 2.4 2.4 1.1 0 2.3-1.1 2.3-2.4v-1c0-.6-1.9-2.7-2.8-3.3C17.5 2.2 6.5 2.2 3.1 2.4zm6.6 7a2.7 2.7 0 0 1-4.6 0 2.7 2.7 0 0 1-2.3 1.3c-.4 0-.7-.1-1-.2-.3 3.2-.3 6.4 0 9.6 0 .8.6 1.5 1.6 1.8 3.1.8 14.1.8 17.2 0 1-.3 1.6-1 1.6-1.8.3-3.2.3-6.4 0-9.6-.3.1-.6.2-1 .2a2.7 2.7 0 0 1-2.3-1.3 2.7 2.7 0 0 1-4.6 0 2.7 2.7 0 0 1-2.3 1.3 2.7 2.7 0 0 1-2.3-1.3zM8 13h.1c.9 0 1.7 0 2.7 1.1.8-.1 1.6-.1 2.4 0C14.1 13 15 13 15.9 13c.4 0 2.2 0 3.4 3.5l1.4 4.9c.9 3.4-.3 3.5-1.9 3.5-2.3-.1-3.6-1.8-3.6-3.5-1.2.2-2.4.3-3.3.3s-2.1-.1-3.3-.3c0 1.7-1.3 3.4-3.6 3.5-1.6 0-2.8-.1-1.9-3.5l1.4-4.9C5.8 13 7.6 13 8 13zm4 2.6s-2.4 2.2-2.8 3l1.6-.1v1.4h2.4v-1.4l1.6.1c-.4-.8-2.8-3-2.8-3z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7l8 6 8-6"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>',
    out: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    ai: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z"/></svg>',
    solo: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>',
    collab: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="8" cy="8" r="3.4"/><circle cx="16.5" cy="9" r="2.8"/><path d="M1.5 20c0-3.8 2.9-6.2 6.5-6.2s6.5 2.4 6.5 6.2zM15.5 20c0-2.2-.6-3.9-1.8-5.2.9-.4 1.8-.6 2.8-.6 3 0 5.5 2 5.5 5.8z"/></svg>'
  };
  const KIND = { ai: "Made with AI", solo: "Solo", collab: "Team" };
  const socialName = { instagram: "Instagram", facebook: "Facebook", artstation: "ArtStation", github: "GitHub", itch: "itch.io" };

  /* ---------- drawn covers for games without screenshots yet ---------- */
  const ART = {
    koi: `<svg class="art" viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f6f78"/><stop offset=".55" stop-color="#103d4a"/><stop offset="1" stop-color="#0a1f28"/></linearGradient><radialGradient id="sun" cx=".7" cy="0" r=".8"><stop offset="0" stop-color="#bff3e6" stop-opacity=".55"/><stop offset="1" stop-color="#bff3e6" stop-opacity="0"/></radialGradient></defs>
      <rect width="1280" height="720" fill="url(#sea)"/><rect width="1280" height="720" fill="url(#sun)"/>
      <g opacity=".18" fill="#d8fff4">${[180, 420, 700, 930, 1130].map((x, i) => `<path d="M${x} -10 L${x + 60} -10 L${x - 120 + i * 20} 720 L${x - 200 + i * 20} 720z"/>`).join("")}</g>
      <g fill="#0a2a24">${Array.from({ length: 14 }, (_, i) => `<path d="M${i * 100 + 20} 720 q 20 -${120 + (i * 37) % 160} ${10 + (i % 3) * 10} -${200 + (i * 53) % 180} q 10 ${90} 30 ${200 + (i * 53) % 180}z"/>`).join("")}</g>
      <g transform="translate(640 380) rotate(-12)"><path d="M-230 0 C -140 -80 80 -90 170 -20 C 200 0 200 20 170 40 C 80 100 -140 80 -230 0z" fill="#f6efe6"/><path d="M-120 -52 C -60 -70 0 -60 30 -30 C 0 -10 -60 -10 -120 -52z" fill="#e8503a"/><path d="M20 30 C 70 20 110 30 140 45 C 100 60 60 60 20 30z" fill="#e8503a"/><path d="M-230 0 L -330 -70 L -300 0 L -330 70z" fill="#f2a25a"/><path d="M-40 -60 L 0 -120 L 40 -58z" fill="#f2a25a" opacity=".9"/><circle cx="140" cy="0" r="9" fill="#1a1a1a"/></g>
      <g fill="none" stroke="#d8fff4" stroke-width="3" opacity=".7">${[[880, 300, 14], [920, 240, 9], [900, 180, 18], [960, 120, 7], [330, 220, 11], [300, 160, 6]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join("")}</g></svg>`,
    inferno: `<svg class="art" viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="fire" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a0d0a"/><stop offset=".6" stop-color="#8a2a12"/><stop offset="1" stop-color="#f08a2a"/></linearGradient></defs>
      <rect width="1280" height="720" fill="url(#fire)"/>
      <g fill="#140806">${[[40, 260, 160], [220, 330, 120], [360, 200, 150], [540, 300, 110], [680, 160, 170], [880, 280, 130], [1030, 220, 160], [1190, 320, 110]].map(([x, h, w]) => `<path d="M${x} 720 V${720 - h} l${w * 0.3} 30 l${w * 0.2} -50 l${w * 0.3} 40 l${w * 0.2} -20 V720z"/>`).join("")}</g>
      <g fill="#ffb347">${Array.from({ length: 40 }, (_, i) => `<circle cx="${(i * 233) % 1280}" cy="${720 - ((i * 97) % 520)}" r="${2 + (i % 3)}" opacity="${0.4 + (i % 5) / 10}"/>`).join("")}</g>
      <rect y="560" width="1280" height="160" fill="#0c0504"/></svg>`
  };

  /* ---------- small helpers ---------- */
  const fill = (sel, html) => $$(sel).forEach(el => el.innerHTML = html);
  const text = (sel, t) => $$(sel).forEach(el => el.textContent = t);
  const link = (href, label, cls = "btn btn-small", icon = "") => href ? `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener">${icon}${esc(label)}</a>` : "";

  /* ---------- identity ---------- */
  document.title = `${D.name} – games and 3D`;
  text("[data-name]", D.name); text("[data-role]", `${D.role} in ${D.place}`); text("[data-intro]", D.intro); text("[data-year]", new Date().getFullYear());
  text(".brand-name", D.name);
  $$("[data-email]").forEach(a => { a.href = "mailto:" + D.email; if (!a.textContent.trim()) a.textContent = D.email; });
  const socials = Object.entries(D.socials).filter(([, v]) => v);
  fill("[data-socials]", socials.map(([k, v]) => `<a href="${esc(v)}" target="_blank" rel="noopener" aria-label="${socialName[k] || k}">${I[k] || ""}</a>`).join(""));
  fill("[data-socials-text]", socials.map(([k, v]) => `<a href="${esc(v)}" target="_blank" rel="noopener">${socialName[k] || k}</a>`).join(""));

  /* ---------- coming soon ---------- */
  const C = D.comingSoon;
  $("[data-soon-img]").src = C.image;
  text("[data-soon-title]", C.title); text("[data-soon-edition]", C.edition); text("[data-soon-teaser]", C.teaser); text("[data-soon-status]", C.status);
  const pr = $("[data-soon-progress]"); pr.innerHTML = `<span style="--p:${clamp(C.progress)}%"></span>`; pr.setAttribute("aria-label", `About ${clamp(C.progress)}% done`);
  fill("[data-soon-milestones]", C.milestones.map((m, i) => `<li class="${i < C.milestoneDone ? "done" : i === C.milestoneDone ? "now" : ""}">${esc(m)}${i === C.milestoneDone ? " (working on it now)" : ""}</li>`).join(""));
  const proto = D.games.find(g => g.id === "vacuum");
  fill("[data-soon-actions]", link(C.follow, "Follow the progress", "btn btn-solid") + (proto && proto.play ? `<button class="btn" type="button" data-play="${proto.id}">${I.play}Play the browser version</button>` : ""));
  function clamp(v) { return Math.max(0, Math.min(100, +v || 0)); }

  /* ---------- games ---------- */
  const shotsHTML = (g, big) => {
    const imgs = (g.images || []).map((src, i) => `<img src="${esc(src)}" alt="${i ? "" : esc(g.title) + " screenshot"}" loading="${big ? "eager" : "lazy"}" class="${i ? "" : "on"}">`).join("");
    const art = !g.images || !g.images.length ? (ART[g.art] || ART.koi).replace('class="art"', 'class="art on"') : "";
    const dots = (g.images || []).length > 1 ? `<div class="shots-dots">${g.images.map((_, i) => `<i class="${i ? "" : "on"}"></i>`).join("")}</div>` : "";
    return `<div class="shots">${imgs}${art}${dots}<span class="kind ${g.kind}">${I[g.kind] || ""}${KIND[g.kind] || ""}</span></div>`;
  };
  const actions = g => [
    g.play ? `<button class="btn btn-small btn-solid" type="button" data-play="${g.id}">${I.play}Play</button>` : "",
    link(g.unity, "Play on Unity", "btn btn-small btn-solid", I.out),
    link(g.itch, "itch.io", "btn btn-small", I.out),
    `<button class="btn btn-small" type="button" data-details="${g.id}">About this game</button>`
  ].join("");
  const grid = $("[data-grid]");
  grid.innerHTML = D.games.map(g => `
    <article class="card ${g.featured ? "featured" : ""}" data-kind="${g.kind}" data-engine="${esc(g.engine)}">
      ${shotsHTML(g, g.featured)}
      <div class="card-body">
        <div class="card-top"><h3>${esc(g.title)}</h3><span class="year">${esc(g.year)}</span></div>
        <p class="engine">${esc(g.engine)}</p>
        <p class="sum">${esc(g.summary)}</p>
        <div class="card-actions">${actions(g)}</div>
      </div>
    </article>`).join("");

  // hover / focus: step through the screenshots
  $$(".card").forEach(card => {
    const imgs = $$(".shots img", card), dots = $$(".shots-dots i", card); if (imgs.length < 2 || reduced) return;
    let i = 0, t = 0;
    const show = n => { imgs[i].classList.remove("on"); dots[i] && dots[i].classList.remove("on"); i = n % imgs.length; imgs[i].classList.add("on"); dots[i] && dots[i].classList.add("on"); };
    const start = () => { clearInterval(t); show(i + 1); t = setInterval(() => show(i + 1), 1300); };
    const stop = () => { clearInterval(t); show(0); };
    card.addEventListener("mouseenter", start); card.addEventListener("mouseleave", stop);
    card.addEventListener("focusin", start); card.addEventListener("focusout", e => { if (!card.contains(e.relatedTarget)) stop(); });
  });

  // filters
  const groups = [["all", "All", () => true], ["ai", "Made with AI", g => g.kind === "ai"], ["solo", "Solo", g => g.kind === "solo"], ["collab", "Team projects", g => g.kind === "collab"],
    ["unity", "Unity", g => /unity/i.test(g.engine)], ["browser", "Play in browser", g => !!g.play]].filter(([k, , f]) => k === "all" || D.games.some(f));
  const fbar = $("[data-filters]");
  fbar.innerHTML = groups.map(([k, label, f], i) => `<button type="button" role="tab" aria-selected="${i === 0}" data-f="${k}">${label}<span>${D.games.filter(f).length}</span></button>`).join("");
  fbar.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    $$("button", fbar).forEach(x => x.setAttribute("aria-selected", x === b));
    const f = groups.find(g => g[0] === b.dataset.f)[2];
    $$(".card", grid).forEach((card, i) => { card.hidden = !f(D.games[i]); card.classList.toggle("featured", !!D.games[i].featured && b.dataset.f === "all"); });
  });

  /* ---------- play inside the page ---------- */
  const player = $(".player"), frame = $("iframe", player);
  document.addEventListener("click", e => {
    const p = e.target.closest("[data-play]"); if (!p) return;
    const g = D.games.find(x => x.id === p.dataset.play); if (!g || !g.play) return;
    if (matchMedia("(max-width: 640px)").matches && !/itch\.io\/embed/.test(g.play)) { window.open(g.play, "_blank", "noopener"); return; }   // phones: full screen in a new tab plays best
    $("#player-title").textContent = g.title; $("[data-player-open]").href = g.play; frame.src = g.play;
    details.open && details.close(); player.showModal();
  });
  const closePlayer = () => { player.close(); };
  $("[data-player-close]").addEventListener("click", closePlayer);
  player.addEventListener("close", () => { frame.src = "about:blank"; });

  /* ---------- details ---------- */
  const details = $(".details");
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-details]"); if (!b) return;
    const g = D.games.find(x => x.id === b.dataset.details);
    $("[data-details]", details).innerHTML = `
      <button class="btn btn-small close" type="button" data-close-details>Close</button>
      ${shotsHTML(g, true)}
      <div class="details-body">
        <h2>${esc(g.title)}</h2>
        <p class="sum">${esc(g.summary)}</p>
        <dl>
          <dt>My role</dt><dd>${esc(g.role)}</dd>
          ${g.team ? `<dt>Team</dt><dd>${esc(g.team)}</dd>` : ""}
          <dt>Made with</dt><dd>${esc((g.tools || []).join(", "))}</dd>
          <dt>Year</dt><dd>${esc(g.year)}</dd>
        </dl>
        <div class="card-actions">${[g.play ? `<button class="btn btn-solid" type="button" data-play="${g.id}">${I.play}Play</button>` : "", link(g.unity, "Play on Unity", "btn btn-solid", I.out), link(g.itch, "itch.io page", "btn", I.out), link(g.page, "Project page", "btn", I.out), link(g.repo, "Source on GitHub", "btn", I.out)].join("")}</div>
      </div>`;
    details.showModal();
  });
  details.addEventListener("click", e => { if (e.target === details || e.target.closest("[data-close-details]")) details.close(); });
  player.addEventListener("click", e => { if (e.target === player) closePlayer(); });

  /* ---------- 3D models ---------- */
  fill("[data-models]", D.models.map(m => `
    <figure class="model">
      <model-viewer src="${esc(m.src)}" alt="3D model: ${esc(m.title)}" camera-controls touch-action="pan-y" auto-rotate auto-rotate-delay="0" rotation-per-second="18deg" interaction-prompt="none" shadow-intensity="1" shadow-softness=".8" exposure="1.05" environment-image="neutral" loading="lazy" disable-pan></model-viewer>
      <figcaption class="model-cap"><b>${esc(m.title)}</b><span>${esc(m.note)}<br>${esc(m.tools)}</span></figcaption>
    </figure>`).join(""));

  /* ---------- tools ---------- */
  fill("[data-tools]", D.tools.map(t => `
    <article class="tool">
      <div class="tool-shots">${t.images.slice(0, 2).map((s, i) => `<img src="${esc(s)}" alt="${i ? "" : esc(t.title) + " screenshot"}" loading="lazy">`).join("")}</div>
      <div>
        <h3>${esc(t.title)}</h3><p class="tagline">${esc(t.tagline)}</p>
        <p class="sum">${esc(t.summary)}</p>
        ${link(t.link, t.linkText || "Open", "btn btn-solid", I.out)}
      </div>
    </article>`).join(""));

  /* ---------- about ---------- */
  const A = D.about;
  $("[data-photo]").innerHTML = A.photo ? `<img src="${esc(A.photo)}" alt="${esc(D.name)}">` : `<span class="initials" aria-hidden="true">${esc(D.name.split(" ").map(w => w[0]).join(""))}</span>`;
  fill("[data-about]", A.paragraphs.map(p => `<p>${esc(p)}</p>`).join(""));
  fill("[data-edu]", A.education.map(e => `<li><b>${esc(e.what)}</b><span>${esc(e.where)}${e.when ? ", " + esc(e.when) : ""}</span>${e.detail ? `<br><span>${esc(e.detail)}</span>` : ""}</li>`).join(""));
  fill("[data-passions]", A.passions.map(p => `<li>${esc(p)}</li>`).join(""));
  fill("[data-skills]", A.skills.map(p => `<li>${esc(p)}</li>`).join(""));
})();
