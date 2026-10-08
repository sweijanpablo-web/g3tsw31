/* =====================================================================
   EDIT YOUR CONTENT HERE. Everything on the page is built from SITE.
   Keep the quotes and commas. Leave a value as "" to hide/skip it.
   ===================================================================== */
const SITE = {
  name: "Sweijan Dwayne P. Alegre",
  age: "20",
  school: "Nueva Vizcaya State University",
  course: "Bachelor of Science in Information Technology",
  photo: "assets/profile.jpg",            // replace this file, or put an image URL here
  roles: ["IT STUDENT","ASPIRING DEVELOPER","CYBERSECURITY ENTHUSIAST","PENETRATION TESTER"],
  typing: "> Building skills. Solving problems. Creating solutions.",
  about: "I am an Information Technology student at Nueva Vizcaya State University with an interest in technology, software development, and cybersecurity. I continuously seek opportunities to improve my technical knowledge, develop practical skills, and collaborate with others through academic projects, organizational involvement, and technology-related competitions.",

  achievements: [   // icon: users | medal | shield
    { icon:"users", tag:"ORGANIZATIONAL LEADERSHIP", title:"Business Manager \u2014 Future Information Technologists' Society (FITS)",
      desc:"Business Manager of FITS, contributing to student leadership, organizational activities, teamwork, and student-centered initiatives.",
      fields:[["Academic year","2026-2027"],["Responsibilities","Overseeing business-related operations and fundraising initiatives of FITS, coordinating resource allocation and budget planning for organizational activities, managing sales and income-generating projects, and collaborating with fellow officers to ensure the efficient execution of student-centered initiatives. Promoting financial accountability, teamwork, and the responsible utilization of organizational resources."]],
      list:["Assisted in organizing and implementing organizational events and activities.","Helped coordinate fundraising initiatives and manage event-related resources.","Contributed to the successful execution of student-centered projects through collaboration and leadership."], listLabel:"Notable contributions" },
    { icon:"medal", tag:"ACADEMIC EXCELLENCE", title:"Dean's Lister",
      desc:"Recognition for academic performance and commitment to academic excellence.",
      fields:[["Semester or term","2nd year BSIT"],["Academic year","2025-2026"]] },
    { icon:"shield", special:true, tag:"CYBERSECURITY COMPETITION", title:"Hack For Gov 5 \u2014 Participant",
      desc:"Participated in Hack For Gov 5, a cybersecurity-focused competition providing an opportunity to engage with technical challenges and develop problem-solving skills.",
      fields:[["Organizer","Department of Information and Communications Technology (DICT)"],["Location","Cagayan State University \u2014 Andrews Campus"],["Date","September 25, 2026"],["Team name","ET'Hack"],["Category","CTF (Capture the Flag)"],["Placement","9th place out of 13 teams"]] }
  ],

  education: [      // add or remove achievements freely; an empty list shows a reminder box
    { level:"Elementary", school:"Bonfal West Elementary School", program:"", achievements:[] },
    { level:"Junior High School", school:"Bonfal National High School", program:"", achievements:["Consistent Top 1 in my class"] },
    { level:"Senior High School", school:"Nueva Vizcaya General Comprehensive High School", program:"", achievements:["With Honors","NC II passer in Computer Systems Servicing (CSS)"] },
    { level:"College", school:"Nueva Vizcaya State University", program:"Bachelor of Science in Information Technology", open:true,
      achievements:["Dean's Lister \u2014 2nd year","Business Manager, Future Information Technologists' Society \u2014 2026-2027","College Committee"] }
  ],

  skills: [         // level: Beginner | Familiar | Intermediate | Currently Learning (your choice)
    { icon:"py",  name:"Python", level:"Beginner", desc:"Scripting and problem solving. Edit this description." },
    { icon:"{ }", name:"Java", level:"Beginner", desc:"Object-oriented programming basics. Edit this description." },
    { icon:"db",  name:"SQL", level:"Beginner", desc:"Querying and designing databases. Edit this description." },
    { icon:"git", name:"Git and GitHub", level:"Beginner", desc:"Version control and sharing code. Edit this description." },
    { icon:">_",  name:"Linux", level:"Beginner", desc:"Working in the command line. Edit this description." },
    { icon:"net", name:"Computer Networking", level:"Beginner", desc:"How devices and services communicate. Edit this description." },
    { icon:"sec", name:"Cybersecurity", level:"Currently Learning", desc:"Security fundamentals and CTF practice. Edit this description." },
    { icon:"bp",  name:"Burp Suite", level:"Currently Learning", desc:"Intercepting and testing web traffic. Edit this description." }
  ],

  projects: [       // example: { name:"My App", desc:"What it does", tech:"Python, SQL", link:"https://..." }
  ],

  contact: { email:"", github:"", facebook:"", linkedin:"", other:[] }   // other: [{label:"Portfolio", url:"https://..."}]
};

/* ============================ ENGINE (no need to edit) ============================ */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const SVG = {
  users:'<path d="M16 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM21 20v-1a4 4 0 0 0-3-3.9M16 4.1a3.5 3.5 0 0 1 0 6.8"/>',
  medal:'<path d="M12 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM8.5 13.5L7 21l5-3 5 3-1.5-7.5"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>', cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  school:'<path d="M3 9l9-5 9 5-9 5zM7 12v5c3 2 7 2 10 0v-5"/>', book:'<path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zM20 4h-6"/>'
};
const ico = k => `<span class="ic"><svg viewBox="0 0 24 24" aria-hidden="true">${SVG[k]||''}</svg></span>`;

