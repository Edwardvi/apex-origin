<template>
  <div class="hello">
    <el-row :gutter="20" id="search">
      <!-- <el-form :inline="true" class="demo-form-inline" > -->
      <el-col :span="5">
        <!-- <el-form-item> -->
        <el-select :inline="true" v-model="platform">
          <el-option value="5" label="PC"></el-option>
          <el-option value="2" label="PSN"></el-option>
          <el-option value="1" label="XBOX"></el-option>
        </el-select>
        <!-- </el-form-item> -->
      </el-col>
      <el-col :span="13">
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

    <el-card :gutter="10" class v-if="msg" id="zonglan">
      <div class="text item">{{ this.meta.platformUserHandle }}</div>
      <div class="text item">最后更新:{{ this.meta.cacheExpireDate }}</div>
      <div
        v-for="o in this.shuju"
        :key="o"
        class="text item"
      >{{ o.metadata.name }}：{{ o.value }}，全区排名{{o.percentile + '%'}}</div>
    </el-card>
    <el-row :gutter="20">
      <el-col :span="16" v-for="o in this.child" :key="o">
        <el-card class="box-card" v-if="msg">
          <h3>{{ o.metadata.legend_name }}</h3>
          <div class="tuwen">
            <img :src=" o.metadata.icon " class="image">

            <div class="legend_card">
              <div
                v-for="i in o.stats"
                :key="i"
                class="detail_text"
              >{{ i.metadata.name }}:{{i.value}},排名{{i.displayRank}}超过{{i.percentile}}%玩家</div>
            </div>
          </div>
        </el-card>
        <el-card class="box-card" v-if="msg">
          <h3>赞助商</h3>
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
.hello {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#search {
  margin: 2%;
}

#zonglan {
  margin: 1%;
}

#idinput {
  width: 200%;
}

.box-card {
  display: flex;
  margin: 2%;
  flex-direction: row;
}

.tuwen {
  display: flex;
}
.legend_card {
  display: block;
}

.image {
  width: 147.69px;
  height: 165.34px;
  display: block;
  justify-content: center;
}

.detail_text {
  display: inline-block;
  padding: 14px;
}

.demo-form-inline {
  display: flex;
  justify-content: center;
}

h3 {
  margin: 4px 0 0;
  margin-left: 18px;
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
