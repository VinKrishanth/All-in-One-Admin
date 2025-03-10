import { MailSearch, PhoneForwarded, MapPinCheck } from "lucide-react";

const contactDetails = [
  {
    icon: <MailSearch className="text-indigo-600 text-2xl" />,
    label: "Email",
    value: "hr.ksoftinnovation@gmail.com",
  },
  {
    icon: <PhoneForwarded className="text-indigo-600 text-2xl" />,
    label: "Phone",
    value: "+94 77-323-5540",
  },
  {
    icon: <MapPinCheck className="text-indigo-600 text-2xl" />,
    label: "Location",
    value: "Yatiyantota, Sri Lanka.",
  },
];

const ContactInfo = () => {
  return (
    <div className="bg-white p-6 mt-6 rounded-lg shadow-lg w-full cursor-pointer">
      {contactDetails.map((item, index) => (
        <div key={index} className="flex items-center space-x-4 mt-6 first:mt-0">
          {item.icon}
          <div>
            <p className="text-gray-700 font-medium">{item.label}</p>
            <p className="text-gray-500">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
