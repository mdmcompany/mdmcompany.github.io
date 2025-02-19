
document.addEventListener("DOMContentLoaded", function() {
    const user = "daniel.daniel128";
    const domain = "dontsp.am";
    const email = user + "@" + domain;
    const mailto = `mailto:${email}?subject=Domain%20Inquiry&body=I%20am%20interested%20in%20purchasing%20the%20domain.`;
    document.getElementById("contact").setAttribute("href", mailto);
});
