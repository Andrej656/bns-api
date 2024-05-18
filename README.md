# BNS API

## Description

Bitcoin Name System (BNS) API is a RESTful API built with Node.js and Express.js that interacts with the Stacks blockchain to manage BNS names, namespaces, and subdomains. BNS is a decentralized naming system that binds Stacks usernames to off-chain state without relying on any central points of control.

## Features

- Register and manage BNS names, namespaces, and subdomains.
- Implement BNS operations such as name registration, updating, and transfer.
- Secure interactions with the Stacks blockchain using appropriate authentication and authorization mechanisms.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Andrej656/bns-api

2. Navigate to the project directory:
    ```bash
    cd bns-api
3. Install dependencies:
   ```bash
   npm install
4. Set up environment variables:
Create a .env file in the root directory and define the following variables:
   ```bash
   PORT=3000
5. Start the server:
   ```bash
   npm start
6. Access the API at http://localhost:3000 or the specified port.



## Usage

## BNS API Endpoints

### Names

- **POST /api/bns/names:** Create a new BNS name.
- **PUT /api/bns/names/:nameId:** Update the state of a BNS name.
- **GET /api/bns/names/:nameId:** Get details of a specific BNS name.
- **DELETE /api/bns/names/:nameId:** Delete a BNS name.

### Namespaces

- **POST /api/bns/namespaces:** Create a new BNS namespace.
- **PUT /api/bns/namespaces/:namespaceId:** Update the state of a BNS namespace.
- **GET /api/bns/namespaces/:namespaceId:** Get details of a specific BNS namespace.
- **DELETE /api/bns/namespaces/:namespaceId:** Delete a BNS namespace.

### Subdomains

- **POST /api/bns/subdomains:** Create a new BNS subdomain.
- **PUT /api/bns/subdomains/:subdomainId:** Update the state of a BNS subdomain.
- **GET /api/bns/subdomains/:subdomainId:** Get details of a specific BNS subdomain.
- **DELETE /api/bns/subdomains/:subdomainId:** Delete a BNS subdomain.

## 1. Create a new BNS name:
**Request:**

```bash
POST /api/bns/names
Content-Type: application/json

{
  "name": "example",
  "owner": "owner-public-key",
  "state": {
    "data": "Some state data"
  }

Response:

{
  "id": "1",
  "name": "example",
  "owner": "owner-public-key",
  "state": {
    "data": "Some state data"
  },
  "createdAt": "2024-05-20T12:00:00.000Z",
  "updatedAt": "2024-05-20T12:00:00.000Z"
}






