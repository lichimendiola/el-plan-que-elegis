#!/usr/bin/env python3
"""Pliegue Cardinal — masterpiece canvas.

Renders an octagonal cosmograph: 8 wedges (4 ash blue-gray, 4 sunset gradient),
paper texture, fold creases, registration marks, layered typography.
"""
import math, os
import numpy as np
from PIL import Image, ImageDraw, ImageFont

OUT_DIR = "/Users/lisandromendiola/Desktop/C. Colo Battistutti/El plan que elegís Web/design"
FONTS = "/Users/lisandromendiola/Library/Application Support/Claude/local-agent-mode-sessions/skills-plugin/87d2bf17-531e-4b1d-91a2-34633dbd9ca6/6b162a9b-45a8-4679-a725-15f837ba1be9/skills/canvas-design/canvas-fonts"

W = 2400
S = 2
SW = W * S

PAPER = np.array([243, 236, 220], dtype=np.float32)
INK_FULL = (24, 32, 50, 255)
INK_DIM  = (62, 74, 96, 255)
INK_FAINT= (88, 100, 120, 220)
PAPER_RGBA = (243, 236, 220, 255)

cx, cy = SW // 2, SW // 2
R = int(SW * 0.288)

# --- 1. Paper background ---
rng = np.random.default_rng(11)
base = np.tile(PAPER, (SW, SW, 1))
grain = rng.normal(0, 3.2, (SW, SW))
base += grain[..., None]
fiber = rng.normal(0, 1, (SW // 6, SW // 6))
fiber_im = Image.fromarray(((fiber + 128).clip(0, 255)).astype(np.uint8)).resize((SW, SW), Image.BILINEAR)
fiber_arr = (np.array(fiber_im).astype(np.float32) - 128) * 1.5
base += fiber_arr[..., None]

yy, xx = np.indices((SW, SW), dtype=np.float32)
distc = np.hypot(xx - cx, yy - cy) / (SW / 2)
vignette = 1 - np.clip(distc, 0, 1.2) * 0.09
base *= vignette[..., None]
base = np.clip(base, 0, 255).astype(np.uint8)
img = Image.fromarray(base, "RGB").convert("RGBA")

# --- 2. Octagon vertices (vertex 0 at top, going clockwise) ---
oct_verts = [
    (cx + R * math.cos(math.radians(-90 + 45 * i)),
     cy + R * math.sin(math.radians(-90 + 45 * i))) for i in range(8)
]

# --- 3. Gradient arrays ---
yy, xx = np.indices((SW, SW), dtype=np.float32)
dx, dy = xx - cx, yy - cy
dist = np.hypot(dx, dy)
t = np.clip(dist / R, 0, 1)
t3 = t[..., None]

# Sunset: orange -> magenta -> violet -> deep violet
orange  = np.array([238, 132, 38], dtype=np.float32)
magenta = np.array([170, 56, 110], dtype=np.float32)
violet  = np.array([72, 44, 116], dtype=np.float32)
deep_v  = np.array([46, 28, 78], dtype=np.float32)

sunset = np.where(
    t3 < 0.5,
    orange + (magenta - orange) * (t3 / 0.5),
    np.where(
        t3 < 0.85,
        magenta + (violet - magenta) * ((t3 - 0.5) / 0.35),
        violet + (deep_v - violet) * ((t3 - 0.85) / 0.15),
    ),
)
glow = np.exp(-((dist / (R * 0.35)) ** 2)) * 24
sunset[..., 0] += glow * 0.5
sunset[..., 1] += glow * 0.25
sunset = sunset.clip(0, 255)

# Ash: blue-gray spectrum — deliberate blue, never reads as pure black
ash_hot  = np.array([118, 134, 168], dtype=np.float32)
ash_mid  = np.array([62, 78, 110], dtype=np.float32)
ash_cool = np.array([34, 46, 76], dtype=np.float32)
ash_deep = np.array([22, 32, 58], dtype=np.float32)
ash = np.where(
    t3 < 0.4,
    ash_hot + (ash_mid - ash_hot) * (t3 / 0.4),
    np.where(
        t3 < 0.8,
        ash_mid + (ash_cool - ash_mid) * ((t3 - 0.4) / 0.4),
        ash_cool + (ash_deep - ash_cool) * ((t3 - 0.8) / 0.2),
    ),
).clip(0, 255)

# Add tiny grain to gradients to prevent banding
grain2 = rng.normal(0, 1.8, (SW, SW))[..., None]
sunset = (sunset + grain2 * 0.9).clip(0, 255).astype(np.uint8)
ash = (ash + grain2 * 0.9).clip(0, 255).astype(np.uint8)

sunset_img = Image.fromarray(sunset).convert("RGBA")
ash_img    = Image.fromarray(ash).convert("RGBA")

# --- 4. Composite wedges ---
def make_mask(verts):
    m = Image.new("L", (SW, SW), 0)
    ImageDraw.Draw(m).polygon(verts, fill=255)
    return m

SUNSET_W = [0, 2, 4, 6]
ASH_W    = [1, 3, 5, 7]

for i in SUNSET_W:
    img.paste(sunset_img, (0, 0), make_mask([(cx, cy), oct_verts[i], oct_verts[(i + 1) % 8]]))
for i in ASH_W:
    img.paste(ash_img, (0, 0), make_mask([(cx, cy), oct_verts[i], oct_verts[(i + 1) % 8]]))

draw = ImageDraw.Draw(img, "RGBA")

# --- 5. Fold lines extending across whole sheet (very faint) ---
ext = SW
for ang in [-90, -45, 0, 45]:
    a = math.radians(ang)
    x1, y1 = cx - ext * math.cos(a), cy - ext * math.sin(a)
    x2, y2 = cx + ext * math.cos(a), cy + ext * math.sin(a)
    draw.line([(x1, y1), (x2, y2)], fill=(40, 50, 72, 26), width=int(1 * S))

# --- 6. Wedge boundary creases (paper-tone hairlines) inside octagon ---
for i in range(8):
    draw.line([(cx, cy), oct_verts[i]], fill=(243, 236, 220, 130), width=int(1.5 * S))

# Outer octagon outline (paper)
draw.polygon(oct_verts, outline=(243, 236, 220, 230), width=int(2 * S))

# Concentric inner octagons (paper hairlines)
for ratio, alpha in [(0.62, 200), (0.42, 180), (0.24, 200)]:
    pts = [(cx + R * ratio * math.cos(math.radians(-90 + 45 * i)),
            cy + R * ratio * math.sin(math.radians(-90 + 45 * i))) for i in range(8)]
    draw.polygon(pts, outline=(243, 236, 220, alpha), width=int(1.3 * S))

# Center mark
cd = int(4.5 * S)
draw.ellipse([cx - cd, cy - cd, cx + cd, cy + cd], fill=(243, 236, 220, 255))
cross = int(20 * S)
draw.line([(cx - cross, cy), (cx + cross, cy)], fill=(243, 236, 220, 230), width=int(1 * S))
draw.line([(cx, cy - cross), (cx, cy + cross)], fill=(243, 236, 220, 230), width=int(1 * S))

# --- 7. Outer frame + registration crosses ---
margin = int(SW * 0.075)
draw.rectangle([margin, margin, SW - margin, SW - margin], outline=(40, 50, 72, 210), width=int(2 * S))

def reg(x, y, dx, dy):
    L = int(40 * S); g = int(8 * S); col = (40, 50, 72, 230); w = int(2 * S)
    draw.line([(x + dx * g, y), (x + dx * (g + L), y)], fill=col, width=w)
    draw.line([(x, y + dy * g), (x, y + dy * (g + L))], fill=col, width=w)

c = int(SW * 0.026)
reg(c, c, 1, 1); reg(SW - c, c, -1, 1); reg(c, SW - c, 1, -1); reg(SW - c, SW - c, -1, -1)

# Hairline rules above and below central composition
rule_y_top = int(SW * 0.135)
rule_y_bot = int(SW * 0.83)
draw.line([(margin, rule_y_top), (SW - margin, rule_y_top)], fill=(40, 50, 72, 150), width=int(1 * S))
draw.line([(margin, rule_y_bot), (SW - margin, rule_y_bot)], fill=(40, 50, 72, 150), width=int(1 * S))

# --- 8. Typography ---
F_mono_lg = ImageFont.truetype(f"{FONTS}/JetBrainsMono-Regular.ttf", int(17 * S))
F_mono_md = ImageFont.truetype(f"{FONTS}/JetBrainsMono-Regular.ttf", int(13 * S))
F_mono_sm = ImageFont.truetype(f"{FONTS}/JetBrainsMono-Regular.ttf", int(11 * S))
F_serif_xl = ImageFont.truetype(f"{FONTS}/InstrumentSerif-Italic.ttf", int(108 * S))
F_serif_md = ImageFont.truetype(f"{FONTS}/InstrumentSerif-Regular.ttf", int(20 * S))
F_italiana = ImageFont.truetype(f"{FONTS}/Italiana-Regular.ttf", int(36 * S))

def text_at(text, font, x, y, fill, anchor="lt"):
    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    if anchor == "mt":
        x -= tw / 2
    elif anchor == "rt":
        x -= tw
    draw.text((x - bbox[0], y - bbox[1]), text, font=font, fill=fill)

# --- TOP BAND ---
top_y = int(SW * 0.105)
text_at("PROVINCIA  DE  SANTA  FE", F_mono_md, margin + int(8 * S), top_y, INK_FULL, "lt")
text_at("PLIEGUE    CARDINAL", F_mono_lg, SW // 2, top_y - int(2 * S), INK_FULL, "mt")
text_at("MMXXVI  ·  TRATADO  N°  I", F_mono_md, SW - margin - int(8 * S), top_y, INK_FULL, "rt")

sub_top_y = top_y + int(30 * S)
text_at(
    "ROSA  DE  LOS  PLIEGUES   ·   COMPENDIO  CROMATOGRÁFICO  DEL  ALIVIO  FISCAL   ·   31° 37′ S  —  60° 42′ O",
    F_mono_sm, SW // 2, sub_top_y, INK_DIM, "mt",
)

# --- ROMAN NUMERALS at outer (between octagon and frame) ---
F_roman = ImageFont.truetype(f"{FONTS}/Italiana-Regular.ttf", int(40 * S))
romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"]
R_label = R + int(78 * S)
for i, rom in enumerate(romans):
    a_mid = math.radians(-90 + 22.5 + 45 * i)
    px = cx + R_label * math.cos(a_mid)
    py = cy + R_label * math.sin(a_mid)
    bbox = draw.textbbox((0, 0), rom, font=F_roman)
    rw, rh = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text((px - rw / 2 - bbox[0], py - rh / 2 - bbox[1]), rom, font=F_roman, fill=(36, 46, 68, 240))

# --- TICK MARKS along outer octagon edge (instrumented look) ---
ticks_per_edge = 9  # subdivisions per octagon side
for i in range(8):
    p1 = oct_verts[i]
    p2 = oct_verts[(i + 1) % 8]
    edge_len = math.hypot(p2[0] - p1[0], p2[1] - p1[1])
    # tangent and inward normal
    tx, ty = (p2[0] - p1[0]) / edge_len, (p2[1] - p1[1]) / edge_len
    # inward normal (toward center)
    mid = ((p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2)
    nx, ny = (cx - mid[0]), (cy - mid[1])
    nlen = math.hypot(nx, ny)
    nx, ny = nx / nlen, ny / nlen
    for k in range(1, ticks_per_edge):
        s_ = k / ticks_per_edge
        bx = p1[0] + tx * edge_len * s_
        by = p1[1] + ty * edge_len * s_
        tlen = int(10 * S) if k % 3 == 0 else int(5 * S)
        x2_, y2_ = bx + nx * tlen, by + ny * tlen
        draw.line([(bx, by), (x2_, y2_)], fill=(243, 236, 220, 200), width=int(1 * S))

# --- BOTTOM BAND ---
title = "el plan, lo elegís vos."
bbox = draw.textbbox((0, 0), title, font=F_serif_xl)
tw_ = bbox[2] - bbox[0]
title_y = int(SW * 0.846)
draw.text((SW / 2 - tw_ / 2 - bbox[0], title_y - bbox[1]), title, font=F_serif_xl, fill=(20, 28, 48, 255))

# Decorative flourish marks flanking the title
flourish_y = title_y + int((bbox[3] - bbox[1]) / 2) - int(8 * S)
flourish_w = int(80 * S)
flourish_gap = int(40 * S)
title_left_x  = SW / 2 - tw_ / 2 - flourish_gap
title_right_x = SW / 2 + tw_ / 2 + flourish_gap
draw.line([(title_left_x - flourish_w, flourish_y), (title_left_x, flourish_y)],
          fill=(40, 50, 72, 180), width=int(1 * S))
draw.line([(title_right_x, flourish_y), (title_right_x + flourish_w, flourish_y)],
          fill=(40, 50, 72, 180), width=int(1 * S))

sub_y = title_y + int(120 * S)
text_at(
    "EL  PLAN  QUE  ELEGÍS    ·    ALIVIO  FISCAL  PROVINCIAL    ·    LEY  XIV·CDXXVI   +   PLAN  ESPECIAL  DE  XXXVI  CUOTAS",
    F_mono_md, SW // 2, sub_y, INK_DIM, "mt",
)
auth_y = sub_y + int(26 * S)
text_at(
    "CONCEJO  MUNICIPAL  DE  SANTA  FE      ·      COLO  BATTISTUTTI   /   SILVINA  CIAN",
    F_mono_sm, SW // 2, auth_y, INK_DIM, "mt",
)

# --- SIDE VERTICAL TEXT ---
def vtext(text, font, x, y_center, fill, side="left"):
    bbox = font.getbbox(text)
    tw_, th_ = bbox[2] - bbox[0], bbox[3] - bbox[1]
    tile = Image.new("RGBA", (tw_ + 12, th_ + 12), (0, 0, 0, 0))
    ImageDraw.Draw(tile).text((6 - bbox[0], 6 - bbox[1]), text, font=font, fill=fill)
    rot = tile.rotate(90 if side == "left" else -90, resample=Image.BICUBIC, expand=True)
    img.paste(rot, (int(x - rot.width / 2), int(y_center - rot.height / 2)), rot)

vtext("PLIEGUE   ·   CARDINAL   ·   PRIMA  EDICIÓN",
      F_mono_md, int(SW * 0.062), SW // 2, (36, 46, 68, 235), "left")
vtext("PAPEL   PLEGADO   ·   GEOMETRÍA   DE   LA   DECISIÓN",
      F_mono_md, int(SW * 0.938), SW // 2, (36, 46, 68, 235), "right")

# --- 9. Final downscale and export ---
final = img.convert("RGB").resize((W, W), Image.LANCZOS)
final.save(f"{OUT_DIR}/pliegue-cardinal.png", "PNG", optimize=True)
final.save(f"{OUT_DIR}/pliegue-cardinal.pdf", "PDF", resolution=200.0)
print("Wrote PNG and PDF to", OUT_DIR)
