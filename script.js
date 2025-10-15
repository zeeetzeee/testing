<script>
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('section nav ul');

    menuToggle.onclick = function() {
        navLinks.classList.toggle('active');
    };
</script>
