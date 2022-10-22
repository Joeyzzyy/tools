<template>
  <div class="hello" style="display: flex; justify-content: center; align-items: center">
      <el-form layout="center" ref="form" :model="form" label-width="120px">
      <el-form-item  class="form-item" label="Install Link">
        <el-input type="textarea" v-model="form.installLink"></el-input>
      </el-form-item>
      <el-form-item label="App Key">
        <el-input v-model="form.appKey"></el-input>
      </el-form-item>
      <el-form-item label="App Secret Key">
        <el-input v-model="form.appSecretKey"></el-input>
      </el-form-item>
      <el-form-item label="Store Name">
        <el-input v-model="form.storeName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Generate</el-button>
        <el-button type="primary" v-clipboard:copy="finalInstallLink" v-clipboard:success="onCopy">Copy Link</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        installLink: '',
        appKey: '',
        appSecretKey: '',
        storeName: ''
      },
      finalInstallLink: ''
    }
  },  
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    onSubmit() {
      var finalLink = '';
      finalLink = this.form.installLink + '&appID=' + this.form.appKey + '&appKey=' + this.form.appSecretKey + '&storeName=' + this.form.storeName;
      console.log('submitted!', finalLink);
      this.finalInstallLink = finalLink;
      this.$message.success("拼接成功，请点击复制获取链接");
    },
    onCopy() {
      this.$message.success("复制成功");
    },
  }
}
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
.form-item {
  width: 540px;
}
</style>
