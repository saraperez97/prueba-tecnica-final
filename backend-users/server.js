const http = require("http");

const PORT = 3000;
const users = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  email: `user${i + 1}@yopmail.com`,
  name: `User${i + 1}`,
  surname1: `Surname${i + 1}`,
  surname2: `Lastname${i + 1}`,
}));

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const { search = "" } = JSON.parse(body);

      const filteredUsers = users.filter(
        (u) =>
          u.name.toLowerCase().includes(search.toLowerCase()) ||
          u.surname1.toLowerCase().includes(search.toLowerCase()) ||
          u.surname2.toLowerCase().includes(search.toLowerCase()) ||
          u.email.toLowerCase().includes(search.toLowerCase())
      );
      console.log("SERVER ", search);
      res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      });

      res.end(JSON.stringify({ users: filteredUsers }));
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not sss Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
