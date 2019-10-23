export default ({
    name: 'join',
    description: 'Converts all elements in array into a string separated by separator.',
    arguments: [{
        name: 'array',
        type: 'Array',
        description: 'The array to convert.'
    }, {
        name: 'separator',
        type: 'String',
        default: '\',\'',
        description: 'The element separator.'
    }],
    returns: {
        type: 'String',
        description: 'Returns the joined string.'
    },
    example: `R_.join([1,2,3]) # => '1,2,3'
R_.join([1,2,3], '*') # => '1*2*3'
R_.join([1,2,3], 5) # => '15253'
R_.join(0) # => ''`
});
