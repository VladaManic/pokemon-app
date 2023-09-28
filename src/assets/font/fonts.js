import { createGlobalStyle } from 'styled-components';

import RobotoRegularTtf from './Roboto-Regular.ttf';
import RobotoMediumTtf from './Roboto-Medium.ttf';
import RobotoBoldTtf from './Roboto-Bold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), url(${RobotoRegularTtf}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), url(${RobotoMediumTtf}) format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), url(${RobotoBoldTtf}) format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }
`;
