const quotes = [
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
    { text: "I have learned over the years that when one's mind is made up, this diminishes fear.", author: "Rosa Parks" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "Opportunities don't happen, you create them.", author: "Chris Grosser" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { text: "The secret of success is to do the common thing uncommonly well.", author: "John D. Rockefeller Jr." },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "The harder the battle, the sweeter the victory.", author: "Les Brown" },
    { text: "Don't limit your challenges. Challenge your limits.", author: "Anonymous" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
    { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    { text: "Don't be distracted by criticism. Remember—the only taste of success some people get is to take a bite out of you.", author: "Zig Ziglar" },
    { text: "Success is not about the destination, but the journey.", author: "Zig Ziglar" },
    { text: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou" },
    { text: "Success is the progressive realization of a worthy goal or ideal.", author: "Earl Nightingale" },
    { text: "Success is not measured by money or power but by the positive impact you have on others.", author: "Anonymous" },
    { text: "Success is a state of mind. If you want success, start thinking of yourself as a success.", author: "Joyce Brothers" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "Success is the ability to go from one failure to another with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "Success is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
    { text: "Success is not about being the best. It's about always getting better.", author: "Behance" },
    { text: "Success is a journey, not a destination.", author: "Ben Sweetland" },
    { text: "Success is the sum of details.", author: "Harvey S. Firestone" },
    { text: "Success is not for the lazy.", author: "Anonymous" },
    { text: "Success is the progressive realization of a worthy goal.", author: "Napoleon Hill" },
    { text: "Success is the best revenge.", author: "Kanye West" },
    { text: "Success is not final; failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Success is not about luck, but about hard work.", author: "Anonymous" },
    { text: "Success is the ability to convert ideas into reality.", author: "Anonymous" },
    { text: "Success is the result of persistence.", author: "Anonymous" },
    { text: "Success is the sum of small efforts.", author: "Anonymous" },
    { text: "Success is the key to happiness.", author: "Anonymous" },
    { text: "Success is the result of self-discipline.", author: "Anonymous" },
    { text: "Success is the ability to overcome obstacles.", author: "Anonymous" },
    { text: "Success is the result of positive thinking.", author: "Anonymous" },
    { text: "Success is the ability to inspire others.", author: "Anonymous" }
];

let currentQuoteIndex = 0;
let typingInterval;

function typeQuote(text, element) {
    let i = 0;
    element.textContent = '';
    clearInterval(typingInterval);
    typingInterval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, 50);
}

function displayQuote(index) {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    typeQuote(quotes[index].text, quoteText);
    quoteAuthor.textContent = `- ${quotes[index].author}`;
}

function newQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    displayQuote(currentQuoteIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    displayQuote(0);
    document.getElementById('new-quote-btn').addEventListener('click', newQuote);

    // Scroll-Triggered Reveal Bands
    const revealBands = document.querySelectorAll('.reveal-band');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    });
    revealBands.forEach(band => observer.observe(band));

    // Waveform Audio Visualizer
    const waveformVisualizer = document.querySelector('.waveform-visualizer');
    if (waveformVisualizer) {
        for (let i = 0; i < 50; i++) {
            const bar = document.createElement('div');
            bar.className = 'waveform-bar';
            bar.style.animationDelay = `${i * 0.1}s`;
            waveformVisualizer.appendChild(bar);
        }
    }

    // SVG Line-Draw Animation
    const svgPaths = document.querySelectorAll('svg path');
    svgPaths.forEach(path => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        path.style.animation = 'drawLine 3s ease-in-out forwards';
    });

    // Neon Outline Pulse Enhancement
    const neonElements = document.querySelectorAll('#background-neon-outline');
    neonElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.animationDuration = '1s';
        });
        el.addEventListener('mouseleave', () => {
            el.style.animationDuration = '3s';
        });
    });

    // Floating Bokeh Orbs Interaction
    const bokehLayer = document.getElementById('background-floating-bokeh');
    if (bokehLayer) {
        bokehLayer.addEventListener('click', () => {
            bokehLayer.style.animationDuration = '5s';
            setTimeout(() => {
                bokehLayer.style.animationDuration = '15s';
            }, 5000);
        });
    }

    // Geometric Kaleidoscope Rotation Speed Change
    const kaleidoscope = document.querySelector('.kaleidoscope');
    if (kaleidoscope) {
        kaleidoscope.addEventListener('dblclick', () => {
            kaleidoscope.style.animationDuration = '5s';
            setTimeout(() => {
                kaleidoscope.style.animationDuration = '10s';
            }, 5000);
        });
    }

    // Retro Scan Gradient Loop Speed Control
    const scanLine = document.querySelector('.scan-line');
    if (scanLine) {
        document.addEventListener('keydown', (e) => {
            if (e.key === 's') {
                scanLine.style.animationDuration = '1s';
            }
        });
        document.addEventListener('keyup', (e) => {
            if (e.key === 's') {
                scanLine.style.animationDuration = '3s';
            }
        });
    }

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('open');
        });
    }

    // Contact Form Submission Handling
    const contactForm = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');
    if (contactForm && responseMessage) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Clear previous messages
            responseMessage.textContent = '';
            responseMessage.className = '';

            // Get form values
            const name = contactForm.name.value.trim();
            const email = contactForm.email.value.trim();
            const message = contactForm.message.value.trim();

            // Basic validation
            if (!name) {
                responseMessage.textContent = 'Please enter your name.';
                responseMessage.classList.add('error-message');
                return;
            }
            if (!email || !validateEmail(email)) {
                responseMessage.textContent = 'Please enter a valid email address.';
                responseMessage.classList.add('error-message');
                return;
            }
            if (!message) {
                responseMessage.textContent = 'Please enter your message.';
                responseMessage.classList.add('error-message');
                return;
            }

            // If all valid, show success message
            responseMessage.innerHTML = '✅ Thank you! Your message has been received. We’ll reach you soon.';
            responseMessage.classList.add('success-message');

            // Reset form
            contactForm.reset();

            // Fade out message after 3-4 seconds
            setTimeout(() => {
                responseMessage.textContent = '';
                responseMessage.className = '';
            }, 3500);
        });
    }

    // Email validation helper function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }
});

// SVG Line-Draw Animation Keyframe
const style = document.createElement('style');
style.textContent = `
@keyframes drawLine {
    to {
        stroke-dashoffset: 0;
    }
}
`;
document.head.appendChild(style);
