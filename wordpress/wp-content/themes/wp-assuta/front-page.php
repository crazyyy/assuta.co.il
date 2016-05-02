<?php /* Template Name: Home Page  */ get_header(); ?>

  <?php get_template_part('homepage-slider'); ?>

<tr>
  <td>
    <div class="homeBg clearfix">
      <div class="home-left-panel">
        <div class="menu-div">
          <h5 class="left-bar-title">Отделения<span class="blueToptextB"> Ассуты</span></h5>
          <?php wpeSideNav(); ?>
          <img border="0" alt="Бесплатная консультация - Ассута, лечение и диагностика в израиле" src="<?php echo get_template_directory_uri(); ?>/img/consultation_picture.jpg">
        </div>
      </div>


      <div class="home-center-content">

        <div class="home-swiper2">
          <div class="swiper-container">
            <div class="swiper-wrapper" >

              <?php if( have_rows('content_swiper') ): while ( have_rows('content_swiper') ) : the_row(); ?>
              <div class="swiper-slide swiper-slide-duplicate">
                <div class="content-slide">
                  <div class="gallery">
                    <?php $image = get_sub_field('image'); ?>
                    <a href="<?php the_sub_field('link'); ?>">
                    <img width="470" height="276" border="0" hspace="0" vspace="0" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                    </a>
                  </div>
                </div>
              </div>
              <?php endwhile; endif; ?>

            </div><!-- swiper-wrapper -->
          </div><!-- swiper-container -->

          <div class="pagination2"><span class="swiper-pagination-switch"></span><span class="swiper-pagination-switch"></span><span class="swiper-pagination-switch swiper-visible-switch swiper-active-switch"></span><span class="swiper-pagination-switch"></span></div>
        </div>

        <div class="home-content-container">
          <h2 class="HTMLtitle3" style="padding-bottom:5px;"><?php the_title(); ?></h2>
          <?php the_content(); ?>
        </div><!-- /.home-content-container -->

      </div>
    </div>
    <div class="home-right-content"></div>
  </td>
</tr>
<?php get_footer(); ?>
