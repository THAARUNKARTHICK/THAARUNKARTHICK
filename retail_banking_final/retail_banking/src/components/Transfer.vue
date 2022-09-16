<template>
<Header />
  <h1>Hello User,Welcome to Fund Transfer Page.</h1>
    <h1> Bank Money Transfer - Updated balance: {{user?.Balance ?? "N/A"}}</h1>
    <br>
    <br>
    <br>
    <br>
<table>
<tr><td><h3>Account No</h3></td><td ><input v-model="account_number" type=text name="account_number"></td></tr>
<tr><td><h3>Confirm Account No</h3></td><td ><input v-model="confirm_account_number" type=text name="confirm_account_number"></td></tr>
<!-- <tr><td><h3>Account Holder name</h3></td><td ><input type=text name="user"></td></tr> -->
<tr><td><h3>Amount</h3></td><td><input v-model="transfer_amount" type="number" name="account_number"></td></tr>
<!-- <tr><td><h3>Re-enter Account NO</h3></td><td ><input type=text name="user"></td></tr> -->
</table>
<br>
<br>
<br>
<br>
  <div class="t1">
<button v-on:click="performDebit">Transfer </button>
</div>
</template>
<script>
import axios from 'axios';
import Header from './Header.vue';
export default {
  name: "Transfer_page",
  data() {
    return {
      user: null,
      transfer_amount: 0,
      account_number: "",
      confirm_account_number: "",
    };
  },
  components:{
      Header
  },
  mounted() {
    let localStorageUser = localStorage.getItem("user-info");
    if (!localStorageUser) {
      this.$router.push({ name: "SignUp" });
      return;
    }
    this.user = JSON.parse(localStorageUser);
  },
  methods: {
    async performDebit() {
      const transferringAmount = parseInt(this.user.Balance) - this.transfer_amount;
      /* Validating account number */
      if(this.account_number !== this.confirm_account_number) {
        alert("Account number is not matching!")
        return;
      }

      /* Validating user balance */
      if(transferringAmount < 0) {
        alert("Insufficient balance!")
        return
      }

      this.user.Balance = parseInt(this.user.Balance) - this.transfer_amount;
      await this.updateUserAccountBalance();
    },
    async updateUserAccountBalance() {
      /* Getting user by account number */
      const { data: [accountHolder] } = await axios.get(
        `http://localhost:3000/user?Account_Number=${this.account_number}`
      );
      console.log({accountHolder})
      if(!accountHolder) {
        alert("Account number is invalid!")
        return;
      }
      accountHolder.Balance += this.transfer_amount;
      let result = await axios.put(
        `http://localhost:3000/user/${accountHolder.id}`,
        accountHolder
      );

      /* Reducing current user balance */
      result = await axios.put(
        `http://localhost:3000/user/${this.user.id}`,
        this.user
      );
      console.log({result})

      /* Updating localstorage */
      localStorage.setItem("user-info",JSON.stringify(this.user))

      /* Creating transaction */
      let transaction = await axios.post(
        `http://localhost:3000/transaction`,
        {from: this.user.id, account_number: this.account_number, amount: this.transfer_amount, timestamp: new Date().toISOString()}
      );
      console.log({transaction})
    }
  }
};
</script>
<style >
.t1 {
  width: 50px;
  margin: 0 auto;
  display: inline-block;
  width: calc(50% - 4px);
  margin: 0 auto;
}
.t1 button{
 width: 320px;
    height: 40px;
    border: 1px;
    border: 3px  black;
    background-image: linear-gradient(
    120deg,
    hsl(192, 70%, 51%),
    hsl(136, 65%, 51%)
  );
    color: black;
    cursor: pointer; 
}
</style>
