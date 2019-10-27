export default ({
    name: 'array?',
    description: 'Checks if value is classified as an Array object.',
    arguments: [{
        name: 'value',
        type: '*',
        description: 'Any value.'
    }],
    returns: {
        type: 'Boolean',
        description: 'Returns true if value is an array, else false.'
    },
    example: `R_.array?([1, 2, 3]) # => true
R_.array?({ a: 1 }) # => false`
});
