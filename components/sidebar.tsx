"use client"

import { Home, ShoppingCart, FileText, BarChart2, Tag, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { name: 'Inicio', href: '/', icon: Home },
    { name: 'Ventas', href: '/ventas', icon: ShoppingCart },
    { name: 'Factura', href: '/factura', icon: FileText },
    { name: 'Reportes', href: '/reportes', icon: BarChart2 },
    { name: 'Productos', href: '/productos', icon: Tag },
    { name: 'Configuración', href: '/settings', icon: Settings },
  ];

  return (
    <div className="flex flex-col h-full w-20 bg-card text-card-foreground">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-3xl font-semibold text-primary">Logo</h1>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-4 py-4">
          {links.map((link) => (
            <li key={link.name} className="flex justify-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={link.href}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={cn(
                          "rounded-full",
                          pathname === link.href && "bg-accent text-accent-foreground"
                        )}
                      >
                        <link.icon className="h-5 w-5" />
                        <span className="sr-only">{link.name}</span>
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>{link.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;