import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import {
  ACCOUNT_ROUTES,
  AdminLayout,
  DashboardPage,
  DASHBOARD_ROUTES,
  LoginPage,
} from '@jarvis/core'
import { clearAccessToken, getAccessToken, isAuthenticated, setAccessToken } from './auth'
import { login } from './api'

function GuestLoginPage() {
  if (isAuthenticated()) {
    return <Navigate to={DASHBOARD_ROUTES.home} replace />
  }

  return (
    <div id="login-view">
      <LoginPage
        title="Đăng nhập HRM"
        description="Nhập email và mật khẩu để tiếp tục vào hệ thống."
        showForgotLink={false}
        showRegisterLink={false}
        callback={{
          onSubmit: async (credentials) => {
            const result = await login(credentials)
            if (!result?.token) {
              throw new Error('Server không trả token đăng nhập.')
            }
            setAccessToken(result.token)
            return result
          },
        }}
      />
    </div>
  )
}

function RequireAuth({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to={ACCOUNT_ROUTES.login} replace />
  }

  return children
}

function PlaceholderPage({ title }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="m-0 text-lg font-semibold text-slate-900">{title}</h2>
      <p className="mt-2 m-0 text-sm text-slate-500">Trang module HRM đang được phát triển.</p>
    </div>
  )
}

function HrmAdminLayout() {
  const navigate = useNavigate()

  return (
    <AdminLayout
      logoTitle="FE Admin"
      logoSubtitle="Console"
      user={{ fullName: 'Quản trị viên', email: 'Admin' }}
      onLogout={() => {
        clearAccessToken()
        navigate(ACCOUNT_ROUTES.login, { replace: true })
        return false
      }}
    >
      <Routes>
        <Route
          path={DASHBOARD_ROUTES.home}
          element={
            <div id="dashboard-view" className="h-full min-h-0">
              <DashboardPage
                locale="vi"
                title="HRM"
                description="Thêm biểu đồ từ catalog, kéo thả và chỉnh setting"
              />
            </div>
          }
        />
        <Route path="/users" element={<PlaceholderPage title="Người dùng" />} />
        <Route path="/templates" element={<PlaceholderPage title="Biểu mẫu" />} />
        <Route path="/tenants" element={<PlaceholderPage title="Tenant" />} />
        <Route path="/documents" element={<PlaceholderPage title="Tài liệu" />} />
        <Route path="/roles" element={<PlaceholderPage title="Vai trò" />} />
        <Route path="/files" element={<PlaceholderPage title="Files" />} />
        <Route path="/import" element={<PlaceholderPage title="Import" />} />
        <Route path="/settings" element={<PlaceholderPage title="Cài đặt" />} />
        <Route path="/help" element={<PlaceholderPage title="Trợ giúp" />} />
        <Route path="*" element={<Navigate to={DASHBOARD_ROUTES.home} replace />} />
      </Routes>
    </AdminLayout>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path={ACCOUNT_ROUTES.login} element={<GuestLoginPage />} />
      <Route
        path="/*"
        element={
          <RequireAuth>
            <HrmAdminLayout />
          </RequireAuth>
        }
      />
    </Routes>
  )
}

export { getAccessToken }
