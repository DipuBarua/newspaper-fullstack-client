import useAuth from "../../hooks/useAuth";

const UserProfile = () => {
    const { user } = useAuth();

    return (
        <div className=" min-h-screen flex justify-center bg-base-100 pt-16 items-center gap-10">

            <div className="avatar">
                <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user.photoURL} alt="user.img" />
                </div>
            </div>

            <div className=" text-center">
                <h1 className=" text-2xl font-bold py-3 text-left text-blue-800">PROFILE</h1>
                <h2 className="card-title">User Id<span className=" ml-3">:</span>{user.uid}</h2>
                <h2 className="card-title">Name<span className=" ml-3">:</span>{user.displayName}</h2>
                <h2 className="card-title">Email<span className=" ml-3">:</span>{user.email}</h2>
                <h2 className="card-title">Phone<span className=" ml-3">:</span>{user.phoneNumber}</h2>
                <h2 className="card-title">Account Created<span className=" ml-3">:</span>{user.metadata?.creationTime}</h2>
            </div>
        </div>
    );
};

export default UserProfile;