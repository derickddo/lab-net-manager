const Navbar = () => {
  return (
    <header className="flex items-center h-[5rem] ">
      <div
        className="container mx-auto 
       "
      >
        <nav className="flex justify-between items-center">
          <h1  className="text-white">LabNet Manger</h1>
          <ul className="flex gap-3">
            <li className="text-white">Home</li>
            <li  className="text-white">Home</li>
            <li  className="text-white">Home</li>
            <li  className="text-white">Home</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
