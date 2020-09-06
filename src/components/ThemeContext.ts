import { createContext } from 'react';
import { Theme } from 'zenme-xie/types/Context';

const ThemeContext = createContext(Theme.Light);

export default ThemeContext;
