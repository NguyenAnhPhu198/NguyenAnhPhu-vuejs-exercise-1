<template>
 <nav class="navbar">
     <center>
 <input type="text"  placeholder="type here for add a new todo" v-model="add" @keyup.enter="addTodo(),add =''" >
     </center>
     <ul>
         <li> <router-link to="/all" >All</router-link> </li>
         <li>| <router-link to="/uncompleted" > Uncompleted</router-link> </li>
         <li>| <router-link to="/completed" > completed</router-link></li>
     </ul>
 </nav>
</template>

<script>
export default {
data() {
    return {
        add: '',
    }
},
methods: {
    addTodo() { 
        this.todos.push({ title: this.add})
        alert('Thêm thành công')
    }
},
computed: {
    todos(){
        return this.$store.state.todos
    }
}
}
</script>

<style>
.navbar{
    background:rgb(201, 194, 194);
    height: 100px ;
    width: 100%;

}
.navbar input{
    margin-top: 35px;
    width: 80%;
    height: 40px;
    border: none;
    justify-content: center;
    align-content: center;
     text-align: center;
     color: black;
}
.navbar input:focus{
    outline: none;
}
.navbar ul{
    margin-right: 20px;
    display: flex;
    justify-content: flex-end ;
    list-style: none;
}
.navbar ul li{
    margin-left: 20px;
    color:#1d0808;
}
.navbar ul li:hover{
    color: rgb(209, 160, 25);;
}
</style>