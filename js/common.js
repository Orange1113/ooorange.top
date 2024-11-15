document.addEventListener('DOMContentLoaded', function() {
    // 加载导航栏
    const header = document.createElement('header');
    header.innerHTML = `
        <div class="hamburger">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="logo">
            <a href="/">有想法的橙子</a>
        </div>
        <nav>
            <ul>
                <li><a href="/">首页</a></li>
                <li><a href="/social">社交</a></li>
                <li><a href="/mc.html">安慕希</a></li>
                <li><a href="/scratch">Scratch</a></li>
            </ul>
        </nav>
        <div class="auth">
            <a href="#login">登录</a>
            <a href="#register">注册</a>
        </div>
    `;
    document.body.insertBefore(header, document.body.firstChild);

    // 添加汉堡菜单点击事件
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // 加载页脚
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-left">
                <p>有想法的橙子</p>
                <p style="font-weight: normal;">感谢您的访问和支持，如有任何问题，请随时与我联系。</p>
            </div>
            <div class="footer-right">
                <div class="quick-links">
                    <p>快速链接</p>
                    <ul>
                        <li><a href="/">首页</a></li>
                        <li><a href="#about">关于</a></li>
                        <li><a href="#portfolio">作品集</a></li>
                        <li><a href="#contact">联系</a></li>
                    </ul>
                </div>
                <div class="follow-me">
                    <p>关注我</p>
                    <div class="social-icons">
                        <a href="https://space.bilibili.com/426361621" target="_blank" title="Bilibili"><i class="fab fa-bilibili"></i></a>
                        <a href="https://github.com/orange1113" target="_blank" title="Github"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 有想法的橙子. 保留所有权利。</p>
        </div>
    `;
    document.body.appendChild(footer);

    // 添加平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - header.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});