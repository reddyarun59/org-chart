import { EmployeeTreeProvider } from "@/components/EmployeeTreeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Org Chart</title>
        <meta name="description" content="Org Chart visualisation app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EmployeeTreeProvider>
        <Component {...pageProps} />
      </EmployeeTreeProvider>
    </div>
  );
}
