# Sử dụng Node.js bản nhẹ (alpine)
FROM node:18-alpine

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy các file cấu hình package vào trước
COPY package*.json ./

# Cài đặt thư viện
RUN npm install

# Copy toàn bộ code vào container
COPY . .

# Mở cổng 3000 cho ứng dụng Node.js
EXPOSE 3000

# Lệnh khởi chạy ứng dụng
CMD ["node", "app.js"]
