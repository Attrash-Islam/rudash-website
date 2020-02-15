export default ({
    name: 'number?',
    description: 'Checks if value is classified as an Numeric object.',
    arguments: [{
        name: 'value',
        type: '*',
        description: 'Any value.'
    }],
    returns: {
        type: 'Boolean',
        description: 'Returns true if value is a number, else false.'
    },
    example: `R_.number?(56) # => true
R_.number?({ a: 1 }) # => false`    
});
