pragma solidity ^0.6.11;

import "@aragon/os/contracts/apps/AragonApp.sol";

contract CuratedList is AragonApp {
    /// Events
    event ArchiverAdded(address indexed entity, uint256 step);
    event ArchiverRemoved(address indexed entity, uint256 step);

    /// State
    struct Archiver {
        bool isArchiver;
        string reason;
    }
    mapping(string => Archiver) public archivers;

    /// ACL
    bytes32 public constant ADD_ARCHIVER_ROLE = keccak256("ADD_ARCHIVER_ROLE");
    bytes32 public constant REMOVE_ARCHIVER_ROLE = keccak256(
        "REMOVE_ARCHIVER_ROLE"
    );

    function initialize() public onlyInit {
        archivers["994080276"] = Archiver({
            isArchiver: true,
            reason: "QmXQyJuamVbjwVdiVYJthWv4G1ezHtqYKxDUPu5o7oxkeY"
        });
        initialized();
    }

    /**
     * @notice Add the following twitter account as archiver.
     * @param twitterId The id of the user. Not the @handle.
     * @param reason An optional justification.
     */
    function addArchiver(string twitterId, string reason)
        external
        auth(ADD_ARCHIVER_ROLE)
    {
        archivers[twitterId] = Archiver({isArchiver: true, reason: reason});
    }

    /**
     * @notice Remove the following twitter account as archiver.
     * @param twitterId The id of the user. Not the @handle.
     * @param reason An optional justification.
     */
    function removeArchiver(string twitterId, string reason)
        external
        auth(REMOVE_ARCHIVER_ROLE)
    {
        Archiver storage archiver = archivers[twitterId];
        archiver.isArchiver = false;
        archiver.reason = reason;
    }

    /**
     * @notice Checks if a given twitter account is an archiver.
     * @param twitterId The id of the user. Not the @handle.
     */
    function isArchiver(string twitterId) public view returns (bool) {
        return archivers[twitterId].isArchiver;
    }
}
