export default ({
    name: 'flip',
    description: 'Creates a lambda that invokes the passed lambda with arguments reversed.',
    arguments: [{
        name: 'func',
        type: 'Lambda',
        description: 'The lambda to flip arguments for.'
    }],
    returns: {
        type: 'Lambda',
        description: 'Returns the new flipped lambda.'
    },
    example: `subtract = ->(a, b) { a - b }
subtract.call(2, 1) # => 1

flipped_subtract = R_.flip(subtract)
flipped_subtract.call(2, 1) # => -1`
});
