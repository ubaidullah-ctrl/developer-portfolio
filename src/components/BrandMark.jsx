export default function BrandMark({ className = '' }) {
	return (
		<svg className={className} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
			<rect x="1" y="1" width="46" height="46" rx="8" fill="currentColor" />
			<path d="M13 13v13c0 6.1 3.7 9 9.3 9 5.8 0 9.7-3 9.7-9V13" fill="none" stroke="#F4F0E8" strokeWidth="4.2" strokeLinecap="square" />
			<path d="M34 10 18 38" fill="none" stroke="#FF4F1F" strokeWidth="4.2" strokeLinecap="square" />
		</svg>
	);
}
