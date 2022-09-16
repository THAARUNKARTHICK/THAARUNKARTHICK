<template>
<Header />
        <h1><br><br><br><br><br><br>
          Hi {{user?.User_ID ?? "N/A"}} <br><br><br>
            Your total Balance is:<br>
            {{user?.Balance ?? "N/A"}}
     </h1>
</template>
<script>
import Header from './Header.vue'
export default {
  name: "Balance_page",
  data() {
    return {
      user: null
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
};
</script>
<style>
.h1 {
    font-size: 3em;
    margin: 0;
    margin-top: 0.3em;
} 
</style>
