'use strict';

describe('Service: mock', function () {

  // load the service's module
  beforeEach(module('cpfCnpjApp'));

  // instantiate service
  var mock;
  beforeEach(inject(function (_mock_) {
    mock = _mock_;
  }));

  it('should do something', function () {
    expect(!!mock).toBe(true);
  });

});
