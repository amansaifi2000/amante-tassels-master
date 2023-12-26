import React, { useState } from 'react';
import SignUp from './sign'; // Adjust the path based on your project structure
import Login from './page'; // Adjust the path based on your project structure

const Auth = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleLoginClick = () => {
    setShowSignUp(false);
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {showSignUp ? 'Create an account' : 'Sign in to your account'}
              </h1>
              {showSignUp ? <SignUp /> : <Login />}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {showSignUp ? (
                  <>
                    Already have an account?{' '}
                    <button onClick={handleLoginClick} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Login here
                    </button>
                  </>
                ) : (
                  <>
                    Don’t have an account yet?{' '}
                    <button onClick={handleSignUpClick} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Sign up
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Auth;
