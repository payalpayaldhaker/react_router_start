import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Home() {
    return (
        <React.Fragment>
             <Header/> 

              

            <main>
            <h1 className='text-center'>Home Page</h1>
                <table class="table table-dark w-75 offset-1 mt-5">
         <thead>
                    <tr>
                            <th scope="col">#</th>
                            <th scope="col">first</th>
                            <th scope="col">last</th>
                            <th scope="col">end</th>
                    </tr>
          </thead>
         <tbody>
                    <tr>
                            <td scope="row">1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                    </tr>
                    <tr>
                            <td scope="row">2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                    </tr>
                    <tr>
                            <td scope="row">3</td>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            
                    </tr>
      </tbody>
</table>
  </main> 
                <Footer/>
        </React.Fragment>
    )
}
