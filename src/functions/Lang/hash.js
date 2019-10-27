export default ({
    name: 'hash?',
    description: 'Checks if value is classified as an Hash object.',
    arguments: [{
        name: 'value',
        type: '*',
        description: 'Any value.'
    }],
    returns: {
        type: 'Boolean',
        description: 'Returns true if value is a hash, else false.'
    },
    example: `R_.hash?([1, 2, 3]) # => false
R_.hash?({ a: 1 }) # => true`
});
