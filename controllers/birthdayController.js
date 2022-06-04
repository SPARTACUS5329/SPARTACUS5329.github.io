module.exports = (app) => {
  app.get("/add-birthday/", (req, response) => {
    const { username, birthday } = req.query;
    console.log(username, birthday);
    response.send({ username, birthday }).status(200);
  });
};
