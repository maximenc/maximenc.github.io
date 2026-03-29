/* Shared script — retro ASCII spinner → working-on mini-windows */
(function () {
    var el = document.getElementById('nav-ascii');
    if (!el) return;

    /* ── Bell curve (Extreme Risks) ── */
    var svgBell =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116 48"' +
        ' width="94" height="38" style="display:block;margin:0 auto">' +
        '<defs>' +
        '<pattern id="hp" patternUnits="userSpaceOnUse" width="4" height="4">' +
        '<line x1="0" y1="4" x2="4" y2="0" stroke="#cc1111" stroke-width="0.9" opacity="0.85"/>' +
        '</pattern>' +
        '<clipPath id="lc"><rect x="0" y="0" width="35" height="48"/></clipPath>' +
        '</defs>' +
        '<path d="M2,43 C9,43 19,39 35,29 C49,19 59,10 70,4' +
        ' C82,3 92,14 101,27 C109,38 113,42 114,43 Z"' +
        ' fill="#2a3f6f" opacity="0.07"/>' +
        '<path d="M2,43 C9,43 19,39 35,29 C49,19 59,10 70,4' +
        ' C82,3 92,14 101,27 C109,38 113,42 114,43 Z"' +
        ' fill="url(#hp)" clip-path="url(#lc)"/>' +
        '<line x1="2" y1="43" x2="114" y2="43" stroke="#888" stroke-width="1"/>' +
        '<path d="M2,43 C9,43 19,39 35,29"' +
        ' fill="none" stroke="#cc1111" stroke-width="2" stroke-linecap="round"/>' +
        '<path d="M35,29 C49,19 59,10 70,4 C82,3 92,14 101,27 C109,38 113,42 114,43"' +
        ' fill="none" stroke="#2a3f6f" stroke-width="2" stroke-linecap="round"/>' +
        '<line x1="35" y1="16" x2="35" y2="43"' +
        ' stroke="#999" stroke-width="0.8" stroke-dasharray="2,2"/>' +
        '</svg>';

    /* ── 3D bivariate Gaussian wireframe (Dependence) ── */
    var svg3D =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 44 112 76" width="94" height="64" style="display:block;margin:0 auto">' +
        '<path d="M6.6,91.9 L12.9,88.4 L19.2,84.5 L25.5,80.5 L31.8,76.9 L38.1,74.2 L44.4,72.0 L50.7,69.6 L57.0,66.9 L107.4,91.9 L101.1,88.4 L94.8,84.5 L88.5,80.5 L82.2,76.9 L75.9,74.2 L69.6,72.0 L63.3,69.6 L57.0,66.9 L107.4,91.9 L101.1,94.6 L94.8,97.0 L88.5,99.2 L82.2,101.9 L75.9,105.4 L69.6,109.5 L63.3,113.3 L57.0,116.8 L6.6,91.9 L12.9,94.6 L19.2,97.0 L25.5,99.2 L31.8,101.9 L38.1,105.4 L44.4,109.5 L50.7,113.3 L57.0,116.8 Z" fill="#b8d8ef" fill-opacity="0.15" stroke="none"/>' +
        '<path d="M107.4,91.9 L101.1,88.4 L94.8,84.5 L88.5,80.5 L82.2,76.9 L75.9,74.2 L69.6,72.0 L63.3,69.6 L57.0,66.9" fill="none" stroke="#3a7ab8" stroke-width="0.65" stroke-linejoin="round" opacity="0.78"/>' +
        '<path d="M6.6,91.9 L12.9,88.4 L19.2,84.5 L25.5,80.5 L31.8,76.9 L38.1,74.2 L44.4,72.0 L50.7,69.6 L57.0,66.9" fill="none" stroke="#3a7ab8" stroke-width="0.65" stroke-linejoin="round" opacity="0.78"/>' +
        '<path d="M101.1,94.6 L94.8,90.2 L88.5,84.4 L82.2,78.2 L75.9,73.5 L69.6,71.9 L63.3,72.0 L57.0,71.5 L50.7,69.6" fill="none" stroke="#3a7ab8" stroke-width="0.65" stroke-linejoin="round" opacity="0.78"/>' +
        '<path d="M12.9,94.6 L19.2,90.2 L25.5,84.4 L31.8,78.2 L38.1,73.5 L44.4,71.9 L50.7,72.0 L57.0,71.5 L63.3,69.6" fill="none" stroke="#3a7ab8" stroke-width="0.65" stroke-linejoin="round" opacity="0.78"/>' +
        '<path d="M94.8,97.0 L88.5,90.7 L82.2,81.1 L75.9,70.2 L69.6,63.4 L63.3,63.9 L57.0,68.6 L50.7,72.0 L44.4,72.0" fill="none" stroke="#3a7ab8" stroke-width="0.65" stroke-linejoin="round" opacity="0.78"/>' +
        '<path d="M19.2,97.0 L25.5,90.7 L31.8,81.1 L38.1,70.2 L44.4,63.4 L50.7,63.9 L57.0,68.6 L63.3,72.0 L69.6,72.0" fill="none" stroke="#3a7ab8" stroke-width="0.65" stroke-linejoin="round" opacity="0.78"/>' +
        '<path d="M88.5,99.2 L82.2,90.6 L75.9,76.4 L69.6,59.9 L63.3,50.5 L57.0,53.7 L50.7,63.9 L44.4,71.9 L38.1,74.2" fill="none" stroke="#3a7ab8" stroke-width="0.65" stroke-linejoin="round" opacity="0.78"/>' +
        '<path d="M25.5,99.2 L31.8,90.6 L38.1,76.4 L44.4,59.9 L50.7,50.5 L57.0,53.7 L63.3,63.9 L69.6,71.9 L75.9,74.2" fill="none" stroke="#3a7ab8" stroke-width="0.65" stroke-linejoin="round" opacity="0.78"/>' +
        '<path d="M82.2,101.9 L75.9,92.3 L69.6,75.8 L63.3,56.7 L57.0,46.0 L50.7,50.5 L44.4,63.4 L38.1,73.5 L31.8,76.9" fill="none" stroke="#3a7ab8" stroke-width="0.65" stroke-linejoin="round" opacity="0.78"/>' +
        '<path d="M31.8,101.9 L38.1,92.3 L44.4,75.8 L50.7,56.7 L57.0,46.0 L63.3,50.5 L69.6,63.4 L75.9,73.5 L82.2,76.9" fill="none" stroke="#3a7ab8" stroke-width="0.65" stroke-linejoin="round" opacity="0.78"/>' +
        '<path d="M75.9,105.4 L69.6,96.9 L63.3,82.7 L57.0,66.1 L50.7,56.7 L44.4,59.9 L38.1,70.2 L31.8,78.2 L25.5,80.5" fill="none" stroke="#3a7ab8" stroke-width="0.65" stroke-linejoin="round" opacity="0.78"/>' +
        '<path d="M38.1,105.4 L44.4,96.9 L50.7,82.7 L57.0,66.1 L63.3,56.7 L69.6,59.9 L75.9,70.2 L82.2,78.2 L88.5,80.5" fill="none" stroke="#3a7ab8" stroke-width="0.65" stroke-linejoin="round" opacity="0.78"/>' +
        '<path d="M69.6,109.5 L63.3,103.2 L57.0,93.6 L50.7,82.7 L44.4,75.8 L38.1,76.4 L31.8,81.1 L25.5,84.4 L19.2,84.5" fill="none" stroke="#3a7ab8" stroke-width="0.65" stroke-linejoin="round" opacity="0.78"/>' +
        '<path d="M44.4,109.5 L50.7,103.2 L57.0,93.6 L63.3,82.7 L69.6,75.8 L75.9,76.4 L82.2,81.1 L88.5,84.4 L94.8,84.5" fill="none" stroke="#3a7ab8" stroke-width="0.65" stroke-linejoin="round" opacity="0.78"/>' +
        '<path d="M63.3,113.3 L57.0,108.9 L50.7,103.2 L44.4,96.9 L38.1,92.3 L31.8,90.6 L25.5,90.7 L19.2,90.2 L12.9,88.4" fill="none" stroke="#3a7ab8" stroke-width="0.65" stroke-linejoin="round" opacity="0.78"/>' +
        '<path d="M50.7,113.3 L57.0,108.9 L63.3,103.2 L69.6,96.9 L75.9,92.3 L82.2,90.6 L88.5,90.7 L94.8,90.2 L101.1,88.4" fill="none" stroke="#3a7ab8" stroke-width="0.65" stroke-linejoin="round" opacity="0.78"/>' +
        '<path d="M57.0,116.8 L50.7,113.3 L44.4,109.5 L38.1,105.4 L31.8,101.9 L25.5,99.2 L19.2,97.0 L12.9,94.6 L6.6,91.9" fill="none" stroke="#3a7ab8" stroke-width="0.65" stroke-linejoin="round" opacity="0.78"/>' +
        '<path d="M57.0,116.8 L63.3,113.3 L69.6,109.5 L75.9,105.4 L82.2,101.9 L88.5,99.2 L94.8,97.0 L101.1,94.6 L107.4,91.9" fill="none" stroke="#3a7ab8" stroke-width="0.65" stroke-linejoin="round" opacity="0.78"/>' +
        '</svg>';

    /* ── Stock crash price chart (Financial Markets) ── */
    var svgCrash =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116 48" width="94" height="38" style="display:block;margin:0 auto">' +
        '<defs><pattern id="cp" patternUnits="userSpaceOnUse" width="4" height="4">' +
        '<line x1="0" y1="4" x2="4" y2="0" stroke="#cc1111" stroke-width="0.9" opacity="0.85"/>' +
        '</pattern></defs>' +
        '<path d="M3,43 L3,35 C15,32 30,22 45,14 C52,11 57,7 61,9 C67,13 74,26 92,40 L92,43 Z" fill="#2a3f6f" opacity="0.07"/>' +
        '<path d="M61,43 L61,9 C67,13 74,26 92,40 L92,43 Z" fill="url(#cp)"/>' +
        '<line x1="2" y1="43" x2="114" y2="43" stroke="#888" stroke-width="1"/>' +
        '<path d="M3,35 L4,32 L6,36 L8,31 L10,34 L12,29 L13,32 L15,27 L16,31 L18,26 L19,29 L21,24 L22,28 L23,32 L25,27 L26,22 L28,26 L29,20 L31,24 L32,18 L34,22 L35,17 L37,21 L38,15 L39,19 L40,14 L41,18 L42,13 L43,17 L44,11 L46,15 L47,9 L48,13 L49,8 L50,12 L51,8 L52,11 L53,7 L55,11 L56,8 L57,12 L58,9 L60,12 L61,9" fill="none" stroke="#2a3f6f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<path d="M61,9 L63,15 L61,10 L64,20 L62,15 L67,27 L65,21 L70,32 L68,27 L73,37 L75,33 L80,39 L82,36 L87,40 L89,37 L92,40" fill="none" stroke="#cc1111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<line x1="61" y1="3" x2="61" y2="43" stroke="#999" stroke-width="0.8" stroke-dasharray="2,2"/>' +
        '</svg>';

    /* ── Robot (AI / LLM) ── */
    var svgRobot =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 80" width="54" height="46" style="display:block;margin:0 auto">' +
        '<line x1="47" y1="7" x2="47" y2="13" stroke="#2a3f6f" stroke-width="1.2"/>' +
        '<circle cx="47" cy="5" r="2.5" fill="#b8c4d8" stroke="#2a3f6f" stroke-width="1"/>' +
        '<rect x="30" y="13" width="34" height="22" rx="5" fill="#e0e6f0" stroke="#2a3f6f" stroke-width="1.5"/>' +
        '<circle cx="40" cy="22" r="5" fill="#b8c4d8" stroke="#2a3f6f" stroke-width="1"/>' +
        '<circle cx="40" cy="22" r="2.5" fill="#5a7098"/>' +
        '<circle cx="54" cy="22" r="5" fill="#b8c4d8" stroke="#2a3f6f" stroke-width="1"/>' +
        '<circle cx="54" cy="22" r="2.5" fill="#5a7098"/>' +
        '<path d="M40,29 Q47,33 54,29" fill="none" stroke="#2a3f6f" stroke-width="1.2" stroke-linecap="round"/>' +
        '<rect x="42" y="35" width="10" height="5" rx="1" fill="#e0e6f0" stroke="#2a3f6f" stroke-width="1"/>' +
        '<rect x="25" y="40" width="44" height="26" rx="4" fill="#e0e6f0" stroke="#2a3f6f" stroke-width="1.5"/>' +
        '<rect x="31" y="45" width="32" height="11" rx="2" fill="#b8c4d8" stroke="#2a3f6f" stroke-width="1"/>' +
        '<circle cx="21" cy="46" r="5" fill="#b8c4d8" stroke="#2a3f6f" stroke-width="1"/>' +
        '<circle cx="73" cy="46" r="5" fill="#b8c4d8" stroke="#2a3f6f" stroke-width="1"/>' +
        '<rect x="17" y="51" width="7" height="12" rx="2" fill="#e0e6f0" stroke="#2a3f6f" stroke-width="1"/>' +
        '<rect x="70" y="51" width="7" height="12" rx="2" fill="#e0e6f0" stroke="#2a3f6f" stroke-width="1"/>' +
        '<circle cx="20.5" cy="64" r="3.5" fill="#b8c4d8" stroke="#2a3f6f" stroke-width="1"/>' +
        '<circle cx="73.5" cy="64" r="3.5" fill="#b8c4d8" stroke="#2a3f6f" stroke-width="1"/>' +
        '<rect x="17" y="67" width="7" height="8" rx="2" fill="#e0e6f0" stroke="#2a3f6f" stroke-width="1"/>' +
        '<rect x="70" y="67" width="7" height="8" rx="2" fill="#e0e6f0" stroke="#2a3f6f" stroke-width="1"/>' +
        '<path d="M14,75 L28,75 L28,78 L24,78 L24,76 L18,76 L18,78 L14,78 Z" fill="#b8c4d8" stroke="#2a3f6f" stroke-width="1" stroke-linejoin="round"/>' +
        '<path d="M66,75 L80,75 L80,78 L76,78 L76,76 L70,76 L70,78 L66,78 Z" fill="#b8c4d8" stroke="#2a3f6f" stroke-width="1" stroke-linejoin="round"/>' +
        '</svg>';

    var wins = [
        { title: 'Extreme Risks',     svg: svgBell  },
        { title: 'Dependence',        svg: svg3D    },
        { title: 'Financial Markets', svg: svgCrash },
        { title: 'AI / LLM',          svg: svgRobot }
    ];

    function makeWinEl(w) {
        var d = document.createElement('div');
        d.className = 'mini-win';
        d.innerHTML =
            '<div class="mini-win-title">' + w.title +
            '<span class="mini-win-btn">&#xD7;</span></div>' +
            '<div class="mini-win-body">' + w.svg + '</div>';
        return d;
    }

    /* ── Static pages: all at once, no animation ── */
    if (!el.hasAttribute('data-animate')) {
        el.classList.add('ascii-fixed');
        var lbl = document.createElement('div');
        lbl.className = 'nav-working-label';
        lbl.textContent = 'Working on ...';
        el.appendChild(lbl);
        wins.forEach(function(w) { el.appendChild(makeWinEl(w)); });
        return;
    }

    /* ── Home page: spinner → windows appear one by one ── */
    var spin  = ['◐', '◓', '◑', '◒'];
    var total = 24;
    var count = 0;

    el.textContent = spin[0];

    var t = setInterval(function () {
        count++;
        if (count >= total) {
            clearInterval(t);
            el.classList.add('ascii-fixed');

            var lbl = document.createElement('div');
            lbl.className = 'nav-working-label';
            lbl.textContent = 'Working on ...';
            el.appendChild(lbl);

            var delay = 0;
            wins.forEach(function(w) {
                setTimeout(function() {
                    var win = makeWinEl(w);
                    win.classList.add('mini-win-hidden');
                    el.appendChild(win);
                    void win.offsetWidth; /* force reflow */
                    win.classList.remove('mini-win-hidden');
                }, delay);
                delay += 380;
            });
        } else {
            el.textContent = spin[count % 4];
        }
    }, 110);
})();
