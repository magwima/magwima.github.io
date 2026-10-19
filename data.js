/* =====================================================================
   EVERYTHING ON THE SITE COMES FROM THIS FILE.
   To add a game, copy one block in `games`, change it, save, push.
   Images go in assets/covers/ (16:9, about 1280 × 720, .jpg).
   Leave a link as "" to hide its button.
   ===================================================================== */
window.PORTFOLIO = {
  name: "Michael Kahuhu",
  handle: "Dasz",
  role: "Game designer & developer",
  place: "Rzeszów, Poland",
  intro: "I make games for the browser and for Unity, model in Blender, and build learning tools for my English students. Some projects are mine from the first sketch to the last line, some are made with friends, and some I direct while AI writes the code.",
  email: "hello@example.com",                      // ← your email
  socials: {
    instagram: "https://instagram.com/",            // ← your profile links
    facebook: "https://facebook.com/",
    artstation: "https://artstation.com/",
    github: "https://github.com/magwima",
    itch: "https://itch.io/"
  },

  /* The poster at the top of the page. Replace image with your own poster (portrait, about 1200 × 1600). */
  comingSoon: {
    title: "Vacuum Racer",
    edition: "Unity edition",
    status: "In production",
    teaser: "Kart racing with vacuum trucks. Suck up every ball on the track, ram your rivals until they spill theirs, and boost over the ramps. Rebuilt from the ground up in Unity, with models made in Blender.",
    image: "assets/coming-soon.jpg",
    progress: 35,                                    // percent, shown as a progress bar
    milestones: ["Dave's truck and first track", "AI rivals", "Rosie and Dasz", "More tracks"],
    milestoneDone: 1,
    follow: "https://instagram.com/"                 // where people can follow progress
  },

  /* kind: "solo" | "ai" | "collab"     engine: "Browser" | "Unity" | ...
     play: opens inside the page (browser games, itch.io embeds)
     unity: a play.unity.com link (opens in a new tab)
     itch / repo / page: extra links */
  games: [
    {
      id: "jazda", title: "Jazda! Polish Streets", year: 2026, kind: "ai", engine: "Browser · 3D",
      featured: true,
      summary: "A street-skating racer through Warsaw, Rzeszów, Gdańsk and Wrocław. Grind rails, flip over barriers, dodge trams and race three rivals.",
      role: "Game design and art direction. Code, art and music written by Claude from my direction.",
      tools: ["Claude", "Three.js", "HTML5", "Web Audio"],
      images: ["assets/covers/jazda-2.jpg", "assets/covers/jazda-1.jpg", "assets/covers/jazda-3.jpg", "assets/covers/jazda-4.jpg"],
      play: "https://magwima.github.io/Jazda/", repo: "https://github.com/magwima/Jazda"
    },
    {
      id: "vacuum", title: "Vacuum Racer", year: 2026, kind: "ai", engine: "Browser · 3D",
      summary: "Pick Dave, Rosie or Dasz and race vacuum trucks across Dusty Dunes, Canyon Twist and Scrapyard Night. Installs on your phone and plays offline.",
      role: "Game design, characters and levels. Built with Claude as the browser prototype of the Unity game.",
      tools: ["Claude", "Three.js", "PWA"],
      images: ["assets/covers/vacuum-1.jpg", "assets/covers/vacuum-2.jpg"],
      play: "https://magwima.github.io/Vaccum-Racer/", repo: "https://github.com/magwima/Vaccum-Racer"
    },
    {
      id: "koi", title: "Koi Quest", year: 2026, kind: "solo", engine: "Unity · 3D",
      summary: "A third-person underwater adventure. Steer a koi through the reef, dash past jellyfish and sharks, and fight back with bubble shots. My undergraduate thesis game at UITM Rzeszów.",
      role: "Everything: design, Unity programming in C#, level building and UI.",
      tools: ["Unity", "C#", "Blender"],
      images: [], art: "koi",                         // ← add screenshots, e.g. "assets/covers/koi-1.jpg"
      unity: "",                                      // ← your play.unity.com link
      repo: "https://github.com/magwima/Koi-Quest--A-3D-Action-Adventure-Game"
    },
    {
      id: "inferno", title: "Inferno", year: 2025, kind: "collab", engine: "Unity · 3D",
      summary: "A team action game with mutant brawlers, a wasp warrior and a ruined city. Made with fellow students.",   // ← check this description
      role: "Team member. Write what you made here: models, code, levels.",
      tools: ["Unity", "Blender"],
      team: "Made with the Inferno team",              // ← name your teammates here
      images: [], art: "inferno",
      itch: "",                                        // ← the itch.io page
      play: "",                                        // ← itch.io embed link, if the game runs in the browser
      repo: "https://github.com/Shaaylmao/InfernoTeamProject"
    }
  ],

  /* 3D models: export from Blender as .glb (File → Export → glTF 2.0, format "glTF Binary") into assets/models/ */
  models: [
    { title: "Stary", note: "Skater from Jazda!", src: "assets/models/skater-stary.glb", tools: "Built in code" },
    { title: "Ola", note: "Skater from Jazda!", src: "assets/models/skater-ola.glb", tools: "Built in code" },
    { title: "Warsaw tram", note: "Jazda!", src: "assets/models/tram.glb", tools: "Built in code" },
    { title: "Pączuś kiosk", note: "Jazda!", src: "assets/models/kiosk.glb", tools: "Built in code" },
    { title: "Linden tree", note: "Jazda!", src: "assets/models/tree.glb", tools: "Built in code" },
    { title: "Poster column", note: "Jazda!", src: "assets/models/column.glb", tools: "Built in code" }
  ],

  /* Tools and other things I've built */
  tools: [
    {
      title: "English Engine", tagline: "A practice website for my English students",
      summary: "Daily plans, monthly vocabulary from A1 to C2 with Polish and Romanian help, a tense lab, irregular verbs, a video of the week, pronunciation and three word games.",
      images: ["assets/covers/english-1.jpg", "assets/covers/english-2.jpg"],
      link: "https://magwima.github.io/English-Engine/", linkText: "Open English Engine"
    },
    {
      title: "Polski w kawałkach", tagline: "Polish in bite-size rounds",
      summary: "A Polish-learning game for English speakers, as a web page and a Chrome extension: word tiles, verb forms, listening, dialogues and A2–B1 grammar with spaced review.",
      images: ["assets/covers/polski-1.jpg", "assets/covers/polski-3.jpg"],
      link: "https://github.com/magwima/Polski-Cafe", linkText: "See the project"
    }
  ],

  about: {
    photo: "",                                       // ← e.g. "assets/me.jpg" (square)
    paragraphs: [
      "I'm studying game design and development at UITM Rzeszów, where I built Koi Quest for my thesis. Before that, and alongside it, I teach English and design my own lessons.",
      "I like games you understand in five seconds and keep playing for an hour. I sketch characters, model them in Blender, and use AI as a fast pair of hands when an idea needs to be playable today."
    ],
    education: [
      { what: "Game design and development (undergraduate)", where: "UITM Rzeszów", when: "", detail: "Thesis: Koi Quest, a 3D action-adventure game in Unity" }
    ],
    passions: ["Teaching English", "Learning Polish", "Low-poly 3D", "Creative tools (DASZFRAME)", "Racing games"],
    skills: ["Unity", "C#", "Blender", "Three.js", "HTML, CSS, JavaScript", "Game design", "Prompting AI for code", "Lesson design"]
  }
};
