import Icon from "@/components/ui/icon";

const StatsSection = () => {
  const stats = [
    {
      icon: "Users",
      number: "5000+",
      label: "Выпускников",
      description: "Успешно завершили обучение",
    },
    {
      icon: "Briefcase",
      number: "95%",
      label: "Трудоустройство",
      description: "Находят работу в течение 3 месяцев",
    },
    {
      icon: "TrendingUp",
      number: "₽120,000",
      label: "Средняя зарплата",
      description: "Наших выпускников после курса",
    },
    {
      icon: "Clock",
      number: "6-12",
      label: "Месяцев обучения",
      description: "От новичка до junior специалиста",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Наши достижения в цифрах
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Результаты, которыми мы гордимся
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Icon
                    name={stat.icon as any}
                    size={28}
                    className="text-purple-600"
                  />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-purple-100 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-purple-200">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
