export default ({
    name: 'slice',
    description: 'Creates a slice of array from start up to, but not including, end.',
    arguments: [{
        name: 'array',
        type: 'Array',
        description: 'The array to slice.'
    }, {
        name: 'start',
        type: 'Number',
        default: 0,
        description: 'The start position.'
    }, {
        name: 'end',
        type: 'Number',
        default: 'array.size',
        description: 'The end position.'
    }],
    returns: {
        type: 'Array',
        description: 'Returns the slice of array.'
    },
    example: `R_.slice([1, 2, 3], 0, 2) # => [1, 2]
R_.slice([1, 2, 3], 1) # => [2, 3]
R_.slice([1, 2, 3], 1, 2) # => [2]
R_.slice([1, 2, 3, 4, 5, 6], 0, 3) # => [1, 2, 3]`
});
