import carmaintenance from '../assets/car-maintenance.jpg';

export default function Hero () {
  return (
    <div className="px-4 pt-5 mt-5 text-center border-bottom"> <h1 className="display-4 px-5 fw-bold text-body-emphasis">Car Maintenance Tracker</h1> <div className="col-lg-6 mx-auto py-5  "> <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
     {/* <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"> <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Primary button</button> <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button> </div>  */}
     </div> <div className="overflow-hidden" style={{height: '50vh'}}> <div className="container px-5 vh-50"> <img src={carmaintenance} className="image-fluid rounded-circle w-50 shadow-lg mt-5" alt="Example image" width="70%" loading="lazy" /> </div> </div> </div>
     
  )
}