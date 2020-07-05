import bar from './bar';

bar();


/**
 * test dynamic import
 * @param e
 */
function asyncLoad(e) {
    import(/* webpackChunkName: "async-job",webpackPreload: true  */'xlsx');
}

const button = document.createElement("button");
button.innerHTML = 'dynamic import';
button.addEventListener('click', asyncLoad);
document.getElementById('root').appendChild(button);

/**
 * test xhr to get js file
 * @param e
 */
function xhrLoad(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', './xhr-content.js', true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            eval(xhr.responseText);
        }
    }
}

var button2 = document.createElement("button");
button2.innerHTML = 'xhr get js';
button2.addEventListener('click', xhrLoad);

document.getElementById('root').appendChild(button2);
