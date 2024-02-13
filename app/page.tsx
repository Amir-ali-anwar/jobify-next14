import { Camera } from 'lucide-react'
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className='h-screen flex items-center justify-center'>

      <Button>Default Button</Button>
      <Button variant="outline" size="icon">
        <Camera />
      </Button>
    </div>
  );
}
