import React, { useEffect } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingMobileActions } from './components/FloatingMobileActions';
import { PageTransition } from './components/PageTransition';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TeamPage } from './pages/TeamPage';
import { AgentProfilePage } from './pages/AgentProfilePage';
import { BuyPage } from './pages/BuyPage';
import { SellPage } from './pages/SellPage';
import { HomeValuationPage } from './pages/HomeValuationPage';
import { ListingsPage } from './pages/ListingsPage';
import { ListingDetailPage } from './pages/ListingDetailPage';
import { AreasPage } from './pages/AreasPage';
import { AreaDetailPage } from './pages/AreaDetailPage';
import { SoldPropertiesPage } from './pages/SoldPropertiesPage';
import { ServicesPage } from './pages/ServicesPage';
import { InvestorsPage } from './pages/InvestorsPage';
import { JoinUsPage } from './pages/JoinUsPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { PROPERTIES, AGENTS, AREAS, BLOG_POSTS } from './data/mockData';

const PageRenderer: React.FC = () => {
  const { currentPath, activeRoute, params } = useRouter();

  // Dynamic SEO page title and meta updates
  useEffect(() => {
    let title = 'USA Real Estate Team at LPT Realty | Long Island, NY';
    let description = 'Long Island premier real estate advisory under LPT Realty, providing expert home buying, selling, property valuation, and local neighborhood guidance.';

    if (activeRoute === '/') {
      title = 'USA Real Estate Team at LPT Realty | Long Island, NY Real Estate';
    } else if (activeRoute === '/about') {
      title = 'About Us | USA Real Estate Team at LPT Realty';
      description = 'Discover the story, mission, and LPT Realty technology partnership behind Long Island’s premier real estate team.';
    } else if (activeRoute === '/team') {
      title = 'Our Real Estate Agents & Advisors | USA Real Estate Team';
      description = 'Meet our licensed Long Island real estate specialists covering Nassau, Suffolk, and the Hamptons.';
    } else if (activeRoute === '/team/:agentId') {
      const agent = AGENTS.find((a) => a.id === params.agentId);
      title = agent ? `${agent.name} - ${agent.title} | USA Real Estate Team` : 'Agent Profile | USA Real Estate Team';
      description = agent?.bio || description;
    } else if (activeRoute === '/buy') {
      title = 'Buy a Home on Long Island | Step-by-Step Buyer Guide';
      description = 'Complete Long Island home buyer guide, mortgage financing options, school district advisory, and NYC-to-LI relocation tips.';
    } else if (activeRoute === '/sell') {
      title = 'Sell Your Long Island Property | Proprietary Marketing Plan';
      description = 'Sell your Long Island home for top dollar with certified staging, 4K architectural media, and LPT Realty national syndication.';
    } else if (activeRoute === '/home-valuation') {
      title = 'Free Instant Home Valuation | What Is Your Long Island Home Worth?';
      description = 'Get a comprehensive comparative market evaluation for your property on Long Island prepared by senior listing specialists.';
    } else if (activeRoute === '/listings') {
      title = 'Long Island Homes for Sale | Browse Active MLS Listings';
      description = 'Search single-family homes, luxury estates, and waterfront properties across Garden City, Great Neck, Huntington, and the Hamptons.';
    } else if (activeRoute === '/listings/:propertyId') {
      const prop = PROPERTIES.find((p) => p.id === params.propertyId);
      title = prop ? `${prop.title} | ${prop.town}, NY Real Estate` : 'Property Details | USA Real Estate Team';
      description = prop?.description || description;
    } else if (activeRoute === '/areas') {
      title = 'Long Island Neighborhoods & Areas We Serve | Town Guides';
      description = 'Explore local information, schools, LIRR commute times, and housing market snapshots for Long Island communities.';
    } else if (activeRoute === '/areas/:town') {
      const area = AREAS.find((a) => a.slug === params.town);
      title = area ? `${area.name}, NY Real Estate & Neighborhood Guide` : 'Community Guide | USA Real Estate Team';
      description = area?.overview || description;
    } else if (activeRoute === '/sold') {
      title = 'Recently Sold Properties & Track Record | USA Real Estate Team';
      description = 'View our gallery of closed Long Island sales, sale-to-list ratios, and days on market results.';
    } else if (activeRoute === '/services') {
      title = 'Real Estate Services | Buying, Selling, Relocation & Investing';
      description = 'Comprehensive real estate advisory across residential, luxury, 1031 exchange, and commercial sectors.';
    } else if (activeRoute === '/investors') {
      title = 'Real Estate Investors Advisory | Long Island & Hamptons';
      description = 'Multi-family acquisitions, capitalization rate modeling, and 1031 tax-deferred exchange replacement sourcing on Long Island.';
    } else if (activeRoute === '/join-us') {
      title = 'Join Our Team & LPT Realty | Real Estate Agent Careers';
      description = 'Scale your real estate business with 100% commission options, revenue share, stock equity, and team mentorship.';
    } else if (activeRoute === '/blog') {
      title = 'Long Island Real Estate Market Reports & Blog | USA Real Estate Team';
      description = 'Latest Nassau and Suffolk housing supply trends, interest rate commentary, and home staging advice.';
    } else if (activeRoute === '/blog/:slug') {
      const post = BLOG_POSTS.find((p) => p.slug === params.slug);
      title = post ? `${post.title} | Market Insights` : 'Market Report | USA Real Estate Team';
      description = post?.excerpt || description;
    } else if (activeRoute === '/reviews') {
      title = 'Client Testimonials & Verified 5-Star Reviews | USA Real Estate Team';
      description = 'Read verified reviews and watch video stories from Long Island home buyers and sellers.';
    } else if (activeRoute === '/resources') {
      title = 'Mortgage Calculators, Affordability & Checklists | Toolkit';
      description = 'Interactive mortgage tools, closing cost estimates, and downloadable buyer & seller roadmaps.';
    } else if (activeRoute === '/faq') {
      title = 'Frequently Asked Questions | Long Island Real Estate';
      description = 'Clear answers to your buying, selling, financing, and Long Island school district questions.';
    } else if (activeRoute === '/contact') {
      title = 'Contact USA Real Estate Team at LPT Realty | Office & Hours';
      description = 'Connect with our Jericho, Long Island office. Phone, email, directions, and confidential consultation.';
    } else if (activeRoute === '/privacy') {
      title = 'Privacy Policy | USA Real Estate Team at LPT Realty';
    } else if (activeRoute === '/terms') {
      title = 'Terms of Service | USA Real Estate Team at LPT Realty';
    } else if (activeRoute === '/fair-housing') {
      title = 'Equal Housing Opportunity & Fair Housing Statement';
    } else if (activeRoute === '/accessibility') {
      title = 'Accessibility Statement | USA Real Estate Team';
    } else {
      title = 'Page Not Found | USA Real Estate Team at LPT Realty';
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [currentPath, activeRoute, params]);

  // Route Dispatcher
  switch (activeRoute) {
    case '/':
      return <HomePage />;
    case '/about':
      return <AboutPage />;
    case '/team':
      return <TeamPage />;
    case '/team/:agentId':
      return <AgentProfilePage />;
    case '/buy':
      return <BuyPage />;
    case '/sell':
      return <SellPage />;
    case '/home-valuation':
      return <HomeValuationPage />;
    case '/listings':
      return <ListingsPage />;
    case '/listings/:propertyId':
      return <ListingDetailPage />;
    case '/areas':
      return <AreasPage />;
    case '/areas/:town':
      return <AreaDetailPage />;
    case '/sold':
      return <SoldPropertiesPage />;
    case '/services':
      return <ServicesPage />;
    case '/investors':
      return <InvestorsPage />;
    case '/join-us':
      return <JoinUsPage />;
    case '/blog':
      return <BlogPage />;
    case '/blog/:slug':
      return <BlogPostPage />;
    case '/reviews':
      return <ReviewsPage />;
    case '/resources':
      return <ResourcesPage />;
    case '/faq':
      return <FAQPage />;
    case '/contact':
      return <ContactPage />;
    case '/privacy':
      return <LegalPage type="privacy" />;
    case '/terms':
      return <LegalPage type="terms" />;
    case '/fair-housing':
      return <LegalPage type="fair-housing" />;
    case '/accessibility':
      return <LegalPage type="accessibility" />;
    default:
      return <NotFoundPage />;
  }
};

export default function App() {
  return (
    <RouterProvider>
      <FavoritesProvider>
        <div className="min-h-screen flex flex-col bg-[#F8F9FB] text-slate-900 font-sans antialiased">
          {/* Branded loading screen & progress bar */}
          <PageTransition />

          {/* Sticky Header */}
          <Header />

          {/* Main Route Content */}
          <main className="flex-1">
            <PageRenderer />
          </main>

          {/* Footer */}
          <Footer />

          {/* Mobile floating call & text buttons */}
          <FloatingMobileActions />
        </div>
      </FavoritesProvider>
    </RouterProvider>
  );
}
