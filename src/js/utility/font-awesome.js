// How to use FA with React:
// https://github.com/FortAwesome/react-fontawesome

// Library
import { library } from '@fortawesome/fontawesome-svg-core';

// Solid
import { faTimes as fasTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faTimesCircle as fasTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle';
import { faChevronLeft as fasChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons/faStar';

// Regular
import { faQuestionCircle as farQuestionCircle } from '@fortawesome/free-regular-svg-icons/faQuestionCircle';

// Export library add function to App.jsx
export default () => (
	library.add(
		// Solid
		fasTimes,
		fasTimesCircle,
		fasChevronLeft,
		fasStar,

		// Regular
		farQuestionCircle
	)
);
