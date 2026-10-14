import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (to: string) => void;
  isLoading: boolean;
  params: Record<string, string>;
  activeRoute: string;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Parse path & params
  const cleanPath = currentPath.split('?')[0].replace(/\/+$/, '') || '/';

  // Handle popstate (Back/Forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setIsLoading(true);
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 350);
      return () => clearTimeout(timer);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    if (to === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsLoading(true);
    window.history.pushState(null, '', to);
    setCurrentPath(to);
    window.scrollTo(0, 0);

    // Smooth branded transition
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  };

  // Derive parameters for dynamic routes
  const params: Record<string, string> = {};
  let activeRoute = cleanPath;

  if (cleanPath.startsWith('/team/') && cleanPath !== '/team') {
    params.agentId = cleanPath.replace('/team/', '');
    activeRoute = '/team/:agentId';
  } else if (cleanPath.startsWith('/listings/') && cleanPath !== '/listings') {
    params.propertyId = cleanPath.replace('/listings/', '');
    activeRoute = '/listings/:propertyId';
  } else if (cleanPath.startsWith('/areas/') && cleanPath !== '/areas') {
    params.town = cleanPath.replace('/areas/', '');
    activeRoute = '/areas/:town';
  } else if (cleanPath.startsWith('/blog/') && cleanPath !== '/blog') {
    params.slug = cleanPath.replace('/blog/', '');
    activeRoute = '/blog/:slug';
  }

  return (
    <RouterContext.Provider
      value={{
        currentPath: cleanPath,
        navigate,
        isLoading,
        params,
        activeRoute,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = '',
  activeClassName = '',
  onClick,
  ...props
}) => {
  const { currentPath, navigate } = useRouter();
  const isActive = currentPath === href || (href !== '/' && currentPath.startsWith(href));

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    // Only intercept regular left clicks without modifier keys
    if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      if (href.startsWith('/') && !href.startsWith('//')) {
        e.preventDefault();
        navigate(href);
      }
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className} ${isActive ? activeClassName : ''}`}
      {...props}
    >
      {children}
    </a>
  );
};
