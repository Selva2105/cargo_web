import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import FormHeader from './FormsHeader/FormHeader';
import ToggleButton from '../shared/Inputs/Toggle';
import Typography from '../shared/Typography/Typography';
import Buttons from '../shared/Buttons/Buttons';
import CustomInput from '../shared/Inputs/Input'; // Update the path accordingly

const ContactForm = () => {
    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormHeader heading="Contact support" subHeading="contact support team by filling the form" />

            <div id="formInputs" className="container px-4 md:px-20 lg:px-40 xl:px-96 2xl:px-[30rem] mt-5 md:mt-8">
                <div className="flex flex-col md:flex-row gap-3">

                    <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'First name is required' }}
                        render={({ field }) => (
                            <CustomInput
                                isRequired={true}
                                placeholder="Enter your first name"
                                type="text"
                                value={field.value}
                                setValue={field.onChange}
                                labelText="First name"
                                error={errors.firstName?.message}
                            />
                        )}
                    />

                    <Controller
                        name="lastName"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'last name is required' }}
                        render={({ field }) => (
                            <CustomInput
                                isRequired={true}
                                placeholder="Enter your last name"
                                type="text"
                                value={field.value}
                                setValue={field.onChange}
                                labelText="Last name"
                                error={errors.lastName?.message}
                            />
                        )}
                    />

                </div>

                <div className="">

                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'email is required' }}
                        render={({ field }) => (
                            <CustomInput
                                isRequired={true}
                                placeholder="Enter your email"
                                type="email"
                                value={field.value}
                                setValue={field.onChange}
                                labelText="E-mail"
                                error={errors.email?.message}
                            />
                        )}
                    />

                    <Controller
                        name="phoneNumber"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Phone Number is required' }}
                        render={({ field }) => (
                            <CustomInput
                                isRequired={true}
                                placeholder="Enter your phone number"
                                type="number"
                                value={field.value}
                                setValue={field.onChange}
                                labelText="Phone number"
                                error={errors.phoneNumber?.message}
                            />
                        )}
                    />

                    <Controller
                        name="message"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Message is required' }}
                        render={({ field }) => (
                            <CustomInput
                                isRequired={true}
                                placeholder="Enter your message"
                                type="textarea"
                                value={field.value}
                                setValue={field.onChange}
                                labelText="Message"
                                error={errors.message?.message}
                            />
                        )}
                    />

                </div>

                <div className=" px-1 mt-4 md:mt-2">
                    <Controller
                        name='checked'
                        control={control}
                        defaultValue={false}
                        rules={{ required: 'Accept our policy to continue' }}
                        render={({ field }) => (
                            <ToggleButton
                                isChecked={field.value}
                                setIsChecked={(value) => field.onChange(value)}
                                error={errors.checked?.message}
                                placeholder={(
                                    <Typography variant="p" className="text-sm">
                                        By selecting this, you agree to our{' '}
                                        <Typography variant="p" as="span" className="text-indigo-600 text-sm">
                                            privacy policy.
                                        </Typography>
                                    </Typography>
                                )}
                            />
                        )}
                    />

                </div>


                <div className="mt-6">
                    <Buttons
                        type="submit"
                        placeholder="Let's talk"
                        className="bg-indigo-600 text-white shadow-sm hover:text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        disabled={false}
                    />
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
