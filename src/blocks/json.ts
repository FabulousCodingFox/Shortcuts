import Blockly from 'blockly';

Blockly.Blocks['json_object'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("{");
        this.appendStatementInput("NAME")
            .setCheck("JSON_param");
        this.appendDummyInput()
            .appendField("}");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['json_param'] = {
    init: function () {
        this.appendValueInput("key")
            .setCheck("String")
            .appendField("Key");
        this.appendValueInput("value")
            .setCheck(["Boolean", "Number", "String", "Array"])
            .appendField("Value");
        this.setPreviousStatement(true, "JSON_param");
        this.setNextStatement(true, "JSON_param");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['json_object'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['json_param'] = function (block) {
    var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};