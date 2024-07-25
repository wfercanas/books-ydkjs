/*
  1- Read the code to see how JSBANK handles its savings accounts.
  2- Extend the functionality to support deposit transactions
  3- Does this kind of implementation reduces scope exposure? Debate with your teammates.
*/

const actions = {
  withdraw: "WITHDRAW",
  deposit: "DEPOSIT",
};

const bank = {
  accounts: [
    {
      clientId: "1245fr8",
      accountId: "AC78544",
      balance: 1500,
    },
  ],

  _getAccount(accountId) {
    return this.accounts.find((account) => account.accountId === accountId);
  },

  printBalance(accountId) {
    const account = this._getAccount(accountId);

    if (!account) {
      throw new Error("Account not found");
    }

    console.log(`
      Account: ${account.accountId}
      Balance: ${account.balance}  
    `);
  },

  withdraw(payload) {
    const { accountId, amount } = payload;
    if (!accountId || !amount) {
      throw new Error("You must provide an accountId and amount to proceed");
    }

    const account = this._getAccount(accountId);
    if (!account) {
      throw new Error("Account not found");
    }

    if (account.balance < amount) {
      throw new Error("Account balance is not enough to proceed");
    }

    account.balance -= amount;
  },
};

function dispatch(action, payload) {
  switch (action) {
    case "WITHDRAW":
      bank.withdraw(payload);
      break;
  }
}

dispatch(actions.withdraw, { accountId: "AC78544", amount: 100 });
bank.printBalance("AC78544"); // 1400

dispatch(actions.deposit, { accountId: "AC78544", amount: 2000 });
bank.printBalance("AC78544"); // 3400
