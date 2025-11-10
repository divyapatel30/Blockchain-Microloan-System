const hre = require("hardhat");

async function main() {
  // Get the contract
  const MicroloanSystem = await hre.ethers.getContractFactory("MicroloanSystem");

  console.log("📦 Deploying MicroloanSystem...");
  const microloan = await MicroloanSystem.deploy();

  await microloan.waitForDeployment();

  console.log("✅ MicroloanSystem deployed to:", await microloan.getAddress());
}

// Run the deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
