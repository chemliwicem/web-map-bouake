(function () {
    var routes = [
        { id: '1', label: 'Corridor Sud → Dar-es-Salem', color: 'rgba(22,57,212,1)' },
        { id: '6', label: 'Dar-es-Salem → Koko', color: 'rgba(180,227,115,1)' },
        { id: '3', label: 'Dar-es-Salem → UTB', color: 'rgba(233,149,126,1)' },
        { id: '2', label: 'Dar-es-Salem → Corridor Sud', color: 'rgba(110,38,204,1)' },
        { id: '9', label: 'Koko → Marché d’Oignons', color: 'rgba(121,195,216,1)' },
        { id: '5', label: 'Koko → Corridor Sud', color: 'rgba(225,101,149,1)' },
        { id: '8', label: 'Koko → UTB', color: 'rgba(213,33,210,1)' },
        { id: '7', label: 'UTB → Koko', color: 'rgba(49,202,143,1)' },
        { id: '4', label: 'UTB → Dar-es-Salem', color: 'rgba(235,209,94,1)' }
    ];

    var activeRouteIds = new Set();

    function closePopupIfPossible() {
        var popup = document.getElementById('popup');
        if (popup) popup.style.display = 'none';
        if (typeof collection !== 'undefined' && collection.clear) collection.clear();
    }

    function setupHomeScreen() {
        var home = document.getElementById('home-screen');
        var button = document.getElementById('enter-map');
        if (!home || !button) return;

        button.addEventListener('click', function () {
            home.classList.add('hidden');
            setTimeout(function () {
                home.style.display = 'none';
                if (typeof map !== 'undefined') map.updateSize();
            }, 460);
        });
    }

    function setupRoutes() {
        if (typeof lyr_Lignesdeparcours_18 === 'undefined') return;

        var originalStyle = lyr_Lignesdeparcours_18.getStyle();
        lyr_Lignesdeparcours_18.setVisible(true);
        lyr_Lignesdeparcours_18.set('interactive', true);
        lyr_Lignesdeparcours_18.setStyle(function (feature, resolution) {
            var id = String(feature.get('ID'));
            if (!activeRouteIds.has(id)) return null;
            return typeof originalStyle === 'function' ? originalStyle(feature, resolution) : originalStyle;
        });
        lyr_Lignesdeparcours_18.changed();

        if (typeof doHover !== 'undefined') doHover = false;
        if (typeof preDoHover !== 'undefined') preDoHover = false;
    }

    function setupLegend() {
        var list = document.getElementById('route-list');
        if (!list) return;

        routes.forEach(function (route) {
            var label = document.createElement('label');
            label.className = 'route-item';

            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = route.id;
            checkbox.checked = false;

            var swatch = document.createElement('span');
            swatch.className = 'route-swatch';
            swatch.style.background = route.color;

            var text = document.createElement('span');
            text.className = 'route-label';
            text.textContent = route.label;

            checkbox.addEventListener('change', function () {
                if (checkbox.checked) activeRouteIds.add(route.id);
                else activeRouteIds.delete(route.id);
                closePopupIfPossible();
                if (typeof lyr_Lignesdeparcours_18 !== 'undefined') lyr_Lignesdeparcours_18.changed();
            });

            label.appendChild(checkbox);
            label.appendChild(swatch);
            label.appendChild(text);
            list.appendChild(label);
        });
    }

    function patchFeaturePicking() {
        if (typeof map === 'undefined' || typeof lyr_Lignesdeparcours_18 === 'undefined') return;

        map.on('singleclick', function (evt) {
            var visibleRouteFound = false;
            map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
                if (layer === lyr_Lignesdeparcours_18 && activeRouteIds.has(String(feature.get('ID')))) {
                    visibleRouteFound = true;
                }
            }, {
                layerFilter: function (layer) {
                    return layer === lyr_Lignesdeparcours_18;
                }
            });

            if (!visibleRouteFound) closePopupIfPossible();
        });
    }

    window.addEventListener('load', function () {
        setupHomeScreen();
        setupRoutes();
        setupLegend();
        patchFeaturePicking();
    });
})();