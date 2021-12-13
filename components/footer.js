const navigation = {
    solutions: [
      { name: 'State', href: '#' },
      { name: 'Local', href: '#' },
      { name: 'Politics', href: '#' },
      { name: 'Sports', href: '#' },
    ],
    support: [
      { name: 'Pricing', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'API Status', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    legal: [
      { name: 'Claim', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Instagram',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Twitter',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: 'GitHub',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Dribbble',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  }
  
  export default function Footer() {
    return (
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
            <svg width="120" height="65" viewBox="0 0 120 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.56 39.8H119.33C119.33 36.21 116.42 33.3101 112.84 33.3101H112.83H104.84V27.88H117.39L112.73 21.36H117.39L102.65 0.72998L87.91 21.36H92.57L87.91 27.88H100.46V33.3101H90.85C83.95 33.3101 78.33 27.69 78.33 20.79C78.33 18.42 79 16.2099 80.15 14.3199C80.97 12.9699 82.03 11.79 83.28 10.84C82.12 8.93997 80.66 7.29995 78.98 5.94995C75.67 3.28995 71.52 1.78003 67.08 1.78003C62.59 1.78003 58.46 3.34996 55.2 5.95996C51.85 3.27996 47.67 1.78003 43.31 1.78003C38.82 1.78003 34.69 3.34996 31.43 5.95996C28.08 3.27996 23.9 1.78003 19.54 1.78003C9.05004 1.78003 0.52002 10.31 0.52002 20.8C0.55002 31.27 9.08003 39.8 19.56 39.8ZM19.56 8.26001C22.32 8.26001 24.98 9.16995 27.14 10.8199C25.35 13.7199 24.31 17.13 24.31 20.79C24.31 25.58 26.1 29.9601 29.03 33.3101H19.56C12.65 33.3101 7.04004 27.69 7.04004 20.79C7.04004 13.88 12.66 8.26001 19.56 8.26001ZM67.1 8.26001C69.91 8.26001 72.55 9.18006 74.68 10.8101C72.89 13.7101 71.85 17.13 71.85 20.78C71.85 25.57 73.64 29.95 76.57 33.3H67.09C60.19 33.3 54.57 27.68 54.57 20.78C54.57 13.88 60.19 8.26001 67.1 8.26001ZM50.91 10.8199C49.12 13.7199 48.08 17.13 48.08 20.79C48.08 25.58 49.87 29.9601 52.8 33.3101H43.33C36.42 33.3101 30.81 27.69 30.81 20.79C30.81 13.88 36.43 8.27002 43.33 8.27002C46.09 8.26002 48.75 9.16995 50.91 10.8199ZM101.08 16.97H96.42L102.65 8.26001L108.88 16.97H104.22L108.88 23.49H96.43L101.08 16.97Z" fill="#00BBB4"/>
                <path d="M15.3 50.23C17.02 50.23 18.6 50.78 19.66 51.38L21.64 46.33C20.24 45.65 17.97 44.88 15.24 44.88C11.12 44.88 6.80001 46.7099 5.89001 51.1899C5.13001 54.7899 7.30001 56.49 9.85001 57.12C12.06 57.67 14.15 57.23 14.05 58.21C13.98 58.92 12.81 59.36 11.2 59.36C8.79001 59.39 6.88999 58.54 5.70999 57.83L3.17999 62.72C4.72999 63.57 7.45001 64.71 10.92 64.71C15.59 64.71 19.91 62.53 20.8 58.27C21.62 54.34 18.89 52.84 16.31 52.37C14.17 51.99 12.46 52.34 12.62 51.39C12.74 50.61 13.93 50.23 15.3 50.23Z" fill="black"/>
                <path d="M38.13 45.23L35.87 55.8199C35.49 57.6399 34.01 58.9301 32.16 58.9301C30.44 58.9301 29.38 57.83 29.8 55.9L32.1 45.23H25.38L23.07 56.04C21.8 62.1 26.47 64.7 31.42 64.7C36.34 64.7 41.27 62.15 42.53 56.15L44.85 45.24H38.13V45.23Z" fill="black"/>
                <path d="M63.21 64.35H69.87L71.13 58.3101H77.66L78.62 53.8101H72.07L72.75 50.67H81.52L82.66 45.23H67.24L63.21 64.35Z" fill="black"/>
                <path d="M114.09 45.23L112.42 53.0699H103.39H103.16L104.83 45.23H104.82H104.59H100.97H100.74H100.7H100.47L97.85 57.47L97.78 57.77L90.83 45.23H87.07H86.84L82.81 64.35H83.04H86.91L89.6 51.73L89.77 52.03L96.71 64.35H96.94H100.56H100.79H100.8L102.39 56.76H102.62H111.65L110.06 64.35H110.29H114.16L118.19 45.23H114.32H114.09Z" fill="black"/>
                <path d="M63.11 52.5799C64.17 47.9399 60.8 45.2399 54.86 45.0999C53.06 45.0499 48.02 45.21 47.47 45.24L43.44 64.3499H50.16L53.06 50.51C53.47 50.51 54.02 50.46 54.61 50.54C55.58 50.65 56.68 51.11 56.49 52.42C56.17 54.45 53.71 54.5299 53.28 56.5699C52.85 58.6099 54.06 64.3499 54.06 64.3499H61.29L59.55 57.74C61.3 56.51 62.6 54.7599 63.11 52.5799Z" fill="black"/>
            </svg>

              <p className="text-gray-500 text-base">
                Making the world a better place through constructing elegant hierarchies.
              </p>
              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">&copy; 2020 Workflow, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }