export default ({
    name: 'reject',
    description: 'The opposite of R_.filter, this method returns the elements of collection that predicate does not return truthy for.',
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
R_.reject([1, 2, 3, 4], is_even) # => [1, 3]

# Filtering array of hashes
persons = [
    { name: 'islam', sex: 'male' },
    { name: 'sabel', sex: 'female' },
    { name: 'sonia', sex: 'female' }
]

R_.reject(persons, { sex: 'female' })
# => [{ name: 'islam', sex: 'male' }]

# Filtering hash
is_even = ->(v, _k) { v.even? }
R_.reject({ a: 1, b: 2, c: 3, d: 4 }, is_even) # => [1, 3]`
});
