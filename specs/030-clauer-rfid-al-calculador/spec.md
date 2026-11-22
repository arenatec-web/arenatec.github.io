# Especificació 030 — Clauer RFID al calculador de preus

**Estat:** implementada.

## Objectiu

Afegir el clauer RFID com a producte individual al calculador, amb un preu inequívoc d'1 € per clauer.

## Abast

- Afegir una cinquena línia de producte al calculador de les pàgines CA, ES i EN i a la pàgina d'entrada en castellà.
- Mostrar `assets/img/rfid-keychain-colors.png` com a miniatura del producte.
- Fixar el preu a 1 € per clauer individual. Cada quantitat introduïda compta com una unitat; la imatge de sis colors mostra variants disponibles, no un pack de sis.
- Començar a 1 € per unitat; aplicar un descompte progressiu per quantitat del mateix producte: 5 % a partir de 2 unitats i reducció lineal fins al preu mínim de 0,75 €/unitat quan se'n demanen 10.
- A partir de 10 unitats, mantenir el preu unitari a 0,75 € i no aplicar cap descompte addicional.
- Localitzar a CA/ES/EN el nom, la descripció i l'etiqueta accessible de quantitat.
- Incloure els clauers al recompte d'unitats, subtotal i total del calculador, sense alterar els preus o descomptes dels altres productes.
- No modificar la secció general de productes, ni afegir dependències, cookies o emmagatzematge.

## Criteris d'acceptació

1. Les quatre pàgines mostren el Clauer/Llavero RFID amb la miniatura de les sis variants de color.
2. El text deixa clar que 1 € és el preu d'una unitat i que la imatge no representa un pack de sis.
3. Un clauer costa 1 €; dos clauers comencen amb un 5 % de descompte; el preu baixa progressivament fins a 0,75 €/unitat a 10 clauers i no baixa més.
4. El descompte del clauer es calcula només segons la quantitat de clauers, i canviar-la actualitza recompte, preu unitari, descompte i total sense alterar altres productes.
5. El control té etiqueta accessible traduïda i la fila continua llegible en mòbil i sense JavaScript.
