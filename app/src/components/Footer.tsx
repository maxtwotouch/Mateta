export default function Footer() {
    return (
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Hovding. All rights reserved.
        </div>
      </footer>
    );
  }