export default ({
    name: 'size',
    description: 'Gets the size of collection by returning its length for array-like values or the number of own enumerable string keyed properties for objects.',
    arguments: [{
        name: 'collection',
        type: 'Array|Hash|String',
        description: 'The collection to inspect.'
    }],
    returns: {
        type: 'Number',
        description: 'Returns the collection size.'
    },
    example: `R_.size([1, 2, 3]) # => 3
R_.size({a: 1, b: 2}) # => 2
R_.size("pebbles") # => 7`
});
