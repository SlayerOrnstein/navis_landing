import { App, staticFiles } from "fresh";
import type { State } from "./utils/utils.ts";

export const app = new App<State>().use(staticFiles()).fsRoutes();
