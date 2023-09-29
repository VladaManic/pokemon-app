import { createGlobalStyle } from 'styled-components';

import Roboto from './Roboto-Regular.ttf';
import Roboto2 from './Roboto-Medium.ttf';
import Roboto3 from './Roboto-Bold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto'),
        url(${Roboto}) format('ttf'),
        url(${Roboto2}) format('ttf');
				url(${Roboto3}) format('ttf');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
`;