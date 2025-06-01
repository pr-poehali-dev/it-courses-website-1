import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Изучай IT с
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              экспертами
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Получи востребованную профессию в IT за 6 месяцев. Практические
            курсы от ведущих специалистов с гарантией трудоустройства.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть бесплатный урок
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на консультацию
            </Button>
          </div>
          <div className="flex justify-center items-center space-x-8 text-gray-500">
            <div className="flex items-center">
              <Icon name="Users" size={20} className="mr-2" />
              <span>5000+ студентов</span>
            </div>
            <div className="flex items-center">
              <Icon name="Star" size={20} className="mr-2 text-yellow-500" />
              <span>4.9 рейтинг</span>
            </div>
            <div className="flex items-center">
              <Icon name="Award" size={20} className="mr-2" />
              <span>95% трудоустройство</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
