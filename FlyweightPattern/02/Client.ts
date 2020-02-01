import { WebsiteFactory } from "./WebsiteFactory";
import { Website } from "./Website";
import { User } from "./User";

let factory: WebsiteFactory = new WebsiteFactory();

let w1: Website = factory.getWebsiteByKey('博客');
let user1: User = new User('雷神');
w1.getWebsiteInfo(user1);

let w2: Website = factory.getWebsiteByKey('博客');
let user2: User = new User('火神');
w2.getWebsiteInfo(user2);

let w3: Website = factory.getWebsiteByKey('博客');
let user3: User = new User('电神');
w3.getWebsiteInfo(user3);

let w4: Website = factory.getWebsiteByKey('鞋店');
let user4: User = new User('ppt');
w4.getWebsiteInfo(user4);

let w5: Website = factory.getWebsiteByKey('鞋店');
let user5: User = new User('aat');
w5.getWebsiteInfo(user5);


let websiteCount: number = factory.getWebsiteCount();
console.log(`网站数目：${websiteCount}`);
