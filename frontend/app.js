// --- Blockchain Config ---
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace after deploy
const contractABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newScore",
        "type": "uint256"
      }
    ],
    "name": "CreditScoreUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      }
    ],
    "name": "LoanDefaulted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "lender",
        "type": "address"
      }
    ],
    "name": "LoanFunded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalPaid",
        "type": "uint256"
      }
    ],
    "name": "LoanRepaid",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "interest",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "dueDate",
        "type": "uint256"
      }
    ],
    "name": "LoanRequested",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "borrowerCreditScore",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_loanId",
        "type": "uint256"
      }
    ],
    "name": "fundLoan",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_borrower",
        "type": "address"
      }
    ],
    "name": "getCreditScore",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_loanId",
        "type": "uint256"
      }
    ],
    "name": "getLoan",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "lender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "interest",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "dueDate",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isFunded",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "isRepaid",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "isDefaulted",
            "type": "bool"
          }
        ],
        "internalType": "struct MicroloanSystem.Loan",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "loanCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "loans",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "lender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "interest",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "dueDate",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isFunded",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isRepaid",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isDefaulted",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_loanId",
        "type": "uint256"
      }
    ],
    "name": "markAsDefault",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_loanId",
        "type": "uint256"
      }
    ],
    "name": "repayLoan",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_interest",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_dueDate",
        "type": "uint256"
      }
    ],
    "name": "requestLoan",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];


// --- Initialize Ethers ---
let provider, signer, contract;

async function connectWallet() {
  if (!window.ethereum) {
    alert("MetaMask not detected!");
    return;
  }

  provider = new ethers.BrowserProvider(window.ethereum);
  signer = await provider.getSigner();
  const account = await signer.getAddress();

  document.getElementById("account").innerText = account;
  if (document.getElementById("walletInfo"))
    document.getElementById("walletInfo").style.display = "block";

  contract = new ethers.Contract(contractAddress, contractABI, signer);
  console.log("✅ Connected to contract", contractAddress);

  // ✅ Update credit score display when wallet connects
  updateCreditScoreDisplay(account);
}


// --- Request Loan (Borrower) ---
async function requestLoan() {
  const amount = document.getElementById("loanAmount").value;
  const interest = document.getElementById("interest").value;
  const dueDateInput = document.getElementById("dueDate").value;

  if (!amount || !interest || !dueDateInput) {
    alert("Please fill all fields!");
    return;
  }

  // 🕒 Convert the date into a Unix timestamp
  const dueDateTimestamp = Math.floor(new Date(dueDateInput).getTime() / 1000);

  try {
    console.log("📤 Requesting loan...");
    const tx = await contract.requestLoan(
      ethers.parseEther(amount),
      interest,
      dueDateTimestamp
    );
    await tx.wait();
    alert("✅ Loan Requested Successfully!");
  } catch (err) {
    console.error("❌ Loan request failed:", err);
  }
}

// --- Repay Loan (Borrower) ---
async function repayLoan() {
  const loanId = document.getElementById("repayLoanId").value;
  const repayAmount = document.getElementById("repayAmount").value;

  if (!loanId || !repayAmount) {
    alert("⚠️ Please enter both Loan ID and Amount!");
    return;
  }

  try {
    const tx = await contract.repayLoan(loanId, {
      value: ethers.parseEther(repayAmount)
    });
    await tx.wait();

    alert("✅ Loan repaid successfully!");
    await updateCreditScoreDisplay(await signer.getAddress());

  } catch (error) {
    console.error("❌ Repayment failed:", error);

    // Better, user-friendly error handling
    if (error.message.includes("Incorrect repayment amount")) {
      alert("⚠️ Repayment failed! Please enter the *exact total amount* (Principal + Interest).");
    } else if (error.message.includes("Loan not funded yet")) {
      alert("❌ This loan has not been funded yet.");
    } else if (error.message.includes("Already repaid")) {
      alert("ℹ️ This loan has already been repaid.");
    } else if (error.message.includes("revert")) {
      alert("❌ Transaction reverted! Please check the entered details and try again.");
    } else {
      alert("⚠️ Transaction failed. Please verify your wallet balance and try again.");
    }
  }
}

