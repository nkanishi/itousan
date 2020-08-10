new Vue({ 
    el: '#app',
    data: {
      name: '', //お名前
      subject: '', //件名
      contents: '', //内容
      errors: {
        name: [],
        subject: [],
        contents: []
      }
    },
    methods: {
      validator: function (type, max) {
        let name = []
        let subject = []
        let contents = []
        let message = max + '文字以内で入力してください。'
        if (type === 'name') {
          if (this.name.length > max) {
            name.push(message);
          }
          this.errors.name = name
        } else if (type === 'subject') {
          if (this.subject.length > max) {
            subject.push(message);
          }
          this.errors.subject = subject
        } else if (type === 'contents') {
          if (this.contents.length > max) {
            contents.push(message);
          }
          this.errors.contents = contents
        }
      },
    },
  });
 
 