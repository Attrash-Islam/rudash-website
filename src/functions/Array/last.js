export default ({
    name: 'last',
    description: 'Gets the last element of array.',
    arguments: [{
        name: 'array',
        type: 'Array',
        description: 'The array to query.'
    }],
    returns: {
        type: '*',
        description: 'Returns the last element of array.'
    },
    example: `array = [1, 2, 3]
R_.last(array) # => 3

empty_array = []
R_.last(empty_array) # => nil`
});
