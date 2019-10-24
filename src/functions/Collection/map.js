export default ({
    name: 'map',
    description: 'Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with two arguments: [value, index|key].',
    arguments: [{
        name: 'collection',
        type: 'Array|Hash',
        description: 'The collection to iterate over.'
    }, {
        name: 'iteratee_fn',
        type: 'Proc',
        default: 'R_.identity',
        description: 'The proc function invoked per iteration.'
    }],
    returns: {
        type: 'Array',
        description: 'Returns the new mapped array.'
    },
    example: `# Map for values
double = -> (value) { value * 2 }
R_.map([1,2,3], double) # => [2,4,6]

# Map for values and indexes
double_even_index = -> (value, index) {
    index % 2 === 0 ? value * 2 : value
}

R_.map([1,2,3,4,5,6,7,8,9], double_even_index) # => [2,2,6,4,10,6,14,8,18]

# Mapping Hashes
inc_by_one = -> (value) { value + 1 }
hash = { a: 1 }
R_.map(hash, inc_by_one) # => [2]

# Mapping Strings
add_e_to_even_indexes = -> (value, index) {
    index % 2 === 0 ? value + 'e' : value
}

R_.map('islam', add_e_to_even_indexes) # => ["ie", "s", "le", "a", "me"]`
});
