var __ = require('bluebird').promisifyAll;

async function test() {
  console.log('connecting to mongo..');

  try {
    let db = await require('./mongo')();
    console.log('db returned');
    await __(db.collection('test')).insertAsync({x:1});

    await require('./mongo')();
  } catch (e) {
    console.error(e);
  }
}

test()
.then( () => {
  console.log('tada');
});

setTimeout( () => {
  console.log('tada');
}, 2000);
