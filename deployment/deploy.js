async function main() {
	const [deployer] = await ethers.getSigners();
  
	console.log("Deploying contracts with the account:", deployer.address);
  
	const Token42 = await ethers.getContractFactory("Token42");
	const token42 = await Token42.deploy(); // Make sure you're not passing any invalid arguments here.
  
	console.log("Token42 deployed to:", token42.address);
  }
  
  main()
	.then(() => process.exit(0))
	.catch((error) => {
	  console.error(error);
	  process.exit(1);
	});
