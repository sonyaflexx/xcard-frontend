import { useState } from 'react';

interface PhoneCode {
    code: string;
    country: string;
}

interface SelectPhoneAreaProps {
    phoneCodes: PhoneCode[];
    onSelectCode: (code: string) => void;
}

const SelectPhoneArea: React.FC<SelectPhoneAreaProps> = ({ phoneCodes, onSelectCode }) => {
    const [selectedCode, setSelectedCode] = useState<string | null>(null);

    const handleCodeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const code = event.target.value;
        setSelectedCode(code);
        onSelectCode(code);
    };

    return (
        <div className="flex flex-col gap-2">
            <span className="text-sm leading-none">Phone area</span>
            <select 
                value={selectedCode || ''} 
                onChange={handleCodeChange} 
                className="w-full rounded-xl p-2 border-2 border-gray-400 outline-none focus:ring focus:ring-green-50 dark:bg-gray-430"
            >
                {phoneCodes.map(({ code, country }, index) => (
                    <option key={index} value={code}>
                        {code} - {country}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectPhoneArea;