import { ChangeEvent, useState } from "react";
import Radio from "./components/radio"
import Button from "./components/button";
import Card from "./components/card";
import Typography from "./components/typography";

function App() {
  const sizeList = [
    'XS', 'S', 'M', 'L', 'XL'
  ];
  const onSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentSize(event.target.value);
  }
  const [currentSize, setCurrentSize] = useState(sizeList[0])
  return (
    <div className="flex items-center justify-center h-screen">
      <Card>
        <div className="flex-none w-48 relative">
          <img
            src="https://www.tailwindcss.cn/_next/static/media/classic-utility-jacket.82031370.jpg"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <Typography variant="h6" className="flex-auto text-slate-900" >Utility Jacket</Typography>
            <Typography variant="h6" className="text-slate-500" >$110.00</Typography>
            <Typography variant="lead" className="text-slate-700 mt-2 w-full" >In stock</Typography>
          </div>
          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div className="space-x-2 flex text-sm">
              {
                sizeList.map(size => <Radio
                  key={size}
                  name="size"
                  value={size}
                  label={size}
                  checked={currentSize === size}
                  onChange={onSizeChange}
                />)
              }
            </div>
          </div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <Button variant="filled">Buy now</Button>
              <Button variant="outlined"> Add to bag</Button>
            </div>
            <Button variant="outlined" className="px-2.5">
              <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </Button>
          </div>

          <Typography variant="paragraph" className="text-slate-700" >
            Free shipping on all continental US orders.
          </Typography>
        </form>
      </Card>
    </div>

  )
}

export default App
