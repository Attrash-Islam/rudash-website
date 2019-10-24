export default ({
    name: 'flip',
    description: 'Creates a proc that invokes the passed proc with arguments reversed.',
    arguments: [{
        name: 'func',
        type: 'Proc',
        description: 'The proc to flip arguments for.'
    }],
    returns: {
        type: 'Proc',
        description: 'Returns the new flipped proc.'
    },
    example: `subtract = -> (a, b) { a - b }
subtract.(2, 1) # => 1

flipped_subtract = R_.flip(subtract)
flipped_subtract.(2, 1) # => -1`
});
