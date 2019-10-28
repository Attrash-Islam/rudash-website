export default ({
    name: 'some?',
    description: 'Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate returns truthy. The predicate is invoked with two arguments: (value, index|key).',
    arguments: [{
        name: 'collection',
        type: 'Array|Hash',
        description: 'The collection to iterate over.'
    }, {
        name: 'predicate_fn',
        type: 'Lambda',
        default: 'R_.identity',
        description: 'The lambda function invoked per iteration.'
    }],
    returns: {
        type: 'Boolean',
        description: 'Returns true if any element passes the predicate check, else false.'
    },
    example: `is_even = ->(value) { value.even? }
R_.some?([1, 2, 3, 4], is_even) # => true

persons = [
    { name: 'islam', sex: 'male' },
    { name: 'sabel', sex: 'female' },
    { name: 'sonia', sex: 'female' }
]

R_.some?(persons, { sex: 'male' }) # => true`
});
