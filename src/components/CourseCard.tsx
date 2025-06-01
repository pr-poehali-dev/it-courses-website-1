import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  price: string;
  image: string;
  technologies: string[];
}

const CourseCard = ({
  title,
  description,
  duration,
  level,
  price,
  image,
  technologies,
}: CourseCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
      <div className="aspect-video overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm text-purple-600 font-medium">{level}</span>
          <span className="text-sm text-gray-500">{duration}</span>
        </div>
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
          {title}
        </CardTitle>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">
            {price}
            <span className="text-sm text-gray-500 font-normal">/мес</span>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <Icon name="ArrowRight" size={16} className="ml-2" />
            Подробнее
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
