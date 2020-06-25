import Server from "./Server";

const server = new Server();

try {
  server.start();
} catch (error) {
  // eslint-disable-next-line no-console
  console.log(`This error occurred on ${new Date()}`);
  // eslint-disable-next-line no-console
  console.log(error.stack);
  process.exit(1);
}
