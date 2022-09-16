<template>
<img class="logo" src="../assets/banking_logo.jpg" />
<h1>SRI KRISHNA BANK </h1>
<h2 >SignUp</h2>
<div class="register">
<input type="text" v-model="User_ID" placeholder="User ID" />
<input @keypress="onlyNumber" type="text" v-model="Account_Number" placeholder="Account_Number(6-digit)" />
<input type="email" v-model="email_id" placeholder="email_id" />
<input type="password" v-model="Password" placeholder="Password"/>
<button v-on:click="signUp">SignUp</button>
<p>
    <router-link to="/login">Login</router-link>
</p>

</div>

</template>
<script>
import axios from 'axios'
 export default{
     name:'SignUp',
     data()
     {
         return{
             User_ID:'',
             Account_Number:'',
             email_id:'',
             Password:''
         }
     },
     methods:{
         async signUp(){
             if(this.User_ID.trim()==''|| this.email_id=='' || this.Password== '' || this.Account_Number==''){
                 alert("Fill all the fields");
                 return
             }
             let result =await axios.post("http://localhost:3000/user",{
                User_ID:this.User_ID,
                email_id:this.email_id,
                Account_Number:this.Account_Number,
                Password:this.Password 
             });

             console.warn(result);
             if(result.status==201)
             {
                 localStorage.setItem("user-info",JSON.stringify(result.data))
                 this.$router.push({name:'Home'})
             }
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
</script> 