// --- Show Borrower’s Loans (Improved UI + Credit Score above cards) ---
async function showMyLoans() {
  try {
    const totalLoans = await contract.loanCount();
    const loanList = document.getElementById("loanList");
    loanList.innerHTML = "";

    const currentAccount = document
      .getElementById("account")
      .innerText.toLowerCase();

    for (let i = 1; i <= totalLoans; i++) {
      const loan = await contract.getLoan(i);

      // Status badges
      let statusText = "";
      let statusColor = "";
      if (loan.isRepaid) {
        statusText = "✅ Repaid";
        statusColor = "#22c55e";
      } else if (loan.isDefaulted) {
        statusText = "⚠️ Defaulted";
        statusColor = "#facc15";
      } else if (loan.isFunded) {
        statusText = "💰 Funded";
        statusColor = "#3b82f6";
      } else {
        statusText = "🕓 Requested";
        statusColor = "#ef4444";
      }

      if (loan.borrower.toLowerCase() === currentAccount) {
        const div = document.createElement("div");
        div.classList.add("loan-card");
        div.style.background = "rgba(255, 255, 255, 0.1)";
        div.style.border = "1px solid rgba(255, 255, 255, 0.2)";
        div.style.borderRadius = "15px";
        div.style.padding = "16px";
        div.style.margin = "20px auto";
        div.style.width = "90%";
        div.style.maxWidth = "800px";
        div.style.backdropFilter = "blur(6px)";
        div.style.color = "#fff";
        div.style.textAlign = "left";
        div.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";

        const dueDate = new Date(Number(loan.dueDate) * 1000).toLocaleString();

        div.innerHTML = `
          <p><b>ID:</b> ${loan.id}</p>
          <p><b>Amount:</b> ${ethers.formatEther(loan.amount)} ETH</p>
          <p><b>Interest:</b> ${loan.interest}%</p>
          <p><b>Due Date:</b> ${dueDate}</p>
          <p><b>Status:</b> 
             <span style="background:${statusColor}; color:#fff; padding:4px 10px; border-radius:8px;">
               ${statusText}
             </span>
          </p>
        `;

        loanList.appendChild(div);
      }
    }

    if (loanList.innerHTML === "") {
      loanList.innerHTML = "<p style='text-align:center;'>No loans found for this borrower.</p>";
    }
  } catch (err) {
    console.error("Error showing loans:", err);
    alert("Failed to load loans — check console for details.");
  }
  // ✅ Keep credit score styling consistent
  updateCreditScoreDisplay(currentAccount);
}


// --- Lender: Load Available Loans ---
async function loadLoans() {
  try {
    const totalLoans = await contract.loanCount();
    const loanList = document.getElementById("loanList");
    loanList.innerHTML = "";
    loanList.style.display = "flex";
    loanList.style.flexDirection = "column";
    loanList.style.alignItems = "center"; // center cards

    for (let i = 1; i <= totalLoans; i++) {
      const loan = await contract.getLoan(i);

      if (!loan.isFunded && !loan.isRepaid) {
        const creditScore = await contract.getCreditScore(loan.borrower);

        // Determine loan status
        let statusText = "Pending Funding";
        let statusColor = "#f39c12"; // orange

        if (loan.isFunded) {
          statusText = "Funded";
          statusColor = "#27ae60"; // green
        } else if (loan.isRepaid) {
          statusText = "Repaid";
          statusColor = "#3498db"; // blue
        } else if (loan.isDefaulted) {
          statusText = "Defaulted";
          statusColor = "#e74c3c"; // red
        }

        // Credit score badge color
        const badgeColor =
          creditScore < 50 ? "#e74c3c" : creditScore < 75 ? "#f39c12" : "#27ae60";

        // --- Card Styling ---
        const card = document.createElement("div");
        card.classList.add("card", "shadow-sm");
        card.style.background = "rgba(173, 216, 230, 0.25)";
        card.style.border = "1px solid rgba(255, 255, 255, 0.3)";
        card.style.backdropFilter = "blur(6px)";
        card.style.borderRadius = "14px";
        card.style.padding = "20px";
        card.style.marginBottom = "22px";
        card.style.width = "80%";
        card.style.maxWidth = "600px";
        card.style.transition = "transform 0.25s ease, box-shadow 0.25s ease";
        card.style.cursor = "pointer";

        card.addEventListener("mouseenter", () => {
          card.style.transform = "translateY(-4px)";
          card.style.boxShadow = "0 5px 18px rgba(0,0,0,0.2)";
        });
        card.addEventListener("mouseleave", () => {
          card.style.transform = "translateY(0)";
          card.style.boxShadow = "none";
        });

        const dueDate = new Date(Number(loan.dueDate) * 1000).toLocaleString();

        // --- Card Content ---
        card.innerHTML = `
          <div class="d-flex justify-content-between align-items-center flex-wrap">
            <div style="flex: 1; min-width: 250px;">
              <h4 class="mb-2" style="font-weight:700;"><b>Loan ID:</b> ${loan.id}</h4>
              <p class="mb-1" style="line-height:1.6;">
                <b>Amount:</b> ${ethers.formatEther(loan.amount)} ETH<br>
                <b>Interest:</b> ${loan.interest}%<br>
                <b>Due Date:</b> ${dueDate}<br>
                <b>Borrower:</b> ${loan.borrower.slice(0, 6)}...${loan.borrower.slice(-4)}<br>
                <b>Credit Score:</b>
                <span style="
                  background-color: ${badgeColor};
                  color: #fff;
                  padding: 6px 12px;
                  border-radius: 12px;
                  font-weight: 600;
                  font-size: 0.9rem;
                  display: inline-block;
                  min-width: 50px;
                  text-align: center;
                ">${creditScore}</span><br>
                <b>Status:</b>
                <span style="
                  background-color: ${statusColor};
                  color: #fff;
                  padding: 6px 12px;
                  border-radius: 12px;
                  font-weight: 600;
                  font-size: 0.9rem;
                  display: inline-block;
                  min-width: 90px;
                  text-align: center;
                ">${statusText}</span>
              </p>
            </div>
            <div style="margin-top:10px;">
              <button class="btn btn-success btn-sm"
                onclick="fundLoan(${loan.id}, '${ethers.formatEther(loan.amount)}')">
                Fund Loan
              </button>
            </div>
          </div>
        `;

        loanList.appendChild(card);
      }
    }

    if (loanList.innerHTML === "") {
      loanList.innerHTML = "<p>No available loans for funding.</p>";
    }
  } catch (err) {
    console.error("Error loading loans:", err);
  }
}

