export default ({
    name: 'empty?',
    description: 'Checks if value is an empty collection.',
    arguments: [{
        name: 'value',
        type: '*',
        description: 'Any value.'
    }],
    returns: {
        type: 'Boolean',
        description: 'Returns true if value is empty, else false.'
    },
    example: `R_.empty?([1, 2, 3]) # => false
R_.empty?({ a: 1 }) # => false
R_.empty?([]) # => true
R_.empty?({}) # => true`    
});
