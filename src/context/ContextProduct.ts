"use client"
import type { Product } from "@/interfaces/interfaces";
import { createContext } from "react";



export const ContextProduct = createContext<Product[]>({} as any)

