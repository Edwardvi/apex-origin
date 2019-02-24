<template>
  <div class="hello">
    <div id="example-5">
      <select v-model="platform">
        
        <option value="5">pc</option>
        <option value="2">ps4</option>
        <option value="1">xbox360</option>
      </select>
 
    </div>
    <input type="text" v-model="playname" placeholder="请输入你的角色名...">
    <button @click="search"></button>

    <p>
      {{ msg }}
      <br>check out the
      <a href target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Plugins</h3>
    <ul>
      <li>
        <a href target="_blank" rel="noopener">babel</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "String",
      playname: "cloudysss",
      platform: "5",
      loading: true,
      errored: false
    };
  },
  props: {},
  methods: {
    search() {
      axios
        .get("/api/" + this.platform + "/" + this.playname, {
          headers: { "TRN-Api-Key": "b18c95ec-a98e-44d6-9434-72695d83b835" }
        })
        .then(response => (this.msg = response.data))
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
