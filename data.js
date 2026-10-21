/* =====================================================================
   EVERYTHING ON THE SITE COMES FROM THIS FILE.
   To add a game, copy one block in `games`, change it, save, push.
   Images go in assets/covers/ (16:9, about 1280 × 720, .jpg).
   Leave a link as "" to hide its button.
   ===================================================================== */
window.PORTFOLIO = {
  name: "Michael Kagwima",
  handle: "Dasz",
  role: "Game designer & developer",
  place: "Rzeszów, Poland",
  intro: "I design games, model in Blender, and build learning tools.",
  email: "mikekahuhu@gmail.com",
  socials: {                                        // add instagram, facebook or itch the same way; empty ones are hidden
    artstation: "https://mxyzptlk.artstation.com/",
    github: "https://github.com/magwima",
    linkedin: "https://www.linkedin.com/in/michael-kagwima-172569144"
  },

  /* The poster at the top of the page. Replace image with your own poster (portrait, about 1200 × 1600). */
  comingSoon: {
    title: "Scrap Racers",
    edition: "Unity · coming soon",
    status: "In production",
    teaser: "Vacuum trucks with attitude. Dave, Dasz and Rosie tear through a scrapyard circuit, suck up everything on the track and ram each other until it spills out again. Race, jump, win. Built in Unity with models from Blender.",
    image: "assets/scrap-racers.jpg",                  // the poster (any shape; it's shown whole)
    progress: 35,                                      // percent, shown as a progress bar
    milestones: ["Dave's truck and first track", "Rival racers", "Rosie and Dasz", "More tracks"],
    milestoneDone: 1,
    follow: "https://mxyzptlk.artstation.com/", followText: "Follow on ArtStation",
    prototype: "vacuum"                                // id of a playable prototype in `games`, or ""
  },

  /* kind: "solo" | "collab" | "personal"     engine: "Browser" | "Unity" | ...
     play: opens inside the page (browser games, itch.io embeds)
     unity: a play.unity.com link (opens in a new tab)
     itch / repo / page: extra links */
  games: [
    {
      id: "koi", title: "Koi Quest: Reef Adventure", year: 2026, kind: "solo", engine: "Unity · 3D",
      featured: true,
      summary: "A third-person underwater adventure. Steer a koi through the reef, dash past jellyfish and sharks, and fight back with bubble shots.",
      role: "Everything: design, Unity programming in C#, level building and UI.",
      tools: ["Unity", "C#", "Blender"],
      images: ["assets/covers/koi-1.jpg", "assets/covers/koi-2.jpg"],   // full poster: assets/koi-poster.jpg
      story: {
        goal: "My final project in game design: a 3D game in Unity that anyone understands in seconds. You are a koi, and the reef is trying to stop you.",
        steps: [
          { title: "Look and feel first", text: "Mood boards for the reef, the koi and the enemies, so every level shared one colour world before I built anything." },
          { title: "Cutting what didn't fit", text: "The first design mixed swimming with platform-style jumping. I removed the jumping completely and rebuilt the game around steering and dodging, which is what swimming should feel like." },
          { title: "Controls you learn in seconds", text: "The koi always swims forward. W A S D or the arrow keys steer up, down, left and right, a long press dashes in that direction, and Space fires a bubble shot." },
          { title: "A camera that shows the danger", text: "A third-person camera keeps the whole fish in view, so you can always see what you're about to dodge." },
          { title: "Ready for players", text: "Several levels, a main menu that shows the controls up front, and a pause menu. In the web build Esc already does things in the browser, so pause sits on P only." }
        ],
        learned: "Removing a mechanic can make a game stronger, and testing in the real web build early catches problems the Unity editor hides."
      },
      unity: "https://play.unity.com/en/games/9616cf4a-6756-4f5a-a918-d318ec580c23/koi-quest-reef-adventure",
      repo: "https://github.com/magwima/Koi-Quest--A-3D-Action-Adventure-Game"
    },
    {
      id: "eldonia", title: "The Kingdom of Eldonia", year: "Demo", kind: "collab", engine: "Windows · 2D pixel art",
      summary: "A pixel-art platformer. As the heir of a knight family you gather magic crystals to lift the curse on your homeland, using a Time-Shift watch to travel into the past near the Statue of the Angel.",
      role: "Game assets, painted in Heavy Paint.",
      tools: ["Heavy Paint", "Pixel art"],
      team: "Indo-Bulgarian League: Shaay, IvanSI139, Vorqen and me (Kagwima)",
      images: ["assets/covers/eldonia-1.jpg"],
      itch: "https://shaaylmao.itch.io/the-kingdom-of-eldonia"   // Windows download, so it opens on itch.io
    },
    {
      id: "jazda", title: "Jazda! Polish Streets", year: 2026, kind: "personal", engine: "Browser · 3D",
      summary: "A street-skating racer through Warsaw, Rzeszów, Gdańsk and Wrocław. Grind rails, flip over barriers, dodge trams and race three rivals.",
      role: "Concept, game design, levels and art direction. I directed the build and used Claude as my coding partner.",
      tools: ["Claude", "Three.js", "HTML5", "Web Audio"],
      images: ["assets/covers/jazda-2.jpg", "assets/covers/jazda-1.jpg", "assets/covers/jazda-3.jpg", "assets/covers/jazda-4.jpg"],
      play: "https://magwima.github.io/Jazda/", repo: "https://github.com/magwima/Jazda"
    },
    {
      id: "vacuum", title: "Vacuum Racer", year: 2026, kind: "personal", engine: "Browser · 3D",
      summary: "The browser prototype of Scrap Racers. Pick Dave, Rosie or Dasz and race vacuum trucks across Dusty Dunes, Canyon Twist and Scrapyard Night. Installs on your phone and plays offline.",
      role: "Game design, characters and levels, and the truck models in Blender. I directed the build of this browser prototype with Claude as my coding partner.",
      tools: ["Claude", "Three.js", "PWA"],
      images: ["assets/covers/vacuum-1.jpg", "assets/covers/vacuum-2.jpg"],
      story: {
        goal: "Scrap Racers is a kart-style combat racer: vacuum trucks suck up scrap on the track and ram their rivals to make them spill it. Vacuum Racer is where I test the idea.",
        steps: [
          { title: "Characters first", text: "Three drivers with their own personalities, Dave, Rosie and Dasz. I modelled each truck in Blender and textured them in Heavy Paint." },
          { title: "Start small", text: "One truck (Dave) and one track, so the core loop of driving, collecting and bumping could be tested before adding more." },
          { title: "A camera that reads the track", text: "A chase camera behind the truck, inspired by Subway Surfers, so the next checkpoint and the scrap ahead are always clear." },
          { title: "Prototype in the browser", text: "A quick browser version to try the feel of racing, collecting and rival racers before building the full game in Unity." }
        ],
        next: "The Unity version: rival racers, Rosie and Dasz on track, and more circuits."
      },
      play: "https://magwima.github.io/Vaccum-Racer/", repo: "https://github.com/magwima/Vaccum-Racer"
    }  ],

  /* Showreel at the top of the 3D section. Any YouTube link works; leave youtube "" to hide it. */
  showreel: { title: "Showreel", year: 2024, note: "A showreel of my 3D models.", youtube: "https://youtu.be/_7HarJloqvs" },

  /* Turntables: the same model rendered different ways (silent .mp4 loops, each with a .webm and .jpg of the same name) */
  turntables: [
    { title: "Tugboat", note: "Stylised vehicle, hand-painted textures", big: true, views: [{ label: "Textured", src: "assets/turntables/tugboat-final.mp4" }, { label: "Clay", src: "assets/turntables/tugboat-clay.mp4" }] },
    { title: "Gunship", note: "Hard-surface vehicle", views: [{ label: "Textured", src: "assets/turntables/gunship-final.mp4" }, { label: "Clay", src: "assets/turntables/gunship-clay.mp4" }] },
    { title: "Hover racer", note: "Vehicle concept", views: [{ label: "Textured", src: "assets/turntables/hover-final.mp4" }, { label: "Clay", src: "assets/turntables/hover-clay.mp4" }] },
    { title: "Fairy", note: "Stylised character", views: [{ label: "Textured", src: "assets/turntables/fairy-final.mp4" }, { label: "Clay", src: "assets/turntables/fairy-clay.mp4" }] },
    { title: "Hauler", note: "Hard-surface vehicle", views: [{ label: "Textured", src: "assets/turntables/hauler-final.mp4" }, { label: "Clay", src: "assets/turntables/hauler-clay.mp4" }] },
    { title: "Crawler", note: "Tracked vehicle", big: true, views: [{ label: "Textured", src: "assets/turntables/crawler-final.mp4" }, { label: "Clay", src: "assets/turntables/crawler-clay.mp4" }, { label: "X-ray", src: "assets/turntables/crawler-xray.mp4" }] },
    { title: "Jet kart", note: "Vehicle concept", views: [{ label: "Textured", src: "assets/turntables/kart-final.mp4" }, { label: "Clay", src: "assets/turntables/kart-clay.mp4" }] },
    { title: "Bike", note: "Hard-surface", views: [{ label: "Textured", src: "assets/turntables/bike-final.mp4" }, { label: "Clay", src: "assets/turntables/bike-clay.mp4" }] }
  ],

  /* 3D models: export from Blender as .glb (File → Export → glTF 2.0, format "glTF Binary") into assets/models/ */
  models: [
    { title: "Dasz's truck", note: "Scrap Racers", src: "assets/models/dasz-truck.glb", tools: "Modelled in Blender", orbit: "-140deg 76deg 92%", big: true },
    { title: "Dave's truck", note: "Scrap Racers", src: "assets/models/dave-truck.glb", tools: "Modelled in Blender", orbit: "-140deg 76deg 110%" },
    { title: "Rosie's truck", note: "Scrap Racers", src: "assets/models/rosie-truck.glb", tools: "Modelled in Blender", orbit: "-140deg 76deg 110%" },
    { title: "Green plane", note: "Vehicle", src: "assets/models/green-plane.glb", tools: "Modelled in Blender", orbit: "35deg 70deg 95%" },
    { title: "Bike", note: "Vehicle", src: "assets/models/bike.glb", tools: "Modelled in Blender", orbit: "35deg 75deg 100%" },
    { title: "Statue", note: "Sculpt", src: "assets/models/statue.glb", tools: "Modelled in Blender", orbit: "35deg 72deg 100%" },
    { title: "Rocking chair", note: "Furniture", src: "assets/models/rocking-chair.glb", tools: "Modelled in Blender", orbit: "35deg 72deg 100%" },
    { title: "Couch", note: "Furniture", src: "assets/models/couch.glb", tools: "Modelled in Blender", orbit: "35deg 72deg 100%" },
    { title: "Green girl", note: "Character", src: "assets/models/green-girl.glb", tools: "Modelled in Blender", orbit: "20deg 80deg 100%" },
    { title: "Man", note: "Character", src: "assets/models/man.glb", tools: "Modelled in Blender", orbit: "20deg 80deg 100%" },
    { title: "Stary", note: "Skater from Jazda!", src: "assets/models/skater-stary.glb", tools: "Built in code" },
    { title: "Ola", note: "Skater from Jazda!", src: "assets/models/skater-ola.glb", tools: "Built in code" },
    { title: "Warsaw tram", note: "Jazda!", src: "assets/models/tram.glb", tools: "Built in code" },
    { title: "Pączuś kiosk", note: "Jazda!", src: "assets/models/kiosk.glb", tools: "Built in code" },
    { title: "Linden tree", note: "Jazda!", src: "assets/models/tree.glb", tools: "Built in code" },
    { title: "Poster column", note: "Jazda!", src: "assets/models/column.glb", tools: "Built in code" },
    { title: "Yellow plane", note: "Vehicle", src: "assets/models/yellow-plane.glb", tools: "Modelled in Blender", orbit: "35deg 70deg 95%" }
  ],

  /* Sketchbook: concept art, sketches, mood boards, wireframes. Put images in assets/sketches/ (any shape). */
  // video: an .mp4 that loops silently (src is its still image)
  sketchbook: [
    { src: "assets/sketches/truck-sketch-to-3d.jpg", video: "assets/sketches/truck-sketch-to-3d.mp4", title: "Truck", note: "From sketch to 3D model" },
    { src: "assets/sketches/street-painting.jpg", video: "assets/sketches/street-painting.mp4", title: "Street scene", note: "Painting process" },
    { src: "assets/sketches/dilemma.jpg", video: "assets/sketches/dilemma.mp4", title: "Dilemma", note: "2D animation, painted backgrounds" },
    { src: "assets/sketches/ocean.jpg", video: "assets/sketches/ocean.mp4", title: "Open sea", note: "3D environment, sunset" },
    { src: "assets/sketches/tide.jpg", video: "assets/sketches/tide.mp4", title: "Tide", note: "2D animation loop" },
    { src: "assets/sketches/climb.jpg", video: "assets/sketches/climb.mp4", title: "Ladder climb", note: "Character animation" },
    { src: "assets/sketches/sketch-to-paint.jpg", video: "assets/sketches/sketch-to-paint.mp4", title: "Sketch to paint", note: "Pencil sketch to finished portrait" },
    { src: "assets/sketches/gentleman.jpg", title: "The gentleman", note: "Portrait" },
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
      link: "https://chromewebstore.google.com/detail/emgbepamegcncjkmjjfbckelagmemhii", linkText: "Add to Chrome"
    },
    {
      title: "Paint the Lesson", tagline: "A ready English lesson in two minutes, and a course platform for teachers",
      summary: "Turns any article, PDF or YouTube transcript into a full lesson with worksheets, Canva slides and teacher notes. Lessons become courses with auto-marked quizzes, homework marking, timed release, progress tracking, live-lesson calendar and certificates. Built on Supabase.",
      images: ["assets/covers/paint-1.jpg", "assets/covers/paint-2.jpg", "assets/covers/paint-3.jpg"],
      link: "https://magwima.github.io/Paint-the-Lesson/", linkText: "Open Paint the Lesson"
    }
  ],

  about: {
    photo: "assets/me.jpg",                         // square photo
    lead: "I make small games that feel good in the hands, and I draw, model and paint the worlds they live in.",
    paragraphs: [
      "I'm Michael, a game designer and 3D artist based in Rzeszów, Poland. I studied game design and development, and 3D modelling, and I've worked on both sides of the line ever since: designing how a game plays, then building what it looks like.",
      "My rule is simple. You should understand a game in five seconds and still be playing an hour later. So I start with one feeling, like steering a koi through a reef or bumping a scrap truck into a rival, and cut everything that gets in its way.",
      "Most of my ideas start as a sketch. From there I model them in Blender, paint them by hand and drop them into Unity or the browser to see if they're fun. When I'm not making games I teach English and build tools that make lessons easier to plan and nicer to learn from."
    ],
    facts: [
      { k: "Based in", v: "Rzeszów, Poland" },
      { k: "Studied", v: "Game design and development, 3D modelling" },
      { k: "Now", v: "Building Scrap Racers in Unity" },
      { k: "Languages", v: "English, learning Polish" }
    ],
    disciplines: [
      { title: "Game design", text: "Core loops, controls, levels, cameras and pacing. Prototype fast, cut hard.", tools: ["Unity", "C#", "Level design", "Playtesting"] },
      { title: "3D art", text: "Stylised and hard-surface vehicles, characters and props, from blockout to hand-painted textures.", tools: ["Blender", "Hand-painted textures", "Clay and toon renders"] },
      { title: "2D art and animation", text: "Concept art, character painting, value and colour studies, game assets and frame-by-frame animation.", tools: ["Heavy Paint", "Photoshop", "Concept art", "2D animation"] },
      { title: "Web and tools", text: "Playable browser games and full web apps, from first idea to live site.", tools: ["Three.js", "HTML, CSS, JavaScript", "Supabase"] },
      { title: "Teaching", text: "English lessons and learning tools, designed around how students actually learn.", tools: ["Lesson design", "Learning apps"] }
    ],
    highlights: [
      { title: "Koi Quest: Reef Adventure", text: "Solo Unity game. Design, C#, levels and UI.", href: "#games" },
      { title: "The Kingdom of Eldonia", text: "Team project. Painted game assets.", href: "#games" },
      { title: "Scrap Racers", text: "My kart-style racer, in production.", href: "#top" },
      { title: "Paint the Lesson", text: "A full web app for English teachers.", href: "#tools" }
    ],
    passions: ["Game design", "3D modelling, low-poly and beyond", "Concept art", "Building creative tools (DASZFRAME)", "Racing games"]
  }
};
