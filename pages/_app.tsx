import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider
      {...pageProps}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <Toaster />
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </ClerkProvider>
  );
}
