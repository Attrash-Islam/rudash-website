export default ({
    name: 'uniq',
    description: 'Creates a duplicate-free version of an array.',
    arguments: [{
        name: 'array',
        type: 'Array',
        description: 'The array to inspect.'
    }],
    returns: {
        type: 'Array',
        description: 'Returns the new duplicate free array.'
    },
    example: `array = [1,2, 2, 3, 3, 3]
R_.uniq(array) # => [1,2,3]`
});
