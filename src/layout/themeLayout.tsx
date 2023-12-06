import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";

const MainThemeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            {children}
        </ThemeProvider>
    );
};

export default MainThemeLayout;
