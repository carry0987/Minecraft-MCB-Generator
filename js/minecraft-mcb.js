//Field
var currentInputMode = 0;
var inputModeCount = 4;
var inputBoxInfo = [];

//Set for Mode 0
inputBoxInfo[0] = [];
inputBoxInfo[0].modeClass = ['inputMode0_display'];
inputBoxInfo[0].textClass = ['inputMode0'];
inputBoxInfo[0].inputBoxIdList = ['m0_x', 'm0_y', 'm0_z', 'm0_id', 'm0_meta', 'm0_nbtTag'];
inputBoxInfo[0].inputBoxDisplayDefault = {
    m0_x: 'X',
    m0_y: 'Y',
    m0_z: 'Z',
    m0_id: 'id',
    m0_meta: 'meta',
    m0_nbtTag: 'NbtTag'
};
inputBoxInfo[0].isInputBoxEnabled = {
    m0_x: false,
    m0_y: false,
    m0_z: false,
    m0_id: false,
    m0_meta: false,
    m0_nbtTag: false
};
inputBoxInfo[0].inputBoxDefault = {
    m0_x: '0',
    m0_y: '0',
    m0_z: '0',
    m0_id: '0',
    m0_meta: '0',
    m0_nbtTag: ''
};
inputBoxInfo[0].inputBoxForce = {
    m0_x: true,
    m0_y: true,
    m0_z: true,
    m0_id: true,
    m0_meta: false,
    m0_nbtTag: false
};
inputBoxInfo[0].inputBoxFormat = {
    m0_x: /(~?-?\d+|~)/g,
    m0_y: /(~?-?\d+|~)/g,
    m0_z: /(~?-?\d+|~)/g,
    m0_id: /[\w:\=\[\]\{\}\!\?\.\,]+/g,
    m0_meta: /\d+/g,
    m0_nbtTag: /.+/g
};

//Set for Mode 1
inputBoxInfo[1] = [];
inputBoxInfo[1].modeClass = ['inputMode1_display'];
inputBoxInfo[1].textClass = ['inputMode1'];
inputBoxInfo[1].inputBoxIdList = ['m1_rawCommand'];
inputBoxInfo[1].inputBoxDisplayDefault = {
    m1_rawCommand: 'Command'
};
inputBoxInfo[1].isInputBoxEnabled = {
    m1_rawCommand: false
};
inputBoxInfo[1].inputBoxDefault = {
    m1_rawCommand: ''
};
inputBoxInfo[1].inputBoxForce = {
    m1_rawCommand: true
};
inputBoxInfo[1].inputBoxFormat = {
    m1_rawCommand: /.+/g
};

//Set for Mode 2
inputBoxInfo[2] = [];
inputBoxInfo[2].modeClass = ['inputMode2_display'];
inputBoxInfo[2].textClass = ['inputMode2'];
inputBoxInfo[2].inputBoxIdList = ['m2_x0', 'm2_y0', 'm2_z0', 'm2_x1', 'm2_y1', 'm2_z1', 'm2_id', 'm2_meta', 'm2_nbtTag'];
inputBoxInfo[2].inputBoxDisplayDefault = {
    m2_x0: 'X1',
    m2_y0: 'Y1',
    m2_z0: 'Z1',
    m2_x1: 'X2',
    m2_y1: 'Y2',
    m2_z1: 'Z2',
    m2_id: 'id',
    m2_meta: 'meta',
    m2_nbtTag: 'NbtTag'
};
inputBoxInfo[2].isInputBoxEnabled = {
    m2_x0: false,
    m2_y0: false,
    m2_z0: false,
    m2_x1: false,
    m2_y1: false,
    m2_z1: false,
    m2_id: false,
    m2_meta: false,
    m2_nbtTag: false
};
inputBoxInfo[2].inputBoxDefault = {
    m2_x0: '0',
    m2_y0: '0',
    m2_z0: '0',
    m2_x1: '0',
    m2_y1: '0',
    m2_z1: '0',
    m2_id: '0',
    m2_meta: '0',
    m2_nbtTag: ''
};
inputBoxInfo[2].inputBoxForce = {
    m2_x0: true,
    m2_y0: true,
    m2_z0: true,
    m2_x1: true,
    m2_y1: true,
    m2_z1: true,
    m2_id: true,
    m2_meta: false,
    m2_nbtTag: false
};
inputBoxInfo[2].inputBoxFormat = {
    m2_x0: /(~?-?\d+|~)/g,
    m2_y0: /(~?-?\d+|~)/g,
    m2_z0: /(~?-?\d+|~)/g,
    m2_x1: /(~?-?\d+|~)/g,
    m2_y1: /(~?-?\d+|~)/g,
    m2_z1: /(~?-?\d+|~)/g,
    m2_id: /[\w:\=\[\]\{\}\!\?\.\,]+/g,
    m2_meta: /\d+/g,
    m2_nbtTag: /.+/g
};

