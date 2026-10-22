import { useParams, Link, Navigate } from "react-router";
import { useEffect, useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import BlogPost from '../components/blog/BlogPost';
import BlogGrid from '../components/blog/BlogGrid';
import { getPostBySlug, getRelatedPosts } from '../lib/blog';
import type { BlogPost as BlogPostType } from '../lib/blog';
const site = 'https://vstransport.in';

/**
 * Blog post detail page component
 *
 * Displays a single blog post with related posts.
 * Uses the slug parameter from the URL to find the post.
 */
export default function BlogPostPage() {
  const {
    slug
  } = useParams<{
    slug: string;
  }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }
    const foundPost = getPostBySlug(slug);
    setPost(foundPost);
    if (foundPost) {
      setRelatedPosts(getRelatedPosts(foundPost, 3));
    }
    setLoading(false);
  }, [slug]);

  // Show loading state
  if (loading) {
    return <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading post...</p>
        </div>
      </div>;
  }

  // Post not found - redirect to blog
  if (!post) {
    return <Navigate to="/blog" replace />;
  }
  const postUrl = `${site}/blog/${post.slug}`;
  const postJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [{
      '@type': 'BlogPosting',
      '@id': `${postUrl}#article`,
      headline: post.title,
      description: post.excerpt,
      url: postUrl,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt || post.publishedAt,
      author: {
        '@type': 'Organization',
        name: post.author || 'VS Transport Service Team',
        url: `${site}/`
      },
      publisher: {
        '@id': `${site}/#organization`
      },
      isPartOf: {
        '@id': `${site}/#website`
      },
      image: post.featuredImage ? {
        '@type': 'ImageObject',
        url: post.featuredImage
      } : undefined,
      keywords: post.tags?.join(', ')
    }, {
      '@type': 'BreadcrumbList',
      itemListElement: [{
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${site}/`
      }, {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${site}/blog`
      }, {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl
      }]
    }]
  };
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.seoTitle || post.title} | VS Transport Service</title>
        <meta name="description" content={post.seoDescription || post.excerpt} />
        <link rel="canonical" href={postUrl} />
        <meta property="og:title" content={post.seoTitle || post.title} />
        <meta property="og:description" content={post.seoDescription || post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        {post.featuredImage && <meta property="og:image" content={post.featuredImage} />}
        {!post.featuredImage && <meta property="og:image" content="https://vstransport.in/airo-assets/images/pages/home/hero" />}
        <meta property="article:published_time" content={post.publishedAt} />
        {post.updatedAt && <meta property="article:modified_time" content={post.updatedAt} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seoTitle || post.title} />
        <meta name="twitter:description" content={post.seoDescription || post.excerpt} />
        <meta name="twitter:image" content={post.featuredImage || 'https://vstransport.in/airo-assets/images/pages/home/hero'} />
        <script type="application/ld+json">{JSON.stringify(postJsonLd)}</script>
      </Helmet>
      {/* Back to Blog Link */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <h1 className="sr-only">{post.title}</h1>
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* Blog Post Content */}
      <BlogPost post={post} />

      {/* Related Posts */}
      {relatedPosts.length > 0 && <div className="max-w-7xl mx-auto px-4 py-16 border-t border-border mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Related Posts
          </h2>
          <BlogGrid posts={relatedPosts} variant="default" columns={3} />
        </div>}
    </div>;
}
