const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const THEMES = {
  dark: {
    BG_COLOR: "#1a1a1a",
    TEXT_COLOR: "#ffffff",
    SUBTITLE_COLOR: "rgba(255,255,255,0.65)",
    BODY_COLOR: "rgba(255,255,255,0.7)",
    NUM_COLOR: "rgba(255,255,255,0.25)",
    LOGO_FILL: "white",
    WORDMARK_FILL: "white",
    SWIPE_BG: "rgba(255,255,255,0.1)",
    SWIPE_COLOR: "rgba(255,255,255,0.6)",
    DOT_COLOR: "rgba(255,255,255,0.04)",
    BLOB_COLOR_1: "rgba(255,221,4,0.08)",
    BLOB_COLOR_2: "rgba(255,221,4,0.05)",
    BOTTOM_FADE: "rgba(0,0,0,0.4)",
    DECO_TEXT_COLOR: "rgba(255,255,255,0.12)",
    WATERMARK_OPACITY: "0.06",
    DOT_INACTIVE: "rgba(255,255,255,0.15)",
    STEP_NUM_COLOR: "#FFDD04",
    PROG_DONE: "#FFDD04",
    PROG_CURRENT: "rgba(255,221,4,0.5)",
    TIP_BG: "rgba(255,221,4,0.12)",
    TIP_BORDER: "#FFDD04",
    TIP_LABEL_COLOR: "#FFDD04",
    TIP_TEXT_COLOR: "rgba(255,255,255,0.85)",
  },
  yellow: {
    BG_COLOR: "#FFDD04",
    TEXT_COLOR: "#1a1a1a",
    SUBTITLE_COLOR: "rgba(0,0,0,0.5)",
    BODY_COLOR: "rgba(0,0,0,0.55)",
    NUM_COLOR: "rgba(0,0,0,0.18)",
    LOGO_FILL: "#1a1a1a",
    WORDMARK_FILL: "#1a1a1a",
    SWIPE_BG: "rgba(0,0,0,0.08)",
    SWIPE_COLOR: "rgba(0,0,0,0.5)",
    DOT_COLOR: "rgba(0,0,0,0.04)",
    BLOB_COLOR_1: "rgba(255,255,255,0.2)",
    BLOB_COLOR_2: "rgba(255,255,255,0.15)",
    BOTTOM_FADE: "rgba(200,170,0,0.3)",
    DECO_TEXT_COLOR: "rgba(0,0,0,0.1)",
    WATERMARK_OPACITY: "0.08",
    DOT_INACTIVE: "rgba(0,0,0,0.12)",
    STEP_NUM_COLOR: "#1a1a1a",
    PROG_DONE: "#1a1a1a",
    PROG_CURRENT: "rgba(0,0,0,0.4)",
    TIP_BG: "rgba(0,0,0,0.85)",
    TIP_BORDER: "white",
    TIP_LABEL_COLOR: "#FFDD04",
    TIP_TEXT_COLOR: "rgba(255,255,255,0.9)",
  },
};

function fillTemplate(templatePath, vars) {
  let html = fs.readFileSync(templatePath, "utf-8");
  for (const [key, value] of Object.entries(vars)) {
    html = html.replaceAll(`{{${key}}}`, value || "");
  }
  return html;
}

function makeProgressBar(current, total) {
  let segs = "";
  for (let i = 0; i < total; i++) {
    const cls = i < current ? "done" : i === current ? "current" : "";
    segs += `<div class="prog-seg ${cls}"></div>`;
  }
  return segs;
}

async function generateCarousel(carouselData, outputDir) {
  const templatesDir = path.join(__dirname, "templates");
  fs.mkdirSync(outputDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  const totalSlides = carouselData.slides.length;

  for (let i = 0; i < totalSlides; i++) {
    const slide = carouselData.slides[i];
    const theme = THEMES[slide.theme || "dark"];
    const slideNum = `${i + 1}/${totalSlides}`;
    let html;

    if (slide.type === "hook") {
      const subtitleBlock = slide.subtitle
        ? `<div class="subtitle">${slide.subtitle}</div>` : "";
      const emojiBlock = slide.emoji
        ? `<div class="emoji-icon">${slide.emoji}</div>` : "";
      html = fillTemplate(path.join(templatesDir, "hook.html"), {
        ...theme,
        SLIDE_NUM: slideNum,
        HEADLINE: slide.headline,
        HEADLINE_SIZE: slide.headlineSize || "105px",
        SUBTITLE_BLOCK: subtitleBlock,
        EMOJI_BLOCK: emojiBlock,
      });
    } else if (slide.type === "content") {
      const tipBlock = slide.tip
        ? `<div class="tip-box"><div class="tip-label">${slide.tipLabel || "💡 Tip"}</div><div class="tip-text">${slide.tip}</div></div>`
        : "";
      html = fillTemplate(path.join(templatesDir, "content.html"), {
        ...theme,
        SLIDE_NUM: slideNum,
        STEP_NUM: slide.stepNum || "",
        STEP_EMOJI: slide.emoji || "",
        POINT_TITLE: slide.title,
        POINT_BODY: slide.body || "",
        TIP_BLOCK: tipBlock,
        WATERMARK_EMOJI: slide.watermarkEmoji || slide.emoji || "",
        PROGRESS_SEGMENTS: makeProgressBar(i, totalSlides),
      });
    } else if (slide.type === "cta") {
      html = fillTemplate(path.join(templatesDir, "cta.html"), {
        SLIDE_NUM: slideNum,
        HEADLINE: slide.headline,
        SUBTITLE: slide.subtitle || "",
        SAVE_TEXT: slide.saveText || "Guardá este post 🔖",
        CTA_EMOJI: slide.emoji || "🚀",
      });
    }

    const tmpPath = path.join(outputDir, `_tmp_slide.html`);
    fs.writeFileSync(tmpPath, html);
    await page.goto(`file://${tmpPath}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(outputDir, `slide-${i + 1}.png`), type: "png" });
    console.log(`✅ slide-${i + 1}.png`);
  }

  const tmpPath = path.join(outputDir, `_tmp_slide.html`);
  if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
  await browser.close();
  console.log(`\n🎉 Generated ${totalSlides} slides in ${outputDir}`);
}

const dataPath = process.argv[2];
if (!dataPath) { console.error("Usage: node generate.js <carousel.json> [output_dir]"); process.exit(1); }
const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
const outDir = process.argv[3] || path.join(__dirname, "output", data.id || "carousel");
generateCarousel(data, outDir);
