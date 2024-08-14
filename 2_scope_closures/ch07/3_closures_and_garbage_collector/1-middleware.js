// Is there any closure in this code? Why?

app.get("/users", (request, response) => {
  const result = database.queryAllUsers();
  response.status(200).send(result);
});
