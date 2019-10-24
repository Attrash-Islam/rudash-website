export default ({
    name: 'get',
    description: 'Gets the value at path of object.',
    arguments: [{
        name: 'object',
        type: 'Array|Hash',
        description: 'The object to query.'
    }, {
        name: 'path',
        type: 'String',
        description: 'The path of the property to get.'
    }],
    returns: {
        type: '*',
        description: 'Returns the resolved value.'
    },
    example: `# Simple hash
hash = { a: 1, b: 2 }
R_.get(hash, 'a') # => 1
R_.get(hash, 'b') # => 2

# Complex hash with arrays
hash = { a: { b: { c: [{ a: 1 }] } } }
R_.get(hash, 'a.b.c.0.a') # => 1

# You can use also array [] notations
R_.get(hash, 'a.b.c[0].a') # => 1

# You can use Array paths
array_path = ['a', 'b', 'c', '0', 'a']
R_.get(hash, array_path) # => 1

# Not found case
hash = { a: 1, b: 2 }
R_.get(hash, 'a.b.c.xvx.a') # => nil`
});
