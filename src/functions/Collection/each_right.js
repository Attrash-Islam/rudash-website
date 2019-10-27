export default ({
    name: 'each_right',
    description: 'This method is like R_.each except that it iterates over elements of collection from right to left.',
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
        type: 'Array|Hash',
        description: 'Returns collection.'
    },
    example: `# Hash
hash = {a: 1, b: 2}
sum = 0
eacher = ->(value) { sum += value }
R_.each_right(hash, eacher)
sum # => 3

# Array
array = [1, 2, 3]
new_array = []
eacher = ->(value) { new_array << value }
R_.each_right(array, eacher)
new_array # => [3, 2, 1]`
});
