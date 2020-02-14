<template>
  <layout page="blog">
    <BlogList :posts="$page.posts.edges"></BlogList>
  </layout>
</template>

<page-query>
    query getAllBlogData {
        posts: allBlog {
            edges {
                node {
                    id
                    title
                    path
                    author
                    date  (format: "MMMM DD YYYY")
                    hero_image
                    content
                }
            }
        }
    }
</page-query>

<script>
import BlogList from "~/components/BlogList.vue";

export default {
  metaInfo: {
    title: "Blog"
  },
  components: {
    BlogList
  }
};
</script>

<style></style>
