import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ydmb3mi', 'template_t5k606b', form.current, 'wnyUBrP5Khi5dOz95')
        .then((result) => {
            console.log(result.text);
            alert("Message sent successfully!");
        }, (error) => {
            console.log(error.text);
            alert("Failed to send message. Please try again.");
        });
    };

  return (
    <section>
    <div className=' w-[500px] h-[500px] bg-blue-200 border-1 border-slate-200 m-auto mt-14 shadow-md'>
       
    <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-center items-center mt-[100px]'>
      
      <input type="text" name="user_name" placeholder='enter your name' required 
      className='w-[200px] h-[50px] border-1 border-gray-300 rounded-md px-4 bg-white mt-4'
      />
      
      
      <input type="email" name="user_email" placeholder='email' required 
      className='w-[200px] h-[50px] border-1 border-gray-300 rounded-md px-4 bg-white mt-4'
      />
      
     
      <textarea name="message" placeholder='message' required
      className='w-[200px] h-[50px] border-1 border-gray-300 rounded-md px-4 bg-white mt-4'
      />
      
      <input type="submit" value="Send"
      className='w-[100px] h-[30px] border-1 border-gray-300 rounded-md px-4 mt-2 text-white bg-blue-950 hover:bg-blue-700'
      />
    </form>
    </div>
    </section>
  )
}

export default ContactUs