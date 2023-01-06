import Blockly from 'blockly';

var workspace = Blockly.inject('workspace', { toolbox: document.getElementById('toolbox-categories') });

const onresize = function () { Blockly.svgResize(workspace); };
window.addEventListener('resize', onresize, false);
onresize();

