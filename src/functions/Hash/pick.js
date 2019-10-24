export default ({
    name: 'pick',
    description: 'Creates an hash composed of the picked hash properties.',
    arguments: [{
        name: 'hash',
        type: 'Hash',
        description: 'The source hash.'
    }, {
        name: 'paths',
        type: 'String|String[]',
        description: 'The property paths to pick.'
    }],
    returns: {
        type: 'Hash',
        description: 'Returns the new hash.'
    },
    example: `# Simple hash with one specific path
hash = { a: 1, b: 2 }
R_.pick(hash, 'a') # => { a: 1 }

# Simple hash with multiple paths
hash = { a: 1, b: 2 }
R_.pick(hash, ['a', 'b']) # => { a: 1, b: 2 }

# Simple hash with ignoring not exist paths
hash = { a: 1, b: 2 }
R_.pick(hash, ['a', 'b', 'c.x']) # => { a: 1, b: 2 }

# Complex Hash and Array
hash = { a: 1, b: 2, c: { x: { y: [2, 1] } } }
picked = R_.pick(hash, ['c.x.y[0]', 'a'])
picked # => { a: 1, c: { x: { y: [2] } } }

picked2 = R_.pick(hash, ['c.x.y[0]', 'c.x.y[1]', 'a'])
picked2 # => { a: 1, c: { x: { y: [2, 1] } } }`
});
