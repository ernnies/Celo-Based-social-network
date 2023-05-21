// test/PostStorage.test.js

const PostStorage = artifacts.require('PostStorage');

contract('PostStorage', (accounts) => {
  let postStorage;

  beforeEach(async () => {
    postStorage = await PostStorage.new();
  });

  it('should create and retrieve a post', async () => {
    const postId = '123';
    const content = 'This is a test post.';
    await postStorage.createPost(postId, content, { from: accounts[0] });

    const retrievedPost = await postStorage.getPost(postId);
    assert.equal(retrievedPost.content, content);
    assert.equal(retrievedPost.author, accounts[0]);
  });

  it('should update a post', async () => {
    const postId = '123';
    const initialContent = 'Initial content';
    const updatedContent = 'Updated content';

    await postStorage.createPost(postId, initialContent, { from: accounts[0] });
    await postStorage.updatePost(postId, updatedContent, { from: accounts[0] });

    const retrievedPost = await postStorage.getPost(postId);
    assert.equal(retrievedPost.content, updatedContent);
  });

  it('should not allow unauthorized post updates', async () => {
    const postId = '123';
    const initialContent = 'Initial content';
    const updatedContent = 'Updated content';

    await postStorage.createPost(postId, initialContent, { from: accounts[0] });

    try {
      await postStorage.updatePost(postId, updatedContent, { from: accounts[1] });
      assert.fail('Expected an exception');
    } catch (error) {
      assert.include(error.message, 'Unauthorized update');
    }

    const retrievedPost = await postStorage.getPost(postId);
    assert.equal(retrievedPost.content, initialContent);
  });
});
