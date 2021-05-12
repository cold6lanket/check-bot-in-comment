const targetWords = [
    'link', 
    'cash', 
    'money', 
    '$', 
    'story',
    'invest',
    'trade',
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
    return createEachUser(arr);
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

    return obj.filter((element) => {
        const {comment, username} = element;
        let arrPotential = [];
        let newobjPotential = {};
    
        for (let i = 0; i < targetWords.length; i++) {
            const potential = comment
                                .toLowerCase()
                                .includes(`${targetWords[i]}`);
    
            if (potential) {
                newobjPotential.username = username;
                newobjPotential.comment = comment;
        
                arrPotential.push(newobjPotential);
        
                return arrPotential;
            }
        }
    
        return; 
    });
}

selectComments('.Mr508');
