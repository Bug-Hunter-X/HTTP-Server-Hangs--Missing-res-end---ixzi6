# Node.js HTTP Server Hang

This repository demonstrates a common error in Node.js HTTP servers: forgetting to call `res.end()` in the response handler.  This can lead to the server hanging and unresponsive.

## Bug

The `bug.js` file contains a simple HTTP server that omits the crucial `res.end()` call. This results in the server failing to send a complete response to the client, causing a hang.

## Solution

The `bugSolution.js` file provides the corrected code, adding the `res.end()` call to properly complete the response and prevent the hang.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.  Observe that the server starts, but requests will hang.
4. Run `node bugSolution.js`. This version of the server will function correctly.