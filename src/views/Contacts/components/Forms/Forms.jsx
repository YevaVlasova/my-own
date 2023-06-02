import './Forms.scss';

const Forms = () => {
    return (
        <div className="container forms">
            <div className="forms__screen">
                <div className="forms__title">
                    <h2>Stay connected with me</h2>
                    <span>Fill out the form below with your contact details, and I'll be sure to reach out to you promptly.</span>
                </div>
                <div className="row100">
                    <div className="col">
                        <div className="input-box">
                            <input type="text" name='' required='required' />
                            <span className='text'>First Name</span>
                            <span className='line'></span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-box">
                            <input type="text" name='' required='required' />
                            <span className='text'>Last Name</span>
                            <span className='line'></span>
                        </div>
                    </div>
                </div>
                <div className="row100">
                    <div className="col">
                        <div className="input-box">
                            <input type="text" name='' required='required' />
                            <span className='text'>Email</span>
                            <span className='line'></span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-box">
                            <input type="text" name='' required='required' />
                            <span className='text'>Mobile</span>
                            <span className='line'></span>
                        </div>
                    </div>
                </div>
                <div className="row100">
                    <div className="col">
                        <div className="input-box textarea">
                            <textarea required='required' name="" id="" cols="30" rows="10"></textarea>
                            <span className='text'>Type your message here...</span>
                            <span className='line'></span>
                        </div>
                    </div>
                </div>
                <div className="row100">
                    <div className="col">
                        <input type="submit" value='send' />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Forms;