//Set for Mode 3
inputBoxInfo[3] = [];
inputBoxInfo[3].modeClass = ['inputMode3_display'];
inputBoxInfo[3].textClass = ['inputMode3'];
inputBoxInfo[3].inputBoxIdList = ['m3_prefix', 'm3_x0', 'm3_y0', 'm3_z0', 'm3_x1', 'm3_y1', 'm3_z1', 'm3_space', 'm3_suffix'];
inputBoxInfo[3].inputBoxDisplayDefault = {
    m3_prefix: 'Prefix',
    m3_x0: 'X1',
    m3_y0: 'Y1',
    m3_z0: 'Z1',
    m3_x1: 'X2',
    m3_y1: 'Y2',
    m3_z1: 'Z2',
    m3_space: 'Space',
    m3_suffix: 'Suffix'
};
inputBoxInfo[3].isInputBoxEnabled = {
    m3_prefix: false,
    m3_x0: false,
    m3_y0: false,
    m3_z0: false,
    m3_x1: false,
    m3_y1: false,
    m3_z1: false,
    m3_space: false,
    m3_suffix: false
};
inputBoxInfo[3].inputBoxDefault = {
    m3_prefix: '',
    m3_x0: '0',
    m3_y0: '0',
    m3_z0: '0',
    m3_x1: '0',
    m3_y1: '0',
    m3_z1: '0',
    m3_space: '0',
    m3_suffix: '0'
};
inputBoxInfo[3].inputBoxForce = {
    m3_prefix: true,
    m3_x0: true,
    m3_y0: true,
    m3_z0: true,
    m3_x1: true,
    m3_y1: true,
    m3_z1: true,
    m3_space: false,
    m3_suffix: false
};
inputBoxInfo[3].inputBoxFormat = {
    m3_prefix: /.+/g,
    m3_x0: /(~?-?\d+|~)/g,
    m3_y0: /(~?-?\d+|~)/g,
    m3_z0: /(~?-?\d+|~)/g,
    m3_x1: /(~?-?\d+|~)/g,
    m3_y1: /(~?-?\d+|~)/g,
    m3_z1: /(~?-?\d+|~)/g,
    m3_space: /[\w:]+/g,
    m3_suffix: /.+/g
};

//Command List
var commandList = {};
var commandCollectionList = {};

//Input mode list
var inputModeList = [];
var swapXZPos = false;

//Input mode 0
inputModeList[0] = {};
inputModeList[0].addBlockListener = function() {
    if (finalCheck()) {
        appendCommand(inputModeList[0].getCurrentInput());
        resetInput();
        return true;
    } else {
        return false;
    }
};
inputModeList[0].getCurrentInput = function() {
    var relativePos;
    relativePos = ($('#auto_relative').prop('checked')) ? true : false;
    var x = getSingleInput('m0_x', false, relativePos);
    var y = getSingleInput('m0_y', false, relativePos);
    var z = getSingleInput('m0_z', false, relativePos);
    var id = getSingleInput('m0_id');
    var meta = getSingleInput('m0_meta');
    var nbt = getSingleInput('m0_nbtTag');
    return getSetBlockCommand(x, y, z, id, meta, nbt);
};

//Input mode 1
inputModeList[1] = {};
inputModeList[1].addBlockListener = function() {
    if (finalCheck('.inputMode1')) {
        appendCommand(inputModeList[1].getCurrentInput());
        resetInput();
        return true;
    } else {
        return false;
    }
};
inputModeList[1].getCurrentInput = function() {
    var command = getSingleInput('m1_rawCommand');
    return command;
};

//Input mode 2
inputModeList[2] = {};
inputModeList[2].addBlockListener = function() {
    if (finalCheck() && inputModeList[2].additionCheck()) {
        appendCommandCollection(inputModeList[2].getCurrentInput(), inputModeList[2].getTitle());
        resetInput();
        return true;
    } else {
        return false;
    }
};
inputModeList[2].getCurrentInput = function() {
    var relativePos;
    relativePos = ($('#auto_relative').prop('checked')) ? true : false;
    var x0 = getSingleInput('m2_x0', false, relativePos);
    var y0 = getSingleInput('m2_y0', false, relativePos);
    var z0 = getSingleInput('m2_z0', false, relativePos);
    var x1 = getSingleInput('m2_x1', false, relativePos);
    var y1 = getSingleInput('m2_y1', false, relativePos);
    var z1 = getSingleInput('m2_z1', false, relativePos);
    var id = getSingleInput('m2_id', true);
    var meta = getSingleInput('m2_meta');
    var nbt = getSingleInput('m2_nbtTag');
    return getMultiSetBlockCommand(x0, y0, z0, x1, y1, z1, id, meta, nbt);
};
inputModeList[2].additionCheck = function() {
    var isCorrect = true;
    var relativePos;
    relativePos = ($('#auto_relative').prop('checked')) ? true : false;
    var x0 = getSingleInput('m2_x0', false, relativePos);
    var y0 = getSingleInput('m2_y0', false, relativePos);
    var z0 = getSingleInput('m2_z0', false, relativePos);
    var x1 = getSingleInput('m2_x1', false, relativePos);
    var y1 = getSingleInput('m2_y1', false, relativePos);
    var z1 = getSingleInput('m2_z1', false, relativePos);
    if ((x0.search('~') === -1) !== (x1.search('~') === -1)) {
        isCorrect = false;
        $('#m2_x0').addClass('badFormat');
        $('#m2_x1').addClass('badFormat');
    }
    if ((y0.search('~') === -1) !== (y1.search('~') === -1)) {
        isCorrect = false;
        $('#m2_y0').addClass('badFormat');
        $('#m2_y1').addClass('badFormat');
    }
    if ((z0.search('~') === -1) !== (z1.search('~') === -1)) {
        isCorrect = false;
        $('#m2_z0').addClass('badFormat');
        $('#m2_z1').addClass('badFormat');
    }
    return isCorrect;
};
inputModeList[2].getTitle = function() {
    var relativePos;
    relativePos = ($('#auto_relative').prop('checked')) ? true : false;
    var x0 = getSingleInput('m2_x0', false, relativePos);
    var y0 = getSingleInput('m2_y0', false, relativePos);
    var z0 = getSingleInput('m2_z0', false, relativePos);
    var x1 = getSingleInput('m2_x1', false, relativePos);
    var y1 = getSingleInput('m2_y1', false, relativePos);
    var z1 = getSingleInput('m2_z1', false, relativePos);
    var id = getSingleInput('m2_id', true);
    var meta = getSingleInput('m2_meta');
    var nbt = getSingleInput('m2_nbtTag');
    var title;
    meta = meta || '0';
    id = (id.search('minecraft:') !== -1) ? id : 'minecraft:' + id;
    title = 'Area /setblock pos:(' + x0 + ',' + y0 + ',' + z0 + ') ~ (' + x1 + ',' + y1 + ',' + z1 + ') id:' + id;
    if (meta !== '0') {
        title = title + ' meta:' + meta;
    }
    if (nbt) {
        title = title + ' NbtTag:' + nbt;
    }
    return title;
};

