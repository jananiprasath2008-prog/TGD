const sections = [
  { id: 'orientation', label: 'Orientation', title: 'Start from zero', short: 'Start' },
  { id: 'stories', label: 'Stories', title: 'The Unthinkable', short: 'Stories' },
  { id: 'history', label: 'History', title: 'Follow the carbon trail', short: 'History' },
  { id: 'politics', label: 'Politics', title: 'Who is responsible?', short: 'Politics' },
  { id: 'recognition', label: 'Recognition', title: 'Learn to notice', short: 'Notice' },
  { id: 'final', label: 'Final round', title: 'Escape the Great Derangement', short: 'Final' }
];

const lessons = {
  orientation: {
    kicker: 'FIRST, A COMPASS',
    heading: 'A book about the stories we tell\nwhen the world changes.',
    intro: 'You do not need to know the book. This journey will introduce its ideas, let you test them, and show why climate change is also a crisis of imagination.',
    learnTitle: 'Meet the author and the question',
    learn: [
      'Amitav Ghosh is a writer who looks closely at how people, places and histories shape one another.',
      'In <span class="highlight">The Great Derangement</span>, he asks why climate change has been so difficult for modern culture to imagine, narrate and respond to.',
      'The book moves through stories, history and politics. Its central invitation is to notice the connections we have learned to overlook.'
    ],
    quote: 'The game is not a test of memory. It is a way of learning to see.',
    see: 'Three doors. One shared question: how did we become so disconnected from the forces changing our world?',
    question: 'What will this journey ask you to connect?',
    choices: ['Only facts about weather', 'Stories, history and politics', 'A list of famous authors', 'Personal climate predictions'],
    answer: 1,
    explanation: 'The book is organized around these three connected lenses. Ghosh uses them together to ask why climate change remains hard to imagine and act upon.',
    points: 10
  },
  stories: {
    kicker: 'LEVEL 01  ·  STORIES', heading: 'When the improbable\nbecomes real.',
    intro: 'Ghosh begins with a problem of imagination: the climate crisis produces events that can feel too strange, sudden or enormous for familiar stories to hold.',
    learnTitle: 'The uncanny and the missing story',
    learn: ['A tornado in Delhi or an encounter with a changing landscape can feel <span class="highlight">uncanny</span>: real, but outside the patterns we expect.', 'Probability is not only a number. It also shapes what a culture thinks is believable enough to put in a story.', 'Ghosh argues that serious fiction has often focused on private, individual experience while the nonhuman world becomes background. Climate change makes that separation harder to maintain.'],
    quote: 'If a real event feels impossible to imagine, the challenge is not only scientific. It is also cultural.',
    see: 'A weather event arrives on a clear day. The question is not “could this happen?” but “what story would let us recognize it?”',
    question: 'Why can a climate event feel “unthinkable” even after it has happened?',
    choices: ['Because nature never changes', 'Because familiar stories train us to expect a narrower range of events', 'Because literature cannot describe places', 'Because probability makes stories unnecessary'],
    answer: 1,
    explanation: 'Ghosh connects climate change to the limits of storytelling. Our narrative habits can make extraordinary events seem impossible, even when they are part of lived reality.',
    points: 20
  },
  history: {
    kicker: 'LEVEL 02  ·  HISTORY', heading: 'Every present has\na carbon trail.',
    intro: 'Climate change did not appear from nowhere. To understand the present, we need to follow the historical systems that made fossil-fuel development feel like progress.',
    learnTitle: 'Development, power and the long view',
    learn: ['Industrialization transformed how energy, work and wealth were organized. Fossil fuels made some kinds of rapid growth possible.', 'Colonialism and imperialism shaped who could extract resources, who benefited from development and who carried its costs.', 'The result is not a simple story of individual blame. It is a history of systems, aspirations and unequal power that still shapes climate responsibility.'],
    quote: 'A carbon footprint has a history: it is connected to decisions made across places and generations.',
    see: 'Trace the line: industrial energy → expanded production → unequal development → a warmer planet.',
    question: 'What does “follow the carbon trail” help us understand?',
    choices: ['That one person caused climate change', 'That climate change is connected to historical systems and unequal development', 'That history is separate from the environment', 'That technology always solves political problems'],
    answer: 1,
    explanation: 'The historical lens shows how industrialization, empire and development are connected to today’s climate realities. Responsibility cannot be understood without that context.',
    points: 20
  },
  politics: {
    kicker: 'LEVEL 03  ·  POLITICS', heading: 'Responsibility is\nnot a solo act.',
    intro: 'Climate politics asks who should act, who has benefited, who is most vulnerable and which institutions can make change possible.',
    learnTitle: 'From private choices to shared systems',
    learn: ['Individual choices matter, but they happen inside larger systems: markets, infrastructure, laws and economic interests.', 'Climate justice asks us to look at unequal responsibility and unequal vulnerability rather than treating every person and nation as if they started from the same place.', 'This makes the problem difficult, but also more honest. Effective action needs collective decisions as well as personal responsibility.'],
    quote: 'The scale of the problem changes the meaning of responsibility: private action and public action must meet.',
    see: 'One commuter chooses a bus. A city decides whether buses exist. Both choices shape the same atmosphere.',
    question: 'Which response best reflects the political complexity Ghosh asks us to notice?',
    choices: ['Only consumers are responsible', 'Only governments are responsible', 'Personal choices matter, but systems and institutions shape what is possible', 'Responsibility is impossible to discuss'],
    answer: 2,
    explanation: 'The book’s political questions resist a single villain or a single fix. Individual and collective responsibility interact with systems, history and unequal power.',
    points: 20
  },
  recognition: {
    kicker: 'SPECIAL ROUND  ·  RECOGNITION', heading: 'Learn to notice\nwhat was always there.',
    intro: 'Recognition is the skill of seeing relationships that ordinary habits make easy to ignore: between a city and a river, a story and a landscape, a decision and its distant effects.',
    learnTitle: 'The world is not just a backdrop',
    learn: ['A landscape can be more than scenery. It can hold history, labor, vulnerability and signs of change.', 'Recognition means allowing the nonhuman world to enter the frame of attention, not as decoration but as part of the story.', 'This is why the book moves between imagination and action: what we can recognize, we can begin to respond to.'],
    quote: 'Attention is a form of preparation.',
    see: 'Look again: a river, a road, a settlement and a storm are not separate pictures. They are one shared system.',
    question: 'What is the hidden relationship in this scene?',
    choices: ['Nature is a passive background to human life', 'Environmental change connects places, people and institutions', 'A landscape has meaning only when a character describes it', 'Recognition means predicting the weather'],
    answer: 1,
    explanation: 'Recognition expands the frame. The book asks us to see environments as active, historical and connected to human choices rather than as a passive backdrop.',
    points: 50
  }
};

