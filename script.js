const translations = {
    es: {
        title: "Portfolio de Vicpaltor",
        header: {
            title: "Hola, soy Víctor",
            subtitle: "Desarrollador de Software | Proyectos y Demos"
        },
        about: {
            title: "Sobre mí",
            content: "Soy Ingeniero Informático con trayectoria en desarrollo Back-end y automatización. Proactivo y resolutivo, me enfoco en diseñar e implementar soluciones (APIs, microservicios, RPA) que impulsan la eficiencia y calidad en entornos productivos. Mi motor es la curiosidad y la mejora continua, buscando siempre el impacto en el negocio y el buen ambiente en el trabajo.",
            contact: {
                email: "Email de contacto:",
                phone: "Teléfono:",
                linkedin: "LinkedIn:"
            }
        },
        skills: {
            title: "Habilidades Técnicas",
            languages: "Lenguajes",
            frameworks: "Frameworks",
            tools: "Herramientas",
            databases: "Bases de Datos"
        },
        experience: {
            title: "Experiencia Laboral",
            job1: {
                title: "Desarrollador Back-end",
                company: "Empresa Tecnológica S.A.",
                date: "2022 - Presente",
                description: "Desarrollo de APIs REST y microservicios utilizando Java y Spring Boot. Implementación de soluciones de automatización con RPA para mejorar procesos empresariales. Colaboración en equipos ágiles siguiendo metodologías Scrum."
            },
            job2: {
                title: "Junior Developer",
                company: "StartUp Innovación",
                date: "2020 - 2022",
                description: "Desarrollo de aplicaciones web y mantenimiento de sistemas existentes. Participación en el diseño de arquitecturas de software y optimización de bases de datos. Soporte técnico y resolución de incidencias."
            }
        },
        education: {
            title: "Formación Académica",
            degree1: {
                title: "Ingeniería Informática",
                institution: "Universidad Politécnica",
                date: "2015 - 2020"
            },
            degree2: {
                title: "Curso Especialización en Cloud Computing",
                institution: "Platzi",
                date: "2021"
            }
        },
        projects: {
            title: "Mis Proyectos",
            project1: {
                title: "TFG BedCheck Project",
                description: "Descripción corta de qué hace tu proyecto BedCheck. Tecnología usada: Java, Python, etc.",
                button: "Ver Código en GitHub"
            },
            project2: {
                title: "Otro Proyecto",
                description: "Descripción de otro proyecto futuro.",
                button: "Ver Proyecto"
            }
        }
    },
    en: {
        title: "Vicpaltor Portfolio",
        header: {
            title: "Hi, I'm Víctor",
            subtitle: "Software Developer | Projects & Demos"
        },
        about: {
            title: "About Me",
            content: "I'm a Computer Science Engineer with experience in Back-end development and automation. Proactive and problem-solving, I focus on designing and implementing solutions (APIs, microservices, RPA) that drive efficiency and quality in production environments. My motivation is curiosity and continuous improvement, always seeking business impact and a good work environment.",
            contact: {
                email: "Contact email:",
                phone: "Phone:",
                linkedin: "LinkedIn:"
            }
        },
        projects: {
            title: "My Projects",
            project1: {
                title: "TFG BedCheck Project",
                description: "Brief description of what your BedCheck project does. Technologies used: Java, Python, etc.",
                button: "View Code on GitHub"
            },
            project2: {
                title: "Another Project",
                description: "Description of another future project.",
                button: "View Project"
            }
        }
    },
    pl: {
        title: "Portfolio Vicpaltor",
        header: {
            title: "Cześć, jestem Víctor",
            subtitle: "Programista | Projekty i Dema"
        },
        about: {
            title: "O mnie",
            content: "Jestem inżynierem informatyki z doświadczeniem w rozwoju zaplecza i automatyzacji. Proaktywny i rozwiązujący problemy, skupiam się na projektowaniu i wdrażaniu rozwiązań (API, mikrousługi, RPA), które napędzają wydajność i jakość w środowiskach produkcyjnych. Moją motywacją jest ciekawość i ciągłe doskonalenie, zawsze dążąc do wpływu na biznes i dobrej atmosfery w pracy.",
            contact: {
                email: "Email kontaktowy:",
                phone: "Telefon:",
                linkedin: "LinkedIn:"
            }
        },
        projects: {
            title: "Moje Projekty",
            project1: {
                title: "Projekt TFG BedCheck",
                description: "Krótki opis tego, co robi twój projekt BedCheck. Użyte technologie: Java, Python, etc.",
                button: "Zobacz Kod na GitHub"
            },
            project2: {
                title: "Inny Projekt",
                description: "Opis innego przyszłego projektu.",
                button: "Zobacz Projekt"
            }
        }
    }
};