//Input mode 3
inputModeList[3] = {};
inputModeList[3].addBlockListener = function() {
    if (finalCheck() && inputModeList[3].additionCheck()) {
        appendCommandCollection(inputModeList[3].getCurrentInput(), inputModeList[3].getTitle());
        resetInput();
        return true;
    } else {
        return false;
    }
};
inputModeList[3].getCurrentInput = function() {
    var prefix = getSingleInput('m3_prefix');
    var relativePos;
    relativePos = ($('#auto_relative').prop('checked')) ? true : false;
    var x0 = getSingleInput('m3_x0', false, relativePos);
    var y0 = getSingleInput('m3_y0', false, relativePos);
    var z0 = getSingleInput('m3_z0', false, relativePos);
    var x1 = getSingleInput('m3_x1', false, relativePos);
    var y1 = getSingleInput('m3_y1', false, relativePos);
    var z1 = getSingleInput('m3_z1', false, relativePos);
    var space = getSingleInput('m3_space');
    var suffix = getSingleInput('m3_suffix');
    return getMultiRawCommand(x0, y0, z0, x1, y1, z1, prefix, space, suffix);
};
inputModeList[3].additionCheck = function() {
    var isCorrect = true;
    var relativePos;
    relativePos = ($('#auto_relative').prop('checked')) ? true : false;
    var x0 = getSingleInput('m3_x0', false, relativePos);
    var y0 = getSingleInput('m3_y0', false, relativePos);
    var z0 = getSingleInput('m3_z0', false, relativePos);
    var x1 = getSingleInput('m3_x1', false, relativePos);
    var y1 = getSingleInput('m3_y1', false, relativePos);
    var z1 = getSingleInput('m3_z1', false, relativePos);
    if ((x0.search('~') === -1) !== (x1.search('~') === -1)) {
        isCorrect = false;
        $('#m3_x0').addClass('badFormat');
        $('#m3_x1').addClass('badFormat');
    }
    if ((y0.search('~') === -1) !== (y1.search('~') === -1)) {
        isCorrect = false;
        $('#m3_y0').addClass('badFormat');
        $('#m3_y1').addClass('badFormat');
    }
    if ((z0.search('~') === -1) !== (z1.search('~') === -1)) {
        isCorrect = false;
        $('#m3_z0').addClass('badFormat');
        $('#m3_z1').addClass('badFormat');
    }
    return isCorrect;
};
inputModeList[3].getTitle = function() {
    var prefix = getSingleInput('m3_prefix');
    var relativePos;
    relativePos = ($('#auto_relative').prop('checked')) ? true : false;
    var x0 = getSingleInput('m3_x0', false, relativePos);
    var y0 = getSingleInput('m3_y0', false, relativePos);
    var z0 = getSingleInput('m3_z0', false, relativePos);
    var x1 = getSingleInput('m3_x1', false, relativePos);
    var y1 = getSingleInput('m3_y1', false, relativePos);
    var z1 = getSingleInput('m3_z1', false, relativePos);
    var space = getSingleInput('m3_space');
    var suffix = getSingleInput('m3_suffix');
    space = parseInt(space, 10) || 1;
    suffix = suffix || '';
    if (prefix.search(/ +$/g) === -1) {
        prefix = prefix + ' ';
    }
    if ((suffix !== '') && (suffix.search(/^ +/g) === -1)) {
        suffix = ' ' + suffix;
    }
    var title;
    title = 'RawCommand : ' + prefix + '((' + x0 + ',' + y0 + ',' + z0 + ') ~ (' + x1 + ',' + y1 + ',' + z1 + ') ,space:' + space + ')' + suffix;
    return title;
};

//Display Block Control
function addBlock(id, inf) {
    $('<div></div>')
        .attr('id', id)
        .attr('unselectable', 'on')
        .addClass('blockSet')
        .text(inf)
        .click(function() {
            $(this).slideUp(100, function() {
                commandList[$(this).attr('id')] = null;
                deleteMCBStorage('MCB', id);
                $(this).remove();
            });
        })
        .hide()
        .appendTo('#displayInput')
        .slideDown(200);
    if (swapXZPos === true) { $('#'+id).addClass('blockSetSwap'); }
    $('#displayInput').animate({ scrollTop: $('#' + id).offset().top }, 150);
}

function addBlockCollection(id, inf) {
    $('<div></div>')
        .attr('id', id)
        .attr('unselectable', 'on')
        .addClass('blockSetCollection')
        .text(inf)
        .click(function() {
            $(this).slideUp(100, function() {
                commandCollectionList[$(this).attr('id')] = null;
                deleteMCBStorage('MCB', id);
                $(this).remove();
            });
        })
        .hide()
        .appendTo('#displayInput')
        .slideDown(200);
    if (swapXZPos === true) { $('#'+id).addClass('blockCollectSetSwap'); }
    $('#displayInput').animate({ scrollTop: $('#' + id).offset().top }, 150);
}

function addBlockCollectionHigh(id, inf) {
    $('<div></div>')
        .attr('id', id)
        .attr('unselectable', 'on')
        .addClass('blockSetCollectionHigh')
        .text(inf)
        .click(function() {
            $(this).slideUp(100, function() {
                commandCollectionList[$(this).attr('id')] = null;
                deleteMCBStorage('MCB', id);
                $(this).remove();
            });
        })
        .hide()
        .appendTo('#displayInput')
        .slideDown(200);
    if (swapXZPos === true) { $('#'+id).addClass('blockCollectSetSwap'); }
    $('#displayInput').animate({ scrollTop: $('#' + id).offset().top }, 150);
}

