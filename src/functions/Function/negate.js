export default ({
    name: 'negate',
    description: 'Creates a proc that negates the result of the passed proc.',
    arguments: [{
        name: 'func',
        type: 'Proc',
        description: 'The proc to negate.'
    }],
    returns: {
        type: 'Proc',
        description: 'Returns the new negated proc.'
    },
    example: `is_even = -> (value) { value % 2 === 0 }
is_odd = R_.negate(is_even)

is_even.(2) # => true
is_even.(1) # => false
is_odd.(1) # => true
is_odd.(2) # => false

R_.filter([1,2,3,4], is_odd) # => [1,3]`
});
