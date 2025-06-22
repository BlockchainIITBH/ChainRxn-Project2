const express = require('express');
const Block = require('./blockchain/Block.js');
const Chain = require('./blockchain/Chain.js');
const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.port || 3005;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Initialize a new blockchain instance
let chain = new Chain();

// Root route: basic test endpoint
app.get('/', (req, res) => {
    // TODO: Respond with a simple message like "blockchain home page"
    res.send("Welcome to MyBlockchain API!");
});

// Route to add a new block to the chain
app.post('/addBlock', (req, res) => {
    const { data } = req.body;

    // TODO: Check if 'data' is provided in the request body
    // If not, respond with status 400 and an error message

    // TODO:
    // 1. Create a new Block using:
    //    - index = latest block index + 1
    //    - timestamp = current time
    //    - data = from request
    //    - prevHash = hash of the latest block
    //
    // 2. Add the new block to the chain using chain.addBlock()
    //
    // 3. Respond with status 200 and a message + the new block's data

    if (!data) {
        return res.status(400).json({ error: "Block data is required." });
    }

    const latest = chain.getLatestBlock();
    const newBlock = new Block(latest.index + 1, Date.now(), data, latest.hash);
    chain.addBlock(newBlock);

    res.status(200).json({
        message: "Block added successfully",
        block: newBlock
    });
});

// Route to get the entire blockchain
app.get('/getChain', (req, res) => {
    // TODO: Respond with the full chain (chain.chain)
    res.status(200).json(chain.chain);
});

// Route to get the latest block in the chain
app.get('/getLatestBlock', (req, res) => {
    // TODO: Respond with the result of chain.getLatestBlock()
    res.status(200).json(chain.getLatestBlock());
});

// Start the server and listen on the specified port
app.listen(port, () => {
    // TODO: Log a message saying the blockchain API is running and on which port
    console.log(`Blockchain API is running on http://localhost:${port}`);
});
