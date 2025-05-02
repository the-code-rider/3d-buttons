# 3 D Buttons Everywhere — Chrome Extension

Give every button & clickable element on every site a delightful, subtle 3‑D lift on hover and a “pressed‑in” feel on click—no page modifications required.

https://github.com/user-attachments/assets/cfac6964-81d2-467b-83cd-61f475d83eeb


---

## ✨ Features
| What | Details |
|------|---------|
| **Universal styling** | Works out‑of‑the‑box on buttons, links (`<a>`), form submit/reset controls, and any element with `role="button"`. |
| **Smooth animation** | CSS transforms + box‑shadow create a lightweight raised/pressed illusion. |
| **Automatic coverage** | A `MutationObserver` watches for dynamically inserted nodes so late‑loaded UI (e.g. SPA routes, modals) also gets the effect. |
| **Opt‑out class** | Add `no-3d` to any element you *don’t* want styled. |
| **Tiny footprint** | Two small files (`styles.css`, `contentScript.js`) and a minimal `manifest.json`. No frameworks or external dependencies. |

---

## Quick Install  

1. **Download / clone** this repository.  
   Folder layout:
   ```
   3d-buttons-everywhere/
     ├─ manifest.json
     ├─ styles.css
     ├─ contentScript.js
     ├─ icons/
     │   └─ icon16.png · icon48.png · icon128.png
     └─ README.md
   ```
2. Open **`chrome://extensions`** in Chrome (or Edge, Brave, etc.), enable **Developer mode**.
3. Click **Load unpacked** → select the `3d-buttons-everywhere/` folder.
4. Refresh any open pages & enjoy the depth ✨.

---

##  Customization

| Need | How |
|------|-----|
| **Stronger lift / deeper press** | Tweak the `translateY` values and shadow offsets in `styles.css`. |
| **Target extra elements** | Extend the `selector` string at the top of `contentScript.js`. |
| **Disable on specific pages** | In `manifest.json`, replace `"<all_urls>"` with a more selective patterns list. |
| **Exclude a single element** | Give it the class `no-3d`.   


  

## File Reference

| File | Purpose |
|------|---------|
| `manifest.json` | Chrome Extension metadata and script/style injection rules (Manifest v3). |
| `styles.css` | The hover / active 3‑D illusion. Pure CSS, scope‑safe. |
| `contentScript.js` | Adds `.three-d` to clickable nodes + observes future DOM mutations. |
| `icons/` | 16×, 48×, 128× PNGs for the Extensions page & toolbar. |

---

## License

MIT — do whatever you like; attribution appreciated but not required.

