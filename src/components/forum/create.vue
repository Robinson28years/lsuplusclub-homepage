<template>
    <div>
        <div class="container" style="margin-top: 5%">
            <div class="container col-md-6 col-md-offset-3">
                <el-input v-model="title" placeholder="请输入标题"></el-input>
                <el-select v-model="value2" placeholder="请选择分类" style="margin-top: 3%;">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="container"  id="editor">
                <mavon-editor style="height: 100%" v-model="value"></mavon-editor>
                <el-button type="success" @click="submit" style="margin-top: 2%">发布帖子</el-button>
            </div>

        </div>
    </div>
</template>

<script>
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  export default {
    components: {
      mavonEditor
      // or 'mavon-editor': mavonEditor
    },
    methods: {
      submit() {
        console.log(this.value);
        axios.post('api/topics', {
          title : this.title,
          categories : this.value2,
          body : this.value,
        }).then(response => {
//          console.log(response.data);
            if(response.data.result == "success") {
              this.$router.push('/forum');
            }
        })
      },

    },
    data() {
      return {
        value: '',
        title: '',
        value2: '',
        options: [{
          value: 'code',
          label: '编程'
        }, {
          value: 'daily',
          label: '日常'
        }],
      }
    }
  }
</script>

<style>
    #editor {
        margin-top: 10%;
        width: 80%;
        height: 580px;
    }
</style>
