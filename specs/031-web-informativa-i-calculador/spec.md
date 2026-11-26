# Especificació 031 — Web informativa i calculadora separada

**Estat:** implementada.

## Objectiu

Presentar Dominion com a projecte informatiu en fase d'estudi d'interès, i conservar el calculador en una adreça separada per a ús del titular.

## Abast

- Retirar el calculador, els imports i les condicions d'enviament de les quatre pàgines principals; presentar el projecte i el contacte en to informatiu en català, castellà i anglès. Ometre el paràgraf sobre la fase d'estudi d'interès a la secció de contacte.
- Conservar el calculador complet, els productes, les imatges i les escales de descompte en pàgines estàtiques a `preus/`, amb versions equivalents en els tres idiomes i castellà per defecte.
- No enllaçar les pàgines del calculador des del web públic; afegir-hi una indicació de no indexació. L'adreça continua sent pública i no proporciona autenticació ni confidencialitat.
- Mantenir els recursos locals, accessibilitat, funcionament sense emmagatzematge, i els preus disponibles sense JavaScript. No mostrar el text introductori que identifica els preus com a orientatius i sense IVA.
- No publicar textos legals que depenguin de dades del responsable o pràctiques encara no confirmades.

## Criteris d'acceptació

1. Cap pàgina principal conté el calculador, preus, descomptes, condicions d'enviament ni el paràgraf sobre la fase d'estudi d'interès.
2. `preus/` mostra el calculador en castellà; les versions catalana i anglesa són accessibles des de la mateixa pàgina i calculen com abans.
3. Els camins d'imatges, estils i scripts funcionen des del subdirectori; el preu del clauer arriba a 0,75 € a partir de deu unitats.
4. Cap pàgina principal enllaça a `preus/`; les pàgines de calculadora indiquen noindex i no usen cookies ni serveis externs.
