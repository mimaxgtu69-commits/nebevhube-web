/* ==========================================================================
   NEBE V HUBĚ - INTERACTIVE SCRIPT
   ========================================================================== */

// Menu Database for Interactive Modal
const foodDatabase = {
    // BURGERS
    "jalapeno": {
        name: "Jalapeño Burger",
        price: "195 Kč",
        allergens: "Alergeny: 1, 3, 7",
        desc: "Šťavnaté hovězí maso (150g) na lávovém grilu, rozpečený sýr Cheddar, křupavá slanina, ostré jalapeño papričky, čerstvá rajčata, křehký listový salát a domácí pikantní majonéza. Vše podávané v naší máslové bulce.",
        img: "images/gourmet_burger.png"
    },
    "chipotle": {
        name: "Chipotle Burger",
        price: "195 Kč",
        allergens: "Alergeny: 1, 3, 7",
        desc: "Hovězí maso (150g) z lávového grilu, Cheddar sýr, dozlatova opečená slanina, jemně pálivé uzené Chipotle papričky, nakládaná červená cibulka, domácí chipotle majonéza, nakládané okurky a čerstvý listový salát.",
        img: "images/gourmet_burger.png"
    },
    "cheddar-bacon": {
        name: "Cheddar Bacon Burger",
        price: "195 Kč",
        allergens: "Alergeny: 1, 3, 7",
        desc: "Klasika, která nikdy nezklame. Grilované hovězí maso (150g), extra nálož rozpečeného Cheddaru, spousta křupavé slaniny, sladkokyselé domácí cibulové chutney, jemná majonéza a nakládané okurky.",
        img: "images/gourmet_burger.png"
    },
    "jack-daniels": {
        name: "Jack Daniels Burger",
        price: "195 Kč",
        allergens: "Alergeny: 1, 3, 7",
        desc: "Aromatický burger pro labužníky. Hovězí maso (150g), listový salát, křupavá slanina, naše originální BBQ omáčka s příměsí pravého Jack Daniel's bourbonu, domácí cibulové chutney, sterilované okurky a červená cibule.",
        img: "images/gourmet_burger.png"
    },
    "caesar-burger": {
        name: "Caesar Burger",
        price: "195 Kč",
        allergens: "Alergeny: 1, 3, 7",
        desc: "Netradiční burger inspirovaný slavným salátem. Grilované hovězí maso (150g), křupavé listy římského salátu, vydatná caesar majonéza, hobliny pravého parmazánu a plátky do křupava vyškvařené slaniny.",
        img: "images/gourmet_burger.png"
    },
    "double-burger": {
        name: "Double Burger",
        price: "295 Kč",
        allergens: "Alergeny: 1, 3, 7",
        desc: "Obří porce pro největší jedlíky! Dvě šťavnaté placky hovězího masa (celkem 300g), dvojitý Cheddar sýr, dvojitá slanina, grilované sázené vejce, smažené cibulové kroužky, BBQ omáčka, červená cibule, nakládané okurky, rajče a salát.",
        img: "images/gourmet_burger.png"
    },
    "cheeseburger": {
        name: "Cheeseburger Classic",
        price: "195 Kč",
        allergens: "Alergeny: 1, 3, 7",
        desc: "Jednoduchý a naprosto dokonalý. Šťavnaté hovězí maso (150g) přelité naší horkou domácí sýrovou omáčkou z vyzrálého Cheddaru, křupavá slanina, nakládané okurky a čerstvý listový salát v máslové bulce.",
        img: "images/gourmet_burger.png"
    },
    "cheese-dream": {
        name: "Cheese Dream",
        price: "195 Kč",
        allergens: "Alergeny: 1, 3, 7",
        desc: "Vegetariánský sen. Poctivý smažený sýr (150g) z lokální sýrárny, křehký listový salát, čerstvá rajčata a naše poctivá domácí tatarka. Skvělá alternativa bez masa.",
        img: "images/fried_cheese.png"
    },
    
    // TORTILLAS
    "tortilla-beef": {
        name: "Tortilla s hovězím masem",
        price: "185 Kč",
        allergens: "Alergeny: 1, 3, 7",
        desc: "Zapečená pšeničná tortilla plněná grilovaným hovězím masem (150g), křupavou slaninou, rozpečeným Cheddarem, červenou cibulí, čerstvým míchaným salátem, sterilovanou okurkou a naší speciální dresinkovou omáčkou.",
        img: "images/chicken_tortilla.png"
    },
    "tortilla-chicken": {
        name: "Tortilla s kuřecím masem",
        price: "175 Kč",
        allergens: "Alergeny: 1, 3, 7",
        desc: "Křupavá tortilla s dozlatova osmaženými kuřecími smaženkami, ledovým salátem, čerstvou zeleninou, jemným sýrem Cheddar a přelitá lahodnou cheddarovou omáčkou.",
        img: "images/chicken_tortilla.png"
    },
    "quesadilla": {
        name: "Quesadilla s kuřecím masem",
        price: "175 Kč",
        allergens: "Alergeny: 1, 3, 7",
        desc: "Tradiční mexická placka plněná šťavnatým kuřecím masem, spoustou strouhaného sýra a naší domácí uzenou BBQ omáčkou, zapečená do křupava na grilu.",
        img: "images/chicken_tortilla.png"
    },
    
    // POTATOES / FRIES
    "potatoes-krizanov": {
        name: "Křižanovské brambory",
        price: "55 Kč",
        allergens: "Bez alergenů (nebo dle omáčky)",
        desc: "Naše lokální specialita. Ručně krájené, dozlatova smažené brambory (150g) pocházející přímo z polí u sousedního Křižanova. Podávané se solí a bylinkami.",
        img: "images/loaded_potatoes.png"
    },
    "potatoes-batat": {
        name: "Batátové hranolky",
        price: "55 Kč",
        allergens: "Bez alergenů",
        desc: "Křupavé a jemně nasládlé smažené batáty (150g). Skvělá a moderní alternativa k běžným hranolkům, výborně ladící s chipotle nebo cheddarovou omáčkou.",
        img: "images/loaded_potatoes.png"
    },
    "potatoes-steak": {
        name: "Steakové hranolky",
        price: "55 Kč",
        allergens: "Bez alergenů",
        desc: "Hrubé, zvenku křupavé a uvnitř nadýchané bramborové steakové hranolky (150g). Perfektní příloha k jakémukoliv z našich burgerů.",
        img: "images/loaded_potatoes.png"
    },
    
    // SALADS
    "salad-caesar": {
        name: "Salát Caesar",
        price: "195 Kč",
        allergens: "Alergeny: 1, 3, 7",
        desc: "Křupavé listy římského salátu promíchané s naším domácím Caesar dresinkem s ančovičkami, krutony, hoblinami parmazánu a grilovaným kuřecím prsíčkem (100g) se slaninou.",
        img: "images/loaded_potatoes.png"
    },

    // DESSERTS
    "crepe-nutella": {
        name: "Palačinka s Nutellou a banánem",
        price: "65 Kč",
        allergens: "Alergeny: 1, 3, 7",
        desc: "Domácí jemná palačinka plněná bohatou vrstvou Nutelly a čerstvými plátky zralého banánu. Podávaná lehce pocukrovaná s porcí poctivé domácí šlehačky.",
        img: "images/sweet_crepe.png"
    },
    "crepe-grandma": {
        name: "Babiččina palačinka (mák, povidla)",
        price: "65 Kč",
        allergens: "Alergeny: 1, 3, 7",
        desc: "Tradiční česká sladká klasika. Naše domácí palačinka potřená poctivými švestkovými povidly, posypaná mletým mákem s cukrem a doplněná kopečkem šlehačky.",
        img: "images/sweet_crepe.png"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Toggle
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("show");
            navToggle.classList.toggle("active");
        });
        
        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll("a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("show");
                navToggle.classList.remove("active");
            });
        });
    }

    // 2. Header Scroll Effect
    const header = document.querySelector(".main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 3. Central Burger Interaction (Hero section)
    const burgerInteractive = document.getElementById("burgerInteractive");
    const menuSection = document.getElementById("menu-section");
    
    if (burgerInteractive) {
        // Desktop Hover is handled by CSS, but let's handle click & touch
        burgerInteractive.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Visual feedback transition
            burgerInteractive.classList.add("active");
            
            setTimeout(() => {
                menuSection.scrollIntoView({ behavior: "smooth" });
                burgerInteractive.classList.remove("active");
            }, 300);
        });

        // Touch event simulation for mobile tapping
        burgerInteractive.addEventListener("touchstart", () => {
            burgerInteractive.classList.add("active");
        }, { passive: true });

        burgerInteractive.addEventListener("touchend", () => {
            setTimeout(() => {
                burgerInteractive.classList.remove("active");
            }, 600);
        }, { passive: true });
    }

    // Scroll Down Button
    const scrollDownBtn = document.getElementById("scrollDownBtn");
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener("click", (e) => {
            e.preventDefault();
            menuSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // 4. Interactive Detail Modal for Menu Items
    const foodItems = document.querySelectorAll(".menu-item[data-food]");
    const foodModal = document.getElementById("foodModal");
    const modalClose = document.getElementById("modalClose");
    const modalBackdrop = document.getElementById("modalBackdrop");
    
    const modalImg = document.getElementById("modalImg");
    const modalPrice = document.getElementById("modalPrice");
    const modalName = document.getElementById("modalName");
    const modalAllergens = document.getElementById("modalAllergens");
    const modalDesc = document.getElementById("modalDesc");

    const openModal = (foodKey) => {
        const foodData = foodDatabase[foodKey];
        if (!foodData) return;

        modalImg.src = foodData.img;
        modalImg.alt = foodData.name;
        modalPrice.textContent = foodData.price;
        modalName.textContent = foodData.name;
        modalAllergens.textContent = foodData.allergens;
        modalDesc.textContent = foodData.desc;

        foodModal.classList.add("show");
        document.body.style.overflow = "hidden"; // Disable scroll behind modal
    };

    const closeModal = () => {
        foodModal.classList.remove("show");
        document.body.style.overflow = ""; // Re-enable scroll
    };

    foodItems.forEach(item => {
        item.addEventListener("click", () => {
            const foodKey = item.getAttribute("data-food");
            openModal(foodKey);
        });
    });

    if (modalClose) modalClose.addEventListener("click", closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);
    
    // Close modal on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && foodModal.classList.contains("show")) {
            closeModal();
        }
    });

    // 5. Scroll Reveal Effect for sections and elements
    const revealElements = document.querySelectorAll(".scroll-reveal");
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100; // Trigger when element is 100px visible
            
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger once on load to reveal elements already in viewport

    // 6. Sound Control Widget (Playful feedback)
    const soundControl = document.getElementById("soundControl");
    let clickCount = 0;
    
    if (soundControl) {
        soundControl.addEventListener("click", () => {
            clickCount++;
            
            // Pop up a short text hint near the button representing grill crackling
            const popup = document.createElement("div");
            popup.style.position = "fixed";
            popup.style.bottom = "75px";
            popup.style.right = "20px";
            popup.style.backgroundColor = "var(--color-amber-dark)";
            popup.style.color = "var(--color-ink-black)";
            popup.style.padding = "6px 12px";
            popup.style.borderRadius = "4px";
            popup.style.fontSize = "0.75rem";
            popup.style.fontWeight = "700";
            popup.style.boxShadow = "var(--shadow-wood)";
            popup.style.zIndex = "1000";
            popup.style.pointerEvents = "none";
            popup.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            
            const soundSounds = [
                "* Psssssss... maso na grilu syčí! * 🔥",
                "* Prsk! * 🥓",
                "* Uhlíky jemně praskají... * 🪵",
                "Už se to nese! 🍔"
            ];
            
            popup.textContent = soundSounds[clickCount % soundSounds.length];
            document.body.appendChild(popup);

            // Trigger tiny button shake animation
            soundControl.style.transform = "scale(1.2) rotate(10deg)";
            setTimeout(() => {
                soundControl.style.transform = "";
            }, 200);

            // Animate and remove popup
            setTimeout(() => {
                popup.style.opacity = "0";
                popup.style.transform = "translateY(-10px)";
                setTimeout(() => {
                    popup.remove();
                }, 800);
            }, 1200);
        });
    }
});
