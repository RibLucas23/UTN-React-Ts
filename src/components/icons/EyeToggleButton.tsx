import { Eye, EyeOff } from 'lucide-react';

interface EyeToggleButtonProps {
	hide?: boolean;
	onClick?: () => void;
	className?: string;
}

export default function EyeToggleButton({
	className = 'h-4 w-4',
	hide = false,
	onClick = () => {},
}: EyeToggleButtonProps) {
	return (
		<button
			type='button'
			onClick={onClick}
			className='btn btn-ghost p-2 min-h-0 h-auto'
		>
			{hide ? (
				<Eye className={className} />
			) : (
				<EyeOff className={className} />
			)}
		</button>
	);
}
