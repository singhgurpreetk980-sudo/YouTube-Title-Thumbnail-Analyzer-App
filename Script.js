// ================================
// YouTube Analyzer App
// script.js
// ================================

// Elements
const analyzeBtn = document.getElementById("analyzeBtn");
const buyBtn = document.getElementById("buyBtn");
const themeBtn = document.getElementById("themeBtn");

const usesLeft = document.getElementById("usesLeft");

const ctr = document.getElementById("ctr");
const seo = document.getElementById("seo");
const viral = document.getElementById("viral");

const tips = document.getElementById("tips");

const titleInput = document.getElementById("title");
const thumbInput = document.getElementById("thumbnail");

// ================================
// Free Uses
// ================================

let remaining = localStorage.getItem("freeUses");

if (remaining === null) {
    remaining = 5;
    localStorage.setItem("freeUses", remaining);
}

updateCounter();

function updateCounter() {
    usesLeft.innerHTML = remaining + " / 5";
}

// ================================
// Premium Check
// ================================

function isPremium() {
    return localStorage.getItem("premium") === "true";
}

// ================================
// Analyze Button
// ================================

analyzeBtn.addEventListener("click", () => {

    if (titleInput.value.trim() === "") {
        alert("Enter a YouTube Title");
        return;
    }

    if (!isPremium()) {

        if (remaining <= 0) {

            alert("Free limit finished.\nUpgrade for ₹99/month.");

            return;
        }

        remaining--;

        localStorage.setItem("freeUses", remaining);

        updateCounter();

    }

    analyze();

});

// ================================
// Fake AI Analyzer
// ================================

function random(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function analyze() {

    analyzeBtn.disabled = true;

    analyzeBtn.innerHTML = "Analyzing...";

    ctr.innerHTML = "...";
    seo.innerHTML = "...";
    viral.innerHTML = "...";

    tips.innerHTML = "AI is analyzing your content...";

    setTimeout(() => {

        const ctrScore = random(70,99);

        const seoScore = random(65,100);

        const viralScore = random(60,98);

        ctr.innerHTML = ctrScore + "%";

        seo.innerHTML = seoScore + "%";

        viral.innerHTML = viralScore + "%";

        let message="";

        if(ctrScore<80){

            message+="✅ Add numbers in title.<br>";

            message+="✅ Use curiosity words.<br><br>";

        }

        if(seoScore<80){

            message+="✅ Add primary keyword.<br>";

            message+="✅ Keep title under 60 characters.<br><br>";

        }

        if(viralScore<80){

            message+="✅ Thumbnail needs stronger emotion.<br>";

            message+="✅ Increase contrast and brightness.<br><br>";

        }

        if(message===""){

            message="🔥 Excellent! This title has strong viral potential.<br><br>";

            message+="CTR looks great.<br>";

            message+="SEO is optimized.<br>";

            message+="Thumbnail idea is attractive.";

        }

        tips.innerHTML=message;

        analyzeBtn.disabled=false;

        analyzeBtn.innerHTML="Analyze Again";

    },2000);

}

// ================================
// Dark Mode
// ================================

let dark=true;

themeBtn.addEventListener("click",()=>{

if(dark){

document.body.style.background="#ffffff";

document.body.style.color="#111";

dark=false;

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

document.body.style.background="#070b16";

document.body.style.color="#fff";

dark=true;

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

});

// ================================
// Premium Button (Temporary Demo)
// ================================

buyBtn.addEventListener("click",()=>{

const ok=confirm("Demo Version\n\nActivate Premium?");

if(ok){

localStorage.setItem("premium","true");

alert("Premium Activated ✅");

usesLeft.innerHTML="Unlimited";

}

});

// ================================
// Premium Load
// ================================

if(isPremium()){

usesLeft.innerHTML="Unlimited";

}