// --- Lender: Fund Loan ---
async function fundLoan(loanId, amount) {
  try {
    const tx = await contract.fundLoan(loanId, { value: ethers.parseEther(amount) });
    await tx.wait();
    alert(`✅ Loan ${loanId} funded successfully!`);
    loadLoans();
  } catch (err) {
    console.error("Funding failed:", err);
    alert("Error: " + err.message);
  }
}
async function updateCreditScoreDisplay(account) {
  try {
    const creditScore = await contract.getCreditScore(account);
    const creditScoreDisplay = document.getElementById("creditScoreDisplay");

    if (!creditScoreDisplay) return;

    // Decide colors
    let bgColor, label;
    if (creditScore < 50) {
      bgColor = "#dc2626"; // red
      label = "Poor";
    } else if (creditScore < 75) {
      bgColor = "#f59e0b"; // orange
      label = "Average";
    } else {
      bgColor = "#16a34a"; // green
      label = "Excellent";
    }

    creditScoreDisplay.innerHTML = `
      <div style="
        display: inline-flex;
        align-items: center;
        gap: 10px;
        margin-top: 8px;
        font-size: 16px;
        font-weight: 600;
        color: white;
        background: rgba(255,255,255,0.05);
        padding: 8px 14px;
        border-radius: 8px;
        border: 1px solid rgba(255,255,255,0.15);
        backdrop-filter: blur(4px);
      ">
        <span>Credit Score:</span>
        <span style="
          background:${bgColor};
          color:#fff;
          padding:4px 10px;
          border-radius:8px;
          font-weight:700;
          min-width: 60px;
          text-align:center;
        ">${creditScore}</span>
        <span style="opacity:0.8; font-size:14px;">(${label})</span>
      </div>
    `;
  } catch (err) {
    console.error("Error updating credit score:", err);
  }
}
// --- Show Loans Funded by the Lender ---
async function showFundedLoans() {
  try {
    const totalLoans = await contract.loanCount();
    const fundedList = document.getElementById("fundedLoanList");
    fundedList.innerHTML = "";

    const currentAccount = (await signer.getAddress()).toLowerCase();

    for (let i = 1; i <= totalLoans; i++) {
      const loan = await contract.getLoan(i);

      // Check if this lender funded the loan
      if (loan.lender.toLowerCase() === currentAccount) {
        const dueDate = new Date(Number(loan.dueDate) * 1000).toLocaleString();
        const status = loan.isRepaid
          ? "✅ Repaid"
          : loan.isDefaulted
          ? "⚠️ Defaulted"
          : loan.isFunded
          ? "💰 Funded"
          : "🕓 Requested";

        const div = document.createElement("div");
        div.classList.add("loan-card");
        div.style.background = "rgba(255,255,255,0.08)";
        div.style.border = "1px solid rgba(255,255,255,0.2)";
        div.style.borderRadius = "16px";
        div.style.padding = "18px 25px";
        div.style.margin = "15px auto";
        div.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
        div.style.backdropFilter = "blur(10px)";
        div.style.width = "90%";
        div.style.maxWidth = "600px";

        div.innerHTML = `
          <p><b>Loan ID:</b> ${loan.id}</p>
          <p><b>Borrower:</b> ${loan.borrower}</p>
          <p><b>Amount:</b> ${ethers.formatEther(loan.amount)} ETH</p>
          <p><b>Interest:</b> ${loan.interest}%</p>
          <p><b>Due Date:</b> ${dueDate}</p>
          <p><b>Status:</b> ${status}</p>
        `;

        fundedList.appendChild(div);
      }
    }

    if (fundedList.innerHTML === "") {
      fundedList.innerHTML =
        "<p style='text-align:center;'>No loans funded by you yet.</p>";
    }
  } catch (err) {
    console.error("Error loading funded loans:", err);
    alert("Failed to load funded loans. See console for details.");
  }
}
