import express, { Request, Response } from "express";
import * as http from "http";
import packageJson from "../package.json";

const port = 3000;

class Server {
  private readonly expressApp: express.Application;

  private readonly httpServer: http.Server;

  constructor() {
    this.expressApp = express();
    this.httpServer = new http.Server(this.expressApp);

    this.expressApp.get("/", (req: Request, res: Response) => {
      const version =
        // eslint-disable-next-line dot-notation
        "version" in packageJson ? `v${packageJson["version"]}` : "beta";
      res.send(`Hello World! I am backend ${version}.`);
    });

    this.expressApp.get("/date", (req: Request, res: Response) => {
      res.send(`We are ${new Date()}`);
    });
  }

  start(): void {
    this.httpServer.listen(port);
    const version =
      // eslint-disable-next-line dot-notation
      "version" in packageJson ? `v${packageJson["version"]}` : "beta";
    // eslint-disable-next-line no-console
    console.log(`Backend version ${version}`);
    // eslint-disable-next-line no-console
    console.log(`[p ${process.pid}] Listening at port ${port}`);
  }
}

export default Server;
