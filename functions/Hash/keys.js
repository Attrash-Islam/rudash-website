export default ({
    name: 'keys',
    description: 'Gets the keys of hash.',
    arguments: [{
        name: 'hash',
        type: 'Hash',
        description: 'The hash to query.'
    }],
    returns: {
        type: 'Array',
        description: 'Returns the array of keys.'
    },
    example: `hash = { a: 1, b: 2 }
R_.keys(hash) # => ['a', 'b']`
});
