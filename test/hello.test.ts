import {expect} from 'chai';

import {hello} from '../src';

describe('hello utility', () => {
  it('returns hello string', () => {
    const result = hello();
    expect(result).to.equal('hello');
  });
});