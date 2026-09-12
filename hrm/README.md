# Hrm

Project workspace gồm backend .NET 9 dùng Jarvis, frontend, autotest và unittest.

## Cấu trúc

```text
hrm/
├── Hrm.sln
├── backend/
│   └── src/
│       ├── Hrm.Domain.Shared/
│       ├── Hrm.Domain/
│       ├── Hrm.Application/
│       ├── Hrm.Infrastructure/
│       └── Hrm.Host/
├── frontend/
├── autotest/
└── unittest/
```

## Frontend theo Jarvis

Frontend dùng trực tiếp UI-kit local `@jarvis/core` từ
`/Users/tuanminh/Desktop/hrm_hw_minh/jarvis/frameworks/frontend`, theo consumer
pattern trong `jarvis/Sample/clients/web`:

- `LoginPage`: trang đăng nhập và validation của Jarvis.
- `AdminLayout`: sidebar, header, menu và profile toolbar giống ảnh mẫu.
- `DashboardPage`: GridStack canvas, Chart.js và hai mock chart mặc định.
- `PrimeReactProvider` + theme Aura + Tailwind: cấu hình theo `frameworks/frontend/README.md`.

Vite proxy `/api`, `/health` và `/swagger` về backend `http://127.0.0.1:5167`.

## Lệnh kiểm tra từ workspace root

```bash
cd /Users/tuanminh/Desktop/hrm_hw_minh

# Build backend và chạy unit test .NET
dotnet build hrm/Hrm.sln
dotnet test hrm/Hrm.sln

# Build frontend
cd hrm/frontend
npm install
npm run build

# Build autotest
cd ../autotest
npm install
npm run build

# Chạy backend API
cd /Users/tuanminh/Desktop/hrm_hw_minh
dotnet run --project hrm/backend/src/Hrm.Host/Hrm.Host.csproj --launch-profile http

# Chạy frontend ở terminal khác
cd /Users/tuanminh/Desktop/hrm_hw_minh/hrm/frontend
npm run dev
```

## Smoke check backend

Backend mặc định chạy tại `http://localhost:5167`:

```bash
node -e "fetch('http://localhost:5167/api/ping').then(async r => { console.log(r.status, await r.text()); process.exitCode = r.ok ? 0 : 1 })"
node -e "fetch('http://localhost:5167/health/live').then(r => { console.log('/health/live', r.status); process.exitCode = r.ok ? 0 : 1 })"
node -e "fetch('http://localhost:5167/health/ready').then(r => { console.log('/health/ready', r.status); process.exitCode = r.ok ? 0 : 1 })"
node -e "fetch('http://localhost:5167/swagger/index.html').then(r => { console.log('/swagger', r.status); process.exitCode = r.ok ? 0 : 1 })"
```

## Login demo

Tài khoản demo dùng cho bài tập:

- Email: `admin@gmail.com`
- Mật khẩu: `Admin@123`

API login là `POST /api/auth/login`. Khi đăng nhập thành công, frontend gọi `GET /api/dashboard` với token demo và hiển thị dashboard.

## Autotest API + UI

Chạy backend và frontend trước, sau đó:

```bash
cd /Users/tuanminh/Desktop/hrm_hw_minh/hrm/autotest
npm install
npm run build
npm test
npm run evidence
```

Autotest dùng Playwright API request cho backend và Google Chrome hệ thống cho UI test.
Luồng UI kiểm tra đăng nhập Jarvis rồi xác nhận dashboard có sidebar và hai chart
`Doanh thu theo ngày`, `Đơn hàng theo trạng thái`.

Ảnh kiểm chứng được tạo tại `evidence/`:

- `login.png`
- `dashboard.png`
- `swagger.png`
- `test-result.png`
