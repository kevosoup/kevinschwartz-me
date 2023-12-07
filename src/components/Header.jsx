export default function Header() {
  return (
    <div>
        <div className="headerTitles flex flex-col items-center font-secondary">
            <span className="absolute top-[10%] text-sm tracking-tight">Kevin Schwartz's Blog</span>
            <span className="absolute top-[11.1%] font-primary text-8xl">Portfolio</span>
        </div>
        <img className="headerImg mt-[111px] w-full h-[450px] object-cover" src="https://via.placeholder.com/1500x1500" alt="Header Image"/>
    </div>
  )
}
