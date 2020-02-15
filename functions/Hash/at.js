export default ({
    name: 'at',
    description: 'Creates an array of values corresponding to paths of hash.',
    arguments: [{
        name: 'object',
        type: 'Array|Hash',
        description: 'The object to query.'
    }, {
        name: 'paths',
        type: 'String[]',
        description: 'The paths of the properties to get.'
    }],
    returns: {
        type: '*[]',
        description: 'Returns the resolved values.'
    },
    example: `# Simple hash
hash = { a: 1, b: 2 }
R_.at(hash, ['a', 'b']) # => [1, 2]

hash = { 'a' => 1, 'b' => 2 }
R_.at(hash, ['a', 'b']) # => [1, 2]

hash = { a: { b: { c: 3 } } }
R_.at(hash, ['a.b', 'a.b.c']) # => [{ c: 3 }, 3]`
});
