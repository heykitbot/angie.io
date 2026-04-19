import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import memoji from "../images/memoji.png"
import { nextFrom } from "../utils/cycler"

export default function Index() {
  return (
    // fixes h-screen being longer than viewport on mobile
    <div className="absolute inset-0">
      <div className="min-h-screen lg:w-2/3 flex">
        <main className="px-6 sm:px-12 md:px-24 py-6 sm:py-12 md:py-24 flex flex-col">
          <div className="flex flex-col items-start space-y-5">
            <div className="h-28 w-28 bg-pink-600 rounded-full mr-4 memoji">
              <img
                src={memoji}
                alt="angie's memoji"
                className="min-h-28 min-w-28 max-h-28 max-w-28"
              />
            </div>
            <h1 className="font-bold text-4xl pt-2">
              Hiya, I'm Angie Merryweather{" "}
              <span className="wave hover:wave">{nextFrom(["👋", "✋", "🤝"])}</span>
            </h1>
            <p>
              I'm a consultant staff software engineer specialising in
              TypeScript and React. I love building great online experiences and
              cultivating healthy, high empathy teams.
            </p>
            <p>
              You can{" "}
              <a
                className="underline underline-offset-2 decoration-pink-600 decoration-4"
                href="mailto:hi@angie.io"
              >
                email
              </a>{" "}
              me to get in touch, or connect via social.
            </p>
          </div>
          <div className="py-10 flex flex-row space-x-4">
            <a
              href="https://github.com/angie"
              rel="nofollow noreferrer"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/angie-merryweather/"
              rel="nofollow noreferrer"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/amerry"
              rel="nofollow noreferrer"
              target="_blank"
            >
              <FaTwitter />
            </a>
          </div>
        </main>
      </div>
    </div>
  )
}
