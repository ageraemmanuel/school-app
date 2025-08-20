import MessageForm from "@/components/ContactOptions"


const ContactPage = () => {
  return (
    <div className='max-w-screen min-h-screen'>
      <h1 className="text-3xl md:text-5xl text-center py-10 font-extrabold my-6 ">
        <span className="border-b-4 border-b-amber-300 pb-4">Get In Touch</span>
      </h1>

      <MessageForm />

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.076483825242!2d9.63836357234598!3d7.232116992774014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1059858e11213329%3A0x6a4eb1c6eb2a2c9d!2sKatsina%20Ala%20Takum%20Road!5e0!3m2!1sen!2sng!4v1755618876498!5m2!1sen!2sng"
        width="100%"
        height="450"
        // style="border:0;" 
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

    </div>
  )
}

export default ContactPage