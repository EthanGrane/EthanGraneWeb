export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between px-6">
        
        {/* Contact Info */}
        <div className="mb-8 lg:mb-0">
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <a
            href="mailto:EthanGraneGarcia.Job@gmail.com"
            className="flex items-center mb-3 hover:text-yellow-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <span className="ml-3">EthanGraneGarcia.Job@gmail.com</span>
          </a>

          <a href="https://github.com/EthanGrane" target="_blank" className="flex items-center mb-3 hover:text-yellow-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.85 10.94c.57.1.78-.25.78-.55 0-.27-.01-1.15-.02-2.09-3.19.69-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.52-2.55-.29-5.23-1.27-5.23-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.47.11-3.07 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.2-1.48 3.15-1.17 3.15-1.17.62 1.6.23 2.78.11 3.07.74.8 1.18 1.82 1.18 3.07 0 4.39-2.68 5.36-5.24 5.65.41.35.77 1.04.77 2.1 0 1.51-.01 2.72-.01 3.09 0 .3.21.65.79.54A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" clipRule="evenodd" />
            </svg>
            <span className="ml-3">Github.com/EthanGrane</span>
          </a>

          <a href="https://www.linkedin.com/in/EthanGrane" target="_blank" rel="noopener noreferrer" className="flex items-center mb-3 hover:text-yellow-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.039-1.852-3.039-1.853 0-2.136 1.445-2.136 2.939v5.669H9.351V9h3.414v1.561h.049c.477-.9 1.637-1.852 3.372-1.852 3.606 0 4.271 2.373 4.271 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
            <span className="ml-3">Linkedin.com/in/EthanGrane</span>
          </a>
        </div>

        {/* Quick Links / Resume */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Resources</h3>
          <ul>
            <li className="mb-3">
              <a href="/EthanGrane_Resume.pdf" target="_blank" className="hover:text-yellow-400 transition-colors">
                Resume / CV
              </a>
            </li>
            <li className="mb-3">
              <a href="https://assetstore.unity.com/publishers/43932" target="_blank" className="hover:text-yellow-400 transition-colors">
                Unity Asset Store
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="mt-8 lg:mt-0 text-center lg:text-right text-gray-400">
          &copy; {new Date().getFullYear()} Ethan Grane. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
