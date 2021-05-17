const users = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTM'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
    ];
    const scoreGreater = users.filter(function (users)
    {
        return users.scores>85;
    })
    console.log(scoreGreater);
    function addUser(users,username){
        const{length}=users;
        const found =users.some(el=>el.name===username);
        if(!found) users.push({name:username});
        return users;
    }
    console.log(addUser(users,'jim'));
    function addUserSkill(users,userskill){
        const{length}=users;
        const found =users.some(el=>el.skills===userskill);
        if(!found) users.push({skills:userskill});
        return users;
        }
    console.log(addUserSkill(users,['html','css']));
    function editUser(users,edituser){
        const{length}=users;
        const found =users.some(el=>el.name===edituser);
        if(!found) users.push({name:edituser});
        return users;
        }
    console.log(editUser(users,'chan'));