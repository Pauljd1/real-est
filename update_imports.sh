#!/bin/bash

# Fix imports in components
find src/components -name "*.tsx" -exec sed -i 's|import { \(.*\) } from "@/constants"|import { \1 } from "../constants"|g' {} \;

# Fix imports in components/ui
find src/components/ui -name "*.tsx" -exec sed -i 's|import { \(.*\) } from "@/constants"|import { \1 } from "../../constants"|g' {} \;

# Fix lib utils imports in components
find src/components -name "*.tsx" -not -path "*/ui/*" -exec sed -i 's|import { cn } from "@/lib/utils"|import { cn } from "../lib/utils"|g' {} \;

# Fix lib utils imports in ui components
find src/components/ui -name "*.tsx" -exec sed -i 's|import { cn } from "@/lib/utils"|import { cn } from "../../lib/utils"|g' {} \;
