<template>
<img class="logo" src="../assets/banking_logo.jpg" />
  <h1>SRI KRISHNA BANK</h1>
  <h2>Login </h2>
  <div class="login">
    <input type="text" v-model="User_ID" placeholder="User ID" />
    <input type="password" v-model="Password" placeholder="Password" />
    <button v-on:click="login">Login</button>
    <p>
      <router-link to="/sign-up">SignUp</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login_page',
  data()
  {
      return{
          User_ID:'',
          Password:''

      }
  },
  methods:{
     async login(){
      {
        let result= await axios.get(
            `http://localhost:3000/user?User_ID=${this.User_ID}&Password=${this.Password}`  )  

        if(result.status==200 && result.data.length>0)
             {
                 localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                 this.$router.push({name:'Home'})
             }else{
               alert("Incorrect Password")
               return
             }
          console.warn(result)
      }
  },
  mounted()
     {
         let user=localStorage.getItem('user-info');
         if(user)
         {
            this.$router.push({name:'Home'}) 
         }
     }
}
}
</script>
