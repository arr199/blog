import clsx from "clsx";

export default function Wrapper ({ children , className } : 
    {children : React.ReactNode , className? : string}): JSX.Element {
  return (
    
   <div className={clsx("px-6 md:px-20 max-w-7xl w-full  mx-auto", className )}>
        {children}
   </div>
  )
}
