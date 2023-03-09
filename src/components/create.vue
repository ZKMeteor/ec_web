<template>
  <section>
        <div class="box animate__animated animate__fadeIn">
            <div class="from">
                <form action="">
                    <h1>Create Account</h1>
                    <div class="inputbox">
                        <ion-icon name="person-outline"></ion-icon>
                        <input type="text" v-model="member.username" required>
                        <label for="">UserName</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="person-outline"></ion-icon>
                        <input type="text" v-model="member.account" required>
                        <label for="">Account</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" v-model="member.password" required>
                        <label for="">Password</label>
                    </div>
                    <div class="forget">
                      <label for="btncheck"><input type="checkbox" id="btncheck">Click Me</label>
                  </div>
                    <button @click="create">Create And Log in</button>                     
                </form>
            </div>
        </div>
    </section>
    
</template>

<script>
export default {
    mane:'create',
    data(){
        return{
            member:{
                username:'',
                account:'',
                password:'',
            }
        }
    },
    methods:{
        create(){
            if(this.member.username == '' || this.member.account == '' || this.member.password == ''){
                return
            }else{
                    this.$store.commit('Create',this.member)
                    console.log('state',this.$store.state.Member)
                    alert('註冊成功')
                    this.$router.push('/login')
                }
        },
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;   
}

section{
    display: flex;
    justify-content: center;
    align-items: center;
    background:url(../assets/layout2bg.jpg)no-repeat;
    background-position:center;
    background-size:auto;
    min-height: 100vh;
    width: 100%;
}

.box{
    position: relative;
    width: 400px;
    height: 550px;
    border: 2px solid white;
    border-radius: 20px;
    backdrop-filter: blur(5px);
    background:transparent;
    display: flex;
    justify-content: center;
    align-items: center;
}

h1{
    font-size: 2em;
    color: white;
    text-align: center;
}

.inputbox{
    position:relative;
    margin: 30px 0;
    width: 310px;
    border-bottom: 2px solid white;
}

.inputbox label{
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    color: white;
    font-size: 1em;
    pointer-events: none;
    transition: .5s;
}

input:focus ~ label,
input:valid ~ label{
    top: -5px;
}

.inputbox input{
    width: 100%;
    height: 50px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    padding: 0 35px 0 5px;
    color: white;
}

.inputbox ion-icon{
    position: absolute;
    right: 8px;
    color: white;
    font-size: 1.2em;
    top: 20px;
}

.forget{
    margin: 15px 0 15px 0;
    font-size: .9em;
    color: white;
    display: flex;
    justify-content: space-around;
}

.forget label input{
    margin-right:3px;
}

.forget a{
    font-weight: 600;
    color: white;
    text-decoration: none;
}

.forget a:hover{
    text-decoration: underline;
}
button{
    width: 100%;
    height: 40px;
    border-radius: 40px;
    background: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
}
</style>