const finalQuestions = [
  { q: 'A novel treats an extreme weather event as impossible because it feels too strange. Which idea does this reveal?', c: ['The uncanny limits familiar storytelling', 'History has no role in climate change', 'Technology removes uncertainty', 'Individual action is irrelevant'], a: 0, why: 'The event is real but outside the story patterns readers have been trained to expect.' },
  { q: 'A city offers electric cars but keeps expanding roads and fossil-fuel infrastructure. What does this example invite us to ask?', c: ['Whether systems shape individual choices', 'Whether stories should avoid politics', 'Whether history is only about dates', 'Whether weather is imaginary'], a: 0, why: 'Personal choices happen inside infrastructure and policy systems. Both levels matter.' },
  { q: 'Why does the historical section matter to climate justice?', c: ['It shows how responsibility and benefits have been distributed unequally', 'It proves every country has the same role', 'It replaces politics with science', 'It says development is always harmful'], a: 0, why: 'The carbon economy has a history of unequal power, development and vulnerability.' },
  { q: 'Which action best represents recognition?', c: ['Seeing a river as connected to a city’s history and future', 'Treating a landscape as decoration', 'Ignoring distant effects of local decisions', 'Choosing only what is easiest to measure'], a: 0, why: 'Recognition means noticing relationships across human and nonhuman worlds.' },
  { q: 'What is the strongest reason the book connects literature and climate change?', c: ['Stories influence what feels believable, visible and worth responding to', 'Stories can calculate emissions better than science', 'Literature is separate from public life', 'Climate change only happens in fiction'], a: 0, why: 'Ghosh is interested in how cultural imagination shapes attention and action.' },
  { q: 'A person says, “My one choice cannot matter, so I will do nothing.” What is missing?', c: ['The relationship between personal action and collective systems', 'A more dramatic weather forecast', 'A rejection of all institutions', 'A claim that individuals cause everything'], a: 0, why: 'The political challenge is to connect personal responsibility with collective capacity.' },
  { q: 'What does following a carbon trail prevent us from doing?', c: ['Treating the present as disconnected from history', 'Learning about industrialization', 'Discussing inequality', 'Asking who benefited'], a: 0, why: 'The historical lens makes today’s climate conditions legible as the result of longer systems and decisions.' },
  { q: 'Why can “climate change” be a crisis of imagination?', c: ['Its scale and speed challenge the stories and categories we use to understand change', 'People cannot observe any environmental change', 'It has no political dimension', 'It only affects future generations'], a: 0, why: 'The crisis is material, but our ability to imagine and narrate it influences how we respond.' },
  { q: 'Which statement avoids a simplistic account of responsibility?', c: ['People act within systems, and systems can be changed through collective action', 'Only consumers matter', 'Only corporations matter', 'No one can be responsible'], a: 0, why: 'A complex problem needs a layered account of agency, institutions and power.' },
  { q: 'What is the journey’s central practice?', c: ['Learning to recognize connections among stories, history, politics and the living world', 'Memorizing isolated terms', 'Predicting every future storm', 'Winning without understanding'], a: 0, why: 'The game turns the book’s central movement into a practice: notice, connect, question and respond.' }
];

