const fs = require('fs').promises;


class Note {
    read(){
        return fs.readFile('db/db.json', 'utf-8')
    }

    allNotes(){

        return this.read().then((notes) => {
            const parseNotes = JSON.parse(notes).map((note) => note);
            return parseNotes;
        })
    }
    newNote(note){

        this.allNotes().then((data) => {
            
            data.push(note);

            console.log(data);

            fs.writeFile('db/db.json', JSON.stringify(data) , 'utf-8');

        })

    }
}

module.exports = new Note();
