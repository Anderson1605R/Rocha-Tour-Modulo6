import Footer from "@/components/footer/Footer";
import "../styles/globals.css";
import Header from "@/components/header/Header";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: "RochaTour",
  description:
    "Projeto desenvolvido como atividade individual no bootcamp do RecodePro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
