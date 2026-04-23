(function(){
  if (typeof mermaid !== 'undefined' && mermaid && typeof mermaid.initialize === 'function') {
    mermaid.initialize({ startOnLoad: true, theme: 'neutral', securityLevel: 'loose', flowchart: { curve: 'basis' } });
  } else {
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.mermaid').forEach(function(el){
        var src = (el.textContent || '').trim();
        el.innerHTML = '<div style="padding:12px;border:1px dashed #97a8c2;border-radius:8px;color:#52627a;font-size:.9rem;">Mermaid diagram (renderer not available — source retained below for review).</div><pre style="margin-top:6px">' + src.replace(/[<>&]/g,function(c){return {"<":"&lt;",">":"&gt;","&":"&amp;"}[c];}) + '</pre>';
      });
    });
  }
})();
