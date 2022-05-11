export default {
  template: `
    <div class="regist">
        <h1 class="underline">SSAFY 글 수정</h1>
        <div class="regist_form">
            <label for="userid">작성자</label>
            <input type="text" id="userid" name="userid" v-model="userid" ref="userid" /><br />
            <label for="subject">제목</label>
            <input type="text" id="subject" name="subject" v-model="subject" ref="subject" /><br />
            <label for="content">내용</label><br />
            <textarea id="content" name="content" v-model="content" ref="content" cols="35" rows="5"></textarea><br />
            <button @click="checkValue">수정</button>
            <button @click="moveList">목록</button>
        </div>
    </div>
    `,
  data() {
    return {
      articleno: 0,
      userid: '',
      subject: '',
      content: '',
    };
  },
  created() {
    axios.get(`http://localhost:9999/vue/board/${this.$route.query.articleno}`).then(({ data }) => {
      this.articleno = data.articleno;
      this.userid = data.userid;
      this.subject = data.subject;
      this.content = data.content;
    });
  },
  methods: {
    // 입력값 체크하기 - 체크가 성공하면 registBook 호출
    checkValue() {
      // 사용자 입력값 체크하기
      // isbn, 제목, 저자, 가격, 설명이 없을 경우 각 항목에 맞는 메세지를 출력
      let err = true;
      let msg = '';
      !this.userid && ((msg = '작성자 입력해주세요'), (err = false), this.$refs.userid.focus());
      err &&
        !this.subject &&
        ((msg = '제목 입력해주세요'), (err = false), this.$refs.subject.focus());
      err &&
        !this.content &&
        ((msg = '내용 입력해주세요'), (err = false), this.$refs.content.focus());

      if (!err) alert(msg);
      // 만약, 내용이 다 입력되어 있다면 registBook 호출
      else this.modifyBook();
    },

    modifyBook() {
      axios
        .put(`http://localhost:9999/vue/board/${this.articleno}`, {
          articleno: this.articleno,
          userid: this.userid,
          subject: this.subject,
          content: this.content,
        })
        .then(({ data }) => {
          let msg = '수정 처리시 문제가 발생했습니다.';
          if (data === 'success') {
            msg = '수정이 완료되었습니다.';
          }
          alert(msg);
          // 현재 route를 /list로 변경.
          this.$router.push('/list');
        });
    },
    moveList() {
      // 현재 route를 /list로 변경.
      this.$router.push('/list');
    },
  },
};
