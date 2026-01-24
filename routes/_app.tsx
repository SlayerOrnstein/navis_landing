import { Head } from "fresh/runtime";
import { define } from "../utils/utils.ts";
import TopBar from "../components/TopBar.tsx";

export default define.page(function App({ Component }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cephalon Navis</title>
      </head>
      <body>
        <Head>
          <title>Cephalon Navis</title>
        </Head>
        <TopBar></TopBar>
        <Component />
      </body>
    </html>
  );
});
