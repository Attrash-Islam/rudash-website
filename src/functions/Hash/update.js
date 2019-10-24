export default ({
    name: 'update',
    description: 'This method is like R_.set except that accepts updater proc to produce the value to set.',
    arguments: [{
        name: 'object',
        type: 'Array|Hash',
        description: 'The object to modify.'
    }, {
        name: 'path',
        type: 'String',
        description: 'The path of the property to set.'
    }, {
        name: 'updater_fn',
        type: 'Proc',
        description: 'The proc to produce the updated value depends on the current value.'
    }],
    returns: {
        type: 'Hash|Array',
        description: 'Returns object.'
    },
    example: `# Already exist path
hash = { a: [{ b: { c: 3 } }] };
manipulate_self = -> (n) { n * n }

R_.update(hash, 'a[0].b.c', manipulate_self)
hash # => { a: [{ b: { c: 9 } }] }

# For not exist paths
hash = { a: [{ b: { c: 3 } }] }

add_one_if_exist_else_zero = -> (n) {
    n.nil? ? 0 : n + 1
}

R_.update(hash, 'x[0].y.z', add_one_if_exist_else_zero);
hash # => { a: [{ b: { c: 3 } }], x: [{ y: { z: 0 }}] }`
});
