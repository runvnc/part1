var __ = require('bluebird').promisifyAll;

async function test() {
  console.log('connecting to mongo..');

  try {
    let db = await require('./mongo')();
    console.log('db returned');
    await __(db.collection('test')).insertAsync({x:1});
    console.log('inserted'); 
       
    console.log('ok');

    await require('./mongo')();
    console.log('ok');
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
