import { TwitterIcon , X , FacebookIcon , Youtube , Twitch , Instagram, Search, Menu} from "lucide-react"
export default function SocialIons (): JSX.Element {
  return (
    <nav className="flex">
    <ul className="flex items-center gap-4 justify-center mt-6 ">
        <li><a href="#"><TwitterIcon className=""></TwitterIcon></a></li>
        <li><a href="#"><FacebookIcon></FacebookIcon> </a></li>
        <li><a href="#"><Youtube></Youtube></a></li>
        <li><a href="#"><Twitch></Twitch></a></li>
        <li><a href="#"><Instagram></Instagram></a></li>
    </ul>
</nav>
  )
}
