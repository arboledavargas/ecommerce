import HorizontalCarrousell from "../components/horizontal_carrousell";
import { useState } from "react";

export default function HomePage() {
  var [brands] = useState([
    { brandSrc: "/src/assets/beats-logo-161616.png", id: 0 },
  ]);

  return (
    <div className="home_page_container">
      <HorizontalCarrousell brands={brands} />
    </div>
  );
}
