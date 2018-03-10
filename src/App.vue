<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png" alt="hype" style="width:30px"><h1> Vue.js SPA</h1>
    </header>
    <main> 
      <aside class="sidebar">
      <div>
        <div v-for="(value, key, index) in itemsObject" :key="index">
             {{ index }}.{{ value }}
        </div>
      </div>
      </aside>
      <div class="mainTab">
      <div class="inputTask">
            <input class="new-todo"
              autofocus autocomplete="off"
              placeholder="What needs to be done?"
                 v-model="newTodo"
                   @keyup.enter="addTodo">
      </div>
      <div class="content">
          <!-- <router-view></router-view> -->
      
          
      </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  // name: "app",
  data() {
    return {
      itemsObject: {
        firstName: "Иван",
        lastName: "Петров",
        age: 30
      }
    };
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 90px;
  border-bottom: 3px solid #42b983;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
}

main {
  display: flex;
  height: calc(100vh - 90px);
  max-width: 1200px;
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}

aside {
  flex: 1 0 30%;
  height: 100%;
  overflow-y: auto;
  width: 30%;
  padding: 50px 30px;
  box-sizing: border-box;
  border-right: 3px solid #42b983;
}

.mainTab {
  display: flex;
  flex: 1 1 70%;
  flex-direction: column;
  justify-content: flex-start;
}

.inputTask {
  display: flex;
  height: 10%;
  align-items: center;
  justify-content: center;
}

input {
  font-size: 2em;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  font-style: italic;
  font-weight: 300;
  color: #194d33;
}

.content {
  flex: 1 1 70%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link {
  display: block;
  text-decoration: none;
  margin-bottom: 10px;
  color: #2c3e50;
  &--greetings {
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  &.is-active {
    color: #42b983;
  }
}
</style>
