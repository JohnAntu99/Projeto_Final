    const popup = document.getElementById('popup-exit');
    const closePopupButton = document.getElementById('close-popup');
    let hasShownPopup = false; 
  

    document.addEventListener('mouseout', function(event) {
        if (!hasShownPopup && event.clientY < 0) {
            popup.style.display = 'flex';
            hasShownPopup = true;
        }
    });


    closePopupButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });



