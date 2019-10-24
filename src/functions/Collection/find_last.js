export default ({
    name: 'find_last',
    description: 'This method is like R_.find except that it iterates over elements of collection from right to left.',
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
R_.find_last([1,2,3,4], is_even) # => 4

persons = [
    { name: 'islam', sex: 'male' },
    { name: 'sabel', sex: 'female' },
    { name: 'sonia', sex: 'female' }
]

R_.find_last(persons, { sex: 'female' }) # => { name: 'sonia', sex: 'female' }`
});
