var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './data/data.json'
  })

  var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('bx'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './data/data-1.json'
  })

  var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('bz'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './data/data-2.json'
  })