export default ({
    name: 'reduce_right',
    description: 'This method is like R_.reduce except that it iterates over elements of collection from right to left.',
    arguments: [{
        name: 'collection',
        type: 'Array|Hash',
        description: 'The collection to iterate over.'
    }, {
        name: 'iteratee_fn',
        type: 'Proc',
        default: 'R_.identity',
        description: 'The proc function invoked per iteration.'
    }, {
        name: 'accumulator',
        type: '*',
        description: 'The initial value.'
    }],
    returns: {
        type: '*',
        description: 'Returns the accumulated value.'
    },
    example: `sumer = ->(acc, current) {
    acc + current
}

R_.reduce_right([1, 2, 3, 4, 5], sumer) # => 15

hash = { a: 1, b: 2 }
hash_sumer = ->(acc, current) { acc + current }
R_.reduce_right(hash, hash_sumer, 0) # => 3`
});
