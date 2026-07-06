#!/usr/bin/env bash
# Ricolora i loghi partner in BIANCO trasparente per il footer scuro di Oicos.
# Salva qui i file originali (anche con sfondo bianco): anapi.png  teamsystem.png  aiac.png
# Poi lancia:  bash whitewash.sh
cd "$(dirname "$0")" || exit 1
for f in anapi teamsystem aiac; do
  if [ -f "$f.png" ]; then
    # tiene una copia dell'originale la prima volta
    [ -f "$f.orig.png" ] || cp "$f.png" "$f.orig.png"
    convert "$f.orig.png" -fuzz 28% -transparent white -fill white -colorize 100 -trim +repage "$f.png"
    echo "✓ $f.png  →  bianco, trasparente, ritagliato"
  else
    echo "… manca $f.png — salvalo in questa cartella"
  fi
done
