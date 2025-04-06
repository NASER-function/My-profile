fetch("./src/skills.json")
  .then((response) => response.json())
  .then((data) => {
    const ConSkills = document.getElementById("insideCon");
    data.forEach((skills) => {
      let skillDiv = document.createElement("div");
      skillDiv.id = skills.id;
      skillDiv.className = "Element";
      skillDiv.innerHTML = `
                <div class="icone">
                  <img src="${skills.img}" alt="" />
                </div>
                <hr />
                <div class="text">
                  <p class="name">${skills.name}</p>
                  <p class="p">${skills.p}</p>
                </div>
              `;
      ConSkills.appendChild(skillDiv);
    });
  });

fetch("./src/projects.json")
  .then((response) => response.json())
  .then((data) => {
    const list1 = document.getElementById("list1");
    data.forEach((pro) => {
    
      let projectDiv = document.createElement("div");
      projectDiv.id = pro.id;
      projectDiv.className = "item";
      colorOfDots = projectDiv.innerHTML = `
                  <div class="infoDiv">
                    <div class="ProjectsName">
                      <h1>${pro.title}</h1>
                      <p>${pro.p}</p>
                    </div>
                    <div class="buttonGo">
                      <button><a href="${pro.link}">Go To Website</a></button>
                    </div>
                  </div>
                 
                  <img src="${pro.img}" alt="" />
      `;
      list1.appendChild(projectDiv);
    });

    const NumberOfItems = data.length;
    let list = document.querySelector(".list");
    let items = document.querySelectorAll(".item");
    let dotsContainer = document.getElementById("dots1");
    let next = document.getElementById("next");
    let prev = document.getElementById("prev");
    let active = 0;
    let lengthItem = NumberOfItems - 1;
    let startX = 0;
    let isDragging = false;

   

    function reloadSlider() {
      let checkLeft = items[active].offsetLeft;
      list.style.transition = "left 0.5s ease";
      list.style.left = -checkLeft + "px";

     
    }

    next.onclick = () => {
      active = active + 1 > lengthItem ? 0 : active + 1;
      reloadSlider();
    };

    prev.onclick = () => {
      active = active - 1 < 0 ? lengthItem : active - 1;
      reloadSlider();
    };

    list.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.pageX;
      list.style.transition = "none";
    });

    list.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      let moveX = e.pageX - startX;
      list.style.left = -items[active].offsetLeft + moveX + "px";
    });

    list.addEventListener("mouseup", (e) => {
      if (!isDragging) return;
      isDragging = false;
      let moveX = e.pageX - startX;

      if (moveX > 50) {
        active = active - 1 < 0 ? lengthItem : active - 1;
      } else if (moveX < -50) {
        active = active + 1 > lengthItem ? 0 : active + 1;
      }

      reloadSlider();
    });

    list.addEventListener("touchstart", (e) => {
      isDragging = true;
      startX = e.touches[0].clientX;
      list.style.transition = "none";
    });

    list.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      let moveX = e.touches[0].clientX - startX;
      list.style.left = -items[active].offsetLeft + moveX + "px";
    });

    list.addEventListener("touchend", () => {
      isDragging = false;
      reloadSlider();
    });

    setInterval(() => {
      next.click();
    }, 10000);
  });
