import Link from "next/link";

const Links = () => {
  const links = [
    {
      title: "Homepage",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Contact",
      path: "/contact"
    },
    {
      title: "Blog",
      path: "/blog"
    }
  ]

  return (
    <div>{links.map((link, index) => {
      return <Link key={index} href={link.path}>{link.title}</Link>
    })}
    </div>
  )
}

export default Links;