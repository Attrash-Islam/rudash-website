export default ({
    name: 'flow',
    description: 'Creates a proc that returns the result of invoking the given procs with the this binding of the created proc, where each successive invocation is supplied the return value of the previous.',
    arguments: [{
        name: 'procs',
        type: '...Proc|Proc[]',
        description: 'The procs to invoke.'
    }],
    returns: {
        type: 'Proc',
        description: 'Returns the new composite Proc.'
    },
    example: `inc_two_numbers = ->(num1, num2) { num1 + num2 }
square = ->(number) { number * number }
double = ->(number) { number * 2 }
composed = R_.flow([inc_two_numbers, square, double])
composed.call(10, 20) # => 1800`
});
