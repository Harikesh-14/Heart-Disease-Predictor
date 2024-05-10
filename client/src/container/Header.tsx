import { Link } from "react-router-dom"
import { links } from "../datalist/headerLinks"

function Header() {
  return (
    <section className="w-full px-1 py-2 bg-gray-200">
      <nav className="mx-auto flex items-center gap-5">
        <div className="md:w-2/5">
          <h1 className="text-lg font-semibold md:text-3xl text-blue-600">Heart Disease Predictor</h1>
        </div>

        <div>
          <ul className="flex md:gap-5">
            {links.map((link, index) => (
              <li
                key={index}
                className="md:text-lg text-gray-700 p-1 hover:bg-gray-300 hover:rounded hover:shadow"
              >
                <Link to={link.path} className="flex gap-1 items-center justify-center">
                  <span>
                    {link.icon}
                  </span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  )
}

export default Header