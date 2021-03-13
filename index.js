
class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }
  get balance() {
    let balance = 0;
    balance = this.transactions.reduce((a, b) => a + b, 0);
    return balance;
    // Calculate the balance using the transaction objects.
  }

  addTransaction(transaction) {
    this.transactions.push(transaction.amount);
  }


}

class Transaction {

  constructor(amount, account) {

    this.amount  = amount;
    this.account = account;
  }
  commit() {

    if((this.isAllowed()) || (this.amount > 0)) {
     this.account.addTransaction(this);
     this.time = new Date();
     return true;
    } else {
      console.log("Transaction is not allowed");
      return false;
    }
  }

  isAllowed() {
    // note how it has access to this.account b/c of parent
    return (this.account.balance + this.amount > 0);
  }

}

// class Withdrawal extends Transaction {

//   get value() {
//     return -this.amount;
//   }
//   // getCommit() {
//   //   this.account.balance -= this.amount;
//   //   return `New balance: ${this.account.balance}`;
//   // }
// }

// class Deposit extends Transaction {

//   get value() {
//     return this.amount
//   }

  // getCommit() {
  //   this.account.balance += this.amount;
  //   return `New balance: ${this.account.balance}`;
  // }

//}


const myAccount1 = new Account("200100");
const myAccount2 = new Account("200200");

t1 = new Transaction(120.00, myAccount1);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Transaction(180.00, myAccount2);
t2.commit();
console.log('Transaction 2:', t2);

t3 = new Transaction(-50.25, myAccount1);
t3.commit();
console.log('Transaction 3:', t3);

t4 = new Transaction(-9.99, myAccount2);
t4.commit();
console.log('Transaction 4:', t4);

t5 = new Transaction(-100, myAccount1);
t5.commit();
console.log('Transaction 5:', t5);

console.log('Account: ', myAccount1.username, 'Ending Balance:', myAccount1.balance);
console.log('Account: ', myAccount2.username, 'Ending Balance:', myAccount2.balance);
