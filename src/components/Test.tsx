import React, { Fragment, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

interface PropsInterface {
  title?: string;
}

function Test(props: PropsInterface): React.ReactElement {
  const { title = '' } = props;
  const [statetitle] = useState(title);
  const appcontext = useContext(AppContext);
  return (
    <>
      <h3>{statetitle}</h3>
      <div>
        Test
        {JSON.stringify(appcontext)}
      </div>
    </>
  );
  // return (
  //   <Fragment>
  //     <h3>{statetitle}</h3>
  //     <div>Test</div>
  //   </Fragment>
  // );
}

Test.propTypes = {
  title: PropTypes.string
};

Test.defaultProps = {
  title: '嗨！，您好！'
};

export default Test;