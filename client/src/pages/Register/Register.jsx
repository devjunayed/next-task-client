
const Register = () => {
    return (
        <div className="min-h-screen justify-center items-center flex w-full">
            <form className="w-1/2 bg-white shadow-2xl p-10 font-opensans">
            <h1 className="text-center text-5xl mb-10 font-montserrat">Register</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="email" placeholder="name" className="w-full input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="w-full input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm password</span>
                    </label>
                    <input type="password" placeholder="confirm password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn uppercase btn-primary bg-orange-600 border-none text-white">Register</button>
                </div>
            </form>
        </div>

    );
};

export default Register;