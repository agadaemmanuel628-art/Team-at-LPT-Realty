import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter } from '../context/RouterContext';
import {
  Home,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

export const HomeValuationPage: React.FC = () => {
  const { navigate } = useRouter();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    streetAddress: '',
    town: 'Garden City',
    zip: '',
    propertyType: 'Single Family',
    beds: '4',
    baths: '2.5',
    sqftEstimated: '2,800',
    condition: 'Excellent / Move-in Ready',
    recentRenovations: [] as string[],
    timeline: '1-3 Months',
    reasonForValuation: 'Considering Selling',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: 'Email & Phone',
    additionalNotes: '',
  });

  const renovationOptions = [
    'Renovated Kitchen',
    'Updated Bathrooms',
    'Finished Basement',
    'New Roof / Siding',
    'Inground Pool / Patio',
    'Solar Panels',
    'Smart Home / HVAC',
  ];

  const handleRenovationToggle = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      recentRenovations: prev.recentRenovations.includes(item)
        ? prev.recentRenovations.filter((r) => r !== item)
        : [...prev.recentRenovations, item],
    }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      window.scrollTo({ top: 150, behavior: 'smooth' });
    } else {
      setSubmitted(true);
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-16 pb-16">
      <Breadcrumbs items={[{ label: 'Free Home Valuation' }]} />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
          Long Island Property Valuation
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-black text-[#12284C] mt-2 leading-tight">
          What Is Your Long Island Home Worth?
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-xl mx-auto leading-relaxed font-light">
          Unlike automated algorithms that miss interior upgrades and lot premiums, our senior listing specialists conduct a human, data-verified comparative market evaluation for your property.
        </p>
      </section>

      {/* Form Container */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          {submitted ? (
            /* Thank You Confirmation State */
            <div className="text-center py-12 space-y-6 animate-[fadeIn_0.3s_ease-out]">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
                  Request Received
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#12284C]">
                  Thank You, {formData.firstName}!
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                  Our listing analytics team has begun pulling comparative sales and historical tax deed data for <strong>{formData.streetAddress || 'your property'}, {formData.town}, NY</strong>.
                </p>
              </div>

              {/* Summary recap box */}
              <div className="max-w-md mx-auto p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs space-y-2 text-slate-700">
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Property:</span>
                  <span className="font-bold">{formData.propertyType} ({formData.beds} Beds / {formData.baths} Baths)</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Target Timeline:</span>
                  <span className="font-bold">{formData.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Delivery Email:</span>
                  <span className="font-bold">{formData.email}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => navigate('/listings')}
                  className="w-full sm:w-auto bg-[#12284C] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#1A335E] transition-colors cursor-pointer"
                >
                  Browse Current Market Listings
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                  className="w-full sm:w-auto border border-slate-300 text-slate-700 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider hover:border-[#12284C] transition-colors cursor-pointer"
                >
                  Submit Another Property
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Multi-step progress bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  <span className={step >= 1 ? 'text-[#12284C]' : ''}>1. Property Info</span>
                  <span className={step >= 2 ? 'text-[#12284C]' : ''}>2. Condition & Features</span>
                  <span className={step >= 3 ? 'text-[#12284C]' : ''}>3. Delivery Info</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#12284C] to-[#C8A24A] transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleNext} className="space-y-6">
                {/* STEP 1: Address & Property Type */}
                {step === 1 && (
                  <div className="space-y-4 animate-[fadeIn_0.2s_ease-out]">
                    <h3 className="text-lg font-serif font-bold text-[#12284C]">
                      Step 1: Where is your property located?
                    </h3>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.streetAddress}
                        onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                        placeholder="e.g. 42 Stewart Avenue"
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Town / Hamlet *
                        </label>
                        <select
                          value={formData.town}
                          onChange={(e) => setFormData({ ...formData, town: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                        >
                          <option value="Garden City">Garden City</option>
                          <option value="Great Neck">Great Neck</option>
                          <option value="Huntington">Huntington</option>
                          <option value="Long Beach">Long Beach</option>
                          <option value="Rockville Centre">Rockville Centre</option>
                          <option value="Syosset">Syosset</option>
                          <option value="Jericho">Jericho</option>
                          <option value="Manhasset">Manhasset</option>
                          <option value="Southampton">Southampton</option>
                          <option value="Other Long Island">Other Long Island Town</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Zip Code *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.zip}
                          onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                          placeholder="e.g. 11530"
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Property Type
                        </label>
                        <select
                          value={formData.propertyType}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                        >
                          <option value="Single Family">Single Family</option>
                          <option value="Condominium">Condominium</option>
                          <option value="Townhouse">Townhouse</option>
                          <option value="Multi-Family">Multi-Family</option>
                          <option value="Waterfront Estate">Waterfront Estate</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Bedrooms
                        </label>
                        <select
                          value={formData.beds}
                          onChange={(e) => setFormData({ ...formData, beds: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                        >
                          <option value="2">2 Bedrooms</option>
                          <option value="3">3 Bedrooms</option>
                          <option value="4">4 Bedrooms</option>
                          <option value="5+">5+ Bedrooms</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Bathrooms
                        </label>
                        <select
                          value={formData.baths}
                          onChange={(e) => setFormData({ ...formData, baths: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                        >
                          <option value="1.5">1.5 Baths</option>
                          <option value="2">2 Baths</option>
                          <option value="2.5">2.5 Baths</option>
                          <option value="3+">3+ Baths</option>
                          <option value="4+">4+ Baths</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Condition & Upgrades */}
                {step === 2 && (
                  <div className="space-y-5 animate-[fadeIn_0.2s_ease-out]">
                    <h3 className="text-lg font-serif font-bold text-[#12284C]">
                      Step 2: Tell us about your home’s condition & upgrades
                    </h3>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Overall Property Condition
                      </label>
                      <select
                        value={formData.condition}
                        onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                      >
                        <option value="Excellent / Move-in Ready">Excellent / Move-in Ready (Recently updated)</option>
                        <option value="Good Condition">Good Condition (Well maintained, minor updates needed)</option>
                        <option value="Fair / Original Condition">Fair / Original Condition (Needs cosmetic modernization)</option>
                        <option value="Full Fixer / Major Project">Full Fixer / Major Renovation Potential</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                        Recent Upgrades & Features (Select all that apply)
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {renovationOptions.map((opt) => {
                          const active = formData.recentRenovations.includes(opt);
                          return (
                            <button
                              type="button"
                              key={opt}
                              onClick={() => handleRenovationToggle(opt)}
                              className={`p-2.5 text-left text-xs rounded-lg border transition-all cursor-pointer ${
                                active
                                  ? 'bg-[#12284C] text-white border-[#12284C] font-semibold'
                                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Selling Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                        >
                          <option value="Immediately (0-30 days)">Immediately (0-30 days)</option>
                          <option value="1-3 Months">1-3 Months</option>
                          <option value="3-6 Months">3-6 Months</option>
                          <option value="6-12 Months">6-12 Months</option>
                          <option value="Just curious about equity">Just curious about equity</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Estimated Square Footage (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.sqftEstimated}
                          onChange={(e) => setFormData({ ...formData, sqftEstimated: e.target.value })}
                          placeholder="e.g. 2,800"
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Contact & Delivery Info */}
                {step === 3 && (
                  <div className="space-y-4 animate-[fadeIn_0.2s_ease-out]">
                    <h3 className="text-lg font-serif font-bold text-[#12284C]">
                      Step 3: Where should we send your comparative report?
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="John"
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="Doe"
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(516) 555-0199"
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Any specific details or recent improvements we should consider?
                      </label>
                      <textarea
                        rows={3}
                        value={formData.additionalNotes}
                        onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                        placeholder="e.g. Recently completed custom inground saltwater pool, updated electrical, finished basement with full bath..."
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                      />
                    </div>

                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-[11px] text-slate-500">
                      Your information is strictly confidential and protected by New York State real estate fiduciary standards. No spam, ever.
                    </div>
                  </div>
                )}

                {/* Form Buttons */}
                <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-4 py-2.5 border border-slate-300 text-slate-700 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  <button
                    type="submit"
                    className="bg-[#12284C] hover:bg-[#1A335E] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <span>{step === 3 ? 'Generate My Home Valuation' : 'Next Step'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C8A24A]" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Trust & Methodology Strip */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <ShieldCheck className="w-6 h-6 text-[#C8A24A] mx-auto mb-2" />
            <div className="text-xs font-bold text-[#12284C]">Fiduciary Confidentiality</div>
            <p className="text-[11px] text-slate-500 mt-1">Your data is never sold to third-party mortgage lead aggregators.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <Sparkles className="w-6 h-6 text-[#C8A24A] mx-auto mb-2" />
            <div className="text-xs font-bold text-[#12284C]">Human Broker Review</div>
            <p className="text-[11px] text-slate-500 mt-1">Evaluated by Anthony Russo & Elena Vance with hyper-local MLS comps.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <TrendingUp className="w-6 h-6 text-[#C8A24A] mx-auto mb-2" />
            <div className="text-xs font-bold text-[#12284C]">Accurate Equity Snapshot</div>
            <p className="text-[11px] text-slate-500 mt-1">Detailed breakdown of active competition and buyer absorption rates.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
