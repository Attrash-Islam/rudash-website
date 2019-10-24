export default ({
    name: 'flow_right',
    description: 'This method is like R_.flow except that it creates a proc that invokes the given procs from right to left.',
    arguments: [{
        name: 'procs',
        type: '...Proc|Proc[]',
        description: 'The procs to invoke.'
    }],
    returns: {
        type: 'Proc',
        description: 'Returns the new composite Proc.'
    },
    example: `square = -> (number) { number * number }
double = -> (number) { number * 2 }
composed = R_.flow([square, double])
composed.(10, 20) # => 400`
});
