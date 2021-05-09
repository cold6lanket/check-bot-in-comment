const targetWords = [
    'see my story', 
    'Where is my friends', 
    'How do you manage to look so gorgeous everytime?', 
    'he evening for a pretty girl', 
    'whô ís bôred? Im wåítinḡ fôr ýoů!'
];

function selectComments(body) {
    const ulElements = document.querySelectorAll(`${body}`);
    let arr = [];

    [...ulElements].forEach((element) => {
        const text = element.innerText;
        const index = text.lastIndexOf('\n');
        const newText = text.slice(0, index);

        arr.push(newText);
    });

    //this gives an array of texts
    return arr;
}


function createEachUser(arr) {
    // this func has to return object of user and its comment...
    const obj = [];

    arr.forEach(el => {
        const username = el.slice(0, el.indexOf('\n'));
        const comment = el.slice(el.indexOf('\n'));

        let newobj = {};

        newobj.username = username;
        newobj.comment = comment;

        obj.push(newobj);
    });

    return obj;
}

const comments = selectComments('.Mr508');

createEachUser(comments).filter((element) => {
    let arr = [];
    let newobj = {};

    const targetComment = element.comment;
    const targetUser = element.username;

    for (let i = 0; i < targetWords.length; i++) {
        const potential = targetComment.includes(`${targetWords[i]}`);

        if (potential) {
            newobj.username = targetUser;
            newobj.comment = targetComment;
    
            arr.push(newobj);
    
            return arr;
        }
    }

    return; 
});