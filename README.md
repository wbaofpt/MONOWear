# MONO Wear

Website thời trang nam/nữ theo phong cách tối giản, premium editorial. Dự án gồm storefront cho khách hàng, các trang nội dung thương hiệu, checkout, tài khoản và dashboard quản trị.

## Công nghệ

- Frontend: React, TypeScript, Vite, CSS thuần, Lucide Icons
- Backend: Node.js, Express
- Database: MySQL 8+
- Testing: Vitest

## Cấu trúc dự án

```text
MONOWear/
├── frontend/
│   ├── index.html
│   ├── vite.config.ts
│   └── src/
│       ├── App.tsx
│       ├── main.tsx
│       ├── data.ts
│       ├── api.ts
│       ├── styles.css
│       ├── components/
│       └── pages/
├── backend/
│   ├── server/index.js
│   └── server/schema.sql
├── package.json
└── README.md
```

## Cài đặt

Yêu cầu Node.js 20+ và MySQL 8+.

```bash
npm install
```

Tạo database và các bảng:

```bash
mysql -u root -p < backend/server/schema.sql
```

Nạp thêm dữ liệu mẫu cho catalog, đánh giá, đơn hàng và inbox:

```bash
mysql -u root -p < backend/server/seed.sql
```

Tạo file `.env` ở thư mục gốc dựa trên [.env.example](.env.example):

```env
PORT=4000
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=mono_wear
```

## Chạy development

Mở hai terminal:

```bash
# Terminal 1 — frontend
npm run dev
```

Frontend chạy tại [http://localhost:5173](http://localhost:5173).

```bash
# Terminal 2 — backend API
npm run server
```

Backend chạy tại `http://localhost:4000`. Vite tự động proxy các request `/api` sang backend.

## Build và test

```bash
npm run build
npm test
```

## Các trang hiện có

- Trang chủ
- Shop và lọc theo Nam/Nữ/Phụ kiện
- Chi tiết sản phẩm
- Giỏ hàng
- Checkout và xác nhận đơn
- Đăng nhập / đăng ký
- Wishlist
- Journal
- About MONO
- Contact
- Chính sách vận chuyển, đổi trả, thanh toán, bảo mật
- Size Guide
- Care Guide
- FAQ
- Theo dõi đơn hàng
- Hệ thống cửa hàng
- Admin dashboard

## API chính

### Sản phẩm

```text
GET    /api/products
GET    /api/products/:id
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

### Tài khoản

```text
POST /api/auth/register
POST /api/auth/login
```

### Đơn hàng

```text
POST  /api/orders
GET   /api/orders/:id
PATCH /api/orders/:id/status
```

Trạng thái đơn hợp lệ: `pending`, `processing`, `shipping`, `delivered`, `cancelled`.

### Nội dung và admin

```text
POST /api/contact
POST /api/newsletter
GET  /api/admin/stats
GET  /api/admin/orders
GET  /api/admin/messages
GET  /api/admin/subscribers
```

## Lưu ý bảo mật

- Không commit file `.env` thật vào repository.
- Mật khẩu user được mã hóa bằng `scrypt` trước khi lưu.
- Khi triển khai production nên bổ sung session/JWT, rate limit, CSRF protection và validation schema chuyên dụng.
- Ảnh sản phẩm hiện dùng URL demo từ Unsplash; production nên thay bằng CDN hoặc object storage riêng.

## Design direction

MONO Wear dùng bảng màu charcoal, stone và gold accent; typography Playfair Display kết hợp Inter; animation ưu tiên `transform` và `opacity`, có hỗ trợ `prefers-reduced-motion`.
