// test/UserRegistry.test.js

const UserRegistry = artifacts.require('UserRegistry');

contract('UserRegistry', (accounts) => {
  let userRegistry;

  beforeEach(async () => {
    userRegistry = await UserRegistry.new();
  });

  it('should register a user', async () => {
    const user = accounts[0];
    await userRegistry.registerUser({ from: user });
    const isRegistered = await userRegistry.registeredUsers(user);
    assert.isTrue(isRegistered);
  });

  it('should not allow duplicate user registration', async () => {
    const user = accounts[0];
    await userRegistry.registerUser({ from: user });

    try {
      await userRegistry.registerUser({ from: user });
      assert.fail('Expected an exception');
    } catch (error) {
      assert.include(error.message, 'User already registered.');
    }
  });
});
