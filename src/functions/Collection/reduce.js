export default ({
    name: 'reduce',
    description: 'Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not given, the first element of collection is used as the initial value. The iteratee is invoked with four arguments: (accumulator, value, index|key).',
    arguments: [{
        name: 'collection',
        type: 'Array|Hash',
        description: 'The collection to iterate over.'
    }, {
        name: 'iteratee_fn',
        type: 'Lambda',
        default: 'R_.identity',
        description: 'The lambda function invoked per iteration.'
    }, {
        name: 'accumulator',
        type: '*',
        description: 'The initial value.'
    }],
    returns: {
        type: '*',
        description: 'Returns the accumulated value.'
    },
    example: `# Array reducer
sumer = ->(acc, current) {
    acc + current
}

R_.reduce([1, 2, 3, 4, 5], sumer) # => 15

# Hash reducer
hash = { a: 1, b: 2 }
hash_sumer = ->(acc, current) { acc + current }
R_.reduce(hash, hash_sumer, 0) # => 3

# String reducer
joiner = ->(acc, current) {
    acc + ',' + current
}

R_.reduce('islam', joiner) # => 'i,s,l,a,m'`
});
