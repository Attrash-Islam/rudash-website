export default ({
    name: 'initial',
    description: 'Gets all but the last element of array.',
    arguments: [{
        name: 'array',
        type: 'Array',
        description: 'The array to query.'
    }],
    returns: {
        type: 'Array',
        description: 'Returns the slice of array.'
    },
    example: `array = [1,2,3]
R_.initial(array) # => [1,2]

one_item_array = [1]
R_.initial(one_item_array) # => []`
});
