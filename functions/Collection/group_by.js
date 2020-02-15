export default ({
    name: 'group_by',
    description: 'Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The order of grouped values is determined by the order they occur in collection. The corresponding value of each key is an array of elements responsible for generating the key. The iteratee is invoked with one argument: (value).',
    arguments: [{
        name: 'collection',
        type: 'Array|Hash',
        description: 'The collection to iterate over.'
    }, {
        name: 'iteratee_fn',
        type: 'Lambda',
        default: 'R_.identity',
        description: 'The iteratee to transform keys.'
    }],
    returns: {
        type: 'Hash',
        description: 'Returns the composed aggregate object.'
    },
    example: `iteratee = ->(value) { value.floor }
R_.group_by([6.1, 4.2, 6.3], iteratee); # => { '4': [4.2], '6': [6.1, 6.3] }`
});
