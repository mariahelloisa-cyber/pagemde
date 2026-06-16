/* ==========================================================================
   FUNCIONALIDADE DAS PERGUNTAS FREQUENTES (FAQ)
   ========================================================================== */
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        
        
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) item.classList.remove('active');
        });
        
       
        faqItem.classList.toggle('active');
    });
});
/* ==========================================================================
   LIMPAR FORMULÁRIO APÓS O ENVIO (SEM ATUALIZAR A PÁGINA)
   ========================================================================== */
const formulario = document.querySelector('.custom-form');

if (formulario) {
    formulario.addEventListener('submit', () => {
        // Aguarda um milissegundo para o formulário disparar os dados e limpa os campos
        setTimeout(() => {
            formulario.reset();
            alert('Sua aplicação foi enviada com sucesso!'); 
        }, 100);
    });
}