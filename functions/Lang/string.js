export default ({
    name: 'string?',
    description: 'Checks if value is string.',
    arguments: [{
        name: 'value',
        type: '*',
        description: 'Any value.'
    }],
    returns: {
        type: 'Boolean',
        description: 'Returns true if value is string, else false.'
    },
    example: `R_.string?(nil) # => false
R_.string?('str') # => true`
});
