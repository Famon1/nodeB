const mongoWork = require('mongoose');

let url = 'mongodb://localhost:27017/test';

//=======connect gtom DB ====================
const connectDB = async () => {
  await mongoWork.connect(url,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  console.log(2);
}
//=======select date ========================
const select = async () => {
  try {
  console.log(1)
  await connectDB()
  console.log(3)
  }
  catch(err) {console.log(`${err}`)}
};

module.exports = {
  connectDB:connectDB,
  select: select
}
