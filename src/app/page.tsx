import Categories from "@/components/categories"
import Footer from "@/components/footer"
import PostsSection from "@/components/postsSection"

export default function Home() {
  
  return (
      <main >
        <PostsSection></PostsSection>
        <Categories></Categories>
        <Footer></Footer>
      </main>
  )
}
