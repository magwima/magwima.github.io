# Portfolio site

My games, 3D models and tools. Live at `https://magwima.github.io`.

## Put it online (once)

1. On GitHub, create a new **public** repository named exactly `magwima.github.io`.
2. Upload everything in this folder (keep the `assets` folder and the empty `.nojekyll` file).
3. Go to **Settings → Pages**, choose **Deploy from a branch**, pick **main** and **/(root)**, and click **Save**.
4. After a minute or two the site is live at `https://magwima.github.io`.

## Change the content

Everything on the page comes from `data.js`. You don't need to touch the other files.

| To do this | Edit this in `data.js` |
| --- | --- |
| Your email and social links | `email`, `socials` (delete a line to hide that icon) |
| The coming-soon poster | `comingSoon` (put your poster in `assets/` as a portrait image, about 1200 × 1600) |
| Add a game | copy one block in `games` and change it |
| Add a Blender model | export as **glTF Binary (.glb)** into `assets/models/`, then add a line in `models` |
| Your photo | put a square photo at `assets/me.jpg` and set `about.photo: "assets/me.jpg"` |

### Game links

- `play`: the game opens inside the page. Use it for browser games on GitHub Pages, or for an **itch.io embed** link (on itch.io: your game → Edit game → Distribute → Embed game; copy the `https://itch.io/embed-upload/...` address).
- `unity`: a `play.unity.com` link. It opens in a new tab, because Unity Play doesn't allow embedding.
- `itch`, `repo`, `page`: extra buttons in the game's details.
- `kind`: `"solo"`, `"ai"` or `"collab"`. This sets the badge and the filters.
- `images`: screenshots in `assets/covers/` (16:9, about 1280 × 720). The first is the cover; the others play when someone hovers over the card.

### Play a Unity game right on the page

In Unity: **File → Build Settings → WebGL → Build**. In **Player Settings → Publishing Settings**, set **Compression Format** to **Disabled** (GitHub Pages can't serve the compressed files). Upload the build folder to its own repo, turn on Pages, and use its address as `play`.
