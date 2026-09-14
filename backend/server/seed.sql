USE mono_wear;

INSERT IGNORE INTO products (id,name,category,price,image,badge) VALUES
(7,'Áo thun Ribbed Daily','Nữ / Áo thun',390000,'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85','New'),
(8,'Áo polo Pique Classic','Nam / Áo thun',490000,'https://images.unsplash.com/photo-1625910513413-5fc45c65b2b3?auto=format&fit=crop&w=900&q=85','Bestseller'),
(9,'Quần Linen Relaxed','Unisex / Quần',820000,'https://images.unsplash.com/photo-1506629905607-d9c297d2e7f2?auto=format&fit=crop&w=900&q=85','New'),
(10,'Đầm Slip Satin','Nữ / Đầm',990000,'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85','Limited'),
(11,'Áo khoác Utility Overshirt','Nam / Áo khoác',950000,'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=85',NULL),
(12,'Cardigan Merino Soft','Nữ / Knitwear',780000,'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=85',NULL),
(13,'Chân váy Column Denim','Nữ / Chân váy',720000,'https://images.unsplash.com/photo-1582142306909-195724d33ffc?auto=format&fit=crop&w=900&q=85','Bestseller'),
(14,'Quần Tapered Twill','Nam / Quần',740000,'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=85',NULL),
(15,'Sandal Leather Minimal','Phụ kiện',680000,'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85',NULL),
(16,'Mũ Canvas Mono','Phụ kiện',290000,'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=85','New'),
(17,'Túi Tote Everyday','Phụ kiện',520000,'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85',NULL),
(18,'Khăn lụa Line Drawing','Phụ kiện',350000,'https://images.unsplash.com/photo-1601924928376-5b7d6e7f2c5e?auto=format&fit=crop&w=900&q=85',NULL);

INSERT IGNORE INTO reviews (id,product_id,customer_name,rating,title,body,verified) VALUES
(1,1,'Nguyễn Minh Anh',5,'Phom đẹp, mặc rất thoải mái','Linen mềm và thoáng, form boxy vừa vặn. Mình đã mặc chiếc áo này đi làm và đi chơi đều hợp.',1),
(2,1,'Thu Hà',5,'Chất liệu đúng như mô tả','Đóng gói đẹp, giao nhanh. Màu charcoal dễ phối và không bị nhăn quá nhiều.',1),
(3,1,'Hoàng Nam',4,'Một món đồ đáng đầu tư','Đường may chắc chắn, size M vừa với mình. Mong MONO có thêm màu navy.',1),
(4,2,'Minh Khoa',5,'Quần đứng form và dễ phối','Mặc lên form rất gọn, vải mềm và không bị bí. Mình sẽ mua thêm màu đen.',1),
(5,7,'Lan Chi',5,'Áo cơ bản nhưng rất đẹp','Chất cotton mềm, cổ áo chắc. Đây là kiểu áo mặc được quanh năm.',1),
(6,10,'Mai Phương',4,'Màu satin lên rất sang','Đầm rơi đẹp, đúng size theo bảng đo. Giao hàng nhanh hơn dự kiến.',1);

INSERT IGNORE INTO orders (id,customer_name,phone,address,total,status) VALUES
(1001,'Nguyễn Minh Anh','0901002003','12 Nguyễn Siêu, Quận 1, TP.HCM',1580000,'shipping'),
(1002,'Trần Hoàng Nam','0912003004','18 Nhà Chung, Hoàn Kiếm, Hà Nội',890000,'delivered'),
(1003,'Lê Thu Hà','0988001122','45 Trần Phú, Hải Châu, Đà Nẵng',2340000,'processing'),
(1004,'Phạm Minh Khang','0935006677','88 Lê Lợi, Nha Trang',1290000,'pending'),
(1005,'Đỗ Ngọc Mai','0977008899','20 Võ Văn Tần, Quận 3, TP.HCM',760000,'delivered');

INSERT IGNORE INTO messages (id,name,email,message) VALUES
(1,'Nguyễn Minh Anh','minhanh@example.com','Mình muốn được tư vấn size cho áo khoác Linen.'),
(2,'Trần Hoàng Nam','hoangnam@example.com','Bao giờ MONO có thêm màu navy cho quần Essential?'),
(3,'Lê Thu Hà','thuha@example.com','Mình cần hỗ trợ đổi size đơn hàng #MW-1003.');

INSERT IGNORE INTO subscribers (id,email) VALUES
(1,'minhanh@example.com'),(2,'hello@example.com'),(3,'newsletter@example.com'),(4,'thuha@example.com');
