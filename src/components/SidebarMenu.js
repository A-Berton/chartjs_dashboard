const SidebarMenu = () => {
  return (
    <>
    <h1 className="text-slate-600 text-2xl font-semibold pt-4">Dashboard</h1>
    <h2 className=" font-semibold text-slate-600 pt-8">Menu</h2>
      <div className="flex flex-col pt-2">
        <a href="#" className="text-slate-600 p-2">Dashboard</a>
        <a href="#" className="text-slate-600 p-2">Team</a>
        <a href="#" className="text-slate-600 p-2">Projects</a>
        <a href="#" className="text-slate-600 p-2">Calendar</a>
        <a href="#" className="text-slate-600 p-2">Reports</a>
      </div>
     
    </>
  );
};

export default SidebarMenu;
