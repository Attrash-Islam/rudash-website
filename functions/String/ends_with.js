export default ({
    name: 'ends_with?',
    description: 'Checks if string ends with the given target string.',
    arguments: [{
        name: 'string',
        type: 'String',
        description: 'The string to inspect.'
    }],
    returns: {
        type: 'Boolean',
        description: 'Returns true if string ends with target, else false.'
    },
    example: `R_.ends_with?('islam', 'am') # => true
R_.ends_with?('islam1', 1) # => true
R_.ends_with?('islam', 'xyz') # => false`
});
