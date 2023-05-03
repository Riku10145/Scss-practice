import { CssModules } from "./components/CssModules";
import { InlineSytyle } from "./components/InlineStyle";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineSytyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </div>
  );
}
