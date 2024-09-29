import MaxWidthContainer from "./MaxWidthContainer";

const Footer = () => {
  return (
    <footer className="py-5 text-sm">
      <MaxWidthContainer>
        <div className="relative">
          <div className="absolute right-0 -top-20">
            <p>back to top</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            &copy; 2024 {`|`} {'Arjun Bharti'}
          </div>
        </div>
      </MaxWidthContainer>
    </footer>
  )
}

export default Footer;