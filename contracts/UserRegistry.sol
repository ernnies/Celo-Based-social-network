contract UserRegistry {
    mapping(address => bool) public registeredUsers;

    function registerUser() public {
        require(!registeredUsers[msg.sender], "User already registered.");
        registeredUsers[msg.sender] = true;
    }
}