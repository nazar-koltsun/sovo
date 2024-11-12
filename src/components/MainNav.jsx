import NavItem from "./NavItem";
import dashboardIcon from "../assets/images/nav-icons/dashboard.svg";
import investingIcon from "../assets/images/nav-icons/Inwestycje.svg";
import projectManagerIcon from "../assets/images/nav-icons/project-manager.svg";
import customersIcon from "../assets/images/nav-icons/customers.svg";
import paymentsIcon from "../assets/images/nav-icons/payments.svg";
import revolutionIcon from "../assets/images/nav-icons/revolution.svg";

const NAV_ITEMS = [
  {
    title: "Dashboard",
    path: "/",
    icon: dashboardIcon,
  },
  {
    title: "Inwestycje",
    path: "/investments",
    icon: investingIcon,
  },
  {
    title: "Project Manager",
    path: "/project-manager",
    icon: projectManagerIcon,
  },
  {
    title: "Klienci",
    path: "/customers",
    icon: customersIcon,
  },
  {
    title: "Płatności",
    path: "/payments",
    icon: paymentsIcon,
    isNew: true,
  },
  {
    title: "Obrót",
    path: "/revolution",
    icon: revolutionIcon,
  },
];

const MainNav = () => {
  return (
    <nav className="mt-3.5">
      <ul>
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.title} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
