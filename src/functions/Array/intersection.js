export default ({
    name: 'intersection',
    description: 'Creates an array of unique values that are included in all given arrays.',
    arguments: [{
        name: 'arrays',
        default: '[]',
        type: '...Array',
        description: 'The arrays to inspect.'
    }],
    returns: {
        type: 'Array',
        description: 'Returns the new array of intersecting values.'
    },
    example: `R_.intersection([2, 1], [2, 3]) # => [2]
R_.intersection([1,2,3], [1,2], [2]) # => [2]`
});
