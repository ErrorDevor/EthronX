import React from "react";

import { Footer } from "widgets/Footer/Footer";
import { Header } from "widgets/Header/Header";
import { Banner } from "widgets/Banner/Banner";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Banner />
      <Header />
      {children}
      <Footer />
    </>
  );
}
