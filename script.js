var openAccordion = null;

function toggleAccordion(clickElement) {
	var accordionItem = clickElement.closest('.accordion-item');
	var iconElement = accordionItem.querySelector('.icon');
	var contentSection = accordionItem.querySelector('.accordion-content');

	if (contentSection.style.display === 'block') {
		contentSection.style.display = 'none';
		iconElement.textContent = '+';
		openAccordion = null;
	} else {
		if (openAccordion) {
			openAccordion.querySelector('.accordion-content').style.display = 'none';
			openAccordion.querySelector('.icon').textContent = '+';
		}
		contentSection.style.display = 'block';
		iconElement.textContent = '-';
		openAccordion = accordionItem;
	}
}
