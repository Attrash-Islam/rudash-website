export default ({
    name: 'union',
    description: 'Creates an array of unique values, in order, from all given arrays.',
    arguments: [{
        name: 'arrays',
        default: '[]',
        type: '...Array',
        description: 'The arrays to inspect.'
    }],
    returns: {
        type: 'Array',
        description: 'Returns the new array of combined values.'
    },
    example: `R_.union([2, 1], [2, 3]) # => [2,1,3]

# Array of hashes
arr1 = [{ a: 1 }]
arr2 = [{ a: 1 }]
arr3 = [{ a: 1, b: 2 }]
R_.union(arr1, arr2, arr3) # => [{ a: 1 }, { a: 1, b: 2 }]`
});
