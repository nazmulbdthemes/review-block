import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import metadata from './block.json';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

// import attributes
import attributes from './attributes';

/**
 * Block Registration
 */

registerBlockType(metadata, {
	icon: {
		src: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				width="512"
				height="512"
				x="0"
				y="0"
				viewBox="0 0 512.002 512.002"
			>
				<g>
					<path
						d="M151.57 208.93c-1.86-1.86-4.44-2.93-7.07-2.93s-5.209 1.069-7.07 2.93c-1.86 1.86-2.93 4.44-2.93 7.07s1.07 5.21 2.93 7.069c1.86 1.86 4.44 2.931 7.07 2.931s5.21-1.07 7.07-2.931c1.86-1.859 2.93-4.439 2.93-7.069s-1.07-5.21-2.93-7.07z"
						fill="#000000"
					></path>
					<path
						d="M482 0H84C67.458 0 54 13.458 54 30v166c0 16.542 13.458 30 30 30h18c5.523 0 10-4.478 10-10s-4.477-10-10-10H84c-5.514 0-10-4.486-10-10V30c0-5.514 4.486-10 10-10h398c5.514 0 10 4.486 10 10v166c0 5.514-4.486 10-10 10h-66.887a10.001 10.001 0 0 0-7.071 2.929l-32.929 32.929-32.929-32.929a10.001 10.001 0 0 0-7.071-2.929h-77.985a58.724 58.724 0 0 0-2.507-5.579c-7.16-13.911-19.348-24.078-34.316-28.629l-14.458-4.396c-5.09-1.55-10.502 1.162-12.312 6.165l-22.718 62.789a75.664 75.664 0 0 1-34.993 40.74l-21.326 11.612c-5.241-6.362-13.176-10.425-22.043-10.425h-63.9c-15.744 0-28.552 12.809-28.552 28.553v176.616C.001 499.191 12.81 512 28.554 512h63.9c9.954 0 18.729-5.123 23.841-12.868l10.204 4.002a127.9 127.9 0 0 0 46.898 8.868h134.928c20.245 0 36.715-16.47 36.715-36.715a36.47 36.47 0 0 0-4.962-18.396c14.894-4.681 25.729-18.615 25.729-35.034a36.489 36.489 0 0 0-5.2-18.81c14.26-5.044 24.506-18.655 24.506-34.621 0-16.63-11.118-30.705-26.308-35.203a36.475 36.475 0 0 0 4.865-18.229c0-20.244-16.47-36.715-36.715-36.715h-80.188l11.214-33.294a57.464 57.464 0 0 0 3.02-18.984h69.97l37.071 37.071c1.953 1.952 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929L419.256 226H482c16.542 0 30-13.458 30-30V30c0-16.542-13.458-30-30-30zM101.007 483.447c-.001 4.716-3.837 8.553-8.553 8.553h-63.9c-4.716 0-8.552-3.837-8.552-8.553V306.831c0-4.716 3.836-8.553 8.552-8.553h21.95v123.121c0 5.522 4.477 10 10 10s10-4.478 10-10V298.278h21.95c3.735 0 6.91 2.411 8.073 5.755.083.484.203.964.361 1.439.071.444.119.895.119 1.359v176.616zm225.949-185.17v.001c9.217 0 16.715 7.498 16.715 16.715 0 9.217-7.498 16.716-16.715 16.716h-54.251c-5.523 0-10 4.478-10 10s4.477 10 10 10l75.694.002c9.217 0 16.715 7.498 16.715 16.715 0 9.217-7.498 16.716-16.715 16.716h-75.694c-5.523 0-10 4.478-10 10s4.477 10 10 10h56.388c9.217 0 16.715 7.498 16.715 16.715 0 9.217-7.498 16.715-16.715 16.715h-56.388c-5.523 0-10 4.478-10 10s4.477 10 10 10h35.621c9.217 0 16.715 7.499 16.715 16.716 0 9.217-7.498 16.715-16.715 16.715H173.397c-13.607 0-26.929-2.52-39.596-7.487l-12.795-5.018V307.931l24.381-13.276a95.638 95.638 0 0 0 44.235-51.5l19.489-53.862 5.376 1.634c9.75 2.965 17.688 9.587 22.352 18.647s5.441 19.369 2.188 29.026l-15.657 46.485a10 10 0 0 0 9.477 13.192h94.109z"
						fill="#000000"
					></path>
					<path
						d="M466.201 96.976c-1.894-5.824-6.836-9.989-12.898-10.868l-17.688-2.565-7.915-16.025c-2.712-5.491-8.199-8.901-14.323-8.901h-.004c-6.125.002-11.613 3.415-14.322 8.908l-7.906 16.03-17.688 2.575c-6.061.883-11.001 5.05-12.892 10.876-1.891 5.825-.341 12.1 4.047 16.375l12.802 12.472-3.017 17.617c-1.034 6.038 1.402 12.023 6.359 15.623a15.918 15.918 0 0 0 9.372 3.065c2.54 0 5.094-.613 7.453-1.854l15.819-8.322 15.823 8.313c5.422 2.848 11.868 2.381 16.823-1.221 4.954-3.602 7.387-9.589 6.35-15.626l-3.026-17.615 12.797-12.48c4.381-4.278 5.928-10.553 4.034-16.377zm-32.313 16.017a15.971 15.971 0 0 0-4.59 14.141l2.003 11.662-10.479-5.506a15.977 15.977 0 0 0-14.864.006l-10.473 5.51 1.997-11.663a15.97 15.97 0 0 0-4.598-14.14l-8.477-8.258 11.711-1.705a15.965 15.965 0 0 0 12.025-8.741l5.235-10.613 5.24 10.61a15.973 15.973 0 0 0 12.03 8.735l11.711 1.698-8.471 8.264zM338.988 96.976c-1.895-5.824-6.836-9.988-12.898-10.868l-17.688-2.565-7.915-16.025c-2.712-5.491-8.199-8.901-14.323-8.901h-.004c-6.125.002-11.614 3.415-14.323 8.909l-7.905 16.029-17.688 2.575c-6.061.883-11.001 5.05-12.892 10.876-1.891 5.825-.341 12.1 4.047 16.375l12.802 12.472-3.017 17.617c-1.034 6.038 1.403 12.024 6.359 15.623a15.915 15.915 0 0 0 9.371 3.065c2.54 0 5.093-.613 7.452-1.854l15.819-8.322 15.824 8.313c5.423 2.848 11.867 2.381 16.823-1.221 4.954-3.602 7.387-9.589 6.35-15.626l-3.026-17.615 12.797-12.48c4.383-4.278 5.93-10.552 4.035-16.377zm-32.313 16.017a15.971 15.971 0 0 0-4.59 14.141l2.003 11.662-10.479-5.505a15.974 15.974 0 0 0-14.865.005l-10.473 5.51 1.997-11.663a15.97 15.97 0 0 0-4.598-14.14l-8.477-8.258 11.71-1.705a15.972 15.972 0 0 0 12.027-8.742l5.234-10.613 5.239 10.609a15.971 15.971 0 0 0 12.031 8.737l11.711 1.698-8.47 8.264zM211.776 96.976c-1.895-5.824-6.837-9.989-12.898-10.868l-17.688-2.565-7.915-16.025c-2.712-5.491-8.199-8.901-14.323-8.901h-.004c-6.125.002-11.614 3.415-14.323 8.909l-7.905 16.029-17.688 2.575c-6.062.883-11.001 5.051-12.893 10.877-1.891 5.825-.34 12.1 4.047 16.374l12.802 12.472-3.017 17.617c-1.034 6.038 1.403 12.024 6.359 15.623a15.915 15.915 0 0 0 9.371 3.065c2.54 0 5.093-.613 7.452-1.854l15.819-8.322 15.823 8.313c5.422 2.848 11.868 2.381 16.823-1.221 4.954-3.602 7.387-9.589 6.35-15.626l-3.026-17.615 12.797-12.48c4.385-4.278 5.931-10.552 4.037-16.377zm-32.313 16.017a15.971 15.971 0 0 0-4.59 14.141l2.003 11.662-10.479-5.505a15.974 15.974 0 0 0-14.865.005l-10.473 5.51 1.998-11.666a15.977 15.977 0 0 0-4.599-14.137l-8.477-8.258 11.71-1.705a15.972 15.972 0 0 0 12.027-8.742l5.234-10.613 5.239 10.609a15.971 15.971 0 0 0 12.031 8.737l11.712 1.698-8.471 8.264zM60.504 447.359c-5.523 0-10 4.478-10 10v.156c0 5.522 4.477 10 10 10s10-4.478 10-10v-.156c0-5.522-4.477-10-10-10z"
						fill="#000000"
					></path>
				</g>
			</svg>
		),
	},
	attributes,
	edit: Edit,
	save: Save,
});
