#!/usr/bin/env python3
"""
Empaqueta toda la web en un único .html con CSS/JS/fuentes/imágenes
inlineadas (base64). El archivo resultante se puede mandar por WhatsApp
como documento y abre offline en cualquier navegador.
"""
import base64, re
from pathlib import Path

ROOT = Path(__file__).parent
OUT  = ROOT / "el-plan-que-elegis.html"

def b64(filepath: Path, mime: str) -> str:
    data = filepath.read_bytes()
    return f"data:{mime};base64,{base64.b64encode(data).decode('ascii')}"

def mime_for(path: Path) -> str:
    ext = path.suffix.lower()
    return {
        ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
        ".png": "image/png",  ".svg": "image/svg+xml",
        ".webp": "image/webp",".gif": "image/gif",
        ".ttf": "font/ttf",   ".otf": "font/otf",
        ".woff": "font/woff", ".woff2": "font/woff2",
    }.get(ext, "application/octet-stream")

# 1. Cargar contenidos
html    = (ROOT / "index.html").read_text(encoding="utf-8")
css     = (ROOT / "styles.css").read_text(encoding="utf-8")
js      = (ROOT / "script.js").read_text(encoding="utf-8")
data_js = (ROOT / "data.js").read_text(encoding="utf-8")

# 2. Inlinear fuentes dentro del CSS
def replace_font_url(m):
    rel  = m.group(1).strip()
    full = (ROOT / rel.lstrip("./")).resolve()
    if not full.exists():
        return m.group(0)
    return f"url('{b64(full, mime_for(full))}')"

css = re.sub(
    r"url\(\s*['\"]?(\.\/assets\/fonts\/[^'\"\)\?\#]+)['\"]?\s*\)",
    replace_font_url, css
)

# 3. Reemplazar el <link rel="stylesheet"> por <style> inline
html = re.sub(
    r'<link\s+rel="stylesheet"\s+href="\.\/styles\.css[^"]*"\s*/?>',
    f"<style>\n{css}\n</style>",
    html, count=1
)

# 4. Reemplazar los <script src="..."> por inline
html = re.sub(
    r'<script\s+src="\.\/data\.js[^"]*"\s*>\s*</script>',
    f"<script>\n{data_js}\n</script>",
    html, count=1
)
html = re.sub(
    r'<script\s+src="\.\/script\.js[^"]*"\s*>\s*</script>',
    f"<script>\n{js}\n</script>",
    html, count=1
)

# 5. Inlinear imágenes (img/, assets/logo/) en src=… y href=…
def replace_asset(m):
    prefix, src, suffix = m.group(1), m.group(2), m.group(3)
    full = (ROOT / src.lstrip("./")).resolve()
    if not full.exists():
        return m.group(0)
    return f"{prefix}{b64(full, mime_for(full))}{suffix}"

html = re.sub(
    r'(src=")((?:\.\/)?(?:img|assets/logo)/[^"]+)(")',
    replace_asset, html
)
html = re.sub(
    r'(href=")((?:\.\/)?assets\/logo\/[^"]+)(")',
    replace_asset, html
)

# 6. Escribir archivo único
OUT.write_text(html, encoding="utf-8")
size_mb = OUT.stat().st_size / 1024 / 1024
print(f"Bundled → {OUT.name}  ({size_mb:.2f} MB)")
print(f"Path: {OUT}")
