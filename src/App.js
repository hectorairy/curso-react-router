import { HashRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import { HomePage } from "./components/HomePage";
import { BlogPage } from "./components/BlogPage";
import { BlogPost } from "./components/BlogPost";
import { ProfilePage } from "./components/ProfilePage";

function App() {
  return (
    <HashRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
