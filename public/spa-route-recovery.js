(function () {
  var location = window.location;
  var params = new URLSearchParams(location.search);
  var route = params.get("__tecuiyo_route");

  // Sólo el sobre creado por 404.html activa la recuperación. Las consultas
  // habituales (incluidos p/q) conservan su significado original.
  if (location.pathname !== "/" || params.size !== 1 || !route) return;
  if (!route.startsWith("/") || route.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(route)) return;

  try {
    var target = new URL(route, location.origin);
    if (target.origin !== location.origin) return;
    window.history.replaceState(
      window.history.state,
      "",
      target.pathname + target.search + target.hash
    );
  } catch (_error) {
    // Un marcador inválido no cambia la URL ni interrumpe el arranque de React.
  }
})();
