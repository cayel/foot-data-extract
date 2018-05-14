const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const csv = require ('fast-csv');
 
// open the database
let db = new sqlite3.Database('./db/foot-data.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the foot-data database.');
});
 
db.serialize(() => {
  db.each(`SELECT Id as id,
                  Name as name,
                  SimpleName as simplename
           FROM Team`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.id + "\t" + row.name+ "\t" + row.simplename);
  });
});
 
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});

function sqlInsertFixture(idCompetition, data) {
    dateFixture = data[0];
    teamHome = data[1];
    teamAway = data[2];
    goalHome = data[3];
    goalAway = data[3];
    return 'insert into Fixture (IdCompetition, IdTeamHome, IdTeamAway, Round, Date, GoalFullTimeHome, GoalFullTimeAway) values('+idCompetition+','+dateFixture+','+teamHome+','+teamAway+','+goalHome+','+goalAway+')';
}

fs.createReadStream("./data/ligue1-94.csv")
    .pipe(csv())
    .on("data", function(data){
        console.log(sqlInsertFixture(1,data));
    })
    .on("end", function(){
        console.log("done");
    });