import CourseCard from "./CourseCard";

const CourseGrid = () => {
  const courses = [
    {
      title: "Fullstack JavaScript",
      description:
        "Изучи современную веб-разработку от основ до продвинутых техник. React, Node.js, MongoDB.",
      duration: "8 месяцев",
      level: "Начинающий",
      price: "4990₽",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
    },
    {
      title: "Python Developer",
      description:
        "Стань Python разработчиком с нуля. Django, FastAPI, машинное обучение и аналитика данных.",
      duration: "6 месяцев",
      level: "Начинающий",
      price: "3990₽",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop",
      technologies: ["Python", "Django", "FastAPI", "PostgreSQL"],
    },
    {
      title: "Frontend Pro",
      description:
        "Продвинутый курс по фронтенд разработке. TypeScript, Vue.js, современные инструменты сборки.",
      duration: "5 месяцев",
      level: "Средний",
      price: "5990₽",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      technologies: ["TypeScript", "Vue.js", "Webpack", "SCSS"],
    },
    {
      title: "DevOps Engineer",
      description:
        "Освой современные практики DevOps. Docker, Kubernetes, CI/CD, облачные технологии AWS.",
      duration: "7 месяцев",
      level: "Продвинутый",
      price: "6990₽",
      image:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop",
      technologies: ["Docker", "Kubernetes", "AWS", "Jenkins"],
    },
    {
      title: "Mobile Development",
      description:
        "Создавай мобильные приложения на React Native. Разработка для iOS и Android одновременно.",
      duration: "6 месяцев",
      level: "Средний",
      price: "5490₽",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      technologies: ["React Native", "Expo", "Redux", "Firebase"],
    },
    {
      title: "Data Science",
      description:
        "Анализ данных и машинное обучение. Pandas, NumPy, TensorFlow, создание ML моделей.",
      duration: "9 месяцев",
      level: "Средний",
      price: "7490₽",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      technologies: ["Python", "Pandas", "TensorFlow", "Jupyter"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Популярные курсы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выбери направление и начни карьеру в IT уже сегодня
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
