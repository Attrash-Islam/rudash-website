export default ({
    name: 'remove',
    description: 'Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with two arguments: (value, index).',
    arguments: [{
        name: 'array',
        type: 'Array',
        description: 'The array to modify.'
    }, {
        name: 'predicate_fn',
        type: 'Proc',
        default: 'R_.identity',
        description: 'The proc invoked per iteration.'
    }],
    returns: {
        type: 'Array',
        description: 'Returns the new array of removed elements.'
    },
    example: `# Simple arrays
array = [1, 2, 3, 4]
is_even = -> (v) { v % 2 === 0 }
removed_items = R_.remove(array, is_even)

removed_items # => [2,4]
array # => [1,3]

# Array of hashes
persons = [
    { name: 'islam', sex: 'male' },
    { name: 'sabel', sex: 'female' },
    { name: 'sonia', sex: 'female' }
]

removed_persons = R_.remove(persons, { sex: 'female' })

removed_persons # => [{ name: 'sabel', sex: 'female' },{ name: 'sonia', sex: 'female' }]
persons # => [{ name: 'islam', sex: 'male' }]`
});
