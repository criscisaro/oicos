#!/usr/bin/env python3
# Ricolora i loghi partner in BIANCO trasparente per il footer scuro.
from PIL import Image
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))
JOBS = {"anapi": "anapi.orig.png", "teamsystem": "teamsystem.orig.png", "aiac": "aiac.orig.png"}

for name, src in JOBS.items():
    if not os.path.exists(src):
        print("manca", src); continue
    img = Image.open(src).convert("RGBA")
    px = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            lum = 0.299 * r + 0.587 * g + 0.114 * b
            if a == 0 or lum >= 245:
                na = 0
            elif lum <= 200:
                na = 255
            else:
                na = int(255 * (245 - lum) / 45)
            px[x, y] = (255, 255, 255, na)
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    img.save(name + ".png")
    print("ok", name + ".png", img.size)
