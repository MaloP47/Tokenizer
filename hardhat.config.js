require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config(); // Charger les variables d'environnement

// Accéder aux variables d'environnement
const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.SCAN_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  paths: {
    sources: "./code",
	ignition: "./deployment"
  },
  networks: {
	sepolia: {
		url: API_URL,
		accounts: [PRIVATE_KEY],
	}
  },
  etherscan : {
	apiKey: ETHERSCAN_API_KEY,
  }
};
