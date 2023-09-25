import { useEffect, useState } from 'react';
//import WorkIcon from '@mui/icons-material/Work';
//import StarsIcon from '@mui/icons-material/Stars';
//import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
//import HelpIcon from '@mui/icons-material/Help';
import paymentMethods from '../../../assets/images/payment-methods.svg';
import { useLocation } from 'react-router-dom';
import { politicasPrivacidade } from './Politica';

const footerLinks = [
  {
    title: "Ajuda",
    links: [
      {
        name: "Pagamentos",
        redirect: "https://www.flipkart.com/pages/payments",
      },
      {
        name: "Envio",
        redirect: "",
      },
      {
        name: "Cancelamento e devolução",
        redirect: "",
      },
    ]
  },
  {
    title: "Politica de privacidade",
    links: [
      {
        name:"Politica de privacidade",
        redirect: "'./Politica'",
        
      }
    ]
  },
  {
    title: "Redes sociais",
    links: [
      {
        name: "Instagram",
        redirect: "https://instagram.com/belgashookah__?igshid=MzRlODBiNWFlZA==",
      },
      {
        name: "TikTok",
        redirect: "https://www.tiktok.com/@belgashookah__",
      }
    ]
  }
]

const Footer = () => {

  const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);

  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"))
  }, [location]);

  return (
    <>
      {!adminRoute && (
        <>
          <footer className="mt-20 w-full py-1 sm:py-4 px-4 sm:px-12 bg-primary-darkBlue text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden">
            <div className="w-full sm:w-7/12 flex flex-col sm:flex-row">

              {footerLinks.map((el, i) => (
                <div className="w-full sm:w-1/5 flex flex-col gap-2 my-3 sm:my-6 ml-5" key={i}>
                  <h2 className="text-primary-grey mb-2 uppercase">{el.title}</h2>
                  {el.links.map((item, i) => (
                    <a href={item.redirect} target="_blank" rel="noreferrer" className="hover:underline" key={i}>{item.name}</a>
                  ))}

                </div>
              ))}

            </div>

            <div className="border-gray-600 h-36 w-1 border-l mr-5 mt-6 hidden sm:block"></div>
            <div className="w-full sm:w-5/12 my-6 mx-5 sm:mx-0 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Envie-nos um e-mail:</h2>
                <p className="mt-2 leading-5">BelgasHooka<br />
                belgashookah1@gmail.com<br />
                  
                </p>
              </div>

              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Endereço:</h2>
                <p className="mt-2 leading-5">BelgasHooka,<br />
                  Avenida Sylvio Torres,295<br />
                  São Paulo - SP, 03589-010<br />
                  Telefone: <a className="text-primary-blue" href="tel:11917676389">11 91767-6389</a>
                </p>
              </div>
            </div>

          </footer>
          {/* <!-- footer ends --> */}

         
             <img draggable="false" src={paymentMethods} alt="Card Payment" />
         
        
        </>       
      )}
    </>
  )
};

export default Footer;
