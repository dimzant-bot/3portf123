const skills = [
    { name: 'C#', level: 40 },
    { name: 'Python', level: 80 },
    { name: 'JavaScript', level: 45 },
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 75 },
    { name: '1С:Предприятие', level: 55 }
];

const projects = [
    {
        title: "Отчет комиссии (1С:Предприятие)",
        description: "Интерфейс отчётной системы в 1С:Предприятие для анализа комиссионных выплат риелторам с формированием таблицы данных и автоматическим подсчётом сумм.",
        image: "2.png   "
    },
    {
        title: "MDR Ultra Light",
        description: "Современный промо-сайт инновационного промышленного дрона с интерактивным интерфейсом, эффектной анимацией и стильным минималистичным дизайном.",
        image: "1.png"
    },
    {
        title: "Герои Советского Союза",
        description: "Информационный сайт, посвящённый четырём Героям Советского Союза. Содержит биографии, описание подвига, сведения о памятниках и местах увековечивания памяти каждого героя.",
        image: "5.png"
    },
    {
        title: "Food&Table",
        description: "Сайт ресторана Food&Table для удобного бронирования столиков онлайн, просмотра меню и выбора времени посещения. Позволяет быстро оформить бронь и управлять своими заказами.",
        image: "4.png"
    },
    {
        title: "Система управления библиотечным фондом",
        description: "Веб-сайт для учета, хранения и управления библиотечным фондом. Позволяет вести каталог книг, отслеживать выдачу и возврат литературы, а также управлять данными читателей и библиотечных ресурсов.",
        image: "3.png"
    },
    {
        title: "Портфолио студента",
        description: "Веб-сайт с персональным портфолио студента, включающий учебные проекты, выполненные работы, навыки и достижения. Предназначен для демонстрации опыта и развития в процессе обучения.",
        image: "6.png"
    }
];

const skillsContainer = document.getElementById('skillsContainer');
const projectsContainer = document.getElementById('projectsContainer');

skills.forEach(skill => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';

    skillCard.innerHTML = `
        <div class="skill-header">
            <span>${skill.name}</span>
            <span class="skill-percent">${skill.level}%</span>
        </div>
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${skill.level}%"></div>
        </div>
    `;

    skillsContainer.appendChild(skillCard);
});

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';

    projectCard.innerHTML = `
        <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-content">
            <h4 class="project-title">${project.title}</h4>
            <p class="project-description">${project.description}</p>
        </div>
    `;

    projectsContainer.appendChild(projectCard);
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Сообщение отправлено!");
    this.reset();
});