import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter, Link } from '../context/RouterContext';
import { BUSINESS_INFO } from '../data/mockData';
import { ShieldCheck, Scale, FileText, Eye } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'fair-housing' | 'accessibility';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const content = {
    privacy: {
      title: 'Privacy Policy',
      tagline: 'How we collect, use, and protect your personal information',
      icon: <ShieldCheck className="w-8 h-8 text-[#C8A24A]" />,
      body: (
        <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            This Privacy Policy governs the manner in which the <strong>{BUSINESS_INFO.name}</strong>, operating under <strong>{BUSINESS_INFO.brokerageFull}</strong>, collects, uses, maintains, and discloses information collected from users of this website.
          </p>

          <h3 className="text-lg font-serif font-bold text-[#12284C] pt-2">
            1. Personal Identification Information
          </h3>
          <p>
            We may collect personal identification information from users in various ways, including, but not limited to, when users visit our site, fill out a home valuation form, request a property showing, subscribe to our market reports, or contact our real estate advisors. Users may be asked for their name, email address, phone number, and physical property address.
          </p>

          <h3 className="text-lg font-serif font-bold text-[#12284C] pt-2">
            2. How We Use Collected Information
          </h3>
          <p>
            The {BUSINESS_INFO.name} collects and uses personal information to provide requested comparative market valuations, send property tour confirmations, deliver periodic Long Island market reports, and improve client customer service. We never sell, trade, or rent personal identification information to third-party mortgage lead aggregators or marketing brokers.
          </p>

          <h3 className="text-lg font-serif font-bold text-[#12284C] pt-2">
            3. Web Browser Cookies & Analytics
          </h3>
          <p>
            Our site may use cookies to enhance user experience, preserve saved property favorites in local storage, and evaluate site traffic patterns. Users may choose to set their web browser to refuse cookies.
          </p>

          <h3 className="text-lg font-serif font-bold text-[#12284C] pt-2">
            4. Contacting Us About Privacy
          </h3>
          <p>
            If you have questions about this Privacy Policy or wish to request deletion of your contact records, please email info@usarealestateteam.com or contact our compliance desk at {BUSINESS_INFO.address}.
          </p>
        </div>
      ),
    },
    terms: {
      title: 'Terms of Service',
      tagline: 'Standard terms and conditions governing the use of our website',
      icon: <Scale className="w-8 h-8 text-[#C8A24A]" />,
      body: (
        <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            Welcome to the website of <strong>{BUSINESS_INFO.name}</strong>. By accessing this website, you agree to be bound by these Terms of Service, all applicable New York State and federal laws, and agree that you are responsible for compliance with any applicable local laws.
          </p>

          <h3 className="text-lg font-serif font-bold text-[#12284C] pt-2">
            1. Real Estate Information Disclaimer
          </h3>
          <p>
            All information provided on this website, including property listings, square footages, room counts, school district boundaries, property taxes, and historical sales data, is deemed reliable but is not guaranteed and should be independently verified. Properties are subject to prior sale, change, or withdrawal.
          </p>

          <h3 className="text-lg font-serif font-bold text-[#12284C] pt-2">
            2. Consumer Non-Agency
          </h3>
          <p>
            Browsing this website or submitting an inquiry form does not automatically establish a fiduciary broker-client agency relationship. In New York State, agency relationships are established exclusively via signed NYS Disclosure Forms for Buyer and Seller Representation.
          </p>

          <h3 className="text-lg font-serif font-bold text-[#12284C] pt-2">
            3. Intellectual Property
          </h3>
          <p>
            All photography, architectural floor plans, articles, and branding assets on this website are the property of {BUSINESS_INFO.name} and LPT Realty, LLC and may not be reproduced without written consent.
          </p>
        </div>
      ),
    },
    'fair-housing': {
      title: 'New York State Fair Housing Statement',
      tagline: 'Our steadfast commitment to equal opportunity housing and zero discrimination',
      icon: <FileText className="w-8 h-8 text-[#C8A24A]" />,
      body: (
        <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs">
            <strong>New York State Notice:</strong> Federal, state, and local laws prohibit discrimination based on race, creed, color, national origin, sexual orientation, gender identity or expression, military status, sex, age, disability, marital status, lawful source of income, or familial status.
          </div>

          <h3 className="text-lg font-serif font-bold text-[#12284C] pt-2">
            Commitment to Equal Housing Opportunity
          </h3>
          <p>
            The <strong>{BUSINESS_INFO.name}</strong> and <strong>{BUSINESS_INFO.brokerageFull}</strong> are fully committed to the letter and spirit of the United States policy for the achievement of equal housing opportunity throughout the Nation. We encourage and support an affirmative advertising and marketing program in which there are no barriers to obtaining housing because of race, color, religion, sex, handicap, familial status, or national origin.
          </p>

          <h3 className="text-lg font-serif font-bold text-[#12284C] pt-2">
            NYS Housing Discrimination Law
          </h3>
          <p>
            Under the New York State Human Rights Law, it is illegal for real estate brokers, agents, landlords, and property owners to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Refuse to sell, rent, or lease housing to any individual based on protected status.</li>
            <li>Discriminate in the terms, conditions, or privileges of the sale or rental of housing.</li>
            <li>Print or publish any discriminatory statement or advertisement regarding the sale or rental of housing.</li>
            <li>Steer prospective buyers or tenants to or away from particular neighborhoods based on racial or demographic criteria.</li>
          </ul>

          <h3 className="text-lg font-serif font-bold text-[#12284C] pt-2">
            Filing a Complaint
          </h3>
          <p>
            If you suspect you have been the victim of housing discrimination in New York, you may file a complaint with the New York State Division of Human Rights at (888) 392-3644 or the U.S. Department of Housing and Urban Development (HUD) at (800) 669-9777.
          </p>
        </div>
      ),
    },
    accessibility: {
      title: 'Digital Accessibility Statement',
      tagline: 'Ensuring digital inclusion for all users and assistive technology',
      icon: <Eye className="w-8 h-8 text-[#C8A24A]" />,
      body: (
        <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            The <strong>{BUSINESS_INFO.name}</strong> is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards.
          </p>

          <h3 className="text-lg font-serif font-bold text-[#12284C] pt-2">
            Conformance Standard
          </h3>
          <p>
            We strive to conform with the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities, including screen-reader compatibility, keyboard navigation, and high-contrast color ratios.
          </p>

          <h3 className="text-lg font-serif font-bold text-[#12284C] pt-2">
            Accessibility Feedback & Assistance
          </h3>
          <p>
            If you experience difficulty accessing any content on this website or require assistance with any real estate information, please contact us at {BUSINESS_INFO.phone} or via email at info@usarealestateteam.com. We will work with you to provide the information or transaction through an accessible communication method.
          </p>
        </div>
      ),
    },
  }[type];

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={[{ label: content.title }]} />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 shrink-0">
              {content.icon}
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-serif font-black text-[#12284C]">
                {content.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {content.tagline}
              </p>
            </div>
          </div>

          <div className="pt-2">{content.body}</div>

          <div className="pt-8 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Last Updated: October 2026</span>
            <Link href="/contact" className="font-bold text-[#12284C] hover:text-[#C8A24A]">
              Contact Legal & Compliance &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
