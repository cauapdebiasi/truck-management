import { Routes, Route } from "react-router-dom";
import SidePanel from "@/components/SidePanel";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Parts from "./Parts";
import Settings from "./Settings";
import Save from "./Save";
import Brakes from "./Brakes";
import styles from "@/assets/styles/screens/Base.module.scss";
import PartsList from "@/components/PartsList";

const Base: React.FC = () => {
  return (
    <div className={styles.base}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<><PartsList title="Filtros" category="filtros" />
            <PartsList title="Óleos" category="fluidos" /></>} />
          <Route path="parts" element={<Parts />} />
          <Route path="settings" element={<Settings />} />
          <Route path="save" element={<Save />} />
          <Route path="brakes" element={<Brakes />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Base
