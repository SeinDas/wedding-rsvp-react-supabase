import { Routes, Route, Navigate } from "react-router-dom"
import Login from "@/pages/auth/Login"
import Register from "@/pages/auth/Register"
import Projects from "@/pages/Projects"
import Welcome from "@/pages/welcome"
import { useAuth } from "@/hooks/useAuth"
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout"

export default function AppRoutes() {
  const { user, loading } = useAuth()

  if (loading) return null

  return (
    <Routes>
      {/* 2. Public Route: Main page at the root URL */}
      <Route path="/" element={<Welcome />} />

      {!user ? (
        <>
          {/* 3. Unauthenticated Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Redirect unknown routes to login (or /) if not logged in */}
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          {/* 4. Authenticated Routes */}
          <Route
            path="/projects" // <-- Moved Projects to a separate route URL
            element={
              <AuthenticatedLayout>
                <Projects />
              </AuthenticatedLayout>
            }
          />
          
          {/* Redirect unknown routes to projects (or /) if logged in */}
          {/* Prevents logged-in users from seeing /login */}
          <Route path="/login" element={<Navigate to="/projects" />} />
          <Route path="/register" element={<Navigate to="/projects" />} />
          <Route path="*" element={<Navigate to="/projects" />} />
        </>
      )}
    </Routes>
  )
}
