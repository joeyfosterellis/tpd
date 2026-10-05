// Every run of Devanagari on the page is wrapped in <span class="dev">, so it can be hot pink,
// wherever it appears: static text, the word panel, toasts, result cards.
(function () {
  const RE = /([ऀ-ॿ][ऀ-ॿ\s।,.?!:·\-–]*[ऀ-ॿ]|[ऀ-ॿ])/;
  function wrap(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        const p = n.parentElement;
        if (!p || p.closest('.dev, script, style, input, textarea, title')) return NodeFilter.FILTER_REJECT;
        return RE.test(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      },
    });
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      const parts = node.nodeValue.split(RE);
      const frag = document.createDocumentFragment();
      parts.forEach((part, i) => {
        if (!part) return;
        if (i % 2 === 1) { const s = document.createElement('span'); s.className = 'dev'; s.textContent = part; frag.appendChild(s); }
        else frag.appendChild(document.createTextNode(part));
      });
      node.parentNode.replaceChild(frag, node);
    }
  }
  function start() {
    wrap(document.body);
    new MutationObserver(muts => {
      for (const m of muts) {
        if (m.type === 'characterData') { if (m.target.parentElement) wrap(m.target.parentElement); continue; }
        m.addedNodes.forEach(n => {
          if (n.nodeType === 1) wrap(n);
          else if (n.nodeType === 3 && n.parentElement) wrap(n.parentElement);
        });
      }
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
