export default ({
    name: 'equal?',
    description: 'Performs a deep comparison between two values to determine if they are equivalent.',
    arguments: [{
        name: 'value',
        type: '*',
        description: 'value to compare.'
    }, {
        name: 'other',
        type: '*',
        description: 'other value to compare.'
    }],
    returns: {
        type: 'Boolean',
        description: 'Returns true if the values are equivalent, else false.'
    },
    example: `hash1 = { a: { b: 2 } }
hash2 = { a: { b: 2 } }
R_.equal?(hash1, hash2) # => true`    
});
