function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Shubham Kumar. All rights reserved.
        </p>

        <p>
          Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}

export default Footer