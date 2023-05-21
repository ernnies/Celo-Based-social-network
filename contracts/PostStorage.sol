contract PostStorage {
    struct Post {
        string content;
        address author;
        uint256 timestamp;
    }

    mapping(uint256 => Post) public posts;
    uint256 public postCount;

    function createPost(string memory _content) public {
        postCount++;
        posts[postCount] = Post(_content, msg.sender, block.timestamp);
    }
}