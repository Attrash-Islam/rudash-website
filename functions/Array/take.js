export default ({
    name: 'take',
    description: 'Creates a slice of array with n elements taken from the beginning.',
    arguments: [{
        name: 'array',
        type: 'Array',
        description: 'The array to query.'
    }, {
        name: 'n',
        type: 'Number',
        default: 1,
        description: 'The number of elements to take.'
    }],
    returns: {
        type: 'Array',
        description: 'Returns the slice of array.'
    },
    example: `array = [1, 2, 3]
R_.take(array) # => [1]

array = [1, 2, 3]
R_.take(array, 2) # => [1, 2]`
});
