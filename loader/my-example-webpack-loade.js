const {getOptions} = require('loader-utils');
const validate = require('schema-utils');

const schema = {
    type: 'object',
    properties: {
        test: {
            type: 'string',
        },
    },
};

module.exports = function (source) {
    const options = getOptions(this);

    validate(schema, options, {
        name: 'Example Loader',
        baseDataPath: 'options',
    });

    // Apply some transformations to the source...

    return `export default ${JSON.stringify(source)}`;
}
