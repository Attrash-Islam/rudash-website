export default ({
    name: 'curry',
    description: 'Creates a lambda that accepts arguments of lambda and either invokes lambda returning its result, if at least arity number of arguments have been provided, or returns a lambda that accepts the remaining func arguments, and so on.',
    arguments: [{
        name: 'func',
        type: 'Lambda',
        description: 'The lambda to curry.'
    }],
    returns: {
        type: 'Lambda',
        description: 'Returns the new curried lambda.'
    },
    example: `inc = ->(a, b) { a + b }
incByOne = R_.curry(inc).call(1)
incByOne.call(3) # => 4`
});
