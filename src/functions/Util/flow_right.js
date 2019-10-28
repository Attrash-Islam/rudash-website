export default ({
    name: 'flow_right',
    description: 'This method is like R_.flow except that it creates a lambda that invokes the given lambdas from right to left.',
    arguments: [{
        name: 'lambdas',
        type: '...Lambda|Lambda[]',
        description: 'The lambdas to invoke.'
    }],
    returns: {
        type: 'Lambda',
        description: 'Returns the new composite Lambda.'
    },
    example: `square = ->(number) { number * number }
double = ->(number) { number * 2 }
composed = R_.flow([square, double])
composed.call(10, 20) # => 400`
});
