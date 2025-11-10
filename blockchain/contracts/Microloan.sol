// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

/*
🪙 Microloan System Smart Contract (Enhanced Version)
-----------------------------------------------------
Features:
✅ Borrowers can request loans
✅ Lenders can fund loans
✅ Borrowers can repay loans
✅ Tracks credit score (600–900)
✅ Penalizes late or missed repayments
✅ Grace period before marking default
*/

contract MicroloanSystem {
    struct Loan {
        uint id;
        address borrower;
        address lender;
        uint amount;
        uint interest;
        uint dueDate;
        bool isFunded;
        bool isRepaid;
        bool isDefaulted;
    }

    uint public loanCount;
    mapping(uint => Loan) public loans;
    mapping(address => uint) public borrowerCreditScore;

    // Events
    event LoanRequested(uint id, address borrower, uint amount, uint interest, uint dueDate);
    event LoanFunded(uint id, address lender);
    event LoanRepaid(uint id, address borrower, uint totalPaid);
    event LoanDefaulted(uint id, address borrower);
    event CreditScoreUpdated(address borrower, uint newScore);

    // --- Borrower requests a loan ---
    function requestLoan(uint _amount, uint _interest, uint _dueDate) external {
        require(_amount > 0, "Loan amount must be greater than zero");
        require(_dueDate > block.timestamp, "Invalid due date");

        loanCount++;
        loans[loanCount] = Loan({
            id: loanCount,
            borrower: msg.sender,
            lender: address(0),
            amount: _amount,
            interest: _interest,
            dueDate: _dueDate,
            isFunded: false,
            isRepaid: false,
            isDefaulted: false
        });

        emit LoanRequested(loanCount, msg.sender, _amount, _interest, _dueDate);
    }

    // --- Lender funds a loan ---
    function fundLoan(uint _loanId) external payable {
        Loan storage loan = loans[_loanId];
        require(!loan.isFunded, "Loan already funded");
        require(!loan.isDefaulted, "Loan defaulted");
        require(msg.value == loan.amount, "Incorrect funding amount");
        require(loan.borrower != address(0), "Loan does not exist");

        loan.lender = msg.sender;
        loan.isFunded = true;

        payable(loan.borrower).transfer(loan.amount);
        emit LoanFunded(_loanId, msg.sender);
    }

    // --- Borrower repays the loan ---
    function repayLoan(uint _loanId) external payable {
        Loan storage loan = loans[_loanId];
        require(loan.isFunded, "Loan not funded yet");
        require(!loan.isRepaid, "Loan already repaid");
        require(!loan.isDefaulted, "Loan already defaulted");
        require(msg.sender == loan.borrower, "Only borrower can repay");

        uint totalOwed = loan.amount + ((loan.amount * loan.interest) / 100);
        require(msg.value >= totalOwed, "Insufficient repayment amount");

        loan.isRepaid = true;
        payable(loan.lender).transfer(totalOwed);

        emit LoanRepaid(_loanId, msg.sender, totalOwed);

        // --- Credit Score Adjustment ---
        uint score = borrowerCreditScore[msg.sender];

        if (block.timestamp <= loan.dueDate) {
            // On time → +20
            if (score < 900) borrowerCreditScore[msg.sender] = score + 20;
        } else if (block.timestamp <= loan.dueDate + 3 days) {
            // Slightly late → +10
            if (score < 900) borrowerCreditScore[msg.sender] = score + 10;
        } else {
            // Late → -20
            if (score > 400) borrowerCreditScore[msg.sender] = score - 20;
        }

        emit CreditScoreUpdated(msg.sender, borrowerCreditScore[msg.sender]);
    }

    // --- Mark loan as default after grace period ---
    function markAsDefault(uint _loanId) external {
        Loan storage loan = loans[_loanId];
        require(loan.isFunded, "Loan not funded yet");
        require(!loan.isRepaid, "Loan already repaid");
        require(!loan.isDefaulted, "Already defaulted");
        require(block.timestamp > loan.dueDate + 3 days, "Still in grace period");

        loan.isDefaulted = true;

        uint score = borrowerCreditScore[loan.borrower];
        if (score == 0) score = 600;
        if (score > 400) borrowerCreditScore[loan.borrower] = score - 50;

        emit LoanDefaulted(_loanId, loan.borrower);
        emit CreditScoreUpdated(loan.borrower, borrowerCreditScore[loan.borrower]);
    }

    // --- Get specific loan details ---
    function getLoan(uint _loanId) external view returns (Loan memory) {
        return loans[_loanId];
    }

    // --- Get borrower's credit score ---
    function getCreditScore(address _borrower) external view returns (uint) {
        return borrowerCreditScore[_borrower];
    }
}
