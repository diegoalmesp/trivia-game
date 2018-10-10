export default {
  PORT: process.env.PORT || 5000,
  API: {
    URL: 'https://opentdb.com/api.php',
    CONFIG: {
      AMOUNT: 10,
      DIFFICULTY: 'hard',
      TYPE: 'boolean'
    },
  }
}
