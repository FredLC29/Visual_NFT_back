const { expect } = require("chai");

describe("EasterEggNFT", function() {
  it("Should get proper values and actually mint first token", async function() {
    const EasterEggNFT = await ethers.getContractFactory("EasterEggNFT");
    const easterEggNFT = await EasterEggNFT.deploy();
    await easterEggNFT.deployed();
    
    const accounts = await ethers.getSigners();
    const account = accounts[0];
    console.log(account.address);
    const player = account.address;
    
    expect(await easterEggNFT.name()).to.equal("The NFT Easter Egg Hunt 2022");
    expect(await easterEggNFT.symbol()).to.equal("EEH22");
    expect(await easterEggNFT.supply()).to.equal(15);

    const metadataIpfsHashFolder = "QmckuTg7Tozw3bUD8xTWjDC3X2iWnSKsZVi1GZn8Lsj2wj";
    expect(await easterEggNFT.metadataIpfsHashFolder()).to.equal(metadataIpfsHashFolder);
    expect(await easterEggNFT.baseURI()).to.equal("ipfs://" + metadataIpfsHashFolder + "/");
    
    const tokenId = 1;
    //expect(await easterEggNFT.tokenURI(tokenId)).to.equal("ipfs://" + metadataIpfsHashFolder + "/1");
    // revert: "ERC721Metadata: URI query for nonexistent token"

    expect(await easterEggNFT.balanceOf(player)).to.equal(0);

    const mintTx = await easterEggNFT.mint(player, tokenId);
    
    // wait until the transaction is mined
    await mintTx.wait();

    expect(await easterEggNFT.tokenURI(tokenId)).to.equal("ipfs://" + metadataIpfsHashFolder + "/1");
    
    expect(await easterEggNFT.balanceOf(player)).to.equal(1);

    expect(await easterEggNFT.ownerOf(tokenId)).to.equal(player);
  });
});
