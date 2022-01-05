import React from 'react'
import Footer from './Footer';
import Header from './Header';

 function Contact() {
    return (
        <>
            <Header/>
           

           <main> 
            <div className='Container'>

           <form className='w-50 offset-3'>
           <h1 className='text-center'>Conatct page</h1>
                    <div class="mb-3">
                        <label for="fname" className="form-label">First Name</label>
                        <input type="fname" className="form-control" id="fname" aria-describedby="emailHelp"/>
                       
                    </div>
                    <div class="mb-3">
                        <label for="lname" className="form-label">Last Name</label>
                        <input type="lname" className="form-control" id="lname" aria-describedby="emailHelp"/>
                       
                    </div>
                    <div class="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                       
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
           </main>
        <Footer/>
        </>
    )
}
export default Contact;
