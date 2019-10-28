export default ({
    name: 'flow',
    description: 'Creates a lambda that returns the result of invoking the given lambdas with the this binding of the created lambda, where each successive invocation is supplied the return value of the previous.',
    arguments: [{
        name: 'lambdas',
        type: '...Lambda|Lambda[]',
        description: 'The lambdas to invoke.'
    }],
    returns: {
        type: 'Lambda',
        description: 'Returns the new composite Lambda.'
    },
    example: `inc_two_numbers = ->(num1, num2) { num1 + num2 }
square = ->(number) { number * number }
double = ->(number) { number * 2 }
composed = R_.flow([inc_two_numbers, square, double])
composed.call(10, 20) # => 1800`
});
