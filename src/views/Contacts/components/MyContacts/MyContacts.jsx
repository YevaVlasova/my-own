import './MyContacts.scss';
import photo from '../../../../assets/me.webp';

const MyContacts = () => {
    return (
        <div className="container contacts">
            <div className="contacts__screen">
                <div className="contacts-info">
                    <div className="contacts-info__title">
                        <h2>Get in Touch</h2>
                        <span>Here you'll find all the necessary contact details to get in touch with me. Feel free to reach out via phone or email. Whether you have inquiries, collaboration opportunities, or simply want to say hello, I'm eager to hear from you.</span>
                    </div>
                    <div className="contacts__a">
                        <a className='btn _mail' href="mailto:eva.krechetova@gmail.com">Mail me</a>
                        <a className='btn _call' href="tel:+380950523899">Call me</a>
                    </div>
                </div>
                <div className="hero__photo">
                    <img className='hero__img' src={photo} alt="Yeva Vlasova" />
                </div>
            </div>
        </div>
    );
}
export default MyContacts;