'use client'

import React, { useCallback, useState } from 'react';
import { Progress } from "@nextui-org/react";
import GreenButton from "@/components/ui/inputs/buttons/GreenButton";
import Input from "@/components/ui/inputs/Input";
import { UserForm, IndividualForm, DocumentForm, AddressForm } from './components/forms';
import { phoneCodes } from './components/phoneCodes';
import { AddressFormData, DocumentFormData, IndividualFormData, UserFormData } from '@/types';

export default function EmptyCardsNotification() {
    const [selectedCode, setSelectedCode] = useState<string | null>(null);
    const [userData, setUserData] = useState<UserFormData>({
        username: "",
        email: "",
        phoneAreaCode: "",
        phoneNumber: ""
    });
    const [individualData, setIndividualData] = useState<IndividualFormData>({
        firstName: "",
        lastName: "",
        birthDate: "",
        profession: ""
    });
    const [documentData, setDocumentData] = useState<DocumentFormData>({
        type: "",
        front: "",
        number: "",
        country: "",
        expiryDate: ""
    });
    const [addressData, setAddressData] = useState<AddressFormData>({
        country: "",
        city: "",
        postCode: "",
        details: ""
    });
    
    const [currentStep, setCurrentStep] = useState(1);

    const handleSelectCode = useCallback((code: string) => {
        setSelectedCode(code);
    }, []);

    const renderCurrentStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <UserForm 
                        setUserData={setUserData}
                        setCurrentStep={setCurrentStep}
                        handleSelectCode={handleSelectCode} 
                        filteredCodes={filteredCodes} 
                    />
                );
            case 2:
                return (
                    <IndividualForm 
                        setIndividualData={setIndividualData}
                        setCurrentStep={setCurrentStep}
                    />
                );
            case 3:
                return (
                    <DocumentForm 
                        setDocumentData={setDocumentData}
                        setCurrentStep={setCurrentStep}
                    />
                );
            case 4:
                return (
                    <AddressForm 
                        setAddressData={setAddressData}
                        setCurrentStep={setCurrentStep}
                        finishSubmit={handleSubmit}
                    />
                );
            default:
                return null;
        }
    };

    const handleSubmit = () => {
        const data = {
            user: userData,
            individual: individualData,
            document: documentData,
            address: addressData
        }
        console.log(data) // TODO ТУТ ПОСТ ЗАПРОС
    };

    const filteredCodes = phoneCodes.filter(({ code, country }) => {
        const searchTerm = (userData.phoneAreaCode || "").toLowerCase();
        return code.includes(searchTerm) || country.toLowerCase().includes(searchTerm);
    });

    return (
        <div className="flex flex-col gap-4 w-96">
            <h1 className="text-xl font-medium">Create your first card!</h1>
            <div>
                <Progress size="sm" color="success" aria-label="Loading..." value={currentStep * 20} />
                <span className="text-gray-300 text-sm">{currentStep}/4</span>
            </div>
            {renderCurrentStep()}
        </div>
    );
}