module.exports = function (app) {
  app.get("/fuck", function (req, res) {
    res.write("This is Umair Imtiaz!");
    res.end();
  });

  app.get("/test", function (req, res) {
    res.sendFile(__dirname + "/www/test.html");
  });
  let users = [
    {
      name: "umair",
      date: "02/10/1999",
      age: "21",
      email: "abc@me.com",
      password: "123",
    },
    {
      name: "imtiaz",
      date: "02/10/1899",
      age: "23",
      email: "umair@me.com",
      password: "123",
    },
    {
      name: "abc",
      date: "02/10/1994",
      age: "25",
      email: "imtiaz@me.com",
      password: "123",
    },
  ];
  app.get("/api/auth", function (req, res) {
    var email = req.query.email;
    var password = req.query.password;
    // console.log(username, password);
    // res.send({ username, password });
    let loggedInUser = users.filter(
      (x) => x.email == email && x.password == password
    );
    // res.send(loggedInUser);
    if (loggedInUser.length == 0) {
      res.sendStatus(400);
      return;
    } else {
      res.send(loggedInUser[0]);
      return;
    }
  });

  //AUTHENTICATION route responds to an aJax post
  app.post("/api/login", function (req, res) {
    if (!req.body) {
      console.log("Bad Page");
      return res.sendStatus(400);
    }
    var accountholder = {};
    accountholder.email = req.body.email;
    accountholder.password = req.body.password;
    accountholder.valid = false;
    console.log("Acc false"); //show me loop results on server
    //loop thru accounts
    for (let i = 0; i < users.length; i++) {
      if (
        req.body.email == users[i].email &&
        req.body.password == users[i].password
      ) {
        accountholder.valid = true;
        console.log("Acc True"); //show me loop results on server
      }
    }
    //respond by sending back account holder variable with its true or false state
    res.send(accountholder);
  });
};
