export default ({
    name: 'drop_right',
    description: 'Creates a slice of array with n elements dropped from the end.',
    arguments: [{
        name: 'array',
        type: 'Array',
        description: 'The array to inspect.'
    }, {
        name: 'n',
        type: 'Number',
        default: 1,
        description: 'The number of elements to drop.'
    }],
    returns: {
        type: 'Array',
        description: 'Returns the slice of array.'
    },
    example: `array = [1, 2, 3]

R_.drop_right(array) # => [1, 2]
R_.drop_right(array, 2) # => [1]`
});
