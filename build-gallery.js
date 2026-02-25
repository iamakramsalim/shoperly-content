const fs = require("fs");
const path = require("path");

const pubDir = path.join(__dirname, "published");
const dirs = fs.readdirSync(pubDir).filter(d => 
  fs.statSync(path.join(pubDir, d)).isDirectory()
).sort().reverse();

const manifest = dirs.map(d => {
  const metaPath = path.join(pubDir, d, "meta.json");
  if (!fs.existsSync(metaPath)) return null;
  return JSON.parse(fs.readFileSync(metaPath, "utf-8"));
}).filter(Boolean);

const template = fs.readFileSync(path.join(__dirname, "gallery.html"), "utf-8");
const output = template.replace("%%MANIFEST%%", JSON.stringify(manifest, null, 2));
fs.writeFileSync(path.join(__dirname, "index.html"), output);
console.log(`✅ Built gallery with ${manifest.length} entries → index.html`);
