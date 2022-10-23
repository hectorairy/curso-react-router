import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <nav>
      {/* Create navigation from routes array */}
      <ul>
        {routes.map((route) => (
          <li key={route.to}>
            <NavLink
              to={route.to}
              style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
              end
            >
              {route.text}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* Create navigation using Links */}
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul> */}

      {/* Create navigation using NavLinks to add styles */}
      {/* <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          >
            Profile
          </NavLink>
        </li>
      </ul> */}
    </nav>
  );
};

const routes = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/blog",
    text: "Blog",
  },
  {
    to: "/profile",
    text: "Profile",
  },
];
