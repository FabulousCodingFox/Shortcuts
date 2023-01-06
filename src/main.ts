import Blockly from 'blockly';

Blockly.Themes.Modern = Blockly.Theme.defineTheme('halloween', {
    'base': Blockly.Themes.Classic,
    'componentStyles': {
        'workspaceBackgroundColour': '#fff',
        'toolboxBackgroundColour': '#ccc',
        'toolboxForegroundColour': '#fff',
        'flyoutBackgroundColour': '#ddd',
        'flyoutForegroundColour': '#ccc',
        'flyoutOpacity': 1,
        'scrollbarColour': '#333',
        'insertionMarkerColour': '#fff',
        'insertionMarkerOpacity': 0.3,
        'scrollbarOpacity': 0.4,
        'cursorColour': '#d0d0d0',
        'blackBackground': '#333'
      }
});



var workspace = Blockly.inject('workspace', {
    toolbox: document.getElementById('toolbox-categories'),
    theme: Blockly.Themes.Modern
});

const onresize = function () { Blockly.svgResize(workspace); };
window.addEventListener('resize', onresize, false);
onresize();