function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', () => {
	const bentoItems = document.querySelectorAll('.bento-item');

	bentoItems.forEach(item => {
		item.addEventListener('click', (event) => {
			event.preventDefault(); // Prevent default action
			const img = item.querySelector('img');
			const textOverlay = item.querySelector('.text-overlay');
			const isActive = img.classList.toggle('active');

			if (isActive) {
				img.style.filter = 'blur(5px)';
				textOverlay.style.transform = 'translateY(0)';
			} else {
				img.style.filter = 'none';
				textOverlay.style.transform = 'translateY(100%)';
			}
		});
	});
});
