import { ContactDetails, SVG_ICONS } from './constants/constants'
import Heading_Center from './Heading_Center'

const Contact = () => {
  return (
    <div className='mt-12 padding-x padding-y max-width' id="contact">
      {/* Header Section */}
      {/* <div className="bg-gradient-to-r from-green-500 to-teal-600 p-8 rounded-2xl shadow-lg text-center text-white"> */}
        <Heading_Center
          title="CONTACT ME"
          subTitle="Feel free to reach out anytime! 👇"
          description="Whether you have a project in mind, a question to ask, or just want to say hello, my inbox is always open. Let's connect and make something amazing together."
        />
      {/* </div> */}

      {/* Contact Cards */}
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10'>
        {ContactDetails.map((item) => (
          <div
            key={item.key}
            className='bg-white dark:bg-white rounded-xl shadow-lg p-6 flex items-center hover:shadow-xl hover:scale-105 transition-all duration-300'
          >
            {/* Colored Icon Background */}
            <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-teal-500 shadow-md">
              <div
                className="w-8 h-8 text-white"
                dangerouslySetInnerHTML={{ __html: SVG_ICONS[item.key] }}
              />
            </div>

            {/* Text Content */}
            <div className="ml-4">
              <p className='font-bold text-lg text-black dark:text-black'>
                {item.type}
              </p>
              <p className='text-sm text-gray-600 dark:text-black'>
                {item.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact
