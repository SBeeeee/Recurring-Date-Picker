const stats = [
    { value: '100%', label: 'JavaScript' },
    { value: '17+', label: 'Components' },
    { value: '95%', label: 'Test Coverage' },
    { value: 'Shatadru', label: 'Created By' },
  ];
  
  const Footer = () => {
    return (
      <div className="bg-[#0f172a] rounded-3xl px-6 py-12 max-w-7xl mx-auto text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Built with Modern Tech</h2>
        <p className="text-gray-300 text-sm mb-10">Enterprise-grade components for professional applications</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-blue-400 text-xl font-semibold">{stat.value}</span>
              <span className="text-gray-300 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Footer;
  