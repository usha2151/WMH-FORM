import React from 'react';
import Navbar from '../Navbar/Navbar';

function Dashboard() {
  return (
    <>
      <Navbar/>
      <div className='container bg-dark w-75 main-contianer'>
        <div className='row Pre p-5'>
          <div className='col-10 mx-auto'>
            <div className='row text-center'>
              <h1 className='text-danger'>Dashboard</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='container bg-light w-75 main-contianer'>
          <div className='row p-5'>
            <div className='col-10 mx-auto'>
              <div className='row w-50 mx-auto'>
                <div className='col-md-12'>
                  {/* Add a form with a select dropdown for filter options */}
                  <form>
                    <div className='form-group'>
                      <label htmlFor='filter'>Select filter:</label>
                      <select className='form-control' id='filter'>
                        <option value='today'>Today</option>
                        <option value='yesterday'>Yesterday</option>
                        <option value='last week'>Lastweek</option>
                        <option value='All'>All</option>

                      </select>
                    </div>
                    {/* Add button to trigger download */}
                    <button className='btn btn-danger m-2' type='submit'>
                      Download
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;