//Command List
function appendCommand(command, addMCB = true) {
    var id = (new Date()).getTime();
    addBlock(id, command);
    commandList[id] = command;
    addMCBStorage('MCB', id, command, addMCB);
}

function appendCommandCollection(command, display, addMCB = true) {
    var id = (new Date()).getTime();
    commandCollectionList[id] = command;
    addBlockCollection(id, display);
    addMCBStorage('MCB', id, display, addMCB);
}

function appendCommandCollectionHigh(id, command, display, addMCB = true) {
    commandCollectionList[id] = command;
    addBlockCollection(id, display);
    addMCBStorage('MCB', id, display, addMCB);
}

function addMCBStorage(storageName, id, command, addMCB) {
    if (addMCB === false) {
        return;
    }
    var addStorage = getValue(storageName, true);
    if (addMCB === true) {
        addStorage = (addStorage == null) ? {} : addStorage;
        addStorage[id] = command;
    } else {
        addStorage[id] = addStorage[addMCB];
        delete addStorage[addMCB];
    }
    setValue(storageName, addStorage);
}

function deleteMCBStorage(storageName, id) {
    var removeStorage = getValue(storageName, true);
    if (removeStorage[id]) { delete removeStorage[id]; }
    setValue(storageName, removeStorage);
}

//Search Element
function getSingleInput(id, trimSpace = false, relativePos = false) {
    if (inputBoxInfo[currentInputMode].isInputBoxEnabled[id] === false) {
        return null;
    }
    var content = $('#' + id).val();
    content = (trimSpace === true) ? content.replace(/\s+/g, '') : content;
    if (relativePos === true) {
        content = (String(content).search('~') !== -1) ? content : '~' + content;
    }
    if (!(content.match(inputBoxInfo[currentInputMode].inputBoxFormat[id])) || (content.match(inputBoxInfo[currentInputMode].inputBoxFormat[id])[0] != content)) {
        return null;
    }
    return content;
}

//InputBox control
function inputBoxCheck(element) {
    if (element.value === '') {
        inputBoxDisable(element);
    }
}

function inputBoxEnable(element) {
    $(element)
        .removeClass('notEnabled')
        .val('');
    inputBoxInfo[currentInputMode].isInputBoxEnabled[element.id] = true;
}

function inputBoxDisable(element) {
    $(element)
        .addClass('notEnabled')
        .val(inputBoxInfo[currentInputMode].inputBoxDisplayDefault[element.id]);
    inputBoxInfo[currentInputMode].isInputBoxEnabled[element.id] = false;
}

function resetInput() {
    $('.inputBox')
        .each(function() {
            inputBoxDisable(this);
        })
        .removeClass('badFormat');
}

function finalCheck() {
    var isCorrrect = true;

    $('.' + inputBoxInfo[currentInputMode].textClass).each(function() {
        var id = $(this).attr('id');
        if (getSingleInput(id)) {
            return;
        } else {
            if (!inputBoxInfo[currentInputMode].inputBoxForce[id]) {
                return;
            } else {
                $('#' + id).addClass('badFormat');
            }
        }
        isCorrrect = false;
    });
    return isCorrrect;
}

//Input mode adapter
function addBlockListenerAdapter() {
    return inputModeList[currentInputMode].addBlockListener();
}

//Logic
function getSetBlockCommand(x, y, z, id, meta, nbt) {
    var command;
    meta = meta || '0';

    id = (id.search('minecraft:') !== -1) ? id : 'minecraft:' + id;
    command = 'setblock ' + x + ' ' + y + ' ' + z + ' ' + id;
    if ((meta !== '0')) {
        command = command + ' ' + meta;
    }
    if (nbt) {
        command = command + ' ' + nbt;
    } else if (!nbt) {
        command = command + ' replace';
    }
    return command;
}

function generateCommandFinal(commandList) {
    var posMCB;
    if (!commandList[0]) {
        return 'No Input!'
    }
    setBlockReorder(commandList);
    posMCB = (swapXZPos === true) ? '~ ~ ~2' : '~-2 ~ ~';
    var command = '/summon command_block_minecart ' + posMCB + ' ' + _tagBuilder(commandList);
    return command;
}

