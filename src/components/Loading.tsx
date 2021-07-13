import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

interface PropsInterface {
  title?: string;
}

function Loading(props: PropsInterface): React.ReactElement {
  const { title = '' } = props;
  return (
    <Fragment>
      <h3>{title}</h3>
      <div>加载</div>
    </Fragment>
  );
}

Loading.propTypes = {
  title: PropTypes.string
};

Loading.defaultProps = {
  title: '正在加载...'
};

export default Loading;