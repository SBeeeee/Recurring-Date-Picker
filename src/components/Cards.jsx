import { CalendarDays, Zap, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <CalendarDays className="w-6 h-6 text-white" />,
    title: 'Flexible Patterns',
    description: 'Daily, weekly, monthly, and yearly recurring patterns with custom intervals',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: 'Smart Scheduling',
    description: "Complex patterns like '2nd Tuesday of every month' or 'last Friday'",
    color: 'from-pink-500 to-fuchsia-500',
  },
  {
    icon: <Sparkles className="w-6 h-6 text-white" />,
    title: 'Modern Design',
    description: 'Sleek interface with smooth animations and intuitive interactions',
    color: 'from-emerald-500 to-teal-500',
  },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12 max-w-7xl mx-auto">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300"
        >
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
          <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
