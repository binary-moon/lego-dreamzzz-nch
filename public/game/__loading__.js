pc.script.createLoadingScreen(function (app) {
var showSplash = function () {
    // splash wrapper
    var wrapper = document.createElement('div');
    wrapper.id = 'application-splash-wrapper';
    document.body.appendChild(wrapper);

    // splash
    var splash = document.createElement('div');
    splash.id = 'application-splash';
    wrapper.appendChild(splash);
    splash.style.display = 'none';

    // Add background image
    var loadBackground = document.createElement('div');
    loadBackground.id = 'loadBackground';
    splash.appendChild(loadBackground);

    // Add logo
    var logo = document.createElement('img');
    logo.src = 'images/Header_Logo.png';
    logo.id = 'logo';
    logo.alt = 'Logo';
    loadBackground.appendChild(logo);

    // Add load tip
    var loadTip = document.createElement('img');
    loadTip.src = 'images/Load_Tip.png';
    loadTip.id = 'loadTip';
    loadTip.alt = 'Loading Tip';
    loadBackground.appendChild(loadTip);

    logo.onload = function () {
        splash.style.display = 'block';
    };
    
    // Add spinner
    var spinner = document.createElement('img');
    spinner.src = '//cdn.8thwall.com/web/img/loading/v2/load-grad.png';
    spinner.id = 'loadImage2';
    spinner.className = 'spin';
    splash.appendChild(spinner);

    // Add the bottom logo
    var poweredByLogo = document.createElement('img');
    poweredByLogo.src = '//cdn.8thwall.com/web/img/almostthere/v2/poweredby-horiz-white-4.svg';
    poweredByLogo.className = 'poweredby-img';
    splash.appendChild(poweredByLogo);

    };

    var hideSplash = function () {
        var splash = document.getElementById('application-splash-wrapper');
        splash.parentElement.removeChild(splash);
    };

    var setProgress = function (value) {
        var bar = document.getElementById('progress-bar');
        if (bar) {
            value = Math.min(1, Math.max(0, value));
            bar.style.width = value * 100 + '%';
        }
    };

var createCss = function () {
    var css = [
        'body {',
        '    background-color: #000000;',
        '}',
        '',
        '#application-splash-wrapper {',
        '    width: 100vw;',
        '    height: 100vh;',
        '    position: fixed;',
        '    top: 0;',
        '    left: 0;',
        '}',
        '',
        '#application-splash {',
        '    justify-content: center;',
        '    align-items: center;',
        '    width: 100%;',
        '    height: 100%;',
        '    position: absolute;',
        '    top: 0;',
        '    left: 0;',
        '}',
        '',
        '#loadBackground {',
        '    background-image: url(\'images/Background_Pattern.png\');',
        '    background-size: cover;',
        '    background-position: center;',
        '    background-repeat: no-repeat;',
        '    width: 100%;',
        '    height: 100%;',
        '    position: absolute;',
        '    top: 0;',
        '    left: 0;',
        '    z-index: -1;',
        '}',
        '',
        '#logo {',
        '    position: absolute;',
        '    top: 20px;',
        '    left: 50%;',
        '    transform: translateX(-50%);',
        '    width: 190px;',
        '    height: auto;',
        '    z-index: 1;',
        '}',
        '',
        '#loadTip {',
        '    position: absolute;',
        '    top: calc(20px + 100px);',
        '    left: 50%;',
        '    transform: translateX(-50%);',
        '    width: 300px;',
        '    z-index: 1;',
        '}',
        '',
        '#progress-bar-container {',
        '    display: flex;',
        '    justify-content: center;',
        '    align-items: center;',
        '    width: 80%;',
        '    max-width: 400px;',
        '    height: 10px;',
        '    background-color: #1d292c;',
        '    position: relative;',
        '    margin-top: 20px;',
        '}',
        '',
        '#progress-bar {',
        '    width: 0%;',
        '    height: 100%;',
        '    background-color: #f60;',
        '}',
        '',
        '#loadImage2 {',
        '    position: absolute;',
        '    top: 50%;',
        '    left: 50%;',
        '    transform: translate(-50%, -50%);',
        '    height: 5em;',
        '    width: 5em;',
        '}',
        '',
        '.spin {',
        '    animation: spin 1.1s cubic-bezier(0.785, 0.135, 0.150, 0.860) infinite both;',
        '}',
        '',
        '@keyframes spin {',
        '    0% { transform: translate(-50%, -50%) rotate(0deg); }',
        '    100% { transform: translate(-50%, -50%) rotate(360deg); }',
        '}',
        '',
        '.poweredby-img {',
        '    width: 35vw;',
        '    max-width: 200px;',
        '    position: fixed;',
        '    bottom: 2%;',
        '    left: 50%;',
        '    transform: translateX(-50%);',
        '}',
        '',
        '@media (max-width: 480px) {',
        '    #logo {',
        '        width: 150px;',
        '    }',
        '    #progress-bar-container {',
        '        width: 90%;',
        '    }',
        '}'
    ].join('\n');

    var style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.head.appendChild(style);
};

    createCss();
    showSplash();

    app.on('preload:end', function () {
        app.off('preload:progress');
    });
    app.on('preload:progress', setProgress);
    app.on('start', hideSplash);
});