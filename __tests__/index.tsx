import stringifyParams from "../src";

describe('stringifyParams', () => {
  it('should return empty string if there are no keys', () => {
    expect(stringifyParams({

    })).toEqual('');
  });

  it('should work with basic types', () => {
    expect(stringifyParams({
      param1: 1,
      param2: 'yo',
      'param-3': 'hehe'
    })).toEqual('?param1=1&param2=yo&param-3=hehe')
  });

  it('should remove empty params', () => {
    expect(stringifyParams({
      param1: 1,
      param2: undefined,
      3: 3
    })).toEqual('?3=3&param1=1')
  });

  it.skip('should work with nested objects', () => {

  })
});
