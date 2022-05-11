export default {
  template: `
            <div>
            <h1 class="underline">부서 목록</h1>
            <table>
            <colgroup>
                <col style="width: 10%" />
                <col style="width: 20%" />
                <col style="width: 40%" />
                <col style="width: 30%" />
            </colgroup>
            <thead>
                <tr>
                <th>번호</th>
                <th>부서번호</th>
                <th>부서명</th>
                <th>지역</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(dept,index) in depts" :key="dept.deptNo">
                    <td>{{index+1}}</td>
                    <td>{{dept.deptNo}}</td>
                    <td><a :href="'./detail.html?deptNo='+dept.deptNo">{{dept.dName}}</a></td>
                    <td>{{dept.loc}}</td>
                </tr>
            </tbody>
            </table>
        </div>
    `,
  data() {
    return {
      depts: [], // 백엔드 통신 후의 데이터로 채워짐!
    };
  },
  methods: {
    getDepts() {
      // axios 이용해서 백엔드 통신후 자신의 depts 데이터 채우는 작업!
      axios
        .get('http://127.0.0.1:8080/myapp_rest/api/depts')
        .then((response) => (this.depts = response.data))
        .catch((error) => alert(error));
    },
  },
  created() {
    this.getDepts();
  },
};
