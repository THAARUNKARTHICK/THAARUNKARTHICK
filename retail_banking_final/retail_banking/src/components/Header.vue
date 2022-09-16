<template>
<div class="nav">
     <router-link to="/">Home</router-link>
    <router-link to="/balance">Balance Enquiry</router-link>
    <router-link to="/statement">Mini Statement</router-link>
    <router-link to="/transfer">Fund Transfer</router-link>
    <router-link to="/booking">FD / RD Booking</router-link>
    <a v-on:click="logout" href="#">Logout</a>
</div>
</template>
<script>
export default {
    name:'Header_line',
    methods:{
        logout()
        {
            localStorage.clear();
            this.$router.push({name:'Login_page'})
        }
    }
    
}
</script>
<style>
.nav{
     background-image: linear-gradient(
    120deg,
    hsl(192, 70%, 51%),
    hsl(136, 65%, 51%)
  );
    overflow: hidden;

}
.nav a{
    float: left;
    color: hsl(27, 85%, 3%);
    padding: 14px 16px;
    text-align: center;
    font-size: 20px;
    text-decoration: none;
    margin-right: 50px;
}
.nav a:hover{
    background: #ddd;
    color: #333;
}


</style>