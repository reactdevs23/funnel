import Funnel from "./components/Funnel/Funnel";
import styles from "./App.module.css";
import SalesFunnel from "./components/SalesFunnel/SalesFunnel";
import Piramid from "./components/Piramid/Piramid";

//  font-family: "Poppins", sans-serif;
//  font-family: "Inter", sans-serif;
function App() {
  const funnelData = {
    fontFamily: "'Inter', sans-serif",
    data: [
      { label: "AWARNESS", value: "", bg: "#4656A1", labelColor: "#fff" },
      { label: "INTEREST", value: "", bg: "#7183D5", labelColor: "#fff" },
      { label: "DESIRE", value: "", bg: "#C6CCEE", labelColor: "#000" },
      { label: "ACTION", value: "", bg: "#F4F7FE", labelColor: "#000" },
    ],
  };
  const salesFunnelData = {
    fontFamily: "'Inter', sans-serif",
    primaryColor: "#000",
    secondaryColor: "#fff",
    curveBg: "#e8e8e8",
    data: [
      {
        label: "Abstract",
        info: "Drive traffic",
        bg: "#2C92D5",
        color: "#fff",
      },
      {
        label: "Interact",
        info: "Engage with the audience",
        bg: "#37C9EF",
        color: "#fff",
      },
      {
        label: "Convert",
        info: "Generate <br/> inquiries",
        bg: "#3EDAD8",
        color: "#fff",
      },
      {
        label: "Take it offline",
        info: "Talk and convince customer to purchase",
        bg: "#86EAE9",
        color: "#fff",
      },
    ],
  };
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <Funnel {...funnelData} />
      <SalesFunnel {...salesFunnelData} />
      {/* <Piramid /> */}
    </div>
  );
}

export default App;
