export default ({
    name: 'filter',
    description: 'Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with two arguments: [value, index|key].',
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
        type: 'Array',
        description: 'Returns the new filtered array.'
    },
    example: `# Filtering array
is_even = ->(value) { value.even? }
R_.filter([1, 2, 3, 4], is_even) # => [2, 4]

# Filtering array of hashes
persons = [
    { name: 'islam', sex: 'male' },
    { name: 'sabel', sex: 'female' },
    { name: 'sonia', sex: 'female' }
]

R_.filter(persons, { sex: 'female' })
# => [{ name: 'sabel', sex: 'female' }, { name: 'sonia', sex: 'female' }]

# Filtering hash
is_even = ->(v) { v.even? }
R_.filter({ a: 1, b: 2, c: 3, d: 4 }, is_even) # => [2, 4]`
});
