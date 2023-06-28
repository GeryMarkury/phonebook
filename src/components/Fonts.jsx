import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Lusitana';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('src/fonts/Lusitana-Regular.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Lusitana';
        font-style: bold;
        font-weight: 700;
        font-display: swap;
        src: url('src/fonts/Lusitana-Bold.ttf') format('truetype');
      }
      `}
  />
)