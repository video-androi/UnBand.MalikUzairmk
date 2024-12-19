// Function to send the appeal via Gmail
function sendAppeal() {
    var phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber) {
        var message = 'Dear WhatsApp Support,\n\nI am writing to respectfully request the unbanning of my account linked to the \nMy account was mistakenly flagged, and I believe there has been an error in the ban decision.\nI assure you that I have adhered to all WhatsApp community guidelines.\nKindly review my account and lift the ban as soon as possible.\nMy Number is ' + phoneNumber + '\n\nThank you for your attention to this matter.\nBest regards,';
        var subject = 'Request to Unban My WhatsApp Number';
        var recipient = 'smb@support.whatsapp.com'; // The recipient email address
        var mailtoLink = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(message);
        window.location.href = mailtoLink;
    } else {
        alert('Please enter a valid number.');
    }
}
