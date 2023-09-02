let icons = document.querySelectorAll('ion-icon[name="bookmark-outline"]');
icons.forEach(icon => {
    icon.addEventListener('mouseover', function() {
        this.setAttribute('name', 'bookmark');
    });
    icon.addEventListener('mouseout', function() {
        this.setAttribute('name', 'bookmark-outline');
    });
});