# ChainConnect - Interact with the Blockchain

Welcome to **Project 2**! In this challenge, you will implement a very simple blockchain and make it interactive by building a frontend using React.

## 🚀 How to Participate

1. **Fork the repository**

2. **Clone your forked repository**

3. **Complete the backend**

   * Navigate to the backend directory:

     ```bash
     cd backend
     ```
   * Fill in the `TODO` comments in the files. The guiding structure is already in place.
   * Run the backend and ensure it functions as expected.

4. **Complete the frontend**

   * Navigate to the frontend directory:

     ```bash
     cd frontend
     ```
   * Implement the missing logic in the `TODO` comments.
   * Make API calls to your running backend.

### 🎯 Bonus

You are encouraged to:

* Revamp the architecture or design if you have a better idea.
* Build other simple apps that use the blockchain backend.

> **Note:** The goal here is not to build a full-featured blockchain, but to help you understand its core functioning. In **Project 3**, we will interact with a live Bitcoin node.

### ✅ Minimum Required Features


* **Blockchain Network**: Core structure with blocks linked by hashes to ensure integrity.
* **OOP Design**: Uses object-oriented principles with `Block` and `Chain` classes.
* **Immutability**: Data in a block can't be changed; every block depends on the previous one.
* **SHA256 Hashing**: Ensures data integrity and tamper-proof blocks.
* **API-Driven Backend**:

  * Add a new block
  * View the entire chain
  * Fetch the latest block
* **React Frontend**: UI to interact with the blockchain through APIs.

> **See demo of a working solution here (for reference): https://drive.google.com/drive/folders/1rQp67A0Td-JShIDmIupQMBQzSy5IrQRV?usp=drive_link**


## 🧪 API Endpoints

### POST `/addBlock`

Adds a new block.

* **Request Body**:

  ```json
  { "data": "Your data here" }
  ```
* **Response**: `200 OK` with the newly created block.

### GET `/getChain`

Returns the full blockchain.

* **Response**: JSON array of all blocks.

### GET `/getLatestBlock`

Returns the most recent block.

* **Response**: JSON object with latest block data.

Submit your responses here: https://forms.gle/w4Y1Mf6QdEFhDJ2p7

(Please do not raise PRs for this project, evaluation is based on the final solution you present and not the number of PRs you are able to get merged.)

Deadline for submission: **7th July' 25**

>**BONUS** marks will be awarded for any kind of unique thinking or cool side application related to the core concept of this project.

**Update:**

Here's a very good submission and participants can take reference from it's a great representation of how to build services around core blockchain network:

https://chain-rxn-project2-39j2-ten.vercel.app/

---

#### - **BIB** (Blockchain at IIT Bhilai)  