$('#hName').textContent = SITE.name;
$('#hRole').textContent = SITE.roles.join(' | ');
$('#fName').textContent = SITE.name;
$('#aboutTxt').textContent = SITE.about;
$('#ini').textContent = SITE.name.split(' ').filter(w => /^[A-Z]/.test(w)).map(w => w[0]).slice(0,2).join('');
if (SITE.photo) { const i = $('#photo'); i.onerror = () => { i.hidden = true; $('#ini').hidden = false; }; i.src = SITE.photo; i.hidden = false; $('#ini').hidden = true; }

$('#data').innerHTML = [["user","Full name",SITE.name],["cal","Age",SITE.age],["school","Current school",SITE.school],["book","Course",SITE.course]]
  .map(([k,l,v]) => `<div class="card info" tabindex="0">${ico(k)}<div><small>${esc(l.toUpperCase())}</small><strong>${esc(v)}</strong></div></div>`).join('');

$('#ach').innerHTML = SITE.achievements.map(a => `<article class="card ach${a.special?' hfg':''}" tabindex="0">
  <header>${ico(a.icon)}<div><div class="tag">${esc(a.tag)}</div><h3>${esc(a.title)}</h3></div></header>
  <p>${esc(a.desc)}</p>
  <details><summary>VIEW DETAILS</summary><dl>${a.fields.map(([k,v]) => `<div><dt>${esc(k.toUpperCase())}</dt><dd>${esc(v)}</dd></div>`).join('')}
  ${a.list ? `<div><dt>${esc((a.listLabel||'Highlights').toUpperCase())}</dt><dd><ul class="list">${a.list.map(x => `<li>${esc(x)}</li>`).join('')}</ul></dd></div>` : ''}</dl></details></article>`).join('');

$('#tl').innerHTML = SITE.education.map(e => `<div class="tl-item"><div class="card"><details${e.open?' open':''}>
  <summary><span><span class="lvl">${esc(e.level.toUpperCase())}</span><br><span class="h3" style="font-weight:700;font-size:1.02rem">${esc(e.school)}</span></span></summary>
  ${e.program ? `<div class="sub">${esc(e.program)}</div>` : '<div class="sub"></div>'}
  <div class="lvl" style="color:var(--mu)">ACADEMIC ACHIEVEMENTS</div>
  ${e.achievements.length ? `<ul class="list">${e.achievements.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '<div class="empty">No achievements added yet. Add them in script.js.</div>'}
  </details></div></div>`).join('');

$('#sk').innerHTML = SITE.skills.map(s => `<div class="card skill" tabindex="0"><div style="display:flex;gap:.8rem;align-items:center"><span class="ic">${esc(s.icon)}</span><h3>${esc(s.name)}</h3></div><span class="lab">${esc(s.level)}</span><p>${esc(s.desc)}</p></div>`).join('');

$('#pr').innerHTML = SITE.projects.length ? SITE.projects.map(p => `<div class="card skill" tabindex="0"><h3>${esc(p.name)}</h3>${p.tech?`<span class="lab">${esc(p.tech)}</span>`:''}<p style="max-height:none;opacity:1">${esc(p.desc)}</p>${p.link?`<a href="${esc(p.link)}" target="_blank" rel="noopener">View project</a>`:''}</div>`).join('')
  : '<div class="empty">No projects yet. Add your first one in the projects list in script.js.</div>';

const C = SITE.contact, L = [];
if (C.email) L.push(["mailto:"+C.email,"@","Email",C.email]);
if (C.github) L.push([C.github,"GH","GitHub","GitHub"]);
if (C.facebook) L.push([C.facebook,"fb","Facebook","Facebook"]);
if (C.linkedin) L.push([C.linkedin,"in","LinkedIn","LinkedIn"]);
(C.other||[]).forEach(o => o.url && L.push([o.url,"\u2197",o.label,o.label]));
$('#ct').innerHTML = L.length ? L.map(([h,g,t,x]) => `<a class="card link" href="${esc(h)}" target="_blank" rel="noopener" title="${esc(t)}"><span class="ic">${esc(g)}</span>${esc(x)}</a>`).join('')
  : '<div class="empty">Contact links will appear here once you add them in script.js.</div>';

/* nav */
const burger = $('#burger'), menu = $('#menu');
burger.onclick = () => { const o = menu.classList.toggle('open'); burger.setAttribute('aria-expanded', o); };
menu.addEventListener('click', e => { if (e.target.closest('a')) { menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); } });
const links = [...menu.querySelectorAll('a')];
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + en.target.id)); }), { rootMargin: '-45% 0px -50% 0px' });
['home','about','achievements','education','skills','projects','contact'].forEach(id => io.observe($('#' + id)));

/* typing */
let typed = false;
function type() {
  if (typed) return; typed = true;
  const el = $('#typed'), t = SITE.typing;
  if (reduce) { el.textContent = t; return; }
  let i = 0; (function tick() { el.textContent = t.slice(0, ++i); el.insertAdjacentHTML('beforeend', '<span class="caret"></span>'); if (i < t.length) setTimeout(tick, 32); })();
}

/* intro */
let done = false;
function endIntro() { if (done) return; done = true; $('#intro').classList.add('out'); setTimeout(() => { $('#intro').remove(); type(); }, reduce ? 0 : 750); }
if (reduce) endIntro(); else {
  const b = $('#boot'), say = (t, s) => setTimeout(() => { if (!done) b.innerHTML += (b.innerHTML ? '<br>' : '') + s; }, t);
  say(400, 'INITIALIZING PROFILE...'); say(1200, 'IDENTITY VERIFIED'); say(1800, 'ACCESS GRANTED');
  setTimeout(endIntro, 2800);
}
$('#skip').onclick = endIntro;
addEventListener('keydown', e => { if (e.key === 'Escape') endIntro(); });
