export default ({
    name: 'tail',
    description: 'Gets all but the first element of array.',
    arguments: [{
        name: 'array',
        type: 'Array',
        description: 'The array to query.'
    }],
    returns: {
        type: '*',
        description: 'Returns the slice of array.'
    },
    example: `array = [1, 2, 3]
R_.tail(array) # => [2, 3]

empty_array = []
R_.tail(empty_array) # => []`
});
