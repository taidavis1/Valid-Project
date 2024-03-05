<script setup>
	import DatetimePicker from "@/components/DatetimePicker.vue"
</script>

<template>
  	<section class = "w-full lg:mt-14">
		<div class = "lg:px-44 py-3 lg:py-6 lg:ml-28">
			<div class="flex lg:hidden space-x-2 p-2">
				<div class = " overflow-hidden cursor-pointer">
					<img class="rounded-lg h-auto lg:h-full hover:scale-110 hover:opacity-90 cursor-pointer delay-150 ease-in-out transition-all duration-1000 object-cover" src="https://static.dayladau.com/dayladau/images/usil6ke391_irize47i" alt="">
				</div>
				<!-- <div class = "grid grid-cols-2 gap-2">
					<div class = "overflow-hidden cursor-pointer">
						<img class="rounded-lg object-cover h-full hover:scale-110 hover:opacity-90 cursor-pointer delay-150 ease-in-out transition-all duration-1000"  src="https://static.dayladau.com/dayladau/images/usil6ke391_utollf5y" alt="">
					</div>
					<div class = "overflow-hidden cursor-pointer">
						<img class="rounded-lg object-cover h-full hover:scale-110 hover:opacity-90 cursor-pointer delay-150 ease-in-out transition-all duration-1000"  src="https://static.dayladau.com/dayladau/images/usil6ke391_utollf5y" alt="">
					</div>
					<div class = "overflow-hidden cursor-pointer">
						<img class="rounded-lg object-cover h-full hover:scale-110 hover:opacity-90 cursor-pointer delay-150 ease-in-out transition-all duration-1000"  src="https://static.dayladau.com/dayladau/images/usil6ke391_utollf5y" alt="">
					</div>
					<div class = "overflow-hidden cursor-pointer">
						<img class="rounded-lg object-cover h-full hover:scale-110 hover:opacity-90 cursor-pointer delay-150 ease-in-out transition-all duration-1000"  src="https://static.dayladau.com/dayladau/images/usil6ke391_utollf5y" alt="">
					</div>
				</div> -->
			</div>
			<h3 class = "lg:text-2xl text-xl font-medium text-header">Japandi 01- LaHS 705 KDT- Máy chiếu , Ban công xinh, Bếp khép kín</h3>
			<div class="flex space-x-2">
				<div class = "flex items-center">
					<svg v-for="i in 5" class="block h-3 w-3 lg:h-5 lg:w-5" fill="gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
				</div>
				<div>
					<span class = " lg:text-lg text-sm">
						4.8 (19)· Khuất Duy Tiến, Thanh Xuân
					</span>
				</div>
			</div>
			<div class="hidden lg:flex space-x-2 mt-2 p-2">
				<div class = " overflow-hidden cursor-pointer">
					<img class="rounded-lg h-full hover:scale-110 hover:opacity-90 cursor-pointer delay-150 ease-in-out transition-all duration-1000" src="https://static.dayladau.com/dayladau/images/usil6ke391_irize47i" alt="">
				</div>
				<div class = "grid grid-cols-2 gap-2">
					<div class = "overflow-hidden cursor-pointer">
						<img class="rounded-lg object-cover h-full hover:scale-110 hover:opacity-90 cursor-pointer delay-150 ease-in-out transition-all duration-1000"  src="https://static.dayladau.com/dayladau/images/usil6ke391_utollf5y" alt="">
					</div>
					<div class = "overflow-hidden cursor-pointer">
						<img class="rounded-lg object-cover h-full hover:scale-110 hover:opacity-90 cursor-pointer delay-150 ease-in-out transition-all duration-1000"  src="https://static.dayladau.com/dayladau/images/usil6ke391_utollf5y" alt="">
					</div>
					<div class = "overflow-hidden cursor-pointer">
						<img class="rounded-lg object-cover h-full hover:scale-110 hover:opacity-90 cursor-pointer delay-150 ease-in-out transition-all duration-1000"  src="https://static.dayladau.com/dayladau/images/usil6ke391_utollf5y" alt="">
					</div>
					<div class = "overflow-hidden cursor-pointer">
						<img class="rounded-lg object-cover h-full hover:scale-110 hover:opacity-90 cursor-pointer delay-150 ease-in-out transition-all duration-1000"  src="https://static.dayladau.com/dayladau/images/usil6ke391_utollf5y" alt="">
					</div>
				</div>
			</div>
			<div class = "lg:mt-4 p-2  lg:p-4">
				<div class = " grid lg:grid-cols-3 max-w-screen-xl sm:gap-2 lg:gap-12">
					<div class = "lg:col-span-2">
						<div>
							<span>Được đăng bởi</span>
						</div>
						<div class = 'font-medium'>
							<span>Lahomes</span>
						</div>
						<div class = " mt-2">
							<div class = "grid grid-cols-2 lg:grid-cols-4 lg:gap-4 gap-2">
								<div class = " bg-gray-300/50 p-3 space-y-2 rounded-lg text-center">
									<div class=" text-center">
										<font-awesome-icon class="text-xl" icon="fa-solid fa-home" />
									</div>
									<div>
										<span>Bungalow</span>
									</div>
								</div>
								<div class = " bg-gray-300/50 p-3 space-y-2 rounded-lg text-center">
									<div class=" text-center">
										<font-awesome-icon class="text-xl" icon="fa-solid fa-desktop" />
									</div>
									<div>
										<span>Phòng khép kín toàn bộ</span>
									</div>
								</div>
								<div class = " bg-gray-300/50 p-3 space-y-2 rounded-lg text-center">
									<div class=" text-center">
										<font-awesome-icon class="text-xl" icon="fa-solid fa-bed" />
									</div>
									<div>
										<span>1 Phòng ngủ</span>
									</div>
								</div>
								<div class = " bg-gray-300/50 p-3 space-y-2 rounded-lg text-center">
									<div class=" text-center">
										<font-awesome-icon class="text-xl" icon="fa-solid fa-home" />
									</div>
									<div>
										<span>1 Giường</span>
									</div>
								</div>
								<div class = " bg-gray-300/50 p-3 space-y-2 rounded-lg text-center">
									<div class=" text-center">
										<font-awesome-icon class="text-xl" icon="fa-solid fa-home" />
									</div>
									<div>
										<span>1 Nhà tắm</span>
									</div>
								</div>
								<div class = " bg-gray-300/50 p-3 space-y-2 rounded-lg text-center">
									<div class=" text-center">
										<font-awesome-icon class="text-xl" icon="fa-solid fa-home" />
									</div>
									<div>
										<span>0 Nhà tắm chung</span>
									</div>
								</div>
								<div class = " bg-gray-300/50 p-3 space-y-2 rounded-lg text-center">
									<div class=" text-center">
										<font-awesome-icon class="text-xl" icon="fa-solid fa-home" />
									</div>
									<div>
										<span>1 Bếp</span>
									</div>
								</div>
								<div class = " bg-gray-300/50 p-3 space-y-2 rounded-lg text-center">
									<div class=" text-center">
										<font-awesome-icon class="text-xl" icon="fa-solid fa-home" />
									</div>
									<div>
										<span>Tối đa 2 người</span>
									</div>
								</div>
								<div class = " bg-gray-300/50 p-3 space-y-2 rounded-lg text-center">
									<div class=" text-center">
										<font-awesome-icon class="text-xl" icon="fa-solid fa-home" />
									</div>
									<div>
										<span>Diện tích 25m²</span>
									</div>
								</div>
								<div class = " bg-gray-300/50 p-3 space-y-2 rounded-lg text-center">
									<div class=" text-center">
										<font-awesome-icon class="text-xl" icon="fa-solid fa-home" />
									</div>
									<div>
										<span>View thành phố</span>
									</div>
								</div>
							</div>
						</div>
						<hr class=" mt-4 mb-4">
						<div class=" lg:px-5">
							<h2 class=" text-xl font-medium">Thông Tin Cơ Bản</h2>
							<div class="p-4">
								<div class=" grid grid-cols-1 lg:grid-cols-2 gap-4">
									<div class=" space-y-1">
										<div class=" flex">
											<font-awesome-icon class="text-xl mr-3" icon="fa-regular fa-clock" />
											<span>Giờ checkin/out tiêu chuẩn</span>
										</div>
										<div class=" ml-8 text-sm">
											<span>Check in sau 14:00 và check-out trước 11:00 ngày hôm sau</span>
										</div>
									</div>
									<div>
										<div class=" flex">
											<font-awesome-icon class="text-xl mr-3" icon="fa-solid fa-calendar" />
											<span>Giờ checkin/out theo ngày</span>
										</div>
										<div class=" ml-8 text-sm">
											<p class="">Nhận phòng 9:00 Trả phòng trước 21:00</p>
										</div>
									</div>
									<div>
										<div class=" flex">
											<font-awesome-icon class="text-xl mr-3" icon="fa-solid fa-stopwatch" />
											<span>Cho phép đặt theo giờ</span>
										</div>
										<div class=" ml-8 text-sm">
											<p class="">Homestay cho phép đặt theo giờ cho khách hàng có nhu cầu sử dụng trong thời gian ngắn</p>
										</div>
									</div>
									<div>
										<div class=" flex">
											<font-awesome-icon class="text-xl mr-3" icon="fa-regular fa-face-smile-beam" />
											<span>Hình thức checkin</span>
										</div>
										<div class=" ml-8 text-sm">
											<p class="">Tự checkin</p>
										</div>
									</div>
									<div>
										<div class=" flex">
											<font-awesome-icon class="text-xl mr-3" icon="fa-regular fa-check-square" />
											<span>Khung giờ hỗ trợ checkin</span>
										</div>
										<div class=" ml-8 text-sm">
											<p class="">Hỗ trợ tất cả khung giờ</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<hr class="mb-4">
						<div class=" lg:px-5">
							<div>
								<h2 class=" text-xl font-medium">Giới thiệu về Homestay</h2>
							</div>
							<div class=" p-2">
								<span class=" text-gray-500">
									Căn hộ Netflix Máy chiếu, Hiện đại sang trọng, có bếp khép kín Studio xinh xắn Một chiếc studio có đầy đủ những tiện nghi 
									mà bạn cần: giường to nệm êm, thiết kế tinh tế, bếp riêng có gia vị cơ bản,
								</span>
							</div>
						</div>
						<hr class="mb-4">
						<div class=" lg:px-5">
							<div>
								<h2 class=" text-xl font-medium">Vị trí của Homestay</h2>
							</div>
							<div class="lg:p-4">
								<span class=" text-gray-500">
									Khuất Duy Tiến, Thanh Xuân
								</span>
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62700.63603380938!2d106.60554412982835!3d10.827395627184321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175295916294ecb%3A0xbf731034fb27c5b8!2zR08hIFRyxrDhu51uZyBDaGluaA!5e0!3m2!1sen!2sus!4v1705234651495!5m2!1sen!2sus" class = "w-full" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>							
							</div>
						</div>
						<hr class="mt-4 mb-4">
						<div class=" lg:px-5">
							<div>
								<h2 class=" text-xl font-medium">Đánh giá</h2>
							</div>
							<div class="flex space-x-2">
								<div class = "flex items-center">
									<svg v-for="i in 5" class="block h-5 w-5" fill="gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
								</div>
								<div>
									<span class = "">
										4.8 (19 Đánh Giá)
									</span>
								</div>
							</div>
							<div class="grid grid-cols-1 lg:grid-cols-2 max-w-lg mt-4 gap-4">
								<div class = " bg-gray-200 p-6 rounded-xl text-white">
									<div class=" flex items-center space-x-5">
										<font-awesome-icon class = "" icon="fa-solid fa-user" />
										<span class = "text-black">Ngọc</span>
										<div class="flex bg-white p-2 rounded-xl">
											<svg v-for="i in 5" class="block h-5 w-5" fill="gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
										</div>
									</div>
								</div>
								<div class = " bg-gray-200 p-6 rounded-xl text-white">
									<div class=" flex items-center space-x-5">
										<font-awesome-icon class = "" icon="fa-solid fa-user" />
										<span class = "text-black">Hằng</span>
										<div class="flex bg-white p-2 rounded-xl">
											<svg v-for="i in 5" class="block h-5 w-5" fill="gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
										</div>
									</div>
								</div>
								<div class = " bg-gray-200 p-6 rounded-xl text-white">
									<div class=" flex items-center space-x-5">
										<font-awesome-icon class = "" icon="fa-solid fa-user" />
										<span class = "text-black">Quỳnh</span>
										<div class="flex bg-white p-2 rounded-xl">
											<svg v-for="i in 5" class="block h-5 w-5" fill="gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
										</div>
									</div>
								</div>
								<div class = " bg-gray-200 p-6 rounded-xl text-white">
									<div class=" flex items-center space-x-5">
										<font-awesome-icon class = "" icon="fa-solid fa-user" />
										<span class = "text-black">Như</span>
										<div class="flex bg-white p-2 rounded-xl">
											<svg v-for="i in 5" class="block h-5 w-5" fill="gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
										</div>
									</div>
								</div>
							</div>
							<div class="flex border-green-400/80 border-2 mt-4 w-[150px]">
								<button class=" text-green-600 py-2 w-full">Xem Thêm</button>
							</div>
						</div>
						<hr class="mb-4 mt-4">
						<div class=" px-5 space-y-4">
							<div>
								<h2 class=" text-xl font-medium">Nội quy và chính sách</h2>
							</div>
							<div class=" flex space-y-2 flex-col">
								<div class = "flex">
									<font-awesome-icon class="text-xl mr-3" icon = "fa-solid fa-square-parking" />
									<span>Dịch vụ gửi ô tô</span>
								</div>
								<ul class=" ml-12 list-disc">
									<li>Miễn phí</li>
									<li>Gửi xe tại Homestay</li>
									<li>Khách hàng gửi xe tại trong tầng hầm tòa nhà</li>
								</ul>
							</div>
							<div class=" flex space-y-2 flex-col">
								<div class = "flex">
									<font-awesome-icon class="text-xl mr-3" icon = "fa-solid fa-square-parking" />
									<span>Dịch vụ gửi ô tô</span>
								</div>
								<ul class=" ml-12 list-disc">
									<li>Có phí (300000 VNĐ)</li>
									<li>Gửi xe bên ngoài Homestay(cách 500m)</li>
									<li>Khách hàng gửi xe bên ngoài vỉa hè ngay tại trước cổng ( đỗ gọn vào sát vỉa hè) Hoặc gửi xe ô tô mất phí trong Học viện Chính trị khu vực 1 khách đó 500m</li>
								</ul>
							</div>
							<hr>
							<div class=" flex space-y-2 flex-col">
								<div class = "flex">
									<font-awesome-icon class="text-xl mr-3" icon = "fa-regular fa-check-square" />
									<span>Lưu ý trải nghiệm</span>
								</div>
								<ul class=" ml-12 list-disc">
									<li>Không được tổ chức tiệc</li>
									<li>Không cho phép thú cưng</li>
									<li>Không cho phép hút thuốc</li>
									<li>Không được quay chụp</li>
									<li>Không làm ồn từ 21:00 tới 8:00</li>
									<li>Chụp ảnh CMND/CCCD</li>
								</ul>
							</div>
							<hr>
							<div class=" flex space-y-2 flex-col">
								<div class = "flex">
									<font-awesome-icon class="text-xl mr-3" icon = "fa-solid fa-home" />
									<span>Nội quy homestay</span>
								</div>
								<ul class=" ml-6">
									<li>*Nghiêm cấm sử dụng chất kích thích, các chất gây nghiện như ma tuý, bóng cười, 
									cần sa, các chất cấm trong danh mục của nhà nước</li>
									<li>*Không tự ý cho phép người lạ vào trong căn hộ khi chưa có sự cho phép của Homestay</li>
									<li>*Không được tự ý di chuyển thiết bị, đồ đạc, giường mà homestay đã sắp xếp từ trước theo ý của mình.</li>
								</ul>
							</div>
							<hr>
							<div class=" flex space-y-2 flex-col">
								<div class = "flex">
									<font-awesome-icon class="text-xl mr-3" icon = "fa-solid fa-rotate-right" />
									<span>Chính sách hoàn/hủy</span>
								</div>
								<ul class=" ml-12 list-disc">
									<li>Đặt phòng huỷ trước 7 ngày Check-in trở lên hoàn 100% ( kể cả cọc) trừ phí chuyển khoản nếu có.</li>
									<li>Huỷ trước 2-7 ngày hoàn 50%  (mất 100% nếu cọc)</li>
									<li>Trước 1 ngày hoặc cùng ngày chúng mình không hoàn/hủy</li>
									<li>Vừa đặt xong hủy phòng sát giờ checkin sẽ không được hoàn tiền</li>
									<li>Đổi ngày, đổi phòng phí là 30% giá phòng (chỉ áp dụng đổi phòng trong cùng 1 chuỗi, khách vui lòng 
									báo trước ít nhất 2 ngày checkin).</li>
								</ul>
							</div>
						</div>
						<hr class="mb-4 mt-4">
						<div class=" px-5">
							<div>
								<h2 class=" text-xl font-medium">Giá phòng</h2>
							</div>
							<div class=" p-4">
								<div class = " border-2 space-y-3 flex flex-col p-5 rounded-xl">
									<div class=" flex justify-between">
										<span>Thứ 2</span>
										<span>495,000</span>
									</div>
									<hr>
									<div class=" flex justify-between">
										<span>Thứ 3</span>
										<span>495,000</span>
									</div>
									<hr>
									<div class=" flex justify-between">
										<span>Thứ 4</span>
										<span>495,000</span>
									</div>
									<hr>
									<div class=" flex justify-between">
										<span>Thứ 5</span>
										<span>495,000</span>
									</div>
									<hr>
									<div class=" flex justify-between">
										<span>Thứ 6</span>
										<span>495,000</span>
									</div>
								</div>
							</div>
						</div>
						<hr class="mb-4 mt-4">
						<div class=" px-5 space-y-5">
							<div>
								<h2 class=" text-xl font-medium">Tiện ích trong nhà</h2>
							</div>
							<div class=" grid grid-cols-2 gap-4">
								<div class = "flex items-center">
									<img class="mr-3" height="24" width="24" src="https://static.dayladau.com/dayladau/images/usiuyjzs94_g6djv29c">
									<span>Setup bàn tiệc</span>
								</div>
								<div class = "flex items-center">
									<img class="listing_amenity_img mr-3" height="24" width="24" src="https://static.dayladau.com/dayladau/images/usiuyjzs94_a2tft3v0">
									<span>Setup sinh nhật/ cầu hôn</span>
								</div>
								<div class = "flex items-center">
									<img class="listing_amenity_img mr-3" height="24" width="24" src="https://static.dayladau.com/dayladau/images/usiuyjzs94_8u1bgjcv">
									<span>Máy chiếu</span>
								</div>
								<div class = "flex items-center">
									<img class="listing_amenity_img mr-3" height="24" width="24" src="https://static.dayladau.com/dayladau/images/usiuyjzs94_izo1ynq8">
									<span>TV</span>
								</div>
								<div class = "flex items-center">
									<img class="listing_amenity_img mr-3" height="24" width="24" src="https://static.dayladau.com/dayladau/images/usiuyjzs94_8hybr27i">
									<span>Netflix</span>
								</div>
								<div class = "flex items-center">
									<img class="listing_amenity_img mr-3" height="24" width="24" src="https://static.dayladau.com/dayladau/images/uswokhduc8_mexon79n">
									<span>Chỗ để xe trong khuôn viên</span>
								</div>
								<div class = "flex items-center">
									<img class="listing_amenity_img mr-3" height="24" width="24" src="https://static.dayladau.com/dayladau/images/uswokhduc8_i5wrzn8a">
									<span>Thang máy</span>
								</div>
								<div class = "flex items-center">
									<img class="listing_amenity_img mr-3" height="24" width="24" src="https://static.dayladau.com/dayladau/images/uswokhduc8_x02mdjck">
									<span>Máy sấy quần áo</span>
								</div>
								<div class = "flex items-center">
									<img class="listing_amenity_img mr-3" height="24" width="24" src="https://static.dayladau.com/dayladau/images/usiuyjzs94_6c3w2kpb">
									<span>Máy giặt</span>
								</div>
								<div class = "flex items-center">
									<img class="listing_amenity_img mr-3" height="24" width="24" src="https://static.dayladau.com/dayladau/images/usiuyjzs94_eh2ikr3d">
									<span>Điều hòa một chiều</span>
								</div>
							</div>
							<div class="flex border-green-400/80 border-2 w-[150px]">
								<button class=" text-green-600 py-2 w-full">Hiển Thị Tiện Ích</button>
							</div>
						</div>
					</div>
					<div class = "border-2 mt-4 space-y-5 h-fit shadow-md rounded-xl p-4 lg:p-6">
						<DatetimePicker />
						<div class=" ml-2 flex flex-col">
							<div class=" grid grid-cols-2 lg:gap-4 gap-1">
								<div class=" flex flex-col">
									<span>Khách tham gia</span>
									<span class=" text-sm text-gray-300">Người lớn hơn 12 tuổi</span>
								</div>
								<div class=" border-2 flex p-2 justify-between">
									<font-awesome-icon class="text-xl ml-3" icon="fa-solid fa-plus" />
									<span>1</span>
									<font-awesome-icon class="text-xl mr-3" icon="fa-solid fa-minus" />
								</div>
							</div>
						</div>
						<hr>
						<div class=" p-2 space-y-2">
							<div class=" flex justify-between">
								<span class="">Tiền Phòng</span>
								<span class="">Tiền Phòng</span>
							</div>
							<div class=" flex justify-between">
								<span class="">Phí vệ sinh</span>
								<span class="">Tiền Phòng</span>
							</div>
							<div class=" flex justify-between">
								<span class="">Tổng</span>
								<span class="">Tiền Phòng</span>
							</div>
						</div>
						<div class="flex bg-green-400/80 justify-center">
							<button class=" text-white py-2">Đật Ngay</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>