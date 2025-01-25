// Админ панелін көрсететін функция
function showAdminPanel() {
    const adminPanel = document.getElementById('admin-panel');
    adminPanel.style.display = 'block';
}

// Посттарды сақтау
let posts = [];

// Пост қосу функциясы
function addPost(title, content) {
    const post = {
        title: title,
        content: content
    };
    posts.push(post);
    displayPosts();
}

// Посттарды көрсету функциясы
function displayPosts() {
    const postList = document.getElementById('post-list');
    postList.innerHTML = ''; // Посттарды тазалау

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        postList.appendChild(postDiv);
    });
}

// Постты жіберу
document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    addPost(title, content);

    // Форманы тазалау
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
});

// Админ ретінде кіргенде, админ панелін көрсету
window.onload = function() {
    // Админ ретінде кіргенді тексеру
    const isAdmin = prompt("Админ болу үшін құпиясөзді енгізіңіз:");
    if (isAdmin === "adminpassword") {
        showAdminPanel();
    }

    // Посттарды көрсету
    displayPosts();
}
