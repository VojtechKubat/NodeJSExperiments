/* @flow */

import os from 'os';
import fs from 'fs';
import _ from 'lodash';

const userInfo = os.userInfo();

const udemytut = () => {
    console.log("Udemy Tutorial");
    // console.log(userInfo);

    // fs.appendFile("greetings.txt", `Hello ${userInfo.username}\n` , (err) => { 
    //     if (err) throw err;
    //     console.log("Saved!");
    // })

    // console.log(_.isString('aaa'));
    // console.log(_.uniq([4,2,2,2,1,1,1,2,3,4,1, 'a', 'a']));
};


export default udemytut;