import { DataProvider } from "@/components/Context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <DataProvider>
            <Component {...pageProps} />
        </DataProvider>
    );
}
