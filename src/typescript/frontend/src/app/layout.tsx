import { type Metadata, type Viewport } from "next";
import { getDefaultMetadata } from "configs/meta";
import Providers from "context/providers";
import StyledComponentsRegistry from "lib/registry";
import "react-toastify/dist/ReactToastify.css";
import {
  formaDJRDisplayMedium,
  formaDJRDisplayRegular,
  formaDJRMicro,
  pixelar,
} from "styles/fonts";
import "../app/global.css";
import DisplayDebugData from "@/store/server-to-client/FetchFromServer";

export const metadata: Metadata = getDefaultMetadata();
export const viewport: Viewport = {
  themeColor: "#000000",
};

const fonts = [pixelar, formaDJRMicro, formaDJRDisplayMedium, formaDJRDisplayRegular];
const fontsClassName = fonts.map((font) => font.variable).join(" ");

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={fontsClassName}>
        <StyledComponentsRegistry>
          <Providers>
            <DisplayDebugData />
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
