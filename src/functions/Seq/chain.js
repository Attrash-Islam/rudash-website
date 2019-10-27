export default ({
    name: 'chain',
    description: 'Creates a Rudash wrapper instance that wraps value with explicit method chain sequences enabled. The result of such sequences must be unwrapped with value().',
    arguments: [{
        name: 'value',
        type: '*',
        description: 'The value to wrap.'
    }],
    returns: {
        type: 'Object',
        description: 'Returns the new Rudash wrapper instance.'
    },
    example: `filter_even = ->(number) { number.even? }
inc_by_one = ->(number) { number + 1 }

# You can chain using all Rudash functions.
# Pay attention that we are not sending the data ([1, 2, 3, 4])
# in the arguments since it is been sent by the wrapped value
R_.chain([1, 2, 3, 4])
  .filter(filter_even)
  .map(inc_by_one)
  .head()
  .value() # => 3`    
});
