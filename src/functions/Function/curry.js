export default ({
    name: 'curry',
    description: 'Creates a proc that accepts arguments of proc and either invokes proc returning its result, if at least arity number of arguments have been provided, or returns a proc that accepts the remaining func arguments, and so on.',
    arguments: [{
        name: 'func',
        type: 'Proc',
        description: 'The proc to curry.'
    }],
    returns: {
        type: 'Proc',
        description: 'Returns the new curried proc.'
    },
    example: `inc = -> (a, b) { a + b }
incByOne = R_.curry(inc).(1)
incByOne.(3) # => 4`
});
