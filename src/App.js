import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ContactCard from './ContactCard'

const cc = [
  {
    name: "Mr. Wiskerson",
    imgUrl:
      "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__480.jpg",
    phone: "09009090",
    email: "mrwiskerson@g.com",
  },
  {
    name: "Mr. Fluffykins",
    imgUrl:
      "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__480.jpg",
    phone: "080800",
    email: "mrfluffykinsn@g.com",
  },
];

const AllContacts = () => {
  return cc.map(contact => <ContactCard contact={{ name: contact.name, imgUrl: contact.imgUrl, phone: contact.phone, email: contact.email }} />);
}


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AllContacts />
        <Footer />
      </div>
    )
  }
}
