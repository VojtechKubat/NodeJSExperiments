/* @flow */



function getLength(str: string) {
  return str.length;
}

var objWithLength = {
  length: 25
}

var objWithoutLength = {
  a: 10
}

const test = (msg: string) => {
  console.log(msg);
};

export default test;