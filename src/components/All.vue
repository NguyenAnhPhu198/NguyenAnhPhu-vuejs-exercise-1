<template>
  <div class="todo-list">
       
        <div style="margin-top:10px">
             <!-- <input type="text" v-model="add"  @keyup.enter="addTodo()"> -->
        </div>
         
         <div>
        <ul>
            <li v-for="(todo,index) in todos" :key="index" > <span>   <div class="block">
          <p>   <input type="checkbox" v-model="todo.compled"> <span :class="{ c:todo.compled}"><p ></p></span></p>
         <div>
            <button>
                <span>Sửa</span>
                <span>Đã sửa</span>
                </button>
            <button>Xóa</button>
         </div>
          
         </div>{{todo.title}}</span></li> 
        </ul>
         </div>   
   
    </div>
</template>

<script>



export default {
data() {
    return {
    
    }
},
computed: {
    todos(){
        console.log('fyf')
        return this.$store.state.todos
    }
}

}

</script>

<style>
.todo-list {
    width: 80%;
    margin:auto;
    
}
.todo-list ul{
    margin: 10px, 10px,0px,10px;
    list-style-type: none;
    padding: 10px;
    
   
}
.todo-list li{
    padding: 10px;
    cursor: pointer;
    margin-bottom: 10px;
    margin-top: 10px;
    /* margin-right: 40px; */
    border-radius: 4px;
    color: black;
    background:white;
   
}
.block{
    display: flex;
    justify-content: space-between;
}
.class{
    background-color: red;
}
</style>