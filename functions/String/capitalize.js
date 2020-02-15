export default ({
    name: 'capitalize',
    description: 'Converts the first character of string to upper case and the remaining to lower case.',
    arguments: [{
        name: 'str',
        type: 'String',
        description: 'The string to capitalize.'
    }],
    returns: {
        type: 'String',
        description: 'Returns the capitalized string.'
    },
    example: `R_.capitalize(nil) # => ''
R_.capitalize(4) # =>'4'
R_.capitalize('fiverr') # =>'Fiverr'`
});
