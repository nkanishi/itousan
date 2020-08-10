// 質問
const questions = [
  { num: 1, point: 1, sentence: '非常にたくさんの仕事をしなければならない' },
  { num: 2, point: 2, sentence: '時間内に仕事が処理しきれない' },
  { num: 3, point: 2, sentence: '高度の知識や技術が必要な仕事だ' },
  { num: 4, point: 2, sentence: '自分のペースで仕事ができない' },
  { num: 5, point: 3, sentence: '職場の雰囲気が悪い' },
]
// 結果
const results = [
  { min: 0, max: 4, sentence: 'あなたはそれほどストレスを感じていません。' },
  { min: 5, max: 7, sentence: '少しストレスを感じているようです。意識的にストレス対処に努めてください。' },
  { min: 8, max: 10, sentence: '非常に多くのストレスを感じているようです。医者の診断を受けてください。' },
]
var vm = new Vue({
  el: '#app',
  data: {
    status: 0,
    sum: 0,
    questions: questions,
  },
  computed: {
    question() {
      return questions.filter(q => q.num === this.status).shift()
    },
    result() {
      return results.filter(a => this.sum >= a.min && this.sum <= a.max).shift()
    },
    isFinish() {
      return this.status > questions.length
    }
  },
  methods: {
    start() {
      this.status = 1;
    },
    reset() {
      this.status = 0;
      this.sum = 0;
    },
    answer(type) {
      let question = questions.filter((q) => {
        return q.num === this.status
      }).shift()

      if (type === 'yes') {
        this.sum = this.sum + question.point;
      }

      this.status++;
    }
  }
})