export default ({
    name: 'set',
    description: 'Sets the value at path of object. If a portion of path doesn\'t exist, it\'s created.',
    arguments: [{
        name: 'object',
        type: 'Array|Hash',
        description: 'The object to query.'
    }, {
        name: 'path',
        type: 'String',
        description: 'The path of the property to set.'
    }, {
        name: 'value',
        type: '*',
        description: 'The value to set.'
    }],
    returns: {
        type: 'Hash|Array',
        description: 'Returns object.'
    },
    example: `# Simple hash
hash = { a: 1, b: 2 }
R_.set(hash, 'a', 2)
hash # => { a: 2, b: 2 }

# Hash path creation if not exist
hash = { a: 1, b: 2 }
R_.set(hash, 'c.x.y', 2)
hash # => { a: 1, b: 2, c: { x: { y: 2 } } }

# Hash containing array
hash = { a: 1, b: 2 }
R_.set(hash, 'c.x.y[0]', 2)
hash # => { a: 1, b: 2, c: { x: { y: [2] } } }`
});
