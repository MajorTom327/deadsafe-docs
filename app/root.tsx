import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { json } from "@vercel/remix";
import { useLoaderData } from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";

import stylesheet from "~/tailwind.css";
import Layout from "./components/Layout";

export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "The Deadsafe Docs",
  viewport: "width=device-width,initial-scale=1",
});

export const loader = () => {
  const ENV = {
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_ANALYTICS_ID: process.env.VERCEL_ANALYTICS_ID,
  };

  return json({ ENV });
};

export default function App() {
  const { ENV } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />

        <Analytics />
        <script>
          {`
          window.ENV = ${JSON.stringify(ENV)};
          `}
        </script>
      </body>
    </html>
  );
}
