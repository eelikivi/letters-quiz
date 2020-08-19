// How to use FA with React:
// https://github.com/FortAwesome/react-fontawesome

// Library
import { library } from '@fortawesome/fontawesome-svg-core';

// Import icons
import { faTimes as fasTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

// Export library add function to App.jsx
export default () => (
	library.add(
		fasTimes
	)
);
