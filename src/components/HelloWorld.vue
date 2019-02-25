<template>
  <div class="hello">
    <el-row :gutter="20">
      <!-- <el-form :inline="true" class="demo-form-inline" > -->
        <el-col :span="4">
          <!-- <el-form-item> -->
            <el-select :inline="true" v-model="platform" >
              <el-option value="5" label="PC"></el-option>
              <el-option value="2" label="PSN"></el-option>
              <el-option value="1" label="XBOX"></el-option>
            </el-select>
          <!-- </el-form-item> -->
        </el-col>
        <el-col :span="16">
          <!-- <el-form-item> -->
            <el-input
              :inline="true"
              id="idinput"
              type="text"
              v-model="playname"
              placeholder="请输入你的角色名..."
            ></el-input>
          <!-- </el-form-item> -->
        </el-col>
        <el-col :span="4">
          <!-- <el-form-item > -->
            <el-button :inline="true" class="bar" icon="el-icon-search" @click="search"></el-button>
          <!-- </el-form-item> -->
        </el-col>
      <!-- </el-form> -->
    </el-row>

    <el-card class="" v-if="msg">
      <div class="text item">{{ this.meta.platformUserHandle }}</div>
      <div class="text item">最后更新:{{ this.meta.cacheExpireDate }}</div>
      <div
        v-for="o in this.shuju"
        :key="o"
        class="text item"
      >{{ o.metadata.name }}：{{ o.value }}，全区排名{{o.percentile + '%'}}</div>
    </el-card>
    <el-row :gutter="20">
      <el-col :span="6" v-for="o in this.child" :key="o">
        <el-card :body-style="{ padding: '0px' }" class="box-card" v-if="msg">
          <div class="text item">
            {{ o.metadata.legend_name }}
            <img :src=" o.metadata.icon " class="image">
            <div
              v-for="i in o.stats"
              :key="i"
              class="text item"
              style="padding: 14px;"
            >{{ i.metadata.name }}:{{i.value}},排名{{i.displayRank}},前{{i.percentile}}%</div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- <br>check out the
    <a href target="_blank" rel="noopener">vue-cli documentation</a>.-->
    <!-- {{ msg.data.children }} -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      playname: "cloudysss",
      platform: "5",
      loading: true,
      errored: false,
      msg: null,
      child: "",
      shuju: "",
      meta: ""
    };
  },
  props: {},
  methods: {
    search() {
      // let url = "https://public-api.tracker.gg/apex/v1/standard/profile/"; //部署时需要注释掉下面一行用此行。开发环境则相反
      let url = "/api"; //开发环境用此行
      axios
        .get(url + this.platform + "/" + this.playname, {
          headers: { "TRN-Api-Key": "b18c95ec-a98e-44d6-9434-72695d83b835" }
        })
        .then(response => {
          console.log(111);
          this.msg = response.data;
          this.shuju = this.msg.data.stats;
          this.meta = this.msg.data.metadata;
          this.child = this.msg.data.children;
          console.log("mt", this.meta);
          console.log("shuju", this.shuju);
        })
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
#idinput {
  width: 200%;
}

#box-card {
  display: flex;
  justify-content: center;
}


.image {
  width: 50%;
  display: block;
  justify-content: center;
}

.demo-form-inline {
  display: flex;
  justify-content: center;
}

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
