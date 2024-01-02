import Categories from "@/components/Categories"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PostsSection from "@/components/PostsSection"
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
