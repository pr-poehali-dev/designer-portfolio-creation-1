import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import ProjectModal from '@/components/ProjectModal';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('все');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animation hooks for sections
  const heroRef = useIntersectionObserver({ threshold: 0.3 });
  const aboutRef = useIntersectionObserver({ threshold: 0.3 });
  const portfolioRef = useIntersectionObserver({ threshold: 0.2 });
  const servicesRef = useIntersectionObserver({ threshold: 0.3 });
  const contactRef = useIntersectionObserver({ threshold: 0.3 });

  const portfolioItems = [
    {
      id: 1,
      title: 'Веб-дизайн',
      description: 'Минималистичный дизайн корпоративного сайта',
      category: 'веб',
      image: '/img/7e5617ab-1c07-49f9-88a3-733efc298cd2.jpg',
      detailedDescription: 'Комплексный редизайн корпоративного веб-сайта с фокусом на минимализм и функциональность. Проект включал полный UX/UI аудит, создание пользовательских сценариев и разработку адаптивного дизайна.',
      processImages: ['/img/80e9340f-f847-4d89-8e3c-f7979f168513.jpg'],
      technologies: ['Figma', 'HTML/CSS', 'JavaScript'],
      duration: '3 месяца',
      client: 'TechCorp',
      year: '2024',
      challenges: 'Клиент нуждался в современном веб-сайте, который отражал бы инновационность компании, но при этом был бы простым в навигации.',
      solution: 'Создал минималистичный дизайн с чёткой типографикой и интуитивной навигацией. Использовал монохромную палитру с яркими акцентами.',
      results: ['Увеличение конверсии на 40%', 'Снижение показателя отказов на 60%', 'Положительные отзывы от клиентов', 'Повышение узнаваемости бренда']
    },
    {
      id: 2,
      title: 'Брендинг',
      description: 'Создание фирменного стиля и логотипа',
      category: 'брендинг',
      image: '/img/aa44fc8c-9fed-454d-9f32-dcf97064cf63.jpg',
      detailedDescription: 'Комплексная разработка фирменного стиля для стартапа в сфере финтеха. Проект включал исследование рынка, разработку логотипа, цветовой палитры и руководства по применению.',
      processImages: ['/img/1b855810-6994-46ac-84d0-81671fe70dc5.jpg'],
      technologies: ['Illustrator', 'Photoshop', 'InDesign'],
      duration: '2 месяца',
      client: 'FinStart',
      year: '2024',
      challenges: 'Новому бренду нужно было выделиться на конкурентном рынке финансовых услуг и вызвать доверие у клиентов.',
      solution: 'Создал лаконичный логотип с геометрическими элементами, отражающими надёжность и инновационность. Использовал синие оттенки с чёрно-белыми акцентами.',
      results: ['Успешный запуск бренда', 'Положительные отзывы о фирменном стиле', 'Увеличение узнаваемости на 35%', 'Привлечение партнёров и инвесторов']
    },
    {
      id: 3,
      title: 'Мобильное приложение',
      description: 'UI/UX дизайн мобильного приложения',
      category: 'мобильные',
      image: '/img/711ab288-03c7-4ec9-8ac6-b2c8f1abfb28.jpg',
      detailedDescription: 'Проектирование и разработка пользовательского интерфейса для мобильного приложения фитнес-трекера. Проект включал создание пользовательских путей, вайрфреймов и готовых мокапов.',
      processImages: ['/img/5737d54f-bd1e-4616-80c4-41e76a8eaf54.jpg'],
      technologies: ['Figma', 'Sketch', 'Principle'],
      duration: '4 месяца',
      client: 'FitTracker',
      year: '2023',
      challenges: 'Нужно было создать простое в использовании приложение, которое мотивировало бы пользователей заниматься спортом регулярно.',
      solution: 'Создал интуитивный интерфейс с крупными кнопками, понятными иконками и системой гамификации. Использовал яркие акцентные цвета.',
      results: ['Высокие оценки в App Store (4.8/5)', 'Увеличение времени в приложении на 70%', 'Рост активных пользователей на 50%', 'Положительные отзывы о UX']
    }
  ];

  const services = [
    {
      icon: 'Palette',
      title: 'Веб-дизайн',
      description: 'Создание современных и функциональных веб-интерфейсов'
    },
    {
      icon: 'Brush',
      title: 'Брендинг',
      description: 'Разработка фирменного стиля и визуальной идентичности'
    },
    {
      icon: 'Smartphone',
      title: 'UX/UI дизайн',
      description: 'Проектирование пользовательского опыта для приложений'
    }
  ];

  const filters = ['все', 'веб', 'брендинг', 'мобильные'];

  const filteredItems = activeFilter === 'все' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black">DESIGNER</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-800 hover:text-black transition-colors">Главная</a>
              <a href="#about" className="text-gray-800 hover:text-black transition-colors">Обо мне</a>
              <a href="#portfolio" className="text-gray-800 hover:text-black transition-colors">Портфолио</a>
              <a href="#services" className="text-gray-800 hover:text-black transition-colors">Услуги</a>
              <a href="#contact" className="text-gray-800 hover:text-black transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={heroRef.ref}
            className={`text-center max-w-4xl mx-auto animate-slide-up ${
              heroRef.isIntersecting ? 'animate-visible' : ''
            }`}
          >
            <h2 className="text-6xl md:text-7xl font-bold text-black mb-6 tracking-tight">
              CREATIVE
              <br />
              DESIGNER
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Создаю минималистичные и функциональные дизайн-решения, 
              которые говорят сами за себя через чистые линии и продуманную типографику
            </p>
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg">
              Посмотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={aboutRef.ref}
            className={`grid md:grid-cols-2 gap-16 items-center animate-on-scroll ${
              aboutRef.isIntersecting ? 'animate-visible' : ''
            }`}
          >
            <div>
              <h3 className="text-4xl font-bold text-black mb-6">Обо мне</h3>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Я дизайнер с 5-летним опытом создания визуальных решений для брендов и цифровых продуктов. 
                Специализируюсь на минималистичном подходе, где каждый элемент имеет свою функцию.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Работаю с крупными компаниями и стартапами, помогая им выразить свою уникальность 
                через продуманный дизайн и пользовательский опыт.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-gray-800">Веб-дизайн и разработка интерфейсов</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-gray-800">Создание фирменного стиля</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-gray-800">UX/UI проектирование</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-gray-800">Консультации по дизайну</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={portfolioRef.ref}
            className={`text-center mb-16 animate-slide-up ${
              portfolioRef.isIntersecting ? 'animate-visible' : ''
            }`}
          >
            <h3 className="text-4xl font-bold text-black mb-6">Портфолио</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Избранные проекты, демонстрирующие мой подход к созданию 
              функциональных и эстетически привлекательных решений
            </p>
          </div>

          {/* Portfolio Filters */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-gray-100 rounded-full p-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full transition-all capitalize ${
                    activeFilter === filter 
                      ? 'bg-black text-white' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children ${
            portfolioRef.isIntersecting ? 'animate-visible' : ''
          }`}>
            {filteredItems.map((item) => (
              <Card 
                key={item.id} 
                className="group border-0 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => handleProjectClick(item)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" className="bg-white/90 hover:bg-white">
                      Посмотреть проект
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-black mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={servicesRef.ref}
            className={`text-center mb-16 animate-slide-up ${
              servicesRef.isIntersecting ? 'animate-visible' : ''
            }`}
          >
            <h3 className="text-4xl font-bold text-black mb-6">Услуги</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Предлагаю комплексные дизайн-решения для бизнеса любого масштаба
            </p>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 stagger-children ${
            servicesRef.isIntersecting ? 'animate-visible' : ''
          }`}>
            {services.map((service, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-sm hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6">
                  <Icon name={service.icon} size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-black mb-4">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div 
          ref={contactRef.ref}
          className={`max-w-4xl mx-auto text-center animate-scale ${
            contactRef.isIntersecting ? 'animate-visible' : ''
          }`}
        >
          <h3 className="text-4xl font-bold text-black mb-6">Контакты</h3>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Готов обсудить ваш проект и создать дизайн, который поможет достичь ваших целей
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
                <Icon name="Mail" size={20} />
              </div>
              <h4 className="font-semibold text-black mb-2">Email</h4>
              <p className="text-gray-600">hello@designer.com</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
                <Icon name="Phone" size={20} />
              </div>
              <h4 className="font-semibold text-black mb-2">Телефон</h4>
              <p className="text-gray-600">+7 (999) 123-45-67</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
                <Icon name="MapPin" size={20} />
              </div>
              <h4 className="font-semibold text-black mb-2">Локация</h4>
              <p className="text-gray-600">Москва, Россия</p>
            </div>
          </div>

          <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-12 py-4 text-lg">
            Написать мне
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">© 2024 Designer Portfolio. Все права защищены.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Icon name="Instagram" size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Icon name="Twitter" size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Icon name="Linkedin" size={20} />
            </a>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;