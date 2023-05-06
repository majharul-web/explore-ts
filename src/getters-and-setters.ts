class BankAccount {
  id: string;
  name: string;
  private _balance: number;
  constructor(id: string, name: string, balance: number) {
    this.id = id;
    this._balance = balance;
    this.name = name;
  }

  get getBalance(): string {
    return `current balance ${this._balance}`;
  }
  set setBalance(balance: number) {
    this._balance = this._balance + balance;
  }
}

const bank1 = new BankAccount("ddd1", "rahim", 20000);

console.log("balance", bank1.getBalance);
console.log("balance", (bank1.setBalance = 50));
console.log("balance", bank1.getBalance);
