import { v4 } from 'uuid';
import { User } from "./User";

const user = new User('山田', '花子', 28);

const contentsElem = document.getElementById('contents');
if(!!contentsElem) {
    contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}

const saibanButton = document.getElementById('saiban') as HTMLButtonElement;
const uuidSpan = document.getElementById('uuid') as HTMLSpanElement;

// ボタンのクリックイベント
saibanButton.onclick = (e) => {
    uuidSpan.innerText = v4();
}
