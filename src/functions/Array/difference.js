export default ({
    name: 'difference',
    description: 'Creates an array of array values not included in the other given arrays. The order and references of result values are determined by the first array.',
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
arr2 = [2]
arr3 = [3]

R_.difference(arr1, arr2) # => [1, 3]
R_.difference(arr1, arr2, arr3) # => [1]`
});
