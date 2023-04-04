import Blockly from 'blockly';
import {javascriptGenerator} from 'blockly/javascript';

Blockly.Blocks['get_request'] = {
    init: function () {
        this.appendValueInput("Target")
            .setCheck("String")
            .appendField("URL");
        this.setOutput(true, "String");
        this.setColour(345);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['post_request'] = {
    init: function () {
        this.appendValueInput("Target")
            .setCheck("String")
            .appendField("URL");
        this.appendValueInput("Payload")
            .setCheck("String")
            .appendField("Payload");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(345);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascriptGenerator['get_request'] = function (block) {
    var value_target = Blockly.JavaScript.valueToCode(block, 'Target', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator['post_request'] = function (block) {
    var value_target = Blockly.JavaScript.valueToCode(block, 'Target', Blockly.JavaScript.ORDER_ATOMIC);
    var value_payload = Blockly.JavaScript.valueToCode(block, 'Payload', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};