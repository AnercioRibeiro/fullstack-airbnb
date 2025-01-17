import "./globals.css"
import {Inter} from "next/font/google"
const inter = Inter({subsets:["latin"]});

export const metadata={
  title: "Airbnb Clone"
};
export default function RootLayout({children})
{
  return (
  <html lang="pt">
    <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet" precendence="default"></link>
    <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css" type="text/css"></link>
    <body className={inter.className}>
      {children}
    </body>
  </html>
  );
}
