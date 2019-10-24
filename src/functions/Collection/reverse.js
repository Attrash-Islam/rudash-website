export default ({
    name: 'reverse',
    description: 'Reverses array and/or string so that the first element becomes the last, the second element becomes the second to last, and so on.',
    arguments: [{
        name: 'collection',
        type: 'Array|string',
        description: 'The collection to modify.'
    }],
    returns: {
        type: 'Array|string',
        description: 'Returns the reversed collection.'
    },
    example: `R_.reverse([1,2,3]) # => [3,2,1]
R_.reverse('islam') # => 'malsi'`
});
