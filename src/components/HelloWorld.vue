<template>
  <div class="hello">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-select :inline="true" v-model="platform">
          <el-option value="5" label="PC"></el-option>
          <el-option value="2" label="PSN"></el-option>
          <el-option value="1" label="XBOX"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input
          :inline="true"
          class="bar"
          type="text"
          v-model="playname"
          placeholder="请输入你的角色名..."
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button :inline="true" class="bar" icon="el-icon-search" @click="search"></el-button>
      </el-form-item>
    </el-form>

    <p>
      {{ msg }}
      <!-- <br>check out the
      <a href target="_blank" rel="noopener">vue-cli documentation</a>.-->
    </p>
  </div>
</template>

<script>
import axios from 'axios'


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
        .catch(() => {
          // console.log(error);
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
/* .bar {
  display: flex;
  flex-flow:row wrap ;
  display: inline-block;
  color: #42b983;
}

.bar el-input{
  display: inline-block;
  color: #42b983;
}

.bar el-button {
  display: inline-block;
  color: #42b983;
} */

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
