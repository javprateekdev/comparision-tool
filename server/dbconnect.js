
import mysql from 'mysql';


let connection = mysql.createConnection({
    host: "housethat.in",
    user: "u406919292_tool",
    password: "Abcd@321",
    database: "u406919292_compare",
});

  connection.on(`error`, (err) => {
    console.error(`Connection error ${err.code}`);
  });

 const addUser = (req, res) => {

    let sqlQuery = 'SELECT * FROM project';

    connection.query(sqlQuery, (error, results) => {
        if (error) throw error;
       
        res(JSON.stringify(results));
    });
};


console.log(addUser())