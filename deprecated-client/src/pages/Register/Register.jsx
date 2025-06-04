import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from 'react-hook-form';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Register = () => {
    const {googleSignIn,  createUser, updateUserProfile} = useContext(AuthContext);
    const from = "/";
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
      } = useForm();


      const onSubmit = data => {
        if(data.password === data.confirmPassword){
            createUser(data.email, data.password)
            .then(res => {
                if(res.user){
                    updateUserProfile(data.name, data.photoUrl)
                    .then(()=>{
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Registered Successfully!",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          navigate(from, {replace: true});
                    })
                }
            })
            .catch(err => {
                if(err.code === "auth/email-already-in-use"){
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Email already in use!",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            });
        }else{
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Password do not matched!",
                showConfirmButton: false,
                timer: 1500
              });
        }
      };

      const handleGoogleSignIn = () => {
        googleSignIn()
        .then((res) => {
            console.log(res.user)
            if(res.user){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logged in Successfully!",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate(from, {replace: true});
            }
        })
        .catch(err => console.log(err));
      }

    return (
        <div className="min-h-screen justify-center items-center flex w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="w-11/12 md:w-1/2 bg-white shadow-2xl p-4 md:p-10 font-opensans">
            <h1 className="text-center text-3xl md:text-5xl md:mb-10 font-montserrat">Register</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name")} type="text" placeholder="name" className="w-full input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input {...register("photoUrl")} type="text" placeholder="photo url" className="w-full input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email")} type="email" placeholder="email" className="w-full input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password")} type="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm password</span>
                    </label>
                    <input {...register("confirmPassword")} type="password" placeholder="confirm password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn uppercase btn-primary hover:bg-orange-500 bg-orange-600 border-none text-white">Register</button>
                    <p className="text-center md:text-right mt-1">Already have an account? <Link to="/login" className="text-blue-600">login now</Link></p>
                </div>
                <p className="text-center">OR</p>
                <button type="button" onClick={handleGoogleSignIn} className="btn hover:bg-orange-600 hover:border-none text-center btn-outline w-full mt-2 md:mt-6 border-orange-600">
                    <p className="text-3xl"><FcGoogle /></p>
                    <p>Google Signin</p>
                </button>
            </form>
        </div>

    );
};

export default Register;