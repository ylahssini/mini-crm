import { TbAt, TbUserCircle, TbLock } from 'react-icons/tb';

export default [
    {
        key: 'email',
        icon: <TbAt />,
        type: 'email',
        placeholder: 'Email Address',
        validation: {
            required: 'Please provide your email address',
            pattern: { value: /^\S+@\S+$/i, message: 'Please provide a valid email address' },
        },
    },
    {
        key: 'first_name',
        icon: <TbUserCircle />,
        type: 'text',
        placeholder: 'First Name',
        validation: { required: 'Please provide your first name' },
    },
    {
        key: 'last_name',
        icon: <TbUserCircle />,
        type: 'text',
        placeholder: 'Last Name',
        required: true,
        validation: { required: 'Please provide your last name' },
    },
    {
        key: 'password',
        icon: <TbLock />,
        type: 'password',
        placeholder: 'Password',
        validation: {
            required: 'Please provide your password',
            pattern: { value: /(?=(?:.*\d){1,})/g, message: 'Please add at least one number in your password' }
        },
    },
    {
        key: 'confirm_password',
        icon: <TbLock />,
        type: 'password',
        placeholder: 'Confirm password',
        validation: { required: 'Please confirm your password' },
    },
];
