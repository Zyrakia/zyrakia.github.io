var terminal = document.querySelector('.terminal');
var def = "\nSOLO||Established connection with remote server\nSOLO||Awaiting user input...\nRAW||\nRAW||\nSOLO||Error occured\nSOLO||Forcing remote connection to terminate... Goodbye world!\n";
function domify(lines) {
    var lineElements = [];
    lines.forEach(function (line) {
        var split = line.split('||');
        var type = split.splice(0, 1)[0].toLowerCase();
        var content = split.join('');
        var elem = document.createElement('div');
        switch (type) {
            case 'solo':
                elem.classList.add('line');
                elem.setAttribute('data-type', type);
                elem.innerText = content;
                break;
            case 'start':
                elem.classList.add('line', 'start');
                elem.setAttribute('data-type', type);
                elem.innerText = content;
                break;
            case 'end':
                elem.classList.add('line', 'end');
                elem.setAttribute('data-type', type);
                elem.innerText = content;
                break;
            case 'raw':
                elem.classList.add('line', 'raw');
                elem.setAttribute('data-type', type);
                if (!content)
                    elem.innerHTML = '&nbsp;';
                else
                    elem.innerText = content;
                break;
            default:
                var typeSplit = type.split('indent');
                if (typeSplit.length !== 2)
                    return;
                elem.classList.add('line');
                elem.setAttribute('data-type', 'indent');
                elem.setAttribute('data-level', typeSplit[1]);
                elem.innerText = content;
                break;
        }
        lineElements.push(elem);
    });
    return lineElements;
}
function type(e) {
    var i = 0;
    var speed = 150;
    var currentE = e[0];
    var text = currentE.innerText;
    currentE.innerText = '';
    currentE.style.display = 'block';
    setTimeout(function () {
        currentE.classList.add('caret');
    }, 50);
    typeWriter();
    function typeWriter() {
        if (i < text.length) {
            currentE.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, Math.random() * speed);
        }
        else {
            e.splice(0, 1);
            setTimeout(function () {
                currentE.classList.remove('caret');
            }, 50);
            if (e.length)
                type(e);
        }
    }
}
var elems = domify(def.split('\n'));
elems.forEach(function (elem) {
    elem.style.display = 'none';
    terminal.appendChild(elem);
});
type(elems);
