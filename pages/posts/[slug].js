import { useRouter } from 'next/router'
import Container from 'components/container'
import Sidebar from 'components/sidebar'
import MainContent from 'components/main-content'
import InnerContainer from 'components/inner-container'
import PostBody from 'components/post-body'
import PostList from 'components/post-list'
import PostInfo from 'components/post-info'
import Header from 'components/header'
import PostHeader from 'components/post-header'
import SectionSeparator from 'components/section-separator'
import Layout from 'components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/graphcms'
import PostTitle from 'components/post-title'
import Head from 'next/head'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <InnerContainer>
                <Sidebar>
                  <PostInfo tags={post.tags} author={post.author} />
                </Sidebar>
                <MainContent>
                  <article className="px-5 py-6 bg-white md:p-12 rounded-xl">
                    <Head>
                      <title>{post.title} | Dialogue Radio</title>
                    </Head>
                    <PostHeader
                      title={post.title}
                      coverImage={post.coverImage}
                      date={post.date}
                    />
                    <PostBody content={post.content} />
                  </article>
                </MainContent>
              </InnerContainer>
              <SectionSeparator />
              {morePosts.length > 0 && <PostList posts={morePosts} />}
            </>
          )}
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await getAllPostsWithSlug()
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data.post,
      morePosts: data.morePosts || [],
    },
  }
}
