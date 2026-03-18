import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'








export default function Contacts() {


    const form = useRef();
    const name = useRef();
    const email = useRef();
    const texter = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kiurv6x', 'template_47nmwq3', form.current, {
            publicKey: 'RYgFYxc4iPI7DPmmh',
        }
        )
            .then(
                () => {
                    name.current.value = ""
                    email.current.value = ""
                    texter.current.value = ""
                    Toast.fire({
                        icon: "success",
                        title: "Signed in successfully"
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });







    return <>
        <section className=''>
            <div className="container mx-auto mt-32 lg:w-2/4 p-10">
                <h2 className='text-center font-bold text-4xl md:text-5xl text-white'>Contact Me</h2>


                <form ref={form} onSubmit={sendEmail}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <span className='frist-color  font-semibold text-xl' >Name</span>
                            <div className="mb-5 mt-2">
                                <input ref={name} placeholder=' Your kind Name' name="user_name" className=' w-full rounded-xl pq p-2 text-white' type="text" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <span className='frist-color  font-semibold text-xl' >Email</span>
                            <div className="mb-5 mt-2">

                                <input ref={email} placeholder=' Your Work Email' name="user_email" className='pq w-full rounded-xl p-2 text-white' type="email" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <span className='frist-color  font-semibold text-xl' >Message</span>
                            <div className="mb-5 mt-2">

                                <textarea ref={texter} rows={8} name="message" placeholder='Your Message Here' className='pq p-2 w-full rounded-xl text-white' type="text" />
                                <button type='submit' className='btn' >Send Message</button>
                            </div>
                        </div>
                    </div>
                    <button type='submit' className='btn pq p-5 text-white font-semibold text-xl rounded-xl cursor-pointer' >Send Message</button>
                </form>

            </div>
        </section>









    </>
}
