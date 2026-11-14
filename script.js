function orderWhatsApp(productName, buttonElement) {
    // Seçilmiş kartın içindən ölçünü oxuyuruq
    const card = buttonElement.closest('.product-card');
    const size = card.querySelector('.size-select').value;
    
    // Öz WhatsApp nömrəni bura yaz (məsələn: 994501234567 formatında, + işarəsi olmadan)
    const phoneNumber = "994504075700"; 
    
    const message = `Salam, mən "${productName}" modelindən (${size} ölçü) sifariş etmək istəyirəm.`;
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp-a yönləndiririk
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}