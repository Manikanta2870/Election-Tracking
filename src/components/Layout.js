function Layout({ title, children }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}

export default Layout;