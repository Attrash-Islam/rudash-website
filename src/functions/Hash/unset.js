export default ({
    name: 'unset',
    description: 'Removes the property at path of object.',
    arguments: [{
        name: 'object',
        type: 'Array|Hash',
        description: 'The object to modify.'
    }, {
        name: 'path',
        type: 'String',
        description: 'The path of the property to unset.'
    }],
    returns: {
        type: 'Boolean',
        description: 'Returns true if the property exists, else false.'
    },
    example: `hash = { a: 1, b: 2, c: { x: { y: 2 } } }

R_.unset(hash, 'c.x.y')
hash # => { a: 1, b: 2, c: { x: {} } }`
});
