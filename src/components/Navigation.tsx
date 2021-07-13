import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

interface arrayLink {
  to: string;
  title: string;
}

interface Props {
  linkListData ?: arrayLink[];
}

const defaultLink: arrayLink[] = [
  { to: '/', title: 'Home' },
  { to: '/news', title: 'News' },
  { to: '/product', title: 'Product' }
];
const Navigation: React.FunctionComponent<Props> = (props:Props):React.ReactElement => {
  const { linkListData = [] } = props;
  const [linklist, setLink] = useState<arrayLink[]>(linkListData);
  useEffect(() => {
    const linkData = props.linkListData || [];
    setLink(linkData);
  }, [linkListData]);
  // console.log(linklist);
  return (
    <ul>
      {linklist.map((item: arrayLink) => (
        <li key={item.title}>
          <Link to={item.to}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};
Navigation.propTypes = {
  linkListData: PropTypes.array
};

Navigation.defaultProps = {
  linkListData: defaultLink
};

export default Navigation;