const state = { section: 'orientation', intro: 'home', score: 0, lives: 3, hints: 1, answered: 0, correct: 0, completed: new Set(), finalIndex: 0, finalCorrect: 0, timelineOpen: null, mapPanel: null, recognitionFound: new Set(), report: false };
const screen = document.getElementById('screen');

function renderNav() {
  const prerequisites = { history: 'stories', politics: 'history', recognition: 'politics', final: 'recognition' };
  document.getElementById('journeyNav').innerHTML = sections.map((section, i) => { const locked = prerequisites[section.id] && !state.completed.has(prerequisites[section.id]); return `<button class="nav-item ${state.section === section.id ? 'active' : ''} ${state.completed.has(section.id) ? 'complete' : ''}" data-section="${section.id}" ${locked ? 'disabled' : ''}><span class="nav-number">${state.completed.has(section.id) ? '✓' : locked ? '🔒' : i + 1}</span><span>${section.short}</span></button>`; }).join('');
  document.querySelectorAll('.nav-item').forEach(btn => btn.addEventListener('click', () => { if (!btn.disabled) { state.section = btn.dataset.section; render(); } }));
}
function updateChrome() {
  const current = sections.find(s => s.id === state.section);
  document.getElementById('breadcrumbKicker').textContent = current.label.toUpperCase();
  document.getElementById('breadcrumbTitle').textContent = current.title;
  document.getElementById('scoreValue').textContent = String(state.score).padStart(3, '0');
  ['lifeOne', 'lifeTwo', 'lifeThree'].forEach((id, i) => document.getElementById(id).classList.toggle('lost', i >= state.lives));
  const index = sections.findIndex(s => s.id === state.section);
  document.getElementById('progressFill').style.width = `${Math.max(8, ((index + (state.completed.has(state.section) ? 1 : 0)) / sections.length) * 100)}%`;
  renderNav();
}
function render() { updateChrome(); if (state.section === 'orientation') renderOrientation(); else if (state.section === 'final') renderFinal(); else if (state.section === 'history') renderHistory(); else if (state.section === 'recognition') renderRecognition(); else renderLesson(state.section); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function renderOrientation() {
  if (state.intro === 'home') {
    screen.innerHTML = `<div class="home-screen"><div class="home-copy"><div class="hero-kicker">A CLIMATE MYSTERY ADVENTURE</div><h1>The Great<br /><em>Derangement</em></h1><p class="home-subtitle">Something has gone wrong with the way humanity understands the world. Become a Climate Investigator and follow the clues.</p><div class="home-actions"><button class="primary-button" id="startButton">▶ Start adventure</button><button class="secondary-button" id="howButton">◎ How to play</button></div><div class="home-note"><span class="pulse-dot"></span> No prior knowledge required <span>·</span> Learn by playing</div></div><div class="home-art"><div class="storm-cloud">☁</div><div class="home-earth"><span>✦</span></div><div class="city-line"></div><div class="home-book">THE<br />UNTHINKABLE</div><div class="home-sticker">CASE<br />001</div></div></div><div class="home-footer"><span>STORIES</span><i></i><span>HISTORY</span><i></i><span>POLITICS</span><i></i><span>RECOGNITION</span></div><div id="howPanel" class="how-panel" hidden><strong>How the case works</strong><span>Read a clue → make a choice → get the explanation → unlock the next world.</span></div>`;
    document.getElementById('startButton').addEventListener('click', () => { state.intro = 'opening'; render(); });
    document.getElementById('howButton').addEventListener('click', () => { const panel = document.getElementById('howPanel'); panel.hidden = !panel.hidden; });
    return;
  }
  if (state.intro === 'opening') {
    screen.innerHTML = `<div class="opening-scene"><div class="scene-art"><div class="scene-sun"></div><div class="scene-earth">🌍</div><div class="scene-wave">≈ ≈ ≈ ≈ ≈ ≈</div><div class="scene-book">✦</div><div class="scene-label">FIELD NOTE 01 / THE WEATHER IS TALKING</div></div><div class="opening-copy"><div class="phase-pill"><span></span> THE FIRST CLUE</div><h2>Climate change is not only about temperature.</h2><div class="opening-lines"><p>It changes the stories we tell.</p><p>It changes the history we remember.</p><p>It challenges the politics of responsibility.</p></div><p class="opening-mission">Your mission: discover why.</p><button class="primary-button" id="mapButton">Open the case map →</button></div></div>`;
    document.getElementById('mapButton').addEventListener('click', () => { state.intro = 'map'; render(); });
    return;
  }
  const worlds = [['stories','01','Stories','The Unthinkable','↗','orientation'],['history','02','History','Follow the carbon trail','⌁','stories'],['politics','03','Politics','Who is responsible?','⚖','history']];
  screen.innerHTML = `<div class="map-heading"><div><div class="hero-kicker">YOUR CASE MAP</div><h2>Three worlds.<br /><em>One question.</em></h2></div><p>Follow the trail from imagination to history to responsibility. Each world teaches you what you need for the next.</p></div><div class="adventure-map"><div class="map-route"></div>${worlds.map(item => { const unlocked = item[5] === 'orientation' || state.completed.has(item[5]); const done = state.completed.has(item[0]); return `<button class="map-world ${unlocked ? '' : 'locked'} ${done ? 'finished' : ''}" data-map-section="${item[0]}" ${unlocked ? '' : 'disabled'}><span class="map-world-number">${done ? '✓' : unlocked ? item[1] : '🔒'}</span><span class="map-world-icon">${item[4]}</span><strong>${item[2]}</strong><small>${item[3]}</small><em>${done ? 'CASE SOLVED' : unlocked ? 'ENTER WORLD' : 'LOCKED'}</em></button>`; }).join('')}</div><div class="map-stats"><div><strong>${'♥'.repeat(state.lives)}${'♡'.repeat(3 - state.lives)}</strong><small>LIVES</small></div><div><strong>${String(state.score).padStart(3, '0')}</strong><small>SCORE</small></div><div><strong>${Math.round((state.completed.size / 5) * 100)}%</strong><small>PROGRESS</small></div><div><strong>${state.completed.size}</strong><small>BADGES</small></div></div><div class="map-actions"><button class="secondary-button" id="multiButton">👥 Multiplayer</button><button class="secondary-button" id="leaderButton">🏆 Leaderboard</button></div><div id="mapPanel" class="map-panel" hidden></div>`;
  document.querySelectorAll('[data-map-section]').forEach(button => button.addEventListener('click', () => { state.section = button.dataset.mapSection; render(); }));
  document.getElementById('multiButton').addEventListener('click', () => showMapPanel('multiplayer'));
  document.getElementById('leaderButton').addEventListener('click', () => showMapPanel('leaderboard'));
}
function showMapPanel(type) { const panel = document.getElementById('mapPanel'); panel.hidden = false; panel.innerHTML = type === 'multiplayer' ? '<strong>👥 Multiplayer briefing</strong><p>Invite 2–6 investigators to compare clues, race the timer, or solve as a team. This solo case keeps the same learning path ready for a group round.</p>' : '<strong>🏆 Case board</strong><p><b>1. Maya · 420 pts</b><br />2. Arun · 390 pts<br />3. You · '+state.score+' pts</p>'; }
function renderLesson(id) {
  const lesson = lessons[id];
  screen.innerHTML = `<div class="lesson-head"><div><div class="phase-pill"><span></span>${lesson.kicker}</div><h2>${lesson.heading.replace('\n', '<br />')}</h2></div><p>${lesson.intro}</p></div><div class="lesson-layout"><div><div class="learn-card"><h3>${lesson.learnTitle}</h3>${lesson.learn.map(text => `<p>${text}</p>`).join('')}<div class="learn-quote">${lesson.quote}</div></div><div class="see-strip"><div class="see-strip-label">👀 SEE IT</div><p>${lesson.see}</p></div></div><div class="challenge-card"><div class="challenge-label">🎯 THINK + CHALLENGE</div><h3>${lesson.question}</h3><div class="choice-list">${lesson.choices.map((choice, i) => `<button class="choice" data-choice="${i}"><span class="choice-letter">${String.fromCharCode(65 + i)}</span>${choice}</button>`).join('')}</div><div id="feedback"></div></div></div>`;
  document.querySelectorAll('.choice').forEach(btn => btn.addEventListener('click', () => answerLesson(id, Number(btn.dataset.choice))));
}
function answerLesson(id, choiceIndex) {
  const lesson = lessons[id]; const buttons = [...document.querySelectorAll('.choice')]; if (buttons[0].disabled) return;
  const correct = choiceIndex === lesson.answer; state.answered++; if (correct) { state.correct++; state.score += lesson.points; } else state.lives = Math.max(0, state.lives - 1); buttons.forEach((button, i) => { button.disabled = true; button.classList.add('disabled'); if (i === lesson.answer) button.classList.add('correct'); if (i === choiceIndex && !correct) button.classList.add('incorrect'); });
  document.getElementById('feedback').innerHTML = `<div class="feedback"><div class="feedback-title">${correct ? 'Correct. You are connecting the pieces.' : 'Let’s slow down and look again.'}</div><p>${lesson.explanation}</p><div class="continue-row"><button class="primary-button" id="continueButton">${id === 'recognition' ? 'Continue to final round →' : 'Next concept →'}</button></div></div>`;
  document.getElementById('continueButton').addEventListener('click', () => { state.completed.add(id); state.section = id === 'recognition' ? 'final' : sections[sections.findIndex(s => s.id === id) + 1].id; render(); }); updateChrome();
}
function renderHistory() {
  const events = [{ year: '1760s', title: 'Industrial energy', copy: 'New energy systems begin to transform production.', detail: 'Why it matters: the climate story has roots in how societies organized energy and growth.' }, { year: '1800s', title: 'Empire & extraction', copy: 'Colonial power connects resources, markets and unequal development.', detail: 'Why it matters: responsibility is shaped by histories of power, benefit and vulnerability.' }, { year: '1950s →', title: 'The Great Acceleration', copy: 'Production, consumption and resource use speed up dramatically.', detail: 'Why it matters: the present climate crisis is a long system becoming visible all at once.' }];
  screen.innerHTML = `<div class="section-title"><div class="phase-pill"><span></span>LEVEL 02 · TIME TRAVEL</div><h2>Every present has<br />a carbon trail.</h2><p>Tap each moment, then make a decision. History is not a backdrop here; it is the map that helps us ask better questions about responsibility.</p></div><div class="timeline-card"><div class="timeline">${events.map((event, i) => `<div class="timeline-event ${state.timelineOpen === i ? 'active' : ''}" data-event="${i}"><div class="timeline-year">${event.year}</div><div class="timeline-node"></div><div><div class="timeline-title">${event.title}</div><div class="timeline-copy">${event.copy}</div></div></div>${state.timelineOpen === i ? `<div class="timeline-detail"><strong>CONSEQUENCE</strong><p>${event.detail}</p><button class="secondary-button timeline-choice" data-decision="${i}">Log this clue</button></div>` : ''}`).join('')}</div><div class="continue-row"><button class="primary-button" id="historyContinue" ${state.timelineOpen === null ? 'disabled' : ''}>Test the connection →</button></div></div>`;
  document.querySelectorAll('.timeline-event').forEach(event => event.addEventListener('click', () => { state.timelineOpen = Number(event.dataset.event); renderHistory(); }));
  document.getElementById('historyContinue').addEventListener('click', () => { state.completed.add('history'); state.section = 'politics'; render(); });
}
function renderRecognition() {
  const found = state.recognitionFound.size;
  screen.innerHTML = `<div class="section-title"><div class="phase-pill"><span></span>SPECIAL WORLD · RECOGNITION</div><h2>Can you see what<br />others miss?</h2><p>Click the clues hidden in the scene. A river, a road, a factory and a storm belong to one shared story.</p></div><div class="recognition-scene"><div class="recognition-sky"><button class="scene-clue clue-river ${state.recognitionFound.has(1) ? 'found' : ''}" data-clue="1" aria-label="Find the changing river">≈</button><button class="scene-clue clue-factory ${state.recognitionFound.has(2) ? 'found' : ''}" data-clue="2" aria-label="Find human industry">▥</button><button class="scene-clue clue-storm ${state.recognitionFound.has(3) ? 'found' : ''}" data-clue="3" aria-label="Find the extreme weather">☁</button><button class="scene-clue clue-city ${state.recognitionFound.has(4) ? 'found' : ''}" data-clue="4" aria-label="Find the changing city">▦</button><div class="recognition-horizon"></div></div><div class="recognition-footer"><strong>${found}/4 connections found</strong><span>${found === 4 ? 'Scene understood. The landscape is part of the story.' : 'Find the glowing connections to reveal the clue.'}</span><button class="primary-button" id="recognitionContinue" ${found < 4 ? 'disabled' : ''}>Continue to final round →</button></div></div>`;
  document.querySelectorAll('[data-clue]').forEach(button => button.addEventListener('click', () => { const clue = Number(button.dataset.clue); if (!state.recognitionFound.has(clue)) { state.recognitionFound.add(clue); state.score += 10; renderRecognition(); } }));
  document.getElementById('recognitionContinue').addEventListener('click', () => { state.completed.add('recognition'); state.section = 'final'; render(); });
}
function renderFinal() { const item = finalQuestions[state.finalIndex]; screen.innerHTML = `<div class="section-title"><div class="phase-pill"><span></span>FINAL ROUND · ${state.finalIndex + 1} OF 10</div><h2>Escape the<br />Great Derangement.</h2><p>Use the connections you have practiced. Every question is built from an idea the journey already taught you.</p></div><div class="challenge-card"><div class="challenge-label">🏆 FINAL CHALLENGE</div><h3>${item.q}</h3><div class="choice-list">${item.c.map((choice, i) => `<button class="choice" data-final-choice="${i}"><span class="choice-letter">${String.fromCharCode(65 + i)}</span>${choice}</button>`).join('')}</div><div id="feedback"></div></div>`; document.querySelectorAll('[data-final-choice]').forEach(btn => btn.addEventListener('click', () => answerFinal(Number(btn.dataset.finalChoice)))); }
function answerFinal(choiceIndex) { const item = finalQuestions[state.finalIndex]; const correct = choiceIndex === item.a; if (correct) { state.score += 30; state.finalCorrect++; } else state.lives = Math.max(0, state.lives - 1); document.querySelectorAll('[data-final-choice]').forEach((button, i) => { button.disabled = true; button.classList.add('disabled'); if (i === item.a) button.classList.add('correct'); if (i === choiceIndex && !correct) button.classList.add('incorrect'); }); document.getElementById('feedback').innerHTML = `<div class="feedback"><div class="feedback-title">${correct ? 'Exactly. The connection holds.' : 'The answer is in the connection.'}</div><p>${item.why}</p><div class="continue-row"><button class="primary-button" id="finalContinue">${state.finalIndex === finalQuestions.length - 1 ? 'See my learning report →' : 'Next question →'}</button></div></div>`; document.getElementById('finalContinue').addEventListener('click', () => { if (state.finalIndex === finalQuestions.length - 1) { state.completed.add('final'); renderReport(); } else { state.finalIndex++; renderFinal(); } }); updateChrome(); }
function renderReport() { state.section = 'final'; updateChrome(); screen.innerHTML = `<div class="report-hero"><div class="eyebrow" style="color:#c7e978">JOURNEY COMPLETE</div><h2>You made the<br />connections.</h2><p>The game taught you the frame. Now you can keep looking for what it reveals.</p></div><div class="report-grid"><div class="report-card"><strong>${state.score}</strong><small>FINAL POINTS</small></div><div class="report-card"><strong>${state.finalCorrect + state.correct}</strong><small>CONNECTIONS FOUND</small></div><div class="report-card"><strong>${state.lives}</strong><small>LIVES REMAINING</small></div></div><div class="report-card"><h3>Your badges</h3><div class="badge-list"><div class="badge">🌱 Climate Observer</div><div class="badge">📖 Story Changer</div><div class="badge">🌍 Earth Recognizer</div><div class="badge">🏛️ History Explorer</div><div class="badge">⚖️ Climate Justice Thinker</div><div class="badge">🏆 Escaped the Derangement</div></div></div><div class="report-card" style="margin-top:23px"><h3>What you now understand</h3><div class="summary-list"><div class="summary-item">Climate change is a crisis of imagination as well as a material and political crisis.</div><div class="summary-item">Stories shape what feels believable; history shapes who has responsibility; politics shapes what can change.</div><div class="summary-item">Recognition means seeing environments, people and institutions as connected rather than separate.</div></div><div class="button-row" style="margin-top:25px"><button class="primary-button" id="restartJourney">Play again ↻</button></div></div>`; document.getElementById('restartJourney').addEventListener('click', reset); }
function reset() { state.section = 'orientation'; state.intro = 'home'; state.score = 0; state.lives = 3; state.hints = 1; state.answered = 0; state.correct = 0; state.completed = new Set(); state.finalIndex = 0; state.finalCorrect = 0; state.timelineOpen = null; state.recognitionFound = new Set(); render(); }
document.getElementById('resetButton').addEventListener('click', reset); render();