let currentLang = 'es';

function changeLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    // Update title
    document.title = t.title;
    
    // Update header
    document.querySelector('header h1').textContent = t.header.title;
    document.querySelector('header p').textContent = t.header.subtitle;
    
    // Update about section
    document.querySelector('section h2').textContent = t.about.title;
    document.querySelector('section p').textContent = t.about.content;
    
    // Update contact info
    const contactInfo = document.querySelectorAll('.contact-info p');
    contactInfo[0].innerHTML = `<strong>${t.about.contact.email}</strong> victormpalostorres@gmail.com`;
    contactInfo[1].innerHTML = `<strong>${t.about.contact.phone}</strong> 697 562 401`;
    contactInfo[2].innerHTML = `<strong>${t.about.contact.linkedin}</strong> <a href="https://www.linkedin.com/in/victor-palos/" target="_blank" style="color: var(--primary-color); text-decoration: none;">linkedin.com/in/victor-palos</a>`;
    
    // Update projects section
    document.querySelectorAll('section')[1].querySelector('h2').textContent = t.projects.title;
    
    const projects = document.querySelectorAll('.project');
    projects[0].querySelector('h3').textContent = t.projects.project1.title;
    projects[0].querySelector('p').textContent = t.projects.project1.description;
    projects[0].querySelector('.btn').textContent = t.projects.project1.button;
    
    projects[1].querySelector('h3').textContent = t.projects.project2.title;
    projects[1].querySelector('p').textContent = t.projects.project2.description;
    projects[1].querySelector('.btn').textContent = t.projects.project2.button;
    
    // Update skills section
    document.querySelectorAll('section')[1].querySelector('h2').textContent = t.skills.title;
    const skillCategories = document.querySelectorAll('.skill-category h4');
    skillCategories[0].textContent = t.skills.languages;
    skillCategories[1].textContent = t.skills.frameworks;
    skillCategories[2].textContent = t.skills.tools;
    skillCategories[3].textContent = t.skills.databases;
    
    // Update experience section
    document.querySelectorAll('section')[2].querySelector('h2').textContent = t.experience.title;
    const expItems = document.querySelectorAll('.experience-item');
    expItems[0].querySelector('.experience-title').textContent = t.experience.job1.title;
    expItems[0].querySelector('.experience-company').textContent = t.experience.job1.company;
    expItems[0].querySelector('.experience-date').textContent = t.experience.job1.date;
    expItems[0].querySelector('.experience-description').textContent = t.experience.job1.description;
    
    expItems[1].querySelector('.experience-title').textContent = t.experience.job2.title;
    expItems[1].querySelector('.experience-company').textContent = t.experience.job2.company;
    expItems[1].querySelector('.experience-date').textContent = t.experience.job2.date;
    expItems[1].querySelector('.experience-description').textContent = t.experience.job2.description;
    
    // Update education section
    document.querySelectorAll('section')[3].querySelector('h2').textContent = t.education.title;
    const eduItems = document.querySelectorAll('.education-item');
    eduItems[0].querySelector('.education-title').textContent = t.education.degree1.title;
    eduItems[0].querySelector('.education-institution').textContent = t.education.degree1.institution;
    eduItems[0].querySelector('.education-date').textContent = t.education.degree1.date;
    
    eduItems[1].querySelector('.education-title').textContent = t.education.degree2.title;
    eduItems[1].querySelector('.education-institution').textContent = t.education.degree2.institution;
    eduItems[1].querySelector('.education-date').textContent = t.education.degree2.date;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
}

// Initialize language buttons
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();

    // Add click handlers to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            changeLanguage(this.dataset.lang);
        });
    });


});