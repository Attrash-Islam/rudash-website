export default ({
    name: 'eq?',
    description: 'Performs a reference comparison between two values to determine if they are equivalent.',
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
    example: `hash1 = { a: 1 }
hash2 = { a: 1 }

R_.eq?(hash1, hash2) # => false
R_.eq?(hash1, hash1) # => true`    
});
