export default function AboutUs() {
  return (
    <div className="min-h-screen bg-secondary">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-16">
        
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-dark mb-6">
            About Me
          </h1>

          <p className="text-gray-700 leading-relaxed mb-6 text-labelMD md:text-labelLG">
            Hi, I'm <span className="font-semibold text-primary">Nandu</span>.
            I'm building <span className="font-semibold text-primary">AskSrava</span>
            to solve a problem I personally faced—too much confusion, too many
            options, and very little clarity when making decisions online.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6 text-labelMD md:text-labelLG">
            I noticed that most platforms don't truly help users.
            They either push ads, biased recommendations, or overwhelm people
            with unnecessary information. That didn't feel right to me.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-dark mb-4 border-l-4 border-primary pl-4">
            Why I Built This
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 text-labelMD md:text-labelLG">
            I wanted to create something simple, honest, and practical.
            A product that gives one clear recommendation instead of
            confusing users with dozens of choices.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-dark mb-4 border-l-4 border-accent pl-4">
            What You Can Expect
          </h2>

          <div className="bg-gray-50 rounded-xl p-4 md:p-6 mb-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-labelMD md:text-labelLG">Clear and unbiased recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-labelMD md:text-labelLG">No unnecessary noise or pressure</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-labelMD md:text-labelLG">Decisions explained in simple language</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-labelMD md:text-labelLG">A product built with user trust as the priority</span>
              </li>
            </ul>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-dark mb-4 border-l-4 border-accent pl-4">
            My Vision
          </h2>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 md:p-6">
            <p className="text-gray-700 leading-relaxed text-labelMD md:text-labelLG">
              My goal is to build a platform people can genuinely trust—one that
              helps them make confident decisions every day without stress or doubt.
            </p>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl">
              <span className="text-labelMD font-medium">Built with Love for better decisions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}