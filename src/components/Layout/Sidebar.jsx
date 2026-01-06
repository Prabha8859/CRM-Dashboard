import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Staff",
    path: "/staff",
    icon: Users,
  },
  {
    name: "Insurance",
    path: "/insurance",
    icon: ShieldCheck,
  },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <aside
      className={`h-screen sticky top-0 left-0 z-40 transition-all duration-300 shadow-2xl ${
        collapsed ? "w-16" : "w-64"
      }`}
      style={{
        backgroundColor: "var(--sidebar-bg)",
        color: "var(--sidebar-text)",
      }}
    >
      {/* LOGO */}
      <div className="flex items-center justify-between p-4 border-b border-slate-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
        
        {!collapsed && (
          <h1 className="text-lg font-bold text-white relative z-10 tracking-wide">
            CRM Admin
          </h1>
        )}
        
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-180 relative z-10 p-1 rounded-full hover:bg-slate-700/50"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* MENU */}
      <nav className="mt-6 space-y-2 px-3">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isHovered = hoveredItem === index;

          return (
            <NavLink
              key={index}
              to={item.path}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              className={({ isActive }) => `relative flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer transition-all duration-300 group ${
                isActive
                  ? "text-white shadow-lg"
                  : "hover:translate-x-1"
              }`}
              style={({ isActive }) => ({
                backgroundColor: isActive
                  ? "var(--sidebar-active)"
                  : isHovered
                  ? "var(--sidebar-hover)"
                  : "transparent",
              })}
            >
              {({ isActive }) => (
                <>
                  {/* Active indicator bar */}
                  {isActive && (
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full"
                      style={{ backgroundColor: "#60a5fa" }}
                    />
                  )}

                  {/* Hover glow effect */}
                  {isHovered && !isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded-lg animate-pulse" />
                  )}

                  {/* Icon with animation */}
                  <div
                    className={`relative z-10 transition-all duration-300 ${
                      isActive
                        ? "scale-110"
                        : isHovered
                        ? "scale-105 rotate-6"
                        : ""
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  {/* Text with slide effect */}
                  {!collapsed && (
                    <span
                      className={`text-sm font-medium relative z-10 transition-all duration-300 ${
                        isActive ? "font-semibold" : ""
                      }`}
                    >
                      {item.name}
                    </span>
                  )}

                  {/* Ripple effect on click */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 bg-white/10 animate-ping opacity-20" />
                    </div>
                  )}

                  {/* Tooltip for collapsed state */}
                  {collapsed && isHovered && (
                    <div 
                      className="absolute left-full ml-2 px-3 py-1 text-white text-sm rounded-md shadow-lg whitespace-nowrap z-50"
                      style={{
                        backgroundColor: 'var(--sidebar-bg)',
                        animation: 'fadeIn 0.2s ease-out'
                      }}
                    >
                      {item.name}
                      <div 
                        className="absolute left-0 top-1/2 w-2 h-2 rotate-45"
                        style={{
                          backgroundColor: 'var(--sidebar-bg)',
                          transform: 'translate(-50%, -50%)'
                        }}
                      />
                    </div>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom gradient decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-600/5 to-transparent pointer-events-none" />

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </aside>
  );
}