<template>
  <div class="container col-md-8 col-md-offset-2" style="margin-top: 5%">
    <!-- Form -->
    <el-button v-if="userLogin" style="margin-bottom: 2%" type="info" @click="dialogFormVisible = true">
      贡献图书 ^_^
    </el-button>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="书名">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="ISBN">
              <span>{{ props.row.isbn }}</span>
            </el-form-item>
            <el-form-item label="关键词">
              <span>{{ props.row.description }}</span>
            </el-form-item>
            <el-form-item label="贡献者">
              <span>{{ props.row.owner.name }}</span>
            </el-form-item>
            <el-form-item label="书籍位置">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="借阅状态">
              <span>{{ props.row.state }}</span>
            </el-form-item>
            <template v-if="props.row.state == '已经借出'">
              <el-form-item label="借阅者">
                <span>{{ props.row.borrower.name }}</span>
              </el-form-item>
              <el-form-item label="预计归还">
                <span>{{ props.row.return_time }}</span>
              </el-form-item>
            </template>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="书名" prop="name">
      </el-table-column>
      <el-table-column label="贡献者" prop="owner.name">
      </el-table-column>
      <el-table-column label="关键词" prop="description">
      </el-table-column>
      <el-table-column label="借阅情况" prop="state">
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button :disabled="scope.row.state == '已经借出'" size="small" type="success" @click="borrow(scope.$index, scope.row)">借阅
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block" style="margin-bottom: 10%; margin-top: 5%">
      <el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="page_size" layout="prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
    <el-dialog title="图书信息" :visible.sync="dialogFormVisible">
      <el-form label-position="left" label-width="90px" :model="form">
        <el-form-item required label="书名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item required label="关键词">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item required label="ISBN">
          <el-input v-model="form.isbn"></el-input>
        </el-form-item>
        <el-form-item required label="放置地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style>
body {
  overflow-y: scroll;
}

body.stop-scrolling {
  overflow-y: scroll;
}

.demo-table-expand {
  font-size: 0;
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>

<script>
// import NProgress from 'nprogress'
export default {
  created() {
    NProgress.start();
    axios.get('api/books')
      .then(response => {
        // console.log(response.data.data);
        let k = response.data.data.data;
        let i = 0;
        // this.tableData = k;
        while (k[i] != null) {
          this.tableData.push(k[i]);
          //            console.log(k[i]);
          i++;
        }
        this.total = response.data.data.total;
        this.page_size = response.data.data.per_page;
        NProgress.done();
      })
    if (localStorage.getItem('user') != null) {
      this.userLogin = true;
    }
  },
  methods: {
    open2() {
      this.$notify({
        title: '成功',
        message: '谢谢你的分享，好人一生平安',
        type: 'success'
      });
    },
    submit() {
      axios.post('api/books', this.form)
        .then(response => {
          // console.log(response.data.data);
          this.tableData.unshift(response.data.data);
          this.dialogFormVisible = false;
          this.open2();
        })
    },
    borrow(index, row) {
      if (this.userLogin != true) {
        swal("抱歉,无法借阅", "请先登录", "warning")
      }
      else {
        axios.patch('api/books/' + row.id)
          .then(response => {
            //              console.log(response.data.data);
            row.state = response.data.data.state;
            row.borrower = response.data.data.borrower;
            row.return_time = response.data.data.return_time;
            swal("借阅成功！", "享受你的阅读吧", "success");
          })
      }
      console.log(index, row);
    },
    handleCurrentChange(val) {
      //        this.loading2 = true;
      NProgress.start();
      axios.get('api/books?page=' + val)
        .then(response => {
          this.tableData = null;
          this.tableData = [];
          let k = response.data.data.data;
          let i = 0;
          while (k[i] != null) {
            this.tableData.push(k[i]);
            i++;
          }
          NProgress.done();
        })
      //        console.log(`当前页: ${val}`);
    },
  },
  data() {
    return {
      userLogin: false,
      tableData: [],
      currentPage3: 1,
      total: 200,
      page_size: 10,
      dialogFormVisible: false,
      form: {
        name: '',
        description: '',
        isbn: '',
        address: '',
      },
      formLabelWidth: '120px'
    }
  }
}
</script>
