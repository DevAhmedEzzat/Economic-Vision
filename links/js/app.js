document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');
});
// Mobile Navigation Toggle
// فتح/غلق المنيو بالـ hamburger
document.getElementById('hamburger').addEventListener('click', function (e) {
  e.stopPropagation(); // منع الكليك من إنه يوصل للوثيقة
  document.getElementById('nav-menu').classList.toggle('active');
});

// غلق المنيو عند الكليك خارجها
document.addEventListener('click', function (e) {
  const navMenu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('hamburger');

  // لو الكليك مش على المنيو ولا على الزر
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove('active');
  }
});


// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        // Close mobile menu if open
        document.getElementById('nav-menu').classList.remove('active');
        });
    });
}

// Navbar background opacity on scroll
function initNavbarScroll() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY) {
            header.classList.add('scrolling');
        } if (window.scrollY < 100) {
            header.classList.remove('scrolling');
        } 
    });
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
}, observerOptions);

// Observe service cards and other elements
document.querySelectorAll('.service-card, .stat, .contact-form').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
    });
}

// Add mouse movement effect to hero
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.contact');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.02;
        const x = (mouseX - 0.5) * speed * 100;
        const y = (mouseY - 0.5) * speed * 100;
        
        shape.style.transform += ` translate(${x}px, ${y}px)`;
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-bg');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.9}px)`;
    }
});

// Translation data
const translations = {
    en: {
        // hero
        'hero-title': 'Economic Vision',
        'hero-title2': 'For Feasibility Studies',
        'hero-desc': 'Your Business. Built on Solid Financial Foundations Expert accounting, tax, and company formation solutions designed to simplify your business journey and support sustainable growth',

        // services
        'service1-title': 'Feasibility Studies',
        'service1-desc': 'Comprehensive and accurate economic feasibility studies',
        'service2-title': 'Company Formation',
        'service2-desc': 'Comprehensive services for the establishment and registration of companies',
        'service3-title': 'Applying for land offerings',
        'service3-desc': 'Offerings of industrial, commercial, agricultural, and service-related land',
        'service4-title': 'Industrial Registrations',
        'service4-desc': 'Obtaining industrial registrations',
        'service5-title': 'Investment Opportunities',
        'service5-desc': 'Identifying and evaluating the best investment opportunities',
        'service6-title': 'Industrial Marketing',
        'service6-desc': 'Marketing strategies for your project',
        
        // about
        'about1-desc': 'Distinguished expertise in economic and industrial consulting.',
        'about2-desc': 'We are a firm specializing in economic and industrial consulting, possessing extensive experience in feasibility studies, company formation, and industrial licensing.',
        'about3-desc': 'We are committed to providing the best possible services to our clients, helping them achieve their investment objectives.',

        // Corporate Services
        'service7-title': 'Tax Registration',
        'service7-desc': 'We assist you in registering your entity for tax purposes and completing the necessary procedures to ensure compliance with tax requirements',
        'service8-title': 'Commercial Registration',
        'service8-desc': 'We handle the process of obtaining your commercial registration to officially establish your business and begin operations',
        'service9-title': 'Amending Company Data',
        'service9-desc': 'We help you update and amend your company’s official records to reflect any changes in your business activities or organizational structure',
        'service10-title': 'Payroll Management',
        'service10-desc': 'We accurately prepare and manage monthly payroll and employee entitlements, while ensuring adherence to all related obligations',
        'service11-title': 'Licensing Services',
        'service11-desc': 'We assist you in completing the licensing procedures required to conduct your business activities in accordance with regulatory requirements',

        'lang-text': 'AR'
    },
    ar: {
        // hero Section
        'hero-title': 'الرؤية الاقتصادية',
        'hero-title2': 'لدراسات الجدوى',
        'hero-desc': 'عملك مبني على أسس مالية متينة.',
        'hero-desc2': 'حلول محاسبية وضرائبية وتأسيس شركات متخصصة مصممة لتبسيط رحلة عملك ودعم نموه المستدام.',
        
        // services Section
        'service1-title': 'دراسات الجدوى',
        'service1-desc': 'دراسات جدوى اقتصادية شاملة ودقيقة',
        'service2-title': 'تأسيس شركة',
        'service2-desc': 'خدمات شاملة لتأسيس وتسجيل الشركات',
        'service3-title': 'التقديم على طروحات',
        'service3-desc': 'طروحات الأراضي الصناعية والتجارية والزراعية والخدمية',
        'service4-title': 'التسجيلات الصناعية',
        'service4-desc': 'الحصول على التسجيلات الصناعية',
        'service5-title': 'فرص استثمارية',
        'service5-desc': 'تحديد وتقييم أفضل فرص الاستثمار',
        'service6-title': 'التسويق الصناعي',
        'service6-desc': 'استراتيجيات التسويق لمشروعك',
        
        // about Section
        'about1-desc': 'خبرة متميزة في الاستشارات الاقتصادية والصناعية',
        'about2-desc': 'نحن شركة متخصصة في الاستشارات الاقتصادية والصناعية، ولدينا خبرة واسعة في دراسات الجدوى وتأسيس الشركات والتراخيص الصناعية',
        'about3-desc': 'نحن ملتزمون بتقديم أفضل الخدمات الممكنة لعملائنا، ومساعدتهم على تحقيق أهدافهم الاستثمارية',

        // Corporate Services Section
        'service7-title': 'تسجيل الضرائب',
        'service7-desc': 'نساعدكم في تسجيل كيانكم لأغراض ضريبية وإتمام الإجراءات اللازمة لضمان الامتثال للمتطلبات الضريبية',
        'service8-title': 'التسجيل التجاري',
        'service8-desc': 'نتولى عملية الحصول على تسجيلك التجاري لتأسيس عملك رسميًا وبدء العمليات',
        'service9-title': 'تعديل بيانات الشركة',
        'service9-desc': 'نساعدك في تحديث وتعديل السجلات الرسمية لشركتك لتعكس أي تغييرات في أنشطة عملك أو هيكلك التنظيمي',
        'service10-title': 'إدارة الرواتب',
        'service10-desc': 'نقوم بإعداد وإدارة كشوف المرتبات الشهرية ومستحقات الموظفين بدقة، مع ضمان الالتزام بجميع الالتزامات ذات الصلة.',
        'service11-title': 'خدمات الترخيص',
        'service11-desc': 'نساعدكم في إتمام إجراءات الترخيص اللازمة لممارسة أنشطتكم التجارية وفقًا للمتطلبات التنظيمية',

        'lang-text': 'EN'
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    
    // Update HTML attributes
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    // Toggle RTL class on body
    document.body.classList.toggle('rtl', currentLang === 'ar');
    
    // Update all text content
    const currentTranslations = translations[currentLang];
    
    Object.keys(currentTranslations).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (key === 'hours-text') {
                element.innerHTML = currentTranslations[key];
            } else {
                element.textContent = currentTranslations[key];
            }
        }
    });

    // Add fade animation to content
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    setTimeout(() => {
        container.style.opacity = '1';
    }, 150);
}

/** button (top)*/
const buttonTop= document.createElement('button');
buttonTop.innerHTML='top';
buttonTop.classList.add('button-top');
document.querySelector('body').appendChild(buttonTop);
document.addEventListener('scroll', function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        buttonTop.style.display = 'block';
    } else {
        buttonTop.style.display = 'none';
    }
});

buttonTop.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    //createParticles();
    initSmoothScrolling();
    initNavbarScroll();
    initScrollAnimations();
});
