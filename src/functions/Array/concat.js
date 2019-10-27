export default ({
    name: 'concat',
    description: 'Creates a new array concatenating array with any additional arrays and/or values.',
    arguments: [{
        name: 'array',
        type: 'Array',
        description: 'The array to concatenate.'
    }, {
        name: 'values*',
        type: '*',
        description: 'The values to concatenate.'
    }],
    returns: {
        type: 'Array',
        description: 'Returns the new concatenated array.'
    },
    example: `arr1 = [1, 2, 3]
arr2 = [4]
R_.concat(arr1, arr2) # => [1, 2, 3, 4]

R_.concat(1, { a: 1 }) # => [1, { a: 1 }]`
});
