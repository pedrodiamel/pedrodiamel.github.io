// Abstract / BibTeX toggles: each button shows the block named in its aria-controls.
document.querySelectorAll('.link-btn[aria-controls]').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var block = document.getElementById(btn.getAttribute('aria-controls'));
        var open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!open));
        block.hidden = open;
    });
});

// Light/dark toggle; the choice is remembered (the <head> script re-applies it on load).
(function () {
    var root = document.documentElement;
    var btn = document.querySelector('.theme-toggle');
    btn.setAttribute('aria-pressed', String(root.dataset.theme === 'dark'));
    btn.addEventListener('click', function () {
        var dark = root.dataset.theme !== 'dark';
        if (dark) {
            root.dataset.theme = 'dark';
        } else {
            delete root.dataset.theme;
        }
        btn.setAttribute('aria-pressed', String(dark));
        try {
            localStorage.setItem('theme', dark ? 'dark' : 'light');
        } catch (e) { }
    });
})();

document.getElementById('year').textContent = new Date().getFullYear();

// Copy the BibTeX entry next to the button.
document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var text = btn.parentElement.querySelector('pre').textContent;
        navigator.clipboard.writeText(text).then(function () {
            btn.textContent = 'copied';
            setTimeout(function () { btn.textContent = 'copy'; }, 1500);
        });
    });
});
