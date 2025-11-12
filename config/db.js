const mysql = require("mysql2");

// Lấy thông tin kết nối từ biến môi trường (do Railway cung cấp)
const pool = mysql.createPool({
  host: process.env.DB_HOST, // mysql.railway.internal
  user: process.env.DB_USER, // root
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, // railway
  port: process.env.DB_PORT || 3306,
  connectionLimit: 10,
  ssl: { rejectUnauthorized: true }, // Railway yêu cầu SSL
});

module.exports = pool.promise();
