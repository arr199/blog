import Categories from "@/components/categories"
import Footer from "@/components/footer"
import Header from "@/components/header"
import PostsSection from "@/components/postsSection"
export default function Home() {
  return (
      <main >
        <Header></Header>
        <PostsSection></PostsSection>
        <Categories></Categories>
        <Footer></Footer>
      </main>
  )
}
