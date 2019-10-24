export default ({
    name: 'find',
    description: 'Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with two arguments: (value, index|key).',
    arguments: [{
        name: 'collection',
        type: 'Array|Hash',
        description: 'The collection to inspect.'
    }, {
        name: 'iteratee_fn',
        type: 'Proc',
        default: 'R_.identity',
        description: 'The proc function invoked per iteration.'
    }],
    returns: {
        type: '*',
        description: 'Returns the matched element, else nil.'
    },
    example: `is_even = -> (value) { value % 2 === 0 }
R_.find([1,2,3,4], is_even) # => 2

persons = [
    { name: 'islam', sex: 'male' },
    { name: 'sabel', sex: 'female' },
    { name: 'sonia', sex: 'female' }
]

R_.find(persons, { sex: 'female' }) # => { name: 'sabel', sex: 'female' }`
});
