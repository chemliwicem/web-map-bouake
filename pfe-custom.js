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

        var legend = document.getElementById('route-legend');
        var toggle = document.getElementById('legend-toggle');
        if (legend && toggle) {
            toggle.addEventListener('click', function () {
                legend.classList.toggle('collapsed');
                toggle.textContent = legend.classList.contains('collapsed') ? '+' : '−';
                toggle.setAttribute('aria-label', legend.classList.contains('collapsed') ? 'Afficher la légende' : 'Réduire la légende');
            });
        }
    }

    function getInterchangeLayers() {
        if (typeof group_group1 !== 'undefined') return [group_group1];

        return [
            typeof lyr_Limite_demprise_du_projet_1 !== 'undefined' ? lyr_Limite_demprise_du_projet_1 : null,
            typeof lyr_Chausse_projete_au_niveau_de_sol_2 !== 'undefined' ? lyr_Chausse_projete_au_niveau_de_sol_2 : null,
            typeof lyr_Trottoire_projet_3 !== 'undefined' ? lyr_Trottoire_projet_3 : null,
            typeof lyr_CHAUSSE_DENIV1_4 !== 'undefined' ? lyr_CHAUSSE_DENIV1_4 : null,
            typeof lyr_CHAUSSE_DENIV2_5 !== 'undefined' ? lyr_CHAUSSE_DENIV2_5 : null,
            typeof lyr_CHAUSSE_DENIV3_6 !== 'undefined' ? lyr_CHAUSSE_DENIV3_6 : null,
            typeof lyr_Chausse_projete_dnivele_7 !== 'undefined' ? lyr_Chausse_projete_dnivele_7 : null,
            typeof lyr_Zone_prive_8 !== 'undefined' ? lyr_Zone_prive_8 : null,
            typeof lyr_Zone_verte_projete_9 !== 'undefined' ? lyr_Zone_verte_projete_9 : null,
            typeof lyr_PEINTURE_HACHURE_10 !== 'undefined' ? lyr_PEINTURE_HACHURE_10 : null,
            typeof lyr_PEINTURE_LIGNE_ACCELER_11 !== 'undefined' ? lyr_PEINTURE_LIGNE_ACCELER_11 : null,
            typeof lyr_PEINTURE_LIGNE_AXE_12 !== 'undefined' ? lyr_PEINTURE_LIGNE_AXE_12 : null,
            typeof lyr_PEINTURE_LIGNE_CONTINU_13 !== 'undefined' ? lyr_PEINTURE_LIGNE_CONTINU_13 : null,
            typeof lyr_PEINTURE_LIGNE_PIETON_14 !== 'undefined' ? lyr_PEINTURE_LIGNE_PIETON_14 : null,
            typeof lyr_PEINTURE_LIGNE_RIVE_15 !== 'undefined' ? lyr_PEINTURE_LIGNE_RIVE_15 : null,
            typeof lyr_PEINTURE_LIGNE_STATIONNEMENT_16 !== 'undefined' ? lyr_PEINTURE_LIGNE_STATIONNEMENT_16 : null,
            typeof lyr_PEINTURE_LIGNE_ZEBRAGE_17 !== 'undefined' ? lyr_PEINTURE_LIGNE_ZEBRAGE_17 : null
        ].filter(Boolean);
    }

    function setupInterchangeToggle() {
        if (typeof map === 'undefined') return;

        var layers = getInterchangeLayers();
        if (!layers.length) return;

        var container = document.getElementById('bottom-left-container') || map.getTargetElement();
        var wrapper = document.createElement('div');
        wrapper.className = 'interchange-toggle ol-unselectable ol-control';

        var label = document.createElement('label');
        label.className = 'interchange-toggle-label';

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = true;
        checkbox.setAttribute('aria-label', "Afficher ou masquer l'am\u00e9nagement de l'\u00e9changeur");

        var text = document.createElement('span');
        text.textContent = "Afficher l'\u00e9changeur";

        function setInterchangeVisibility(visible) {
            layers.forEach(function (layer) {
                layer.setVisible(visible);
            });
            wrapper.classList.toggle('is-hidden', !visible);
            text.textContent = visible ? "Afficher l'\u00e9changeur" : "\u00c9changeur masqu\u00e9";
            closePopupIfPossible();
        }

        checkbox.addEventListener('change', function () {
            setInterchangeVisibility(checkbox.checked);
        });

        label.appendChild(checkbox);
        label.appendChild(text);
        wrapper.appendChild(label);
        container.appendChild(wrapper);
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
        setupInterchangeToggle();
        patchFeaturePicking();
    });
})();
