<template>
<Header />
<br>
<br>
<br>
  <h1>Your Mini Statement is shown below</h1>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
<table>
  <tr>
    <th>ID</th>
    <th>Account No.</th>
    <th>Amount</th>
    <th>Date</th>
  </tr>
  <tr v-for="item in transactions" v-bind:key="item.id">
    <td>{{item.id}}</td>
    <td>{{item.account_number}}</td>
    <td>{{item.amount}}</td>
    <td>{{item.timestamp}}</td>
  </tr>
</table>
</template>
<script>
import axios from 'axios';
import Header from './Header.vue';
export default {
  name: "Statement_page",
  data() {
    return {
      user: null,
      transactions: [],
    };
  },
  components:{
      Header
  },
  async mounted() {
    let localUser = localStorage.getItem("user-info");
    if (!localUser) {
      this.$router.push({ name: "SignUp" });
      return;
    }
    this.user = JSON.parse(localUser)
    /* Getting transaction */
    const result = await axios.get(
      `http://localhost:3000/transaction?from=${this.user.id}`,
    );
    this.transactions = result.data
  },
};
</script>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 70%;
  margin-left: 170px;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-image: linear-gradient(
    120deg,
    hsl(192, 70%, 51%),
    hsl(136, 65%, 51%)
  );
}
</style>
