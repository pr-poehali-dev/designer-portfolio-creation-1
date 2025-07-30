import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  detailedDescription?: string;
  processImages?: string[];
  technologies?: string[];
  duration?: string;
  client?: string;
  year?: string;
  challenges?: string;
  solution?: string;
  results?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-black mb-2">
            {project.title}
          </DialogTitle>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="capitalize">
              {project.category}
            </Badge>
            {project.technologies?.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Main Project Image */}
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-3 gap-6 py-6 border-y border-gray-200">
            {project.client && (
              <div>
                <h4 className="font-semibold text-black mb-2">Клиент</h4>
                <p className="text-gray-600">{project.client}</p>
              </div>
            )}
            {project.duration && (
              <div>
                <h4 className="font-semibold text-black mb-2">Длительность</h4>
                <p className="text-gray-600">{project.duration}</p>
              </div>
            )}
            {project.year && (
              <div>
                <h4 className="font-semibold text-black mb-2">Год</h4>
                <p className="text-gray-600">{project.year}</p>
              </div>
            )}
          </div>

          {/* Project Description */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">О проекте</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Challenge & Solution */}
          {project.challenges && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-black mb-4 flex items-center">
                  <Icon name="Target" size={20} className="mr-2" />
                  Задача
                </h4>
                <p className="text-gray-700 leading-relaxed">{project.challenges}</p>
              </div>
              {project.solution && (
                <div>
                  <h4 className="text-xl font-semibold text-black mb-4 flex items-center">
                    <Icon name="Lightbulb" size={20} className="mr-2" />
                    Решение
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{project.solution}</p>
                </div>
              )}
            </div>
          )}

          {/* Process Images */}
          {project.processImages && project.processImages.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Процесс работы</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {project.processImages.map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg">
                    <img 
                      src={image} 
                      alt={`${project.title} процесс ${index + 1}`}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          {project.results && project.results.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Результаты</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button className="bg-black hover:bg-gray-800 text-white flex-1">
              <Icon name="ExternalLink" size={16} className="mr-2" />
              Посмотреть проект
            </Button>
            <Button variant="outline" className="flex-1">
              <Icon name="Mail" size={16} className="mr-2" />
              Обсудить похожий проект
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;