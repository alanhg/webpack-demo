import bar from './bar';

bar();

function asyncLoad(e) {
    import(/* webpackChunkName: "async-job" */'./async-job');
}

var button = document.createElement("button");
button.innerHTML = 'click me';
button.addEventListener('click', asyncLoad);
document.getElementById('root').appendChild(button);
