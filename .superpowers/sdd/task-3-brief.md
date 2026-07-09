# Task 3: Route + Nav Link

## Files to modify
- `src/App.tsx` — add import and route
- `src/components/shared/layout/NavBar.tsx` — add nav link

## In App.tsx
After line 7 (`import Resources from "./pages/Resources";`), add:
```
import Documentation from "./pages/Documentation";
```

After line 19 (`<Route path="/resources" element={<Resources />} />`), add:
```
          <Route path="/documentation" element={<Documentation />} />
```

## In NavBar.tsx
After `{ to: "/resources", label: "Resources" },` (line 8), add:
```
  { to: "/documentation", label: "Documentation" },
```

## Verify
- Run `npm run build` — must pass
