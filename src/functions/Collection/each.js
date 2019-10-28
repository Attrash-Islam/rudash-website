export default ({
    name: 'each',
    description: 'Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with two arguments: (value, index|key).',
    arguments: [{
        name: 'collection',
        type: 'Array|Hash',
        description: 'The collection to iterate over.'
    }, {
        name: 'iteratee_fn',
        type: 'Lambda',
        default: 'R_.identity',
        description: 'The lambda function invoked per iteration.'
    }],
    returns: {
        type: 'Array|Hash',
        description: 'Returns collection.'
    },
    example: `# Hash
hash = {a: 1, b: 2}
sum = 0
eacher = ->(value) { sum += value }
R_.each(hash, eacher)
sum # => 3

# Array
array = [1, 2, 3]
new_array = []
eacher = ->(value) { new_array << value }
R_.each(array, eacher)
new_array # => [1, 2, 3]`
});
