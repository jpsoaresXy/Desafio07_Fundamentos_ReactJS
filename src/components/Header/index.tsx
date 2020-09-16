import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';

  toggleTheme(): void;
}

// eslint-disable-next-line
const Header: React.FC<HeaderProps> = ({ size = 'large', toggleTheme }: HeaderProps) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/">Listagem</Link>
          <Link to="/import">Importar</Link>
        </nav>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.2, colors.primary)}
          onColor={colors.secundary}
        />
      </header>
    </Container>
  );
};

export default Header;
