import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthPrvider";
import Swal from "sweetalert2";
import { CircleUserRound } from "lucide-react";
import { BsCart4 } from "react-icons/bs";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log Out success",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Opps..${error.message}`,
          showConfirmButton: true,
        });
      });
  };
  const link = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/menu"}>Our Menu</Link>
      </li>
      <li>
        <Link to={"/secret"}>Secret</Link>
      </li>

      <li>
        <Link to={"/order/salad"}>Order Food</Link>
      </li>
      <li>
        <Link to={"/"}>
          <button className="btn-ghost flex">
            <BsCart4 className="text-xl" />
            <div className="badge badge-info">+0</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          {" "}
          <li>
            <div>
              <button className=" btn-ghost " onClick={handleLogOut}>
                log Out
              </button>
            </div>
          </li>
        </>
      ) : (
        <>
          {" "}
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar fixed top-0 z-10 text-yellow-500 max-w-screen-xl mx-auto font-semibold">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            Bistro Boss
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end mr-4">
          <div
            className=" tooltip  tooltip-bottom"
            data-tip={`${user?.displayName}`}
          >
            {user ? (
              <img
                src={`${user?.photoURL}`}
                alt="User Icon"
                className="w-5 sm:w-10 rounded-full"
              />
            ) : (
              <CircleUserRound />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
