export default ({
    name: 'head',
    description: 'Gets the first element of array.',
    arguments: [{
        name: 'array',
        type: 'Array',
        description: 'The array to query.'
    }],
    returns: {
        type: '*',
        description: 'Returns the first element of array.'
    },
    example: `array = [1,2,3]
R_.head(array) # => 1

empty_array = []
R_.head(empty_array) # => nil`
});
