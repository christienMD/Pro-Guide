import { ReactNode } from "react";
import ContextProvider from "../ContextProvider";

interface Props {
  children: ReactNode;
}

const PagesLayout = ({ children }: Props) => {
  return (
    <ContextProvider>
      <main className="mt-20">{children}</main>
    </ContextProvider>
  );
};

export default PagesLayout;
