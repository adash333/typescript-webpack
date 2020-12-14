import { User } from "./User";

const user = new User('佐藤', '次郎', 31);

const contentsElem = document.getElementById('contents');
if(!!contentsElem) {
    contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}
