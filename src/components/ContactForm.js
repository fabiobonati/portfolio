import { useState } from 'react';
import { useForm } from 'react-hook-form';
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const webhookurl =
    'https://discord.com/api/webhooks/1115022060121489408/YTU3AC2FoXC_mJfQt-2Qg0WDGHc6D5KZHhSOYbwFLr7ag18bBKbrQklBQqv05yk76RWe';
  async function onSubmit(values) {
    setLoading(true);
    const webhookBody = {
      embeds: [
        {
          title: 'Contact Form Submitted',
          fields: [
            { name: 'Sender', value: values.email },
            { name: 'Message', value: values.message },
          ],
        },
      ],
    };
    const response = await fetch(webhookurl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookBody),
    });
    console.log(response);
    if (response.status === 204) {
      setLoading(false);
      setSubmitted(true);
      reset();
    }
  }

  if (submitted) {
    return (
      <div className='text-center p-8'>
        <h2 className='text-2xl font-bold'>Thanks! ✅</h2>
        <p className='text-black'>
          I&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }
  return (
    <div className='flex flex-col h-full p-6 group'>
      <h1 className='text-xl font-semibold'>Contact me! 📬</h1>
      <p>
        Drop here a message and I&apos;ll get back to you as soon as possible!
      </p>
      <form
        className='mt-3 space-y-2 w-full overflow-hidden [&>label]:block [&_input]:rounded-md [&_textarea]:rounded-md'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type='email'
          placeholder='your@email.com'
          className='w-full p-2 border-2 border-yellow-400 focus:outline-none focus:border-yellow-600'
          {...register('email', {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        <textarea
          type='textarea'
          placeholder='Your message'
          className='w-full resize-none p-2 border-2 border-yellow-400 focus:outline-none focus:border-yellow-600'
          rows={5}
          {...register('message', { required: true })}
        />
        <button
          type='submit'
          className='relative float-right p-2 bg-black rounded-md text-white overflow-hidden w-1/3'
        >
          Send
          {loading && (
            <span className='absolute inset-0 flex items-center justify-center bg-black'>
              <span className='h-4 w-4 animate-spin rounded-[50%] border-2 border-white/0 border-l-white border-t-white' />
            </span>
          )}
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
