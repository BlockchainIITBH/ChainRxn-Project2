const sha256 = require('crypto-js/sha256');

// Block represents a single unit in the blockchain containing data and a reference to the previous block's hash
class Block {
    constructor(index, timestamp, data, prevHash) {
        // Assign the index to the block (position in the chain)
        this.index = index;

        // Store the timestamp of when the block is created
        this.timestamp = timestamp;

        // Store any data passed into the block (typically transaction or record data)
        this.data = data;

        // Store the hash of the previous block to ensure linkage in the chain
        this.prevHash = prevHash;

        // Compute and assign the hash of this block using its contents
        this.hash = this.calcHash();  // ← Implement this method below
    }

    // TODO: Implement a method that calculates the SHA256 hash of the block's contents
    // Hint:
    // - Use this.index, this.timestamp, this.prevHash, and JSON.stringify(this.data)
    // - Concatenate them into a single string and apply sha256 hashing
    // - Convert the result to string using .toString()
    calcHash() {
        // return sha256(...).toString();
        return sha256(
            this.index + this.timestamp + this.prevHash + JSON.stringify(this.data)
        ).toString();
    }
}

module.exports = Block;
