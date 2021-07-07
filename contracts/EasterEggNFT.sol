// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract EasterEggNFT is ERC721URIStorage {
    uint public supply = 15;
    string public metadataIpfsHashFolder = "QmckuTg7Tozw3bUD8xTWjDC3X2iWnSKsZVi1GZn8Lsj2wj";
    
    constructor() ERC721("The NFT Easter Egg Hunt 2022", "EEH22") {}

    function mint(address player, uint tokenId) public {
        _mint(player, tokenId);
    }
    
    function burn(uint tokenId) public {
        require(_msgSender() == ERC721.ownerOf(tokenId));
        _burn(tokenId);
    }
    
    /**
     * @dev Base URI for computing {tokenURI}.
     */
    function _baseURI() internal view override virtual returns (string memory) {
        return string(abi.encodePacked("ipfs://", metadataIpfsHashFolder, "/"));
    }

    /**
     * @dev Base URI for computing {tokenURI}.
     */
    function baseURI() public view returns (string memory) {
        return _baseURI();
    }
}