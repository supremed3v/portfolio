import Theme from "../styles/theme";
import "../components/GoTop/button.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
