getNotes() => (fs.readFile('./db.json', utf8, (err, data)=> {
    console.log(data)}));