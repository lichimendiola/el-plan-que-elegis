# El plan que elegís — Alivio fiscal Santa Fe

Landing interactiva del paquete de alivio fiscal de la Provincia de Santa Fe 2026: Ley Tributaria 14.426 + Plan Especial de Financiamiento de hasta 36 cuotas.

Un comecocos de papel como interfaz: elegís rama (bajar impuestos / refinanciar deudas), elegís el problema con tu voz, y aparece la herramienta concreta + el detalle.

## Stack

Sitio 100% estático. HTML/CSS/JS vanilla, sin build step.

- `index.html` — markup principal
- `data.js` — los 8 gajos del comecocos (4 azul + 4 naranja)
- `script.js` — lógica del juego
- `styles.css` — estilos
- `assets/`, `img/` — fuentes, logos, fotos del equipo
- `design/` — manifiesto "Pliegue Cardinal" (referencia visual)
- `el-plan-que-elegis.html` — bundle single-file generado con `build_bundle.py`

## Correr local

Servir la carpeta con cualquier server estático, por ejemplo:

```sh
python3 -m http.server 8000
```

Y abrir http://localhost:8000.

## Deploy

Configurado para Vercel (estático, sin build).

## Equipo

Colo Battistutti · Silvina Cian · Caro Capovilla
Bloque Unidos! Santa Fe Puede — Concejales.
