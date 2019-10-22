export default ({
    name: 'compact',
    description: 'Creates an array with all falsey values removed. nil are falsey but [false, 0, and ""] values are truthy values in ruby.',
    arguments: [{
        name: 'array',
        type: 'Array',
        description: 'The array to compact.'
    }],
    returns: {
        type: 'Array',
        description: 'Returns the new array of filtered values'
    },
    example: `array = [1, 0, nil, 'islam']
R_.compact(array) # => [1, 0, 'islam']`
});
