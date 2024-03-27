import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';

export default function App() {
  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-sm-12 col-md-10 col-lg-10 pt-5 pb-5">
                <MDBTabs className='mb-5'>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                            Academic Calender
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                            B.H.U.S Calender
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                            College Calender
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>
                    <MDBTabsPane open={basicActive === 'tab1'}>
                        <h1 className='text-center'>Academic Calender</h1>
                    </MDBTabsPane>
                    <MDBTabsPane open={basicActive === 'tab2'}>
                        <h1 className='text-center'>B.H.U.S Calender</h1>
                    </MDBTabsPane>
                    <MDBTabsPane open={basicActive === 'tab3'}>
                        <h1 className='text-center'>College Calender</h1>
                    </MDBTabsPane>
                </MDBTabsContent>
            </div>
        </div>
      </div>
    </>
  );
}
