"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Bu fonksiyon normalde gerçek bir analitik servisi çağırırdı
    // Örnek olarak sadece konsola yazdırıyoruz
    console.log(`Sayfa görüntülendi: ${pathname}`)
  }, [pathname])

  return null
}
