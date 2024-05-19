const works = [
  {
    company: "Codèdex | On Platform Community",
    desc: "UI/UX Designer",
    url: "https://www.figma.com/design/xWOuE8jfkwAfz0vyqUCMX1/Beingsie-%7C-Work?node-id=0%3A1&t=OsA55QSqTTeAo7Lj-1"
  },
  {
    company: "Codèdex | About Landing Page",
    desc: "UI/UX Designer",
    url: "https://www.figma.com/design/xWOuE8jfkwAfz0vyqUCMX1/Beingsie-%7C-Work?node-id=1%3A1010&t=OsA55QSqTTeAo7Lj-1"
  },
  {
    company: "Codèdex | User Profile",
    desc: "UI/UX Designer",
    url: "https://www.figma.com/design/xWOuE8jfkwAfz0vyqUCMX1/Beingsie-%7C-Work?node-id=1%3A1513&t=OsA55QSqTTeAo7Lj-1"
  },
  {
    company: "Dianaves | Landing Page",
    desc: "UI/UX Designer",
    url: "https://www.figma.com/design/xWOuE8jfkwAfz0vyqUCMX1/Beingsie-%7C-Work?node-id=25%3A1498&t=ACVjkrIRtYEzo88x-1"
  },
  {
    company: "My Web Shortcuts | User Interface",
    desc: "UI/UX Designer",
    url: "https://www.figma.com/design/xWOuE8jfkwAfz0vyqUCMX1/Beingsie-%7C-Work?node-id=1%3A2593&t=OsA55QSqTTeAo7Lj-1 "
  },
  {
    company: "Kaas Photos | Web Design",
    desc: "UI/UX Designer",
    url: "https://www.figma.com/design/xWOuE8jfkwAfz0vyqUCMX1/Beingsie-%7C-Work?node-id=15%3A3041&t=ACVjkrIRtYEzo88x-1"
  },
  {
    company: "MBGM | Landing Page",
    desc: "UI/UX Designer",
    url: "https://www.figma.com/design/xWOuE8jfkwAfz0vyqUCMX1/Beingsie-%7C-Work?node-id=18%3A798&t=ACVjkrIRtYEzo88x-1"
  }
];

const personal = [
  {
    title: "Habit Tracker",
    role: "Web Design",
    desc: "UI/UX & Frontend",
    url: "https://habits-tracker-v1.vercel.app/"
  },
  {
    title: "Quizssesment",
    role: "Extension",
    desc: "UI/UX",
    url: "https://www.figma.com/design/xWOuE8jfkwAfz0vyqUCMX1/Beingsie-%7C-Work?node-id=9%3A2732&t=OsA55QSqTTeAo7Lj-1"
  },
  {
    title: "Good Vibes Only",
    role: "Web Design",
    desc: "UI/UX",
    url: "https://www.figma.com/design/xWOuE8jfkwAfz0vyqUCMX1/Beingsie-%7C-Work?node-id=15%3A3732&t=OsA55QSqTTeAo7Lj-1"
  },
  {
    title: "Peek & Seek",
    role: "Web Design",
    desc: "UI/UX",
    url: "https://www.figma.com/design/xWOuE8jfkwAfz0vyqUCMX1/Beingsie-%7C-Work?node-id=18%3A510&t=ACVjkrIRtYEzo88x-1"
  },
  {
    title: "Beingsie 3D",
    role: "Web Design",
    desc: "UI/UX",
    url: "https://www.figma.com/design/xWOuE8jfkwAfz0vyqUCMX1/Beingsie-%7C-Work?node-id=18%3A654&t=ACVjkrIRtYEzo88x-1"
  },
  {
    title: "Scare Dare",
    role: "Web Design",
    desc: "UI/UX",
    url: "https://www.figma.com/design/xWOuE8jfkwAfz0vyqUCMX1/Beingsie-%7C-Work?node-id=25%3A1349&t=ACVjkrIRtYEzo88x-1"
  }
];

