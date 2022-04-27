import * as Result from '../src/Result';

const _makeOk = <T>(value: T) => ({
  _tag: 'ok',
  value
});

const _makeErr = <T>(err: T) => ({
  _tag: 'err',
  err
});

describe('Result', () => {

  describe('constructors', () => {
    describe('ok()', () => {
      test('should return Ok "foobar"', () => {
        expect(
          Result.ok('foobar')
        ).toMatchObject(_makeOk('foobar'));
      });
    });

    describe('err()', () => {
      test('should return Err "foobar"', () => {
        expect(
          Result.err('foobar')
        ).toMatchObject(_makeErr('foobar'));
      });
    });
  });

});
