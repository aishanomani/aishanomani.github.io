const revealEls = document.querySelectorAll(
    ".project-card, .course-card, .award-card, .term-card, .gpa-card, .bio, .profile-image"
  );
  
  revealEls.forEach(el => el.classList.add("reveal"));
  
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("is-visible");
    });
  }, { threshold: 0.12 });
  
  revealEls.forEach(el => io.observe(el));
  
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(a => {
    const href = a.getAttribute("href") || "";
    if (href.endsWith(path)) a.classList.add("active");
  });
 


  
