export default {
  template: `
                <tr>
                    <td>{{title}} {{article.articleno}}</td>
                    <td>{{article.subject}}</td>
                    <td>{{article.userid}}</td>
                    <td>{{article.regtime}}</td>
                </tr>
    `,
  props: { article: Object, title: String },
};
