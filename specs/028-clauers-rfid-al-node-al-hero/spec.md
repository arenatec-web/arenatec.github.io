# Especificació 028 — Clauers RFID al costat del Node del visual principal

**Estat:** implementada.

## Objectiu

Fer servir la composició general del sistema que l'usuari ha seleccionat i afegir-hi els clauers RFID al costat del Node.

## Abast

- Prendre com a composició base la imatge adjunta seleccionada per l'usuari.
- Afegir al costat del Node un petit grup dels clauers RFID de colors visibles a la fotografia del Node.
- Preservar sense canvis les mides relatives, posicions, aspecte i connexions entre Score, Beacon, Node i Bomb S1 de la imatge seleccionada.
- Mantenir el fons transparent real, sense deixar-hi el patró de quadrícula com a fons opac.
- Actualitzar només `assets/img/dominion-system-overview.png`; conservar les etiquetes alternatives localitzades existents.

## Criteris d'acceptació

1. La composició final correspon a la imatge seleccionada, amb els quatre productes i les tres connexions directes cap al Node preservats.
2. S'hi veu un petit grup de clauers RFID al costat del Node, separat dels altres productes.
3. El fons és transparent i el patró de quadrícula no queda incrustat al PNG.
4. No canvien fitxes, textos, miniatures ni cap altre element del web.
