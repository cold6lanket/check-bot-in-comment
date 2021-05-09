const targetWords = ['see my story'];

function selectComments(body) {
    const ulElements = document.querySelectorAll(`${body}`);
    let arr = [];

    [...ulElements].forEach(element => {
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


createEachUser(comments);