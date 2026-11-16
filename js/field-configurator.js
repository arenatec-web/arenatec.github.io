(() => {
  const copy = {
    ca: {
      width: 'Amplada del camp (m)', height: 'Alçada del camp (m)', create: 'Genera la proposta inicial',
      regenerate: 'Torna a generar la proposta (substitueix la distribució actual)',
      addNode: 'Afegir Node', addScore: 'Afegir Score', cancel: 'Cancel·lar col·locació',
      helper: 'Tria què vols afegir i després clica o toca el punt del mapa. Amb el teclat, enfoca el mapa i prem Retorn per col·locar-lo al centre; després selecciona un marcador i fes servir les fletxes per moure’l.',
      empty: 'Introdueix les dimensions i genera una proposta per veure el mapa del camp.',
      summary: 'Resum de cobertura', nodes: 'Nodes', area: 'Superfície del camp', covered: 'Superfície coberta estimada', percent: 'Cobertura estimada',
      approximate: 'Estimació geomètrica aproximada. Les línies discontínues indiquen una ruta estimada entre Nodes a un màxim provisional de 150 m; el rang real depèn del terreny i cal validar-lo amb maquinari.',
      limit: 'La proposta necessita {count} Nodes per cobrir la graella modelada; el sistema admet un màxim de 16.',
      addLimit: 'Ja hi ha 16 Nodes. El sistema admet com a màxim els Nodes A–P.',
      noScoresWarning: 'No hi ha cap Score per mantenir els Nodes a l’abast.',
      invalid: 'Introdueix una amplada i una alçada vàlides, superiors a zero.',
      placementNode: 'Clica o toca el mapa per col·locar el Node {name}.',
      placementScore: 'Clica o toca el mapa per col·locar el nou Score.',
      selected: 'Seleccionat', none: 'Cap element seleccionat.', remove: 'Eliminar element seleccionat',
      beacon: 'Afegir Beacon (llum circular) a aquest Node', move: 'Arrossega el marcador al mapa o fes servir les fletxes del teclat per ajustar-ne la posició.',
      nodeLabel: 'Node {name}, a {distance} m del Score {score}{beacon}', scoreLabel: 'Score {number}', beaconOn: ', amb Beacon', beaconOff: ', sense Beacon',
      noScoreDistance: 'sense cap Score a l’abast', rangeWarning: 'Fora de rang: el {label} és a {distance} m del Score més proper; el màxim és 150 m.', coverageWarning: 'Aquesta proposta no arriba a cobrir tota la superfície respectant els 100 m mínims entre Nodes, el màxim de 150 m fins a un Score i els 16 Nodes.',
      proposalLimited: 'Les restriccions de cobertura, connectivitat, separació i el màxim de 16 han impedit proposar tots els Nodes necessaris per al camp.',
      map: 'Mapa proporcional del camp', score: 'Score', noNodes: 'Encara no hi ha Nodes.',
      disconnectedWarning: 'Hi ha {count} grups de Nodes desconnectats amb l’abast provisional de 150 m. Ajusta la distribució i valida la comunicació al camp.',
      generated: 'Proposta creada amb dos Scores oposats. Es prioritza cobrir el camp i mantenir una ruta de comunicació estimada entre tots els Nodes (màxim provisional de 150 m); els Nodes mantenen 100 m de separació i queden a menys de 150 m d’un Score. El rang real depèn del terreny. Els Beacons estan desactivats.',
      moved: '{label} mogut.', placed: '{label} col·locat.', removed: '{label} eliminat.',
      beaconEnabled: 'Beacon activat.', beaconDisabled: 'Beacon desactivat.',
      focus: 'Elements del disseny', scoreCount: 'Pantalles Score',
    },
    es: {
      width: 'Ancho del campo (m)', height: 'Largo del campo (m)', create: 'Generar propuesta inicial',
      regenerate: 'Regenerar propuesta (sustituye la distribución actual)',
      addNode: 'Añadir Node', addScore: 'Añadir Score', cancel: 'Cancelar colocación',
      helper: 'Elige qué quieres añadir y después pulsa o haz clic en el punto del mapa. Con el teclado, enfoca el mapa y pulsa Intro para colocarlo en el centro; después selecciona un marcador y usa las flechas para moverlo.',
      empty: 'Introduce las dimensiones y genera una propuesta para ver el mapa del campo.',
      summary: 'Resumen de cobertura', nodes: 'Nodes', area: 'Superficie del campo', covered: 'Superficie cubierta estimada', percent: 'Cobertura estimada',
      approximate: 'Estimación geométrica aproximada. Las líneas discontinuas indican una ruta estimada entre Nodes con un máximo provisional de 150 m; el alcance real depende del terreno y debe validarse con hardware.',
      limit: 'La propuesta necesita {count} Nodes para cubrir la cuadrícula modelada; el sistema admite un máximo de 16.',
      addLimit: 'Ya hay 16 Nodes. El sistema admite como máximo los Nodes A–P.',
      noScoresWarning: 'No hay ningún Score para mantener los Nodes dentro del alcance.',
      invalid: 'Introduce un ancho y un largo válidos, superiores a cero.',
      placementNode: 'Pulsa o haz clic en el mapa para colocar el Node {name}.',
      placementScore: 'Pulsa o haz clic en el mapa para colocar el nuevo Score.',
      selected: 'Seleccionado', none: 'Ningún elemento seleccionado.', remove: 'Eliminar elemento seleccionado',
      beacon: 'Añadir Beacon (luz circular) a este Node', move: 'Arrastra el marcador por el mapa o usa las flechas del teclado para ajustar su posición.',
      nodeLabel: 'Node {name}, a {distance} m del Score {score}{beacon}', scoreLabel: 'Score {number}', beaconOn: ', con Beacon', beaconOff: ', sin Beacon',
      noScoreDistance: 'sin ningún Score dentro del alcance', rangeWarning: 'Fuera de alcance: el {label} está a {distance} m del Score más cercano; el máximo es 150 m.', coverageWarning: 'Esta propuesta no cubre toda la superficie respetando los 100 m mínimos entre Nodes, el máximo de 150 m hasta un Score y los 16 Nodes.',
      proposalLimited: 'Las restricciones de cobertura, conectividad, separación y el máximo de 16 han impedido proponer todos los Nodes necesarios para el campo.',
      map: 'Mapa proporcional del campo', score: 'Score', noNodes: 'Todavía no hay Nodes.',
      disconnectedWarning: 'Hay {count} grupos de Nodes desconectados con el alcance provisional de 150 m. Ajusta la distribución y valida la comunicación en el campo.',
      generated: 'Propuesta creada con dos Scores opuestos. Se prioriza cubrir el campo y mantener una ruta de comunicación estimada entre todos los Nodes (máximo provisional de 150 m); los Nodes mantienen 100 m de separación y quedan a menos de 150 m de un Score. El alcance real depende del terreno. Los Beacons están desactivados.',
      moved: '{label} movido.', placed: '{label} colocado.', removed: '{label} eliminado.',
      beaconEnabled: 'Beacon activado.', beaconDisabled: 'Beacon desactivado.',
      focus: 'Elementos del diseño', scoreCount: 'Pantallas Score',
    },
    en: {
      width: 'Field width (m)', height: 'Field length (m)', create: 'Generate initial proposal',
      regenerate: 'Regenerate proposal (replaces the current layout)',
      addNode: 'Add Node', addScore: 'Add Score', cancel: 'Cancel placement',
      helper: 'Choose what to add, then click or tap a point on the map. With a keyboard, focus the map and press Enter to place at its centre; then select a marker and use the arrow keys to move it.',
      empty: 'Enter the field dimensions and generate a proposal to see the field map.',
      summary: 'Coverage summary', nodes: 'Nodes', area: 'Field area', covered: 'Estimated covered area', percent: 'Estimated coverage',
      approximate: 'Approximate geometric estimate. Dashed lines show an estimated Node path with a provisional 150 m maximum; actual range depends on terrain and must be validated with hardware.',
      limit: 'The proposal needs {count} Nodes to cover the modeled grid; the system supports a maximum of 16.',
      addLimit: 'There are already 16 Nodes. The system supports Nodes A–P.',
      noScoresWarning: 'There are no Scores to keep the Nodes within range.',
      invalid: 'Enter a valid field width and length greater than zero.',
      placementNode: 'Click or tap the map to place Node {name}.',
      placementScore: 'Click or tap the map to place the new Score.',
      selected: 'Selected', none: 'No element selected.', remove: 'Remove selected element',
      beacon: 'Add a Beacon (circular light) to this Node', move: 'Drag the marker on the map or use the keyboard arrow keys to adjust its position.',
      nodeLabel: 'Node {name}, {distance} m from Score {score}{beacon}', scoreLabel: 'Score {number}', beaconOn: ', with Beacon', beaconOff: ', without Beacon',
      noScoreDistance: 'with no Score in range', rangeWarning: 'Out of range: {label} is {distance} m from the nearest Score; the maximum is 150 m.', coverageWarning: 'This proposal cannot cover the whole field while keeping Nodes at least 100 m apart, within 150 m of a Score and within the 16-Node limit.',
      proposalLimited: 'Coverage, connectivity, spacing and the 16-Node limit prevented the proposal from placing all the Nodes needed for this field.',
      map: 'Proportional field map', score: 'Score', noNodes: 'There are no Nodes yet.',
      disconnectedWarning: 'There are {count} disconnected Node groups under the provisional 150 m range. Adjust the layout and verify communication on site.',
      generated: 'Proposal created with two Scores on opposite sides. It prioritizes field coverage and an estimated communication path through all Nodes (provisional 150 m maximum); Nodes stay at least 100 m apart and within 150 m of a Score. Actual range depends on terrain. Beacons are off.',
      moved: '{label} moved.', placed: '{label} placed.', removed: '{label} removed.',
      beaconEnabled: 'Beacon enabled.', beaconDisabled: 'Beacon disabled.',
      focus: 'Layout elements', scoreCount: 'Score screens',
    },
  };

  const radius = 150;
  const minimumNodeSpacing = 100;
  const communicationRange = 150;
  const letters = 'ABCDEFGHIJKLMNOP';
  const format = (value, language) => new Intl.NumberFormat(language, { maximumFractionDigits: 1 }).format(value);
  const text = (template, values = {}) => template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? '');

  let plannerIndex = 0;
  document.querySelectorAll('[data-field-planner]').forEach((root) => {
    const language = root.dataset.language in copy ? root.dataset.language : 'es';
    const t = copy[language];
    const app = root.querySelector('[data-planner-app]');
    const state = { width: 0, height: 0, generated: false, nodes: [], scores: [], selected: null, placing: null, dragging: null, requiredNodes: 0, proposalLimited: false };

    app.innerHTML = `
      <form class="planner-dimensions" novalidate>
        <label>${t.width}<input data-width type="number" min="1" step="any" inputmode="decimal" required></label>
        <label>${t.height}<input data-height type="number" min="1" step="any" inputmode="decimal" required></label>
        <button class="button primary" type="submit">${t.create}</button>
      </form>
      <p class="planner-helper">${t.helper}</p>
      <div class="planner-feedback" data-feedback role="status" aria-live="polite"></div>
      <div class="planner-layout">
        <div class="planner-map-wrap" data-map-wrap><p class="planner-empty" data-empty>${t.empty}</p></div>
        <aside class="planner-sidebar" aria-label="${t.focus}">
          <h4>${t.summary}</h4>
          <dl class="planner-summary"><div><dt>${t.nodes}</dt><dd data-node-count>0 / 16</dd></div><div><dt>${t.scoreCount}</dt><dd data-score-count>0</dd></div><div><dt>${t.area}</dt><dd data-area>—</dd></div><div><dt>${t.covered}</dt><dd data-covered>—</dd></div><div><dt>${t.percent}</dt><dd data-percent>—</dd></div></dl>
          <p class="planner-approximate">${t.approximate}</p>
          <p class="planner-limit" data-limit hidden></p>
          <p class="planner-limit planner-range-warning" data-warning role="status" aria-live="polite" hidden></p>
          <div class="planner-actions" data-actions hidden><button class="button secondary" type="button" data-action="add-node">${t.addNode}</button><button class="button secondary" type="button" data-action="add-score">${t.addScore}</button><button class="button secondary" type="button" data-action="regenerate">${t.regenerate}</button><button class="button secondary" type="button" data-action="cancel" hidden>${t.cancel}</button></div>
          <section class="planner-selection" data-selection aria-live="polite"><p>${t.none}</p></section>
          <ul class="planner-elements" data-elements aria-label="${t.focus}"></ul>
        </aside>
      </div>`;

    const widthInput = app.querySelector('[data-width]');
    const heightInput = app.querySelector('[data-height]');
    const mapWrap = app.querySelector('[data-map-wrap]');
    const feedback = app.querySelector('[data-feedback]');
    const clipId = `field-clip-${plannerIndex++}`;

    const getDimensions = () => ({ width: Number(widthInput.value), height: Number(heightInput.value) });
    const announce = (message) => { feedback.textContent = message; };
    const getObject = (key) => {
      if (!key) return null;
      const [kind, id] = key.split(':');
      return kind === 'node' ? state.nodes.find((item) => item.id === id) : state.scores.find((item) => item.id === id);
    };
    const nearestScore = (node) => state.scores.reduce((best, score) => {
      const distance = Math.hypot((node.x - score.x) * state.width, (node.y - score.y) * state.height);
      const tied = best && Math.abs(distance - best.distance) < 0.0001;
      return !best || distance < best.distance - 0.0001 || (tied && score.id === node.scoreId) ? { score, distance } : best;
    }, null);
    const labelFor = (item, kind) => {
      if (kind !== 'node') return text(t.scoreLabel, { number: item.number });
      const nearest = nearestScore(item);
      const beacon = item.beacon ? t.beaconOn : t.beaconOff;
      if (!nearest) return `Node ${item.name}, ${t.noScoreDistance}${beacon}`;
      return text(t.nodeLabel, { name: item.name, beacon, distance: format(nearest.distance, language), score: nearest.score.number });
    };
    function resequenceNodes() {
      if (!state.nodes.length) return;
      const byPosition = (a, b) => a.y - b.y || a.x - b.x || a.id.localeCompare(b.id);
      const remaining = [...state.nodes];
      const firstScore = state.scores.find((score) => score.number === 1);
      let current;
      if (firstScore) {
        current = remaining.reduce((best, node) => {
          const distance = Math.hypot((node.x - firstScore.x) * state.width, (node.y - firstScore.y) * state.height);
          const bestDistance = best ? Math.hypot((best.x - firstScore.x) * state.width, (best.y - firstScore.y) * state.height) : Infinity;
          return distance < bestDistance || (distance === bestDistance && byPosition(node, best) < 0) ? node : best;
        }, null);
      } else {
        current = [...remaining].sort(byPosition)[0];
      }

      const ordered = [current];
      remaining.splice(remaining.findIndex((node) => node.id === current.id), 1);
      while (remaining.length) {
        const previous = ordered[ordered.length - 1];
        current = remaining.reduce((best, node) => {
          const distance = Math.hypot((node.x - previous.x) * state.width, (node.y - previous.y) * state.height);
          const bestDistance = best ? Math.hypot((best.x - previous.x) * state.width, (best.y - previous.y) * state.height) : Infinity;
          return distance < bestDistance || (distance === bestDistance && byPosition(node, best) < 0) ? node : best;
        }, null);
        ordered.push(current);
        remaining.splice(remaining.findIndex((node) => node.id === current.id), 1);
      }
      ordered.forEach((node, index) => { node.name = letters[index]; });
      state.nodes = ordered;
    }
    const markerMetrics = () => ({
      node: Math.min(7, Math.min(state.width, state.height) * 0.018),
      scoreWidth: Math.min(28, state.width * 0.1, state.height * 0.14),
      scoreHeight: Math.min(20, state.height * 0.1, state.width * 0.14),
    });
    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    function chooseGridPoints(width, height) {
      const spacing = radius * Math.sqrt(2);
      const neededColumns = Math.max(1, Math.ceil(width / spacing));
      const neededRows = Math.max(1, Math.ceil(height / spacing));
      state.requiredNodes = neededColumns * neededRows;
      const communicationColumns = Math.max(1, Math.ceil(width / communicationRange));
      const communicationRows = Math.max(1, Math.ceil(height / communicationRange));
      const target = Math.min(Math.max(state.requiredNodes, communicationColumns * communicationRows), 16);
      const candidateMap = new Map();
      const addCandidate = (x, y) => {
        if (x < 0 || y < 0 || x > width || y > height) return;
        const distances = state.scores.map((score) => Math.hypot(x - score.x * width, y - score.y * height));
        const nearestDistance = Math.min(...distances);
        if (!Number.isFinite(nearestDistance) || nearestDistance > radius) return;
        const key = `${Math.round(x * 100)}:${Math.round(y * 100)}`;
        if (!candidateMap.has(key)) candidateMap.set(key, { x, y, distances, distance: nearestDistance, samples: [] });
      };

      const divisions = 28;
      for (let row = 0; row < divisions; row += 1) {
        for (let column = 0; column < divisions; column += 1) {
          addCandidate(((column + 0.5) / divisions) * width, ((row + 0.5) / divisions) * height);
        }
      }
      state.scores.forEach((score) => {
        const sx = score.x * width;
        const sy = score.y * height;
        addCandidate(sx, sy);
        [50, 100, 145].forEach((distance) => {
          for (let angle = 0; angle < 16; angle += 1) {
            const radians = (angle / 16) * Math.PI * 2;
            addCandidate(sx + Math.cos(radians) * distance, sy + Math.sin(radians) * distance);
          }
        });
      });

      const sampleCount = 40;
      const samplePoints = [];
      for (let row = 0; row < sampleCount; row += 1) {
        for (let column = 0; column < sampleCount; column += 1) {
          samplePoints.push({ x: ((column + 0.5) / sampleCount) * width, y: ((row + 0.5) / sampleCount) * height });
        }
      }
      const candidates = [...candidateMap.values()];
      candidates.forEach((candidate) => {
        samplePoints.forEach((point, index) => {
          if (Math.hypot(candidate.x - point.x, candidate.y - point.y) <= radius) candidate.samples.push(index);
        });
      });

      const compareLayouts = (a, b) => {
        if (a.coveredCount !== b.coveredCount) return b.coveredCount - a.coveredCount;
        const minA = a.entries.length ? Math.min(...a.entries.map((entry) => entry.distance)) : -Infinity;
        const minB = b.entries.length ? Math.min(...b.entries.map((entry) => entry.distance)) : -Infinity;
        if (Math.abs(minA - minB) > 0.001) return minB - minA;
        if (Math.abs(a.centrality - b.centrality) > 0.001) return a.centrality - b.centrality;
        if (Math.abs(a.balanceCost - b.balanceCost) > 0.001) return a.balanceCost - b.balanceCost;
        if (Math.abs(a.clearance - b.clearance) > 0.001) return b.clearance - a.clearance;
        return a.entries.length - b.entries.length;
      };
      const emptyLayout = {
        entries: [], covered: new Uint8Array(samplePoints.length), coveredCount: 0,
        counts: state.scores.map(() => 0), distanceSums: state.scores.map(() => 0),
        centrality: 0, balanceCost: 0, clearance: 0,
      };
      let beam = [emptyLayout];
      let bestLayout = emptyLayout;
      const beamWidth = 12;

      for (let depth = 0; depth < target && beam.length; depth += 1) {
        const expansions = new Map();
        for (const layout of beam) {
          for (const candidate of candidates) {
            if (layout.entries.some((entry) => Math.hypot(candidate.x - entry.point.x, candidate.y - entry.point.y) < minimumNodeSpacing)) continue;
            if (layout.entries.length && !layout.entries.some((entry) => Math.hypot(candidate.x - entry.point.x, candidate.y - entry.point.y) <= communicationRange)) continue;

            let gain = 0;
            for (const index of candidate.samples) if (!layout.covered[index]) gain += 1;

            const nearestDistance = Math.min(...candidate.distances);
            const nearestIndices = candidate.distances.map((distance, index) => ({ distance, index })).filter((item) => Math.abs(item.distance - nearestDistance) < 0.0001);
            nearestIndices.sort((a, b) => layout.counts[a.index] - layout.counts[b.index] || (layout.distanceSums[a.index] / Math.max(1, layout.counts[a.index])) - (layout.distanceSums[b.index] / Math.max(1, layout.counts[b.index])));
            const scoreIndex = nearestIndices[0].index;
            const counts = layout.counts.slice();
            const distanceSums = layout.distanceSums.slice();
            counts[scoreIndex] += 1;
            distanceSums[scoreIndex] += nearestDistance;
            const averages = counts.map((count, index) => count ? distanceSums[index] / count : 0);
            const balanceCost = (Math.max(...counts) - Math.min(...counts)) * radius + Math.max(...averages) - Math.min(...averages);
            const covered = layout.covered.slice();
            candidate.samples.forEach((index) => { covered[index] = 1; });
            const entry = { point: candidate, scoreIndex, distance: nearestDistance };
            const next = {
              entries: [...layout.entries, entry], covered, coveredCount: layout.coveredCount + gain,
              counts, distanceSums,
              centrality: layout.centrality + Math.abs(candidate.distances[0] - candidate.distances[1]),
              balanceCost,
              clearance: layout.clearance + nearestDistance,
            };
            const key = next.entries.map((item) => `${Math.round(item.point.x * 100)}:${Math.round(item.point.y * 100)}`).sort().join('|');
            const previous = expansions.get(key);
            if (!previous || compareLayouts(next, previous) < 0) expansions.set(key, next);
          }
        }
        if (!expansions.size) break;
        beam = [...expansions.values()].sort(compareLayouts).slice(0, beamWidth);
        if (compareLayouts(beam[0], bestLayout) < 0) bestLayout = beam[0];
      }

      const chosen = bestLayout.entries.map((entry) => {
        entry.point.scoreIndex = entry.scoreIndex;
        entry.point.nearestScore = state.scores[entry.scoreIndex];
        entry.point.distance = entry.distance;
        return entry.point;
      });
      const sampledCoverage = bestLayout.coveredCount / samplePoints.length;
      state.proposalLimited = chosen.length < target && sampledCoverage < 0.98;
      return chosen;
    }

    function generateProposal(width, height) {
      state.scores = [
        { id: 'score-0', number: 1, x: 0.08, y: 0.5 },
        { id: 'score-1', number: 2, x: 0.92, y: 0.5 },
      ];
      state.width = width;
      state.height = height;
      const points = chooseGridPoints(width, height);
      state.nodes = points.map((point, index) => ({ id: `node-${index}`, name: letters[index], x: point.x / width, y: point.y / height, beacon: false, scoreId: point.nearestScore.id }));
      resequenceNodes();
      state.generated = true;
      state.selected = null;
      state.placing = null;
      renderMapAndSummary();
      renderControls();
      announce(t.generated);
    }

    function placeAt(x, y) {
      let placed;
      let kind;
      const metrics = markerMetrics();
      if (state.placing === 'node') {
        const name = letters.find((letter) => !state.nodes.some((node) => node.name === letter));
        if (!name) { announce(t.addLimit); state.placing = null; renderControls(); return; }
        const extent = metrics.node * 2.6;
        placed = { id: `node-${name}`, name, x: clamp(x, extent / state.width, 1 - extent / state.width), y: clamp(y, extent / state.height, 1 - extent / state.height), beacon: false };
        state.nodes.push(placed); resequenceNodes(); kind = 'node';
      } else if (state.placing === 'score') {
        const number = state.scores.reduce((max, score) => Math.max(max, score.number), 0) + 1;
        placed = { id: `score-${Date.now()}-${number}`, number, x: clamp(x, (metrics.scoreWidth * 0.7) / state.width, 1 - (metrics.scoreWidth * 0.7) / state.width), y: clamp(y, (metrics.scoreHeight * 0.8) / state.height, 1 - (metrics.scoreHeight * 0.8) / state.height) };
        state.scores.push(placed); kind = 'score';
      } else return;
      state.proposalLimited = false;
      state.selected = `${kind}:${placed.id}`;
      state.placing = null;
      renderMapAndSummary();
      renderControls(`select-${kind}-${kind === 'node' ? placed.name : placed.id}`);
      announce(text(t.placed, { label: labelFor(placed, kind) }));
    }

    function coverageRatio() {
      if (!state.nodes.length) return 0;
      const samples = 64;
      let covered = 0;
      for (let row = 0; row < samples; row += 1) {
        const y = ((row + 0.5) / samples) * state.height;
        for (let column = 0; column < samples; column += 1) {
          const x = ((column + 0.5) / samples) * state.width;
          if (state.nodes.some((node) => {
            const dx = x - node.x * state.width;
            const dy = y - node.y * state.height;
            return dx * dx + dy * dy <= radius * radius;
          })) covered += 1;
        }
      }
      return covered / (samples * samples);
    }

    function communicationNetwork() {
      const adjacency = state.nodes.map(() => []);
      for (let i = 0; i < state.nodes.length; i += 1) {
        for (let j = i + 1; j < state.nodes.length; j += 1) {
          const a = state.nodes[i];
          const b = state.nodes[j];
          const distance = Math.hypot((a.x - b.x) * state.width, (a.y - b.y) * state.height);
          if (distance <= communicationRange) {
            adjacency[i].push(j);
            adjacency[j].push(i);
          }
        }
      }

      const visited = new Set();
      const edges = [];
      let components = 0;
      adjacency.forEach((_, start) => {
        if (visited.has(start)) return;
        components += 1;
        visited.add(start);
        const queue = [start];
        while (queue.length) {
          const current = queue.shift();
          adjacency[current].forEach((next) => {
            if (visited.has(next)) return;
            visited.add(next);
            queue.push(next);
            edges.push([state.nodes[current], state.nodes[next]]);
          });
        }
      });
      return { edges, components };
    }

    function renderMapAndSummary() {
      app.querySelector('[data-node-count]').textContent = `${state.nodes.length} / 16`;
      app.querySelector('[data-score-count]').textContent = String(state.scores.length);
      if (state.generated) {
        const spacing = radius * Math.sqrt(2);
        state.requiredNodes = Math.max(1, Math.ceil(state.width / spacing)) * Math.max(1, Math.ceil(state.height / spacing));
      }
      const area = state.width * state.height;
      const ratio = coverageRatio();
      const network = communicationNetwork();
      app.querySelector('[data-area]').textContent = state.generated ? `${format(area, language)} m²` : '—';
      app.querySelector('[data-covered]').textContent = state.generated ? `${format(area * ratio, language)} m²` : '—';
      app.querySelector('[data-percent]').textContent = state.generated ? `${format(ratio * 100, language)}%` : '—';
      const limit = app.querySelector('[data-limit]');
      limit.hidden = !state.generated || (state.requiredNodes <= 16 && state.nodes.length < 16);
      limit.textContent = limit.hidden ? '' : state.requiredNodes > 16 ? text(t.limit, { count: state.requiredNodes }) : t.addLimit;
      const warning = app.querySelector('[data-warning]');
      const warnings = [];
      if (state.generated) {
        if (!state.scores.length && state.nodes.length) warnings.push(t.noScoresWarning);
        else state.nodes.forEach((node) => {
          const closest = nearestScore(node);
          if (closest && closest.distance > radius) warnings.push(text(t.rangeWarning, { label: `Node ${node.name}`, distance: format(closest.distance, language) }));
        });
        if (ratio < 0.98) warnings.push(t.coverageWarning);
        if (state.proposalLimited) warnings.push(t.proposalLimited);
        if (network.components > 1) warnings.push(text(t.disconnectedWarning, { count: network.components }));
      }
      warning.hidden = warnings.length === 0;
      warning.textContent = warnings.join(' ');
      const actions = app.querySelector('[data-actions]');
      actions.hidden = !state.generated;
      const empty = app.querySelector('[data-empty]');
      empty.hidden = state.generated;
      if (!state.generated) return;

      const markerRadius = markerMetrics().node;
      const scoreW = markerMetrics().scoreWidth;
      const scoreH = markerMetrics().scoreHeight;
      const nodeLinks = state.nodes.map((node) => {
        const closest = nearestScore(node);
        if (!closest) return '';
        return `<line class="node-link${closest.distance > radius ? ' out-of-range' : ''}" x1="${node.x * state.width}" y1="${node.y * state.height}" x2="${closest.score.x * state.width}" y2="${closest.score.y * state.height}"/>`;
      }).join('');
      const communicationLinks = network.edges.map(([from, to]) => `<line class="communication-link" x1="${from.x * state.width}" y1="${from.y * state.height}" x2="${to.x * state.width}" y2="${to.y * state.height}"/>`).join('');
      const nodeMarks = state.nodes.map((node) => {
        const x = node.x * state.width;
        const y = node.y * state.height;
        const selected = state.selected === `node:${node.id}`;
        const label = labelFor(node, 'node');
        return `<g class="field-marker node-marker${selected ? ' is-selected' : ''}${node.beacon ? ' has-beacon' : ''}" data-kind="node" data-id="${node.id}" tabindex="0" role="button" aria-label="${label}" transform="translate(${x} ${y})"><circle class="coverage-area" r="${radius}"/><circle class="node-halo" r="${markerRadius * 1.8}"/><circle class="node-core" r="${markerRadius}"/><text class="marker-label" x="0" y="${markerRadius * 0.42}" text-anchor="middle" style="font-size:${Math.min(12, Math.max(3, markerRadius * 1.1))}px">${node.name}</text>${node.beacon ? `<circle class="beacon-ring" r="${markerRadius * 2.6}"/>` : ''}</g>`;
      }).join('');
      const scoreMarks = state.scores.map((score) => {
        const x = score.x * state.width;
        const y = score.y * state.height;
        const selected = state.selected === `score:${score.id}`;
        const label = labelFor(score, 'score');
        return `<g class="field-marker score-marker${selected ? ' is-selected' : ''}" data-kind="score" data-id="${score.id}" tabindex="0" role="button" aria-label="${label}" transform="translate(${x} ${y})"><rect class="score-halo" x="${-scoreW * 0.7}" y="${-scoreH * 0.8}" width="${scoreW * 1.4}" height="${scoreH * 1.6}" rx="${markerRadius}"/><rect class="score-box" x="${-scoreW / 2}" y="${-scoreH / 2}" width="${scoreW}" height="${scoreH}" rx="${markerRadius * 0.55}"/><text class="marker-label" x="0" y="${markerRadius * 0.4}" text-anchor="middle" style="font-size:${Math.min(10, Math.max(3, markerRadius))}px">S${score.number}</text></g>`;
      }).join('');
      const svg = `<svg class="field-map" viewBox="0 0 ${state.width} ${state.height}" role="group" tabindex="0" aria-label="${t.map}" data-field-map><defs><clipPath id="${clipId}"><rect x="0" y="0" width="${state.width}" height="${state.height}"/></clipPath></defs><rect class="field-outline" x="0" y="0" width="${state.width}" height="${state.height}"/><g clip-path="url(#${clipId})">${communicationLinks}${nodeLinks}${nodeMarks}</g>${scoreMarks}</svg>`;
      const current = mapWrap.querySelector('[data-field-map]');
      if (current) current.outerHTML = svg;
      else mapWrap.insertAdjacentHTML('beforeend', svg);
    }

    function renderControls(focusKey = null) {
      const selection = app.querySelector('[data-selection]');
      const selected = getObject(state.selected);
      const selectedKind = state.selected?.split(':')[0];
      const elements = app.querySelector('[data-elements]');
      const nodeRows = state.nodes.map((node) => `<li><button class="planner-element${state.selected === `node:${node.id}` ? ' is-current' : ''}" type="button" data-focus-key="select-node-${node.name}" data-select="node:${node.id}">${labelFor(node, 'node')}</button></li>`).join('');
      const scoreRows = state.scores.map((score) => `<li><button class="planner-element${state.selected === `score:${score.id}` ? ' is-current' : ''}" type="button" data-focus-key="select-score-${score.id}" data-select="score:${score.id}">${labelFor(score, 'score')}</button></li>`).join('');
      elements.innerHTML = nodeRows + scoreRows || `<li>${t.noNodes}</li>`;
      if (!selected) {
        selection.innerHTML = `<p>${t.none}</p>`;
      } else {
        const label = labelFor(selected, selectedKind);
        const beaconControl = selectedKind === 'node'
          ? `<label class="planner-beacon"><input type="checkbox" data-action="toggle-beacon" ${selected.beacon ? 'checked' : ''}> <span>${selected.beacon ? t.beaconEnabled : t.beacon}</span></label>`
          : '';
        selection.innerHTML = `<h5>${t.selected}: ${label}</h5>${beaconControl}<p>${t.move}</p><button class="planner-remove" type="button" data-action="remove">${t.remove}</button>`;
      }
      const addNode = app.querySelector('[data-action="add-node"]');
      addNode.disabled = state.nodes.length >= 16;
      app.querySelector('[data-action="cancel"]').hidden = !state.placing;
      if (state.placing === 'node') announce(text(t.placementNode, { name: letters.find((letter) => !state.nodes.some((node) => node.name === letter)) || '' }));
      else if (state.placing === 'score') announce(t.placementScore);
      if (focusKey) app.querySelector(`[data-focus-key="${focusKey}"]`)?.focus();
    }

    function selectedItem() { return getObject(state.selected); }
    function reposition(dx, dy) {
      const item = selectedItem();
      if (!item) return;
      const [kind] = state.selected.split(':');
      const metrics = markerMetrics();
      const marginX = kind === 'node' ? (metrics.node * 2.6) / state.width : (metrics.scoreWidth * 0.7) / state.width;
      const marginY = kind === 'node' ? (metrics.node * 2.6) / state.height : (metrics.scoreHeight * 0.8) / state.height;
      item.x = clamp(item.x + (dx * 5) / state.width, marginX, 1 - marginX);
      item.y = clamp(item.y + (dy * 5) / state.height, marginY, 1 - marginY);
      state.proposalLimited = false;
      renderMapAndSummary();
      renderControls(`select-${kind}-${kind === 'node' ? item.name : item.id}`);
      announce(text(t.moved, { label: labelFor(item, kind) }));
    }

    function moveToPointer(event) {
      if (!state.dragging) return;
      const item = getObject(state.dragging.key);
      const svg = mapWrap.querySelector('[data-field-map]');
      if (!item || !svg) return;
      const [kind] = state.dragging.key.split(':');
      const rect = svg.getBoundingClientRect();
      const metrics = markerMetrics();
      const marginX = kind === 'node' ? (metrics.node * 2.6) / state.width : (metrics.scoreWidth * 0.7) / state.width;
      const marginY = kind === 'node' ? (metrics.node * 2.6) / state.height : (metrics.scoreHeight * 0.8) / state.height;
      const x = clamp((event.clientX - rect.left) / rect.width, marginX, 1 - marginX);
      const y = clamp((event.clientY - rect.top) / rect.height, marginY, 1 - marginY);
      if (item.x === x && item.y === y) return;
      state.dragging.moved = true;
      item.x = x;
      item.y = y;
      state.proposalLimited = false;
      renderMapAndSummary();
    }

    app.addEventListener('pointerdown', (event) => {
      const marker = event.target.closest('[data-kind][data-id]');
      if (!marker || state.placing || event.button !== 0) return;
      event.preventDefault();
      state.selected = `${marker.dataset.kind}:${marker.dataset.id}`;
      state.dragging = { key: state.selected, pointerId: event.pointerId, moved: false };
      if (app.setPointerCapture) app.setPointerCapture(event.pointerId);
      renderMapAndSummary();
    });

    app.addEventListener('pointermove', (event) => {
      if (!state.dragging || event.pointerId !== state.dragging.pointerId) return;
      event.preventDefault();
      moveToPointer(event);
    });

    app.addEventListener('pointerup', (event) => {
      if (!state.dragging || event.pointerId !== state.dragging.pointerId) return;
      moveToPointer(event);
      const dragging = state.dragging;
      state.dragging = null;
      if (app.hasPointerCapture?.(event.pointerId)) app.releasePointerCapture(event.pointerId);
      const [kind] = dragging.key.split(':');
      if (dragging.moved) renderMapAndSummary();
      renderControls();
      if (dragging.moved) {
        const item = getObject(dragging.key);
        if (item) announce(text(t.moved, { label: labelFor(item, kind) }));
      }
    });

    app.addEventListener('pointercancel', (event) => {
      if (state.dragging?.pointerId === event.pointerId) { state.dragging = null; renderControls(); }
    });

    app.addEventListener('lostpointercapture', (event) => {
      if (state.dragging?.pointerId === event.pointerId) { state.dragging = null; renderControls(); }
    });

    app.addEventListener('submit', (event) => {
      if (!event.target.matches('.planner-dimensions')) return;
      event.preventDefault();
      const { width, height } = getDimensions();
      if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
        announce(t.invalid);
        widthInput.setAttribute('aria-invalid', String(!(width > 0 && Number.isFinite(width))));
        heightInput.setAttribute('aria-invalid', String(!(height > 0 && Number.isFinite(height))));
        return;
      }
      widthInput.removeAttribute('aria-invalid');
      heightInput.removeAttribute('aria-invalid');
      generateProposal(width, height);
    });

    [widthInput, heightInput].forEach((input) => input.addEventListener('input', () => {
      if (!state.generated) return;
      const { width, height } = getDimensions();
      if (Number.isFinite(width) && Number.isFinite(height) && width > 0 && height > 0) {
        state.width = width;
        state.height = height;
        state.proposalLimited = false;
        renderMapAndSummary();
      }
    }));

    app.addEventListener('click', (event) => {
      const actionButton = event.target.closest('[data-action]');
      if (actionButton) {
        const action = actionButton.dataset.action;
        if (action === 'add-node') {
          if (state.nodes.length >= 16) { announce(t.addLimit); return; }
          state.placing = 'node'; renderControls(); mapWrap.querySelector('[data-field-map]')?.focus(); return;
        }
        if (action === 'add-score') { state.placing = 'score'; renderControls(); mapWrap.querySelector('[data-field-map]')?.focus(); return; }
        if (action === 'cancel') { state.placing = null; renderControls(); announce(''); return; }
        if (action === 'regenerate') { const { width, height } = getDimensions(); if (width > 0 && height > 0) generateProposal(width, height); return; }
        if (action === 'remove') {
          const [kind, id] = state.selected.split(':');
          const collection = kind === 'node' ? state.nodes : state.scores;
          const removed = collection.find((item) => item.id === id);
          const label = labelFor(removed, kind);
          state.proposalLimited = false;
          if (kind === 'node') { state.nodes = state.nodes.filter((item) => item.id !== id); resequenceNodes(); }
          else state.scores = state.scores.filter((item) => item.id !== id);
          state.selected = null; renderMapAndSummary(); renderControls(); announce(text(t.removed, { label })); return;
        }
      }

      const placementMap = event.target.closest('[data-field-map]');
      if (state.placing && placementMap) {
        const rect = placementMap.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
        const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
        placeAt(x, y);
        return;
      }

      const selectButton = event.target.closest('[data-select]');
      if (selectButton) {
        state.selected = selectButton.dataset.select;
        renderMapAndSummary(); renderControls(selectButton.dataset.focusKey); return;
      }

      const marker = event.target.closest('[data-kind][data-id]');
      if (marker) {
        state.selected = `${marker.dataset.kind}:${marker.dataset.id}`;
        renderMapAndSummary(); renderControls(`select-${marker.dataset.kind}-${marker.dataset.kind === 'node' ? getObject(state.selected).name : marker.dataset.id}`); return;
      }

      const svg = event.target.closest('[data-field-map]');
      if (!svg) return;
      if (!state.placing) { state.selected = null; renderMapAndSummary(); renderControls(); return; }
      const rect = svg.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
      placeAt(x, y);
    });

    app.addEventListener('change', (event) => {
      if (!event.target.matches('[data-action="toggle-beacon"]')) return;
      const node = selectedItem();
      if (!node || !state.selected.startsWith('node:')) return;
      node.beacon = event.target.checked;
      renderMapAndSummary();
      const label = labelFor(node, 'node');
      const heading = app.querySelector('[data-selection] h5');
      const nodeButton = app.querySelector(`[data-select="node:${node.id}"]`);
      const beaconText = app.querySelector('.planner-beacon span');
      if (heading) heading.textContent = `${t.selected}: ${label}`;
      if (nodeButton) nodeButton.textContent = label;
      if (beaconText) beaconText.textContent = node.beacon ? t.beaconEnabled : t.beacon;
      announce(node.beacon ? t.beaconEnabled : t.beaconDisabled);
    });

    app.addEventListener('keydown', (event) => {
      const selectButton = event.target.closest('[data-select]');
      if (selectButton && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
        event.preventDefault();
        state.selected = selectButton.dataset.select;
        const delta = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[event.key];
        reposition(delta[0], delta[1]);
        return;
      }
      if (event.target.matches('[data-field-map]') && state.placing && ['Enter', ' '].includes(event.key)) {
        event.preventDefault();
        placeAt(0.5, 0.5);
        return;
      }
      const marker = event.target.closest('[data-kind][data-id]');
      if (marker && ['Enter', ' '].includes(event.key)) {
        event.preventDefault();
        state.selected = `${marker.dataset.kind}:${marker.dataset.id}`;
        renderMapAndSummary();
        const item = selectedItem();
        renderControls(`select-${marker.dataset.kind}-${marker.dataset.kind === 'node' ? item.name : item.id}`);
        return;
      }
      if (marker && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
        event.preventDefault();
        state.selected = `${marker.dataset.kind}:${marker.dataset.id}`;
        const delta = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[event.key];
        reposition(delta[0], delta[1]);
      }
    });

    renderControls();
  });
})();
