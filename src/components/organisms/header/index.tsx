import "./style.css";
import { MainHeader } from "./main";
import { DashHeader } from "./dash";
import { SearchHeader } from "./search";
import { LoginHeader } from "./login";
// import { Link } from 'react-router-dom';

const Header = ({
  variant,
  img,
}: {
  variant: "main" | "dash" | "faq" | "search" | "login";
  img?: string;
}) => {
  switch (variant) {
    case "login": {
      return <LoginHeader />;
    }
    case "search": {
      return <SearchHeader />;
    }
    case "dash": {
      return <DashHeader />;
    }
    default: {
      return <MainHeader />;
    }
  }
};

export default Header;
