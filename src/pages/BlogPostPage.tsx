import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter, Link } from '../context/RouterContext';
import { BLOG_POSTS } from '../data/mockData';
import {
  Calendar,
  Clock,
  Share2,
  Bookmark,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-react';

export const BlogPostPage: React.FC = () => {
  const { params, navigate } = useRouter();
  const slug = params.slug || 'long-island-real-estate-market-outlook-2026';

  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs
        items={[
          { label: 'Market Reports & Blog', href: '/blog' },
          { label: post.title },
        ]}
      />

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-[#12284C] text-white px-2.5 py-0.5 rounded">
              {post.category}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-black text-[#12284C] leading-tight text-balance">
            {post.title}
          </h1>

          {/* Author Byline & Social Share Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-slate-200">
            <div className="flex items-center gap-3">
              <img
                src={post.authorPhoto}
                alt={post.author}
                className="w-11 h-11 rounded-full object-cover border border-slate-200"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="text-xs sm:text-sm font-bold text-[#12284C]">
                  {post.author}
                </div>
                <div className="text-[11px] text-slate-500">
                  {post.authorRole} · {post.date}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Featured Cover Image */}
        <div className="rounded-2xl overflow-hidden aspect-[16/9] shadow-md bg-slate-900">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed text-slate-700 space-y-6">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3
                  key={index}
                  className="text-lg sm:text-xl font-serif font-bold text-[#12284C] pt-4"
                >
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
              return (
                <div key={index} className="space-y-2 pl-2">
                  {paragraph.split('\n').map((line, lIdx) => (
                    <div key={lIdx} className="flex items-start gap-2">
                      <span className="text-[#C8A24A] font-bold">•</span>
                      <span>{line.replace(/^[0-9]\.\s|\-\s/, '')}</span>
                    </div>
                  ))}
                </div>
              );
            }
            return (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Article Tags */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">
            Related Topics:
          </span>
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-md font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row gap-5 items-center sm:items-start">
          <img
            src={post.authorPhoto}
            alt={post.author}
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow shrink-0"
            referrerPolicy="no-referrer"
          />
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-sm font-bold text-[#12284C]">
              Written by {post.author}
            </h4>
            <p className="text-xs text-[#C8A24A] font-semibold">
              {post.authorRole} · USA Real Estate Team at LPT Realty
            </p>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              Advising buyers and sellers with rigorous market intelligence, fiduciary standards, and unmatched local Long Island knowledge.
            </p>
            <div className="pt-2">
              <Link
                href="/team"
                className="text-xs font-bold text-[#12284C] hover:text-[#C8A24A]"
              >
                Meet all team advisors &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* In-Article Valuation CTA */}
        <div className="bg-[#12284C] text-white p-8 rounded-2xl shadow-lg border border-white/10 text-center space-y-3">
          <h3 className="text-xl font-serif font-bold">
            Curious How Current Long Island Trends Impact Your Home Value?
          </h3>
          <p className="text-xs text-slate-300 max-w-lg mx-auto">
            Get an instant, customized Comparative Market Analysis prepared for your specific address by our senior listing specialists.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/home-valuation')}
              className="bg-[#C8A24A] hover:bg-[#B68E37] text-[#12284C] px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Get Free Valuation Report
            </button>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="pt-8 border-t border-slate-200 space-y-6">
            <h3 className="text-xl font-serif font-bold text-[#12284C]">
              Related Articles & Reports
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.slug}
                  className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#C8A24A] uppercase tracking-wider">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-serif font-bold text-[#12284C] mt-1 line-clamp-2">
                      <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400">{rel.readTime}</span>
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="font-bold text-[#12284C] hover:text-[#C8A24A]"
                    >
                      Read &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};
