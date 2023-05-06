// class BankAccount {
//   id: string;
//   name: string;
//   private _balance: number;
//   constructor(id: string, name: string, balance: number) {
//     this.id = id;
//     this._balance = balance;
//     this.name = name;
//   }

//   private getBalance() {
//     console.log(`current balance ${this._balance}`);
//   }
//   protected setBalance(balance: number) {
//     this._balance = this._balance + balance;
//   }
// }

// const bank1 = new BankAccount("ddd1", "rahim", 20000);

// class StudentAccount extends BankAccount {
//   tes() {
//     this.setBalance(20);
//   }
// }
