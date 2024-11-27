const mysql = require('mysql2');

// Crie a conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'mysql-container',  
  user: 'root',             
  password: '',             
  database: 'Library'       
});

// Conecte-se ao MySQL
connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});


