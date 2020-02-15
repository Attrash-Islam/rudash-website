export default ({
    name: 'identity',
    description: 'This method returns the first argument it receives.',
    arguments: [{
        name: 'value',
        type: '*',
        description: 'Any value.'
    }],
    returns: {
        type: '*',
        description: 'Returns value.'
    },
    example: `R_.identity(0) # => 0
R_.identity(1, 2) # => 1`
});