//Core Logic
function _tagBuilder(_commandList, current, addComma = false) {
    var buffer;
    var Listlength = _commandList.length;
    var insertComma = (addComma == true) ? ',' : '';
    if (Listlength == 1) {
        buffer = insertComma + 'Command:"' + _commandList[0].replace(/(\"|\\)/g, "\\\"") + '"';
        if (current) {
            buffer = 'Passengers:[' + current + ']' + buffer;
        }
        motionMCB = (swapXZPos === true) ? '0.1,0.0,0.0' : '0.0,0.0,0.1';
        buffer = '{' + buffer + ',Motion:[' + motionMCB + ']}';
        return buffer;
    } else {
        buffer = 'id:"command_block_minecart"';
        buffer = buffer + ',Command:"' + _commandList[0].replace(/(\\"|\")/g, "\\$1") + '"';
        if (current) {
            buffer = buffer + ',Passengers:[' + current + ']';
        }
        buffer = '{' + buffer + '}';
        return _tagBuilder(_commandList.slice(1), buffer, true);
    }
}

function getMultiSetBlockCommand(x0, y0, z0, x1, y1, z1, id, meta, nbt) {
    var isXRelative = (x0.search('~') !== -1);
    var isYRelative = (y0.search('~') !== -1);
    var isZRelative = (z0.search('~') !== -1);
    var i;
    var j;
    var k;

    var tempCommandList = [];
    x0 = x0.replace('~', '');
    y0 = y0.replace('~', '');
    z0 = z0.replace('~', '');
    x1 = x1.replace('~', '');
    y1 = y1.replace('~', '');
    z1 = z1.replace('~', '');
    x0 = (x0 === '') ? 0 : x0;
    y0 = (y0 === '') ? 0 : y0;
    z0 = (z0 === '') ? 0 : z0;
    x1 = (x1 === '') ? 0 : x1;
    y1 = (y1 === '') ? 0 : y1;
    z1 = (z1 === '') ? 0 : z1;
    x0 = parseInt(x0, 10);
    y0 = parseInt(y0, 10);
    z0 = parseInt(z0, 10);
    x1 = parseInt(x1, 10);
    y1 = parseInt(y1, 10);
    z1 = parseInt(z1, 10);
    if (x0 > x1) {
        i = x0;
        x0 = x1;
        x1 = i;
    }
    if (y0 > y1) {
        i = y0;
        y0 = y1;
        y1 = i;
    }
    if (z0 > z1) {
        i = z0;
        z0 = z1;
        z1 = i;
    }
    for (i = x0; i <= x1; i++) {
        for (j = y0; j <= y1; j++) {
            for (k = z0; k <= z1; k++) {
                currentX = isXRelative ? ('~' + i) : i;
                currentY = isXRelative ? ('~' + j) : j;
                currentZ = isXRelative ? ('~' + k) : k;
                tempCommandList.push(getSetBlockCommand(currentX, currentY, currentZ, id, meta, nbt))
            }
        }
    }
    return tempCommandList;
}

function getMultiRawCommand(x0, y0, z0, x1, y1, z1, prefix, space, suffix) {
    var isXRelative = (x0.search('~') !== -1);
    var isYRelative = (y0.search('~') !== -1);
    var isZRelative = (z0.search('~') !== -1);
    space = parseInt(space, 10) || 1;
    suffix = suffix || '';
    if (prefix.search(/ +$/g) === -1) {
        prefix = prefix + ' ';
    }
    if ((suffix !== '') && (suffix.search(/^ +/g) === -1)) {
        suffix = ' ' + suffix;
    }
    var i, j, k;
    var currentX, currentY, currentZ;
    var x0Relative, y0Relative, z0Relative, x1Relative, y1Relative, z1Relative;
    var xCenter, yCenter, zCenter;
    var currentCommand;
    var tempCommandList = [];
    x0 = x0.replace('~', '');
    y0 = y0.replace('~', '');
    z0 = z0.replace('~', '');
    x1 = x1.replace('~', '');
    y1 = y1.replace('~', '');
    z1 = z1.replace('~', '');
    x0 = (x0 === '') ? 0 : x0;
    y0 = (y0 === '') ? 0 : y0;
    z0 = (z0 === '') ? 0 : z0;
    x1 = (x1 === '') ? 0 : x1;
    y1 = (y1 === '') ? 0 : y1;
    z1 = (z1 === '') ? 0 : z1;
    x0 = parseInt(x0, 10);
    y0 = parseInt(y0, 10);
    z0 = parseInt(z0, 10);
    x1 = parseInt(x1, 10);
    y1 = parseInt(y1, 10);
    z1 = parseInt(z1, 10);
    if (x0 > x1) {
        i = x0;
        x0 = x1;
        x1 = i;
    }
    if (y0 > y1) {
        i = y0;
        y0 = y1;
        y1 = i;
    }
    if (z0 > z1) {
        i = z0;
        z0 = z1;
        z1 = i;
    }
    if (isXRelative) {
        xCenter = 0;
    } else {
        xCenter = Math.floor((x0 + x1) / 2);
    }
    if (isYRelative) {
        yCenter = 0;
    } else {
        yCenter = Math.floor((y0 + y1) / 2);
    }
    if (isZRelative) {
        zCenter = 0;
    } else {
        yCenter = Math.floor((y0 + y1) / 2);
    }
    x0Relative = x0 - xCenter;
    x1Relative = x1 - xCenter;
    y0Relative = y0 - yCenter;
    y1Relative = y1 - yCenter;
    z0Relative = z0 - zCenter;
    z1Relative = z1 - zCenter;
    for (i = x0Relative; i <= x1Relative; i++) {
        for (j = y0Relative; j <= y1Relative; j++) {
            for (k = z0Relative; k <= z1Relative; k++) {
                currentX = i * space + xCenter;
                currentY = j * space + yCenter;
                currentZ = k * space + zCenter;
                currentX = isXRelative ? ('~' + currentX) : currentX;
                currentY = isYRelative ? ('~' + currentY) : currentY;
                currentZ = isZRelative ? ('~' + currentZ) : currentZ;
                currentCommand = prefix + currentX + ' ' + currentY + ' ' + currentZ + suffix;
                tempCommandList.push(currentCommand);
            }
        }
    }
    return tempCommandList;
}

function setBlockReorder(commandList) {
    var setBlockFormat = /(\/?setblock) (~?-?\d+|~) (~?-?\d+|~) (~?-?\d+|~) ([\w\d:]+)( \d+)?( replace| keep| destroy)?( [^\n\r]+)?/g;
    //Not sure the influence of block order in MC 1.16+
    var lastBlock = ['26', '27', '28', '29', '31', '32', '33', '37', '38', '39', '40', '51', '55', '59', '63', '65', '66', '69', '70', '72', '75', '76', '77', '78', '96', '104', '105', '106', '111', '115', '127', '131', '141', '142', '143', '147', '148', '149', '150', '157', '171', '175'];
    var finalBlock = ['6', '29', '33', '34', '36', '64', '68', '71', '81', '83', '92'];
    var setblockCommandList = [];
    var otherCommandList = [];

    var specialRull = function(i, j, k) {
        var pos = k.position;
        return (pos.isXRelative && pos.isYRelative && pos.isZRelative && (pos.x == 0) && (pos.z == 0) && (pos.y >= -2 && pos.y <= -1));
    }
    var isLastBlock = function(i) { return (lastBlock.indexOf(i) != -1); }
    var isFinalBlock = function(i) { return (finalBlock.indexOf(i) != -1); }
    /* parse command start*/
    var parsedSetblockCommandList = [];
    var setNonAirCommandList = [];
    var setAirCommandList = [];
    var setSpecialCommandList = []; //some command should execuse finally such as the block under the minecart
    var absoluteSetblockCommandList = []; //only check y axix
    var relativeSetblockCommandList = []; //only check y axix

    /*var setAirCommandList = [];*/
    var firstCommandList = [];
    var lastCommandList = [];
    var finalCommandList = [];

    var setSpecialAirCommandList = [];
    var setSpecialNonAirCommandList = [];

    /*parse command end*/
    /*final list start*/
    var finalParsedCommandList = [];
    var finalUnParsedCommandList = [];
    /*final list end*/
    var i, j, k, temp;
    for (i = 0; i < commandList.length; i++) {
        if (commandList[i].search(setBlockFormat) == 0) {
            setblockCommandList.push(commandList[i]);
        } else {
            otherCommandList.push(commandList[i]);
        }
    }
    for (i = 0; i < setblockCommandList.length; i++) {
        parsedSetblockCommandList.push(new ParsedSetBlockCommand(setblockCommandList[i]));
    }
    temp = splitWithProperty(parsedSetblockCommandList, ['id'], [specialRull, '0'], null);
    setSpecialCommandList = temp[0];
    setNonAirCommandList = temp.other;
    setAirCommandList = temp[1];
    /*handle for nonairblock start*/
    temp = splitWithProperty(setNonAirCommandList, ['id'], [isLastBlock, isFinalBlock], null);
    firstCommandList = temp.other;
    lastCommandList = temp[0];
    finalCommandList = temp[1];
    reoderWithProperty(firstCommandList, ['position', 'y'], 'increase');
    reoderWithProperty(lastCommandList, ['position', 'y'], 'increase');
    reoderWithProperty(finalCommandList, ['position', 'y'], 'increase');
    /*handle for nonairblock end*/
    /*handle for airblock start*/
    reoderWithProperty(setAirCommandList, ['position', 'y'], 'decrease');
    /*handle for airblock end*/
    /*handle for special block start*/
    temp = splitWithProperty(setSpecialCommandList, ['id'], [0], null);
    setSpecialAirCommandList = temp[0];
    setSpecialNonAirCommandList = temp.other;
    reoderWithProperty(setSpecialAirCommandList, ['position', 'y'], 'increase');
    reoderWithProperty(setSpecialNonAirCommandList, ['position', 'y'], 'increase');
    /*handle for special block end*/
    finalParsedCommandList = setAirCommandList.concat(firstCommandList, lastCommandList, finalCommandList, setSpecialAirCommandList, setSpecialNonAirCommandList);
    commandList.length = 0;
    for (i = 0; i < otherCommandList.length; i++) {
        commandList.push(otherCommandList[i]);
    }
    for (i = 0; i < finalParsedCommandList.length; i++) {
        commandList.push(finalParsedCommandList[i].original);
    }
    return commandList;
}

//Check position relative
function isRelative(pos) { return (pos.search('~') != -1); }

//Get only number of position
function parsePos(pos) {
    pos = pos.replace(/[~\s]+/g, '');
    if (pos == '') { return 0; }
    return parseInt(pos, 10);
}

//Swap position for x and z
function swapPosition(pos) {
    var checkPosRelative;
    checkPosRelative = pos.search('~');
    pos = parsePos(pos);
    if (pos != 0) {
        pos = pos.toString();
        pos = (pos.search('-') == -1) ? '-'+pos : pos.replace('-', '');
    }
    return (checkPosRelative != -1) ? '~'+pos : pos;
}

function ParsedSetBlockCommand(str) {
    var setBlockFormat = /(\/?setblock) (~?-?\d+|~) (~?-?\d+|~) (~?-?\d+|~) ([\w\d:]+)( \d+)?( replace| keep| destroy)?( [^\n\r]+)?/;
    var tempArray = str.match(setBlockFormat);
    if (!tempArray) { throw new Error('Incorrect setblock command'); }
    this.original = str;
    this.position = new ParsedPosition(tempArray[2], tempArray[3], tempArray[4]);
    this.id = tempArray[5];
    this.meta = tempArray[6] ? parseInt(tempArray[6].replace(/\s+/g, ''), 10) : 0;
    this.method = tempArray[7] ? tempArray[7].substring(1) : '';
    this.nbt = tempArray[8] ? tempArray[8].substring(1) : '';
}

var ParsedPosition = function ParsedPosition(posX, posY, posZ) {
    this.isXRelative = isRelative(posX);
    this.isYRelative = isRelative(posY);
    this.isZRelative = isRelative(posZ);
    this.x = parsePos(posX);
    this.y = parsePos(posY);
    this.z = parsePos(posZ);
}

ParsedPosition.prototype.equalTo = function(obj) {
    if (!(obj instanceof ParsedPosition)) { return false }
    return ((this.x === obj.x) && (this.y === obj.y) && (this.z === obj.z) && (this.isXRelative === obj.isXRelative) && (this.isYRelative === obj.isYRelative) && (this.isZRelative === obj.isZRelative));
}

var reoderWithProperty = function reoderWithProperty(objList, attr, method) { //method could be 'increase' or 'decrease' ,attr is a list of property name
    if (typeof(attr) === 'undefined') { throw new Error('property undefined'); }
    if (!(method === 'increase' || method === 'decrease')) { throw new Error('undefined method'); }
    var current, next;
    var isDone;
    var i;
    var j;
    var temp;

    isDone = false;
    while (!isDone) {
        isDone = true;
        for (i = 0; i < objList.length - 1; i++) {
            try {
                for (j = 0; j < attr.length; j++) {
                    current = (j == 0) ? objList[i][attr[j]] : current[attr[j]];
                    next = (j == 0) ? objList[i + 1][attr[j]] : next[attr[j]];
                }
            } catch (e) {
                alert('Error happened during search for property'+"\n"+e.stack);
                throw e;
            }
            if (typeof(current) !== 'number' || typeof(next) !== 'number') {
                throw new Error('Property is not a number')
            }
            if (!(current === next) && ((current > next) === (method === 'increase'))) {
                temp = objList[i];
                objList[i] = objList[i + 1];
                objList[i + 1] = temp;
                isDone = false;
            }
        }
    }
    return objList;
}

/*
 * parameter : 
 *     objList : the object you want to split
 *     propertyList : the property you try to split
 *     matchRull : the way you want to match the property
 *         if it is not a function, it will directly check if the property equals to it.
 *         if it is a function, it will throw the (property, current index, current object,the original object list) to it, and make decidecicion by the return.
 *         it will only match the first matched rull it found.
 *     splitedObjectList : the array used to store the result, if it is not a array, it will make a new array for return.
 *         it will contain the following property.
 *             [0] ~ [x] : the matched result.
 *             other : the objects can't be matched.
 *             origin : the reference for the original objectList.
 * return :
 *     splitedObjectList
 */
var splitWithProperty = function splitWithProperty(objectList, propertyList, matchRullList, splitedObjectList) {
    if (!(splitedObjectList instanceof Array)) { var splitedObjectList = []; }
    var i;
    var j;
    var current;
    var isMatched;

    splitedObjectList.length = 0; //remove all current content in splitedObjectList

    for (i = 0; i < matchRullList.length; i++) {
        splitedObjectList[i] = [];
    }
    splitedObjectList.other = []; //remove all current content in splitedObjectList
    splitedObjectList.origin = objectList;

    for (i = 0; i < objectList.length; i++) {
        isMatched = false;
        try {
            for (j = 0; j < propertyList.length; j++) {
                current = (j == 0) ? objectList[i][propertyList[j]] : current[propertyList[j]];
            }
        } catch (e) {
            alert('Error happened during search for property'+"\n"+e.stack);
            throw e;
        }
        try {
            for (j = 0; j < matchRullList.length; j++) {
                if (typeof(matchRullList[j]) !== 'function') {
                    if (matchRullList[j] === current) {
                        splitedObjectList[j].push(objectList[i]);
                        isMatched = true;
                    }
                } else {
                    if (matchRullList[j](current, i, objectList[i], objectList)) {
                        splitedObjectList[j].push(objectList[i]);
                        isMatched = true;
                    }
                }
            }
            if (!isMatched) {
                splitedObjectList.other.push(objectList[i]);
            }
        } catch (e) {
            alert('Error happened during match for rull'+"\n"+e.stack);
            throw e;
        }
    }
    return splitedObjectList;
}


//Switch input mode
function switchMode() {
    var current = currentInputMode;
    var next = (current + 1) % inputModeCount;
    for (i = 0; i < inputBoxInfo[current].modeClass.length; i++) {
        $('.' + inputBoxInfo[current].modeClass[i]).fadeOut();
    }
    for (i = 0; i < inputBoxInfo[next].modeClass.length; i++) {
        $('.' + inputBoxInfo[next].modeClass[i]).fadeIn();
    }
    currentInputMode = next;
    resetInput();
}

//Final generate
function getAllCommand() {
    var i = 0;
    var allCommand = []; {
        $('.blockSet').each(function() {
            allCommand.push(commandList[$(this).attr('id')]);
        });
    }
    $('.blockSetCollection').each(function() {
        allCommand = allCommand.concat(commandCollectionList[$(this).attr('id')]);
    });
    return allCommand;
}

function getFinalCommand() {
    return generateCommandFinal(getAllCommand());
}

//Listener
function inputBoxOnSelect() {
    if (!inputBoxInfo[currentInputMode].isInputBoxEnabled[this.id]) {
        inputBoxEnable(this);
    }
    $(this).removeClass('badFormat');
}

function inputBoxOnBlur() {
    if ($(this).val() === '') {
        inputBoxDisable(this);
    }
}

function inputBoxOnkeyPress(event) {
    $(this).removeClass('badFormat');
    var keynum;
    if (window.event) {
        keynum = event.keyCode;
    } else if (event.which) {
        keynum = event.which;
    } else {
        keynum = 0;
    }
    if (keynum == 13) {
        $(this).blur();
        if (addBlockListenerAdapter()) {
            $('#' + inputBoxInfo[currentInputMode].inputBoxIdList[0]).focus();
        } else {
            $(this).focus();
        }
    }
    return true;
}

function onClickAddBlock() {
    addBlockListenerAdapter();
}

function onClickGenerate() {
    var command = getFinalCommand();
    if (command) {
        $('#commandText').text(command);
        return true;
    } else {
        return false;
    }
}

function onClickSwitchMode() {
    switchMode();
}

//Check and Set Swap function
function onClickSwapPos() {
    $('#commandText').text('');
    //Clear generated command
    commandList = {};
    commandCollectionList = {};
    const clearList = document.getElementById('displayInput')
    clearList.textContent = '';
    //Switch swap function
    swapXZPos = (swapXZPos === false) ? true : false;
    if (swapXZPos === true) {
        var x;
        var y;
        var z;
        var singleBlock;
        var multiBlock;
        var pos0;
        var pos1;
        var position;
        var regexMode01 = /^\/?setblock ([\-\~\d]*) ([\-\~\d]*) ([\-\~\d]*) minecraft:(.*) (.*)/;
        var regexMode2 = /^Area\ \/setblock\ pos\:\(([\-\~\d,]*)\)\ \~\ \(([\-\~\d,]*)\)\ id\:([\[\w\]\=\,\!]*)(?:\ meta\:(\d+))?(?:\ NbtTag\:(.*))?/;
        var regexMode3 = /^RawCommand : (\w+)\ \(\(([\-\~\d,]*)\)\ \~\ \(([\-\~\d,]*)\)\ ,space\:(\d+)\)\ (.*)?/;
        var mcbStorage = getValue('MCB', true);
        for (var key in mcbStorage) {
            multiBlock = mcbStorage[key].match(regexMode2);
            if (multiBlock) {
                pos0 = multiBlock[1].split(',', 3);
                x = pos0[0];
                z = pos0[2];
                pos0[0] = z;
                pos0[2] = swapPosition(x);
                pos1 = multiBlock[2].split(',', 3);
                x = pos1[0];
                z = pos1[2];
                pos1[0] = z;
                pos1[2] = swapPosition(x);
                position = pos0.concat(pos1);
                appendCommandCollection(getMultiSetBlockCommand(...position, multiBlock[3], multiBlock[4], multiBlock[5]), mcbStorage[key], false);
            } else {
                multiBlock = mcbStorage[key].match(regexMode3);
                if (multiBlock) {
                    pos0 = multiBlock[2].split(',', 3);
                    x = pos0[0];
                    z = pos0[2];
                    pos0[0] = z;
                    pos0[2] = swapPosition(x);
                    pos1 = multiBlock[3].split(',', 3);
                    x = pos1[0];
                    z = pos1[2];
                    pos1[0] = z;
                    pos1[2] = swapPosition(x);
                    position = pos0.concat(pos1);
                    appendCommandCollection(getMultiRawCommand(...position, multiBlock[1], multiBlock[4], multiBlock[5]), mcbStorage[key], false);
                }
            }
            if (multiBlock == null) {
                singleBlock = mcbStorage[key].match(regexMode01);
                if (singleBlock) {
                    x = singleBlock[1];
                    y = singleBlock[2]+' ';
                    z = singleBlock[3]+' ';
                    singleBlock = 'setblock '+z+y+swapPosition(x)+' minecraft:'+singleBlock[4]+' '+singleBlock[5];
                    singleBlock = singleBlock.replace('rail ', 'rail[shape=east_west] ');
                    appendCommand(singleBlock, false);
                } else {
                    appendCommand(mcbStorage[key], false);
                }
            }
        }
    } else {
        initOutputBox();
    }
}

//Init
var initInputBox = function initInputBox() {
    var i;
    var j;
    for (i = 0; i < inputModeCount; i++) {
        $('.' + inputBoxInfo[i].textClass)
            .addClass('notEnabled')
            .focus(inputBoxOnSelect)
            .blur(inputBoxOnBlur)
            .keypress(inputBoxOnkeyPress)
            .each(function() {
                $(this).val(inputBoxInfo[i].inputBoxDisplayDefault[$(this).attr('id')]);
            });
        if (i != currentInputMode) {
            for (j = 0; j < inputBoxInfo[i].modeClass.length; j++)
                $('.' + inputBoxInfo[i].modeClass[j]).hide();
        }
    }

};
var initOutputBox = function initOutputBox() {
    var multiBlock;
    var pos0;
    var pos1;
    var position;
    var regexMode2 = /^Area\ \/setblock\ pos\:\(([\-\~\d,]*)\)\ \~\ \(([\-\~\d,]*)\)\ id\:([\[\w\]\=\,\!]*)(?:\ meta\:(\d+))?(?:\ NbtTag\:(.*))?/;
    var regexMode3 = /^RawCommand : (\w+)\ \(\(([\-\~\d,]*)\)\ \~\ \(([\-\~\d,]*)\)\ ,space\:(\d+)\)\ (.*)?/;
    var mcbStorage = getValue('MCB', true);
    for (var key in mcbStorage) {
        multiBlock = mcbStorage[key].match(regexMode2);
        if (multiBlock) {
            pos0 = multiBlock[1].split(',', 3);
            pos1 = multiBlock[2].split(',', 3);
            position = pos0.concat(pos1);
            appendCommandCollection(getMultiSetBlockCommand(...position, multiBlock[3], multiBlock[4], multiBlock[5]), mcbStorage[key], key);
        } else {
            multiBlock = mcbStorage[key].match(regexMode3);
            if (multiBlock) {
                pos0 = multiBlock[2].split(',', 3);
                pos1 = multiBlock[3].split(',', 3);
                position = pos0.concat(pos1);
                appendCommandCollection(getMultiRawCommand(...position, multiBlock[1], multiBlock[4], multiBlock[5]), mcbStorage[key], key);
            }
        }
        if (multiBlock == null) {
            appendCommand(mcbStorage[key], key);
        }
    }
}
var initButton = function initButton() {
    $('#addBlock').click(onClickAddBlock);
    $('#generateCommand').click(onClickGenerate);
    $('#switchMode').click(onClickSwitchMode);
    $('#swap_x_z').click(onClickSwapPos);
};
var initPage = function initPage() {
    initInputBox();
    initOutputBox();
    initButton();
};
var init = function() {
    initPage();
};

//Main
init();

//Set value via localStorage
function setValue(item, value) {
    window.localStorage[item] = (typeof value === 'string') ? value : JSON.stringify(value);
}

//Get value via localStorage
function getValue(item, toJSON) {
    return (window.localStorage[item]) ? ((toJSON) ? JSON.parse(window.localStorage[item]) : window.localStorage[item]) : null;
}

//IE Fix
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(searchElement /*, fromIndex */ ) {
        'use strict';
        if (this == null) {
            throw new TypeError();
        }
        var n, k, t = Object(this),
            len = t.length >>> 0;

        if (len === 0) {
            return -1;
        }
        n = 0;
        if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n != n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n != 0 && n != Infinity && n != -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        for (k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
}
