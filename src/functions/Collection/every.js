export default ({
    name: 'every?',
    description: 'Checks if predicate returns truthy for all elements of array.',
    arguments: [{
        name: 'collection',
        type: 'Array|Hash',
        description: 'The collection to iterate over.'
    }, {
        name: 'predicate_fn',
        type: 'Proc',
        default: 'R_.identity',
        description: 'The proc function invoked per iteration.'
    }],
    returns: {
        type: 'Boolean',
        description: 'Returns true if all elements pass the predicate check, else false.'
    },
    example: `is_even = ->(value) { value.even? }
R_.every?([1, 2, 3, 4], is_even) # => false

persons = [
    { name: 'islam', sex: 'male' },
    { name: 'sabel', sex: 'female' },
    { name: 'sonia', sex: 'female' }
]
        
R_.every?(persons, { sex: 'male' }) # => false`
});
