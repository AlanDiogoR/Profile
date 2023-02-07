import { FaLinkedin } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href={"https://www.instagram.com/alandiogorb/"}>
        <BsInstagram/>
      </Link>
      <Link href={"https://www.linkedin.com/in/alan-diogo-carvalho-54a6aa260/"}>
        <FaLinkedin/>
      </Link>
      <Link href={"https://github.com/AlanDiogoR"}>
        <BsGithub/>
      </Link>

      <div>
        <span>Contao</span>
        <h1>(14) 998931883</h1>
      </div>

      <nav>
        <ul>
          <li>Home</li>
          <li>Quem eu sou</li>
          <li>O que eu faço</li>
          <li>Portifólio</li>
          <li>Fale Conosco</li>
        </ul>
      </nav>

    </>
  )
}
