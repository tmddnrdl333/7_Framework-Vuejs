export default {
  template: `
      <div>
        <h1 class="underline">부서 등록</h1>
        <table>
          <colgroup>
            <col style="width: 30%" />
            <col style="width: 70%" />
          </colgroup>
          <tbody>
            <tr>
              <td>Dept No.</td>
              <td>
                <input type="text" required="required" v-model="dept.deptNo" />
              </td>
            </tr>
            <tr>
              <td>Dept Name</td>
              <td>
                <input type="text" required="required" v-model="dept.dName" />
              </td>
            </tr>
            <tr>
              <td>Dept Location</td>
              <td>
                <input type="text" required="required" v-model="dept.loc" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button style="width: 40%" @click="registDept()">등록</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  `,
  data() {
    return {
      dept: { deptNo: '', dName: '', loc: '' }, // 백엔드 통신 후의 데이터로 채워짐!
    };
  },
  methods: {
    registDept() {
      // axios 이용해서 백엔드 통신후 자신의 depts 데이터 채우는 작업!
      axios
        .post('http://127.0.0.1:8080/myapp_rest/api/depts', this.dept)
        .then((response) => (this.depts = response.data))
        .then(() => {
          alert('부서 등록에 성공하였습니다.');
          this.moveList();
        })
        .catch((error) => alert('부서 등록에 실패했습니다.\n' + error));
    },
    moveList() {
      location.href = './list.html';
    },
  },
};
