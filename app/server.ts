import app from "./app"

const port = 3000;

app.listen(port, "127.0.0.1", () => {
    console.log("App started on port " + port);
});
