import bar from './bar';

bar();

function asyncLoad() {
    import('./async-job').then(module => {
        const func = module.default;
        func();
    });
}

document.getElementById('root').innerHTML = `<button onclick="()=>asyncLoad()">click me</button>`
