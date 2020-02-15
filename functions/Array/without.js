export default ({
    name: 'without',
    description: 'Creates an array excluding all given values.',
    arguments: [{
        name: 'array',
        type: 'Array',
        description: 'The array to inspect.'
    }, {
        name: 'values*',
        type: '...Array',
        default: '[]',
        description: 'The values to exclude.'
    }],
    returns: {
        type: 'Array',
        description: 'Returns the new array of filtered values.'
    },
    example: `arr1 = [1, 2, 3]

R_.without(arr1, 2) # => [1, 3]
R_.without(arr1, 2, 3) # => [1]`
});
