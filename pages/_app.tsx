import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider
      {...pageProps}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <NextUIProvider>
        <Toaster />
        <div className={`${inter.className}`}>
          <Component {...pageProps} />
        </div>
      </NextUIProvider>
    </ClerkProvider>
  );
}
