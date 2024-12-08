'use client';

import Input from '@/src/components/fields/Input';
import Loading from '@/src/components/ui/loading';
import { useState } from 'react';

interface Setting {
	slug: string;
	type: string;
	title: string | null | undefined;
	value: string | number | undefined;
}

interface SettingsProps {
	initialSettings: Setting[];
}

export default ({ initialSettings }: SettingsProps) => {
	const [settings, setSettings] = useState(initialSettings);
	const [loading, setLoading] = useState(false);

	const handleSave = async () => {
		setLoading(true);
		try {
			const response = await fetch('/api/settings', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ settings }),
			});

			// if (response.ok) {
			// 	alert('Settings saved successfully');
			// } else {
			// 	console.error('Failed to save settings');
			// }
			setLoading(false);
		} catch (error) {
			console.error('Error saving settings:', error);
			setLoading(false);
		}
	};

	return (
		<>
			{settings.map((setting: Setting, index: number) => (
				<div key={index}>
					<label>
						{setting.title}:
						<input
							type="text"
							value={setting.value}
							onChange={(e) => {
								const updatedSettings = [...settings];
								updatedSettings[index].value = e.target.value;
								setSettings(updatedSettings);
							}}
						/>
					</label>
				</div>
			))}
			{/* <Input caption="Настройка 1" placeholder="Test" /> */}
			<button onClick={handleSave} className="btn btn--red btn--medium">
				Сохранить
			</button>
			{loading ? <Loading /> : ''}
		</>
	);
};
