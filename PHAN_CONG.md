# PHÂN CÔNG CÔNG VIỆC - DỰ ÁN SANITARY STORE

## Thành viên nhóm (3 người)
- **Leader (Backend):** [Tên bạn]
- **Frontend 1:** [Tên]
- **Frontend 2:** [Tên]

---

## TIMELINE & PHÂN CÔNG (6 tuần)

### 📅 TUẦN 1: Setup cơ bản

| Ngày | Người | Công việc | Files |
|------|-------|-----------|-------|
| T2 | Leader | Init project, push GitHub | `README.md` |
| T3 | Leader | Setup NestJS + Prisma | `backend/src/*`, `prisma/schema.prisma` |
| T4 | FE 1 | Setup Next.js + Tailwind | `tailwind.config.ts`, `tsconfig.json` |
| T5 | FE 2 | Tạo layout cơ bản | `frontend/app/layout.tsx`, `globals.css` |

---

### 📅 TUẦN 2: Authentication

| Ngày | Người | Công việc | Files |
|------|-------|-----------|-------|
| T2 | Leader | Backend Auth API (login, register) | `backend/src/auth/*` |
| T3 | Leader | Model User, JWT, Guards | `prisma/schema.prisma`, `guards/*` |
| T4 | FE 1 | Login page | `frontend/app/login/page.tsx` |
| T5 | FE 2 | Register page + AuthContext | `register/page.tsx`, `AuthContext.tsx` |

---

### 📅 TUẦN 3: Products

| Ngày | Người | Công việc | Files |
|------|-------|-----------|-------|
| T2 | Leader | Backend Products API | `backend/src/products/*` |
| T3 | Leader | Model Product + seed data | `prisma/schema.prisma` |
| T4 | FE 1 | Header + Hero components | `Header.tsx`, `Hero.tsx` |
| T5 | FE 2 | ProductList + Product detail | `ProductList.tsx`, `products/[id]/page.tsx` |

---

### 📅 TUẦN 4: Cart & Orders

| Ngày | Người | Công việc | Files |
|------|-------|-----------|-------|
| T2 | Leader | Backend Orders API | `backend/src/orders/*` |
| T3 | Leader | Model Order, OrderItem | `prisma/schema.prisma` |
| T4 | FE 1 | CartContext + CartIcon | `CartContext.tsx`, `CartIcon.tsx` |
| T5 | FE 2 | Cart page + Checkout | `cart/page.tsx`, `checkout/page.tsx` |

---

### 📅 TUẦN 5: Admin Dashboard

| Ngày | Người | Công việc | Files |
|------|-------|-----------|-------|
| T2 | Leader | AdminGuard + protect routes | `guards/admin.guard.ts` |
| T3 | FE 1 | Admin layout + sidebar | `admin/layout.tsx`, `AdminSidebar.tsx` |
| T4 | FE 1 | Admin Dashboard (charts) | `admin/page.tsx` |
| T5 | FE 2 | Admin Products + Orders | `admin/products/*`, `admin/orders/*` |

---

### 📅 TUẦN 6: Features & Polish

| Ngày | Người | Công việc | Files |
|------|-------|-----------|-------|
| T2 | Leader | Backend Likes + Reviews + Sales | `likes/*`, `reviews/*`, `sales/*` |
| T3 | FE 1 | LikeButton + ReviewsSection | `LikeButton.tsx`, `ReviewsSection.tsx` |
| T4 | FE 2 | Admin Promotions + Users | `admin/promotions/*`, `admin/users/*` |
| T5 | ALL | Bug fixes + Testing | Sửa lỗi chung |

---

## TÓM TẮT PHÂN CHIA

| Người | Folder chính | Số commits dự kiến |
|-------|--------------|-------------------|
| **Leader** | `backend/` | ~15-20 |
| **FE 1** | `frontend/components/`, `admin/` | ~10-12 |
| **FE 2** | `frontend/app/`, `context/` | ~10-12 |

---

## QUY TRÌNH

```bash
# Pull → Branch → Code → Commit → Push → Pull Request
git pull origin main
git checkout -b feature/ten-tinh-nang
git add .
git commit -m "feat: Mô tả"
git push origin feature/ten-tinh-nang
# Tạo PR trên GitHub → Leader merge
```
