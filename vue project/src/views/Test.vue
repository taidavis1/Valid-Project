<script setup>
import ContentCover from '@/components/ContentCover.vue';
import ProPlace from '@/components/ProPlace.vue';
import SpecialEvent from '@/components/SpecialEvent.vue';
import Recommendation from '@/components/Recommendation.vue';
import DiscoveryRecommendation from '@/components/DiscoveryRecommendation.vue';
import Guide from '@/components/Guide.vue';
import { ref } from 'vue';
</script>

<template>
  <section>
    <div class="slider__container mt-2">
      <a href="" class="slider__link">
          <img src="/img/banner.png" alt="" class="slider__img slider__img--animation">
      </a>
    </div>
  </section>
  <section>
      <ContentCover
          header="Chào mừng đến với Anstay!"
      >
          <p>Đặt chỗ ở, homestay, cho thuê xe, trải nghiệm và nhiều hơn nữa trên Anstay</p>
          <span>
              <a href="" class="underline">Đăng nhập</a>
              hoặc
              <a href="" class="underline">Đăng ký</a>
              để trải nghiệm
          </span>
      </ContentCover>
  </section>
  <section>
      <ContentCover
          header="Địa điểm nổi bật"
      >
          <p>Cùng Anstay bắt đầu chuyến hành trình chinh phục thế giới của bạn</p>
          <ProPlace/>
      </ContentCover>
  </section>
  <section>
      <ContentCover
          header="Ưu đãi độc quyền"
      >
          <div class="flex justify-between">
            <p>Chỉ có tại Anstay, hấp dẫn và hữu hạn, book ngay!</p>
            <a href="" class="text-[12px] sm:text-[18px] text-[#F65E39]">Xem thêm</a>
          </div>
          <SpecialEvent/>
      </ContentCover>
  </section>
  <section>
      <ContentCover
          header="Gợi ý từ Anstay"
      >
          <div class="flex justify-between">
            <p>Những địa điểm thường đến mà Anstay gợi ý dành cho bạn</p>
          </div>
          <Recommendation/>
      </ContentCover>
  </section>
  <section>
      <ContentCover
          header="Gợi ý Khám phá"
      >
          <div class="flex justify-between">
            <p>Để mỗi chuyến đi là một hành trình truyền cảm hứng, mỗi căn phòng là một khoảng trời an yên</p>
          </div>
          <DiscoveryRecommendation/>
      </ContentCover>
  </section>
  <section>
      <ContentCover
          header="Hướng dẫn sử dụng"
      >
          <div class="flex justify-between">
            <p>Đặt chỗ nhanh, thanh toán đơn giản, sử dụng dễ dàng</p>
          </div>
          <Guide/>
      </ContentCover>
  </section>
</template>
