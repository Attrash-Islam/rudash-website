export default ({
    name: 'range',
    description: 'Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it\'s set to start with start then set to 0.',
    arguments: [{
        name: 'start',
        type: 'Number',
        default: 0,
        description: 'The start of the range.'
    }, {
        name: 'end',
        type: 'Number',
        description: 'The end of the range.'
    }, {
        name: 'step',
        type: 'Number',
        description: 'The value to increment or decrement by.'
    }],
    returns: {
        type: 'Array',
        description: 'Returns the range of numbers.'
    },
    example: `R_.range(4) # => [0, 1, 2, 3]
R_.range(-4) # => [0, -1, -2, -3]
R_.range(1, 5) # => [1, 2, 3, 4]
R_.range(0, 20, 5) # => [0, 5, 10, 15]
R_.range(0, -4, -1) # => [0, -1, -2, -3]
R_.range(1, 4, 0) # => [1, 1, 1]
R_.range(0) # => []`
});
