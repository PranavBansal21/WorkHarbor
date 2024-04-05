"use client"
import React, { useState } from 'react'
import Step1 from '../components/Register/step1'
import Step2 from '../components/Register/step2'
import Step3 from '../components/Register/step3'

export default function Register() {
    const [formData, setFormData] = useState({
        // Initialize form data for all steps here
        step1: { businessName: '', pincode: null, buildingName: '', streetName: '', area: '', landMark: '', city: '', state: ''},
        step2: { name: '', phone: null, optionalPhone: null, email: '' },
        step3: []
    });

    const [step, setStep] = useState(1);

    function updateFormData (step, newData) {
        setFormData(prevFormData => ({
            ...prevFormData,
            [step]: newData
        }));
    };

    const handleStepSubmit = () => {
        setStep(step + 1);
    };

    const handleSubmit = () => {
        console.log(formData);
    };

    return (
        <>
            {step === 1 &&
                <Step1 formData={formData.step1} updateFormData={data => updateFormData('step1', data)} onSubmit={handleStepSubmit} />
            }
            {step === 2 &&
                <Step2 formData={formData.step2} updateFormData={data => updateFormData('step2', data)} onSubmit={handleStepSubmit}/>
            }
            {step === 3 &&
                <Step3 formData={formData.step3} updateFormData={data => updateFormData('step3', data)} onSubmit={handleSubmit} />
            }
        </>
    );
};