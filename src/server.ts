import app from "./app";

const port = process.env.PORT || 3000;

try {
  app.listen(port, () =>
    console.log(`Server started on port ${port}
    \nPress CTRL + C to close the connection...\n`)
  );
} catch (error) {
  if (error instanceof Error) {
    console.log(`An error occurred: ${error.message}.`);
  }
}
