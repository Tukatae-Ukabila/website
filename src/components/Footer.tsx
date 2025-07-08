import SocialShare from "@/components/SocialShare";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-primary-foreground mb-4">
            Help Us Build a Better Kenya Together
          </h3>
          <p className="text-primary-foreground/80 mb-6">
            This is an open source project dedicated to promoting unity and
            peace in Kenya. We need your help to make it even better!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-primary-foreground/5 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-5 h-5 text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                <h4 className="font-medium text-primary-foreground">
                  Improve Content
                </h4>
              </div>
              <p className="text-primary-foreground/70 text-sm">
                Help us add more accurate, relevant, and comprehensive content
                about Kenya's history and unity journey.
              </p>
            </div>

            <div className="bg-primary-foreground/5 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-5 h-5 text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
                <h4 className="font-medium text-primary-foreground">
                  Add Languages
                </h4>
              </div>
              <p className="text-primary-foreground/70 text-sm">
                Help translate this website into more Kenyan languages to reach
                every community across our nation.
              </p>
            </div>

            <div className="bg-primary-foreground/5 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-5 h-5 text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  />
                </svg>
                <h4 className="font-medium text-primary-foreground">
                  Spread the Word
                </h4>
              </div>
              <p className="text-primary-foreground/70 text-sm">
                Share this website with friends, family, and communities to help
                spread the message of unity across Kenya.
              </p>
            </div>
          </div>

          <div className="bg-primary-foreground/10 rounded-lg p-4 mb-6">
            <p className="text-primary-foreground/90 text-sm font-medium mb-2">
              Ready to contribute?
            </p>
            <p className="text-primary-foreground/70 text-sm">
              Create a GitHub issue describing how you'd like to help, and we'll
              guide you through the process.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <a
            href="https://github.com/Tukatae-Ukabila/website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View Source Code
          </a>

          <span className="text-primary-foreground/40">•</span>

          <a
            href="https://github.com/Tukatae-Ukabila/website/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Submit Feedback
          </a>

          <span className="text-primary-foreground/40">•</span>

          <SocialShare
            title="Tukatae Ukabila - Unity in Kenya"
            text="Learn about Kenya's journey towards unity and peace"
            hashtags={["TukataeUkabila", "KenyaUnity", "Peace", "Education"]}
            variant="ghost"
            className="text-primary-foreground hover:text-primary-foreground/80"
          />
        </div>

        <p className="text-primary-foreground/70 text-sm mb-4">
          Found an error? Want to add content? Have suggestions? Create an issue
          on GitHub.
        </p>

        <div className="border-t border-primary-foreground/20 pt-6">
          <p className="text-primary-foreground/60 text-sm">
            Tukatae Ukabila. Open source educational project.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

