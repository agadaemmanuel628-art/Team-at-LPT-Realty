import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter, Link } from '../context/RouterContext';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';
import { Search, Calendar, Clock, ArrowRight, RotateCcw } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;

  const categories = ['all', 'Buyer Tips', 'Seller Tips', 'Market Updates', 'Local News'];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      if (selectedCategory !== 'all' && post.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = post.title.toLowerCase().includes(q);
        const matchExcerpt = post.excerpt.toLowerCase().includes(q);
        const matchTags = post.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchTitle && !matchExcerpt && !matchTags) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage) || 1;
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={[{ label: 'Market Reports & Blog' }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
            Market Intelligence
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-[#12284C] mt-2 leading-tight">
            Long Island Real Estate Reports & Guides
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-light">
            Expert commentary, quarterly Nassau & Suffolk sales data, staging tips, and neighborhood analyses directly from our team brokers.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold capitalize whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#12284C] text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {cat === 'all' ? 'All Articles' : cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search reports by topic..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
            />
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {paginatedPosts.length === 0 ? (
          <div className="p-12 bg-white rounded-2xl border border-slate-200 text-center space-y-3">
            <h3 className="text-lg font-serif font-bold text-[#12284C]">
              No Articles Found
            </h3>
            <p className="text-xs text-slate-500">
              Try searching for a different keyword or category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-[#12284C] underline cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paginatedPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#12284C] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-xl font-serif font-bold text-[#12284C] group-hover:text-[#C8A24A] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tag strip */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {post.tags.map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.authorPhoto}
                      alt={post.author}
                      className="w-7 h-7 rounded-full object-cover border border-slate-200"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-xs font-semibold text-slate-700">{post.author}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#12284C] hover:text-[#C8A24A]"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => {
                  setCurrentPage(i + 1);
                  window.scrollTo({ top: 200, behavior: 'smooth' });
                }}
                className={`w-9 h-9 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  currentPage === i + 1
                    ? 'bg-[#12284C] text-white'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