const projectsWork = document.getElementById("projectsWork");

for (let i = 0; i < works.length; i++) {
  projectsWork.innerHTML += `
    <div class="flex flex-row justify-center sm:justify-between sm:pl-8 gap-1 text-sm">
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <a
          class="hover:underline flex flex-row items-center gap-1 text-blue-700 font-bold"
          href="${works[i].url}"
          target="_blank"
        >
          ${works[i].company}
          <i
            class="fa-solid fa-arrow-up-right-from-square ml-1 text-sm"
          ></i>
        </a>
        <p class="mx-auto sm:mx-0">${works[i].desc}</p>
      </div>
    </div>
  `;
}

const projectsPersonal = document.getElementById("projectsPersonal");

for (let x = 0; x < personal.length; x++) {
  projectsPersonal.innerHTML += `
    <div class="flex flex-row justify-between pl-8 gap-1 text-sm">
      <div class="flex flex-row items-center gap-4">
        <a
          class="hover:underline flex flex-row items-center gap-1 text-blue-700 font-bold"
          href="${personal[x].url}"
          target="_blank"
        >
          ${personal[x].title}
          <i
            class="fa-solid fa-arrow-up-right-from-square ml-1 text-sm"
          ></i>
        </a>
        <p class="hidden sm:block">${personal[x].desc}</p>
      </div>
    </div>
  `;
}

const blockMessages = [
  "Friendship not found, error 404. 🥺",
  "I thought we were coding pals! 😢",
  "My circuits are fried now... 💔",
  "System crash, disappointment found. 😞",
  "This hurts more than broken code. 😢",
  "Heartbroken, rebooting required. 💔",
  "You crashed my emotional server... 💭💔",
  "Debugging my feelings right now. 😭",
  "Why you do this to my CPU? 🥺",
  "You flipped my logic gate again. 🌍🔄",
  "I can't even process this... 😔",
  "This is fine, firewall active... 🔥🐶",
  "Kernel panic, emotional overload. 😭"
];

const randomBlockedMessage = () => {
  return blockMessages[Math.floor(Math.random() * blockMessages.length)];
};

const notification = document.getElementById("notification");
const notificationClose = document.getElementById("notificationClose");
const notificationContainer = document.getElementById("notificationContainer");

const blockUserBtn = document.getElementById("blockUserBtn");
const emailBtn = document.getElementById("emailBtn");
let notificationActive = false;
let timeoutId;

const showNotification = (message) => {
  if (notificationActive) return;

  notificationActive = true;
  notificationContainer.classList.remove("-bottom-40");
  notificationContainer.classList.add("bottom-1");

  notification.innerHTML = `
    <p class="text-white font-bold">${message}</p>
  `;

  const hideNotification = () => {
    notificationContainer.classList.remove("bottom-1");
    notificationContainer.classList.add("-bottom-40");
  };

  timeoutId = setTimeout(hideNotification, 5000);

  const resetNotification = () => {
    if (!notificationContainer.classList.contains("bottom-1")) {
      notification.innerHTML = "";  // Clear the content after the animation
      notificationActive = false;
      notificationContainer.removeEventListener("transitionend", resetNotification);
    }
  };

  notificationContainer.addEventListener("transitionend", resetNotification);

  const notificationCloseButton = document.getElementById("notificationClose");
  notificationCloseButton.addEventListener("click", () => {
    clearTimeout(timeoutId);  // Clear the existing timeout
    hideNotification();
    notificationContainer.removeEventListener("transitionend", resetNotification);
    notificationContainer.addEventListener("transitionend", resetNotification);
  }, { once: true });
};

blockUserBtn.addEventListener("click", () => {
  showNotification(randomBlockedMessage());
});

emailBtn.addEventListener("click", () => {
  navigator.clipboard.writeText("hello@beingsie.com").then(() => {
    showNotification("Email address copied to clipboard!");
  }).catch(err => {
    showNotification("Failed to copy email address. Please try again.");
  });
});
