const axios = require('axios')

const test1 = async () => {
  const res = await axios.put('http://localhost:3000/user/5dd2222e857aba00067be1b4', {
    name: 'Jerry'
  })
  console.log(res.data)
}

test1()