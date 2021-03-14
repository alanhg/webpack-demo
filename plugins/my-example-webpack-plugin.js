class HelloWorldPlugin {
    apply(compiler) {
        // Specify the event hook to attach to
        compiler.hooks.done.tap(
            'Hello World Plugin',
            (compilation) => {
                console.log('Hello World!');
            }
        );
    }
}

module.exports = HelloWorldPlugin;
