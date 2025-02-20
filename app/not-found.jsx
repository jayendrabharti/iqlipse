import Link from "next/link";

const PageNotFound = () => {

  return (
    <div className="flex flex-col items-center justify-center m-20">
      <h1 className="text-6xl font-bold text-textColor2">404</h1>
      <h2 className="text-2xl font-semibold text-textColor1 mt-4">Page Not Found</h2>
      <p className="text-textColor3 mt-2">Sorry, the page you are looking for does not exist.</p>
      <Link
          href="/home"
          scroll={true}
          className='text-buttonColor border-2 border-buttonColor p-2 rounded-lg mt-4 hover:text-[#fff] hover:bg-buttonColor hover:border-borderColor3'
          >Go to Homepage</Link>
    </div>
  )
}

export default PageNotFound