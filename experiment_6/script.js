const videos = {
/*
    tamil: [
        { title: "Mahaan", image: "https://www.koimoi.com/wp-content/new-galleries/2022/02/mahaan-movie-review-1.jpg" },
        { title: "Mahaan", image: "https://www.koimoi.com/wp-content/new-galleries/2022/02/mahaan-movie-review-1.jpg" },
        { title: "Mahaan", image: "https://www.koimoi.com/wp-content/new-galleries/2022/02/mahaan-movie-review-1.jpg" },
        { title: "Mahaan", image: "https://www.koimoi.com/wp-content/new-galleries/2022/02/mahaan-movie-review-1.jpg" },
        { title: "Mahaan", image: "https://www.koimoi.com/wp-content/new-galleries/2022/02/mahaan-movie-review-1.jpg" }
    ],
      
    hindi: [
        { title: "Padmaavat", image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Padmaavat_poster.jpg/220px-Padmaavat_poster.jpg" },
        { title: "Padmaavat", image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Padmaavat_poster.jpg/220px-Padmaavat_poster.jpg" },
        { title: "Padmaavat", image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Padmaavat_poster.jpg/220px-Padmaavat_poster.jpg" },
        { title: "Padmaavat", image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Padmaavat_poster.jpg/220px-Padmaavat_poster.jpg" },
        { title: "Padmaavat", image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Padmaavat_poster.jpg/220px-Padmaavat_poster.jpg" }
    ],
*/

    tamil: Array(5).fill({ title: "Mahaan", image: "https://www.koimoi.com/wp-content/new-galleries/2022/02/mahaan-movie-review-1.jpg" }),
    hindi: Array(5).fill({ title: "Padmaavat", image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Padmaavat_poster.jpg/220px-Padmaavat_poster.jpg" }),
    malayalam: Array(5).fill({ title: "Bramayugam", image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Bramayugam_poster.jpg/220px-Bramayugam_poster.jpg" }),
    english: Array(5).fill({ title: "The Irishman", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYL67RNuK-HMGByYsIW7b3FjViOLJPw9RT2w&s" }),
    kannada: Array(5).fill({ title: "KGF", image: "https://m.media-amazon.com/images/S/pv-target-images/dbe30e1e25813a698e0da679a5968c380bd2d1b4e6966394d4c964c6b3301896.jpg" }),
    telugu: Array(5).fill({ title: "Kalki 2898 AD", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kalki_2898_AD.jpg/220px-Kalki_2898_AD.jpg" }),
  };
  
  function createThumbnail(video) {
    const thumbnail = document.createElement("div");
    thumbnail.className = "video-thumbnail";

    const img = document.createElement("img");
    img.src = video.image;
    img.alt = video.title;

    const title = document.createElement("h3");
    title.textContent = video.title;

    // Dropdown menu for options
    const dropdown = document.createElement("div");
    dropdown.className = "dropdown";

    const dropdownBtn = document.createElement("button");
    dropdownBtn.textContent = "Options";

    const dropdownContent = document.createElement("div");
    dropdownContent.className = "dropdown-content";

    const shortlistBtn = document.createElement("button");
    shortlistBtn.textContent = "Shortlist";
    shortlistBtn.addEventListener("click", () => {
        alert(`Added ${video.title} to Shortlist`);
    });

    const watchLaterBtn = document.createElement("button");
    watchLaterBtn.textContent = "Watch Later";
    watchLaterBtn.addEventListener("click", () => {
        alert(`Added ${video.title} to Watch Later`);
    });

    const playNowBtn = document.createElement("button");
    playNowBtn.textContent = "Play Now";
    playNowBtn.addEventListener("click", () => {
        alert(`Playing ${video.title}`);
    });

    dropdownContent.append(shortlistBtn, watchLaterBtn, playNowBtn);
    dropdown.append(dropdownBtn, dropdownContent);
    
    thumbnail.append(img, title, dropdown);
    return thumbnail;
}

  
  // Function to populate videos in each category
  function populateVideos() {
    for (const language in videos) {
      const grid = document.getElementById(language);
      if (!grid) {
        console.error(`Element with ID ${language} not found`);
        continue;
      }
      videos[language].forEach((video) => {
        grid.appendChild(createThumbnail(video));
      });
    }
  }
  
  // Initialize the dashboard
  populateVideos();
