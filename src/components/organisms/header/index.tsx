import "./style.css";
import { MainHeader } from "./main";
import { DashHeader } from "./dash";
import { SearchHeader } from "./search";
// import { Link } from 'react-router-dom';

const Header = ({variant, img}:{variant: 'main' | 'dash' | 'faq' | 'search', img?: string}) => {
  if(variant === 'search') {
    return <SearchHeader />
  }
  if(variant === 'dash') {
    return <DashHeader />
  }
  return (
    <MainHeader />
  );
};

export default Header;
