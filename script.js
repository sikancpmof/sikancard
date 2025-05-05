document.addEventListener('DOMContentLoaded', function() {
    // Discord button click event
    const discordButton = document.getElementById('discord-button');
    if (discordButton) {
        discordButton.addEventListener('click', function() {
            // Reemplaza esta URL con tu enlace de invitación a Discord
            window.open('https://discord.gg/6FjHWc6H', '_blank');
        });
    }
    
    // WhatsApp button click event
    const whatsappButton = document.getElementById('whatsapp-button');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function() {
            // Reemplaza esta URL con tu enlace de grupo de WhatsApp
            window.open('https://chat.whatsapp.com/ejemplo', '_blank');
        });
    }
});