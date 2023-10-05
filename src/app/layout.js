export const metadata = {
  title: "Steffan Cross",
};

import { Providers } from "./provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div id="root">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
