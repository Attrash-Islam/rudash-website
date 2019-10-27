export default ({
    name: 'nil?',
    description: 'Checks if value is nil.',
    arguments: [{
        name: 'value',
        type: '*',
        description: 'Any value.'
    }],
    returns: {
        type: 'Boolean',
        description: 'Returns true if value is nilish, else false.'
    },
    example: `R_.nil?(nil) # => true
R_.nil?(0) # => false`
});
