import { Routes, Route } from "react-router-dom";
import SidePanel from "@/components/SidePanel";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Parts from "./Parts";
import Settings from "./Settings";
import Save from "./Save";
import styles from "@/assets/styles/screens/Base.module.scss";

const Base: React.FC = () => {
  return (
    <div className={styles.base}>
      <SidePanel></SidePanel>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/save" element={<Save />} />
      </Routes>
    </div>
  )
}

export default Base
