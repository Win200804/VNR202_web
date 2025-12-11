import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// ========================================
// SIDEBAR COMPONENT - Vintage Style
// ========================================

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar = ({ isOpen = true, onClose }: SidebarProps) => {
  const location = useLocation();

  // Navigation sections
  const sections = [
    {
      title: 'Nội Dung',
      items: [
        { path: '/', label: 'Trang Chủ', icon: '🏠' },
        { path: '/timeline', label: 'Dòng Thời Gian', icon: '📅' },
        { path: '/mien-bac', label: 'Miền Bắc (1954-1960)', icon: '🏔️' },
        { path: '/mien-nam', label: 'Miền Nam (1954-1960)', icon: '🌾' },
      ]
    },
    {
      title: 'Học Tập',
      items: [
        { path: '/quiz', label: 'Kiểm Tra Kiến Thức', icon: '📝' },
        { path: '/games', label: 'Trò Chơi', icon: '🎮' },
      ]
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  if (!isOpen) return null;

  return (
    <motion.aside
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="w-64 min-h-screen bg-aged-paper border-r-2 border-gold-accent shadow-vintage-lg"
    >
      {/* Header */}
      <div className="p-6 border-b border-gold-accent/50">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-lg font-bold text-ink-brown">
            Mục Lục
          </h2>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 text-sepia-dark hover:text-red-accent transition-colors lg:hidden"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        {/* Decorative line */}
        <div className="mt-3 h-0.5 bg-gradient-to-r from-gold-accent via-red-accent to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="px-3 font-decorative text-xs uppercase tracking-wider text-sepia-dark/70 mb-2">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className={`
                      flex items-center px-3 py-2.5 rounded-sm font-body text-sm
                      transition-all duration-200 group
                      ${isActive(item.path)
                        ? 'bg-red-accent/10 text-red-accent border-l-4 border-red-accent -ml-1 pl-4'
                        : 'text-sepia-dark hover:bg-gold-accent/10 hover:text-ink-brown'
                      }
                    `}
                  >
                    <span className="mr-3 text-base group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Info Box */}
      <div className="mx-4 mt-6 p-4 bg-paper-cream border border-gold-accent rounded-sm">
        <p className="font-decorative text-xs text-sepia-dark italic leading-relaxed">
          "Giai đoạn 1954-1960: Xây dựng miền Bắc XHCN, đấu tranh giải phóng miền Nam"
        </p>
      </div>

      {/* Year Badge */}
      <div className="absolute bottom-6 left-4 right-4">
        <div className="flex items-center justify-center p-3 bg-ink-brown rounded-sm">
          <span className="font-heading text-lg text-gold-accent font-bold">
            1954 — 1960
          </span>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;

