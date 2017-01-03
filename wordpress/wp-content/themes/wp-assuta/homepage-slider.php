<div class="homepage-slider">
  <?php if( have_rows('slider_top') ): while ( have_rows('slider_top') ) : the_row(); ?>
    <?php $image = get_sub_field('image'); ?>
    <div class="item">
      <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
      <h4>
        <?php the_sub_field('description'); ?>
        <a href="<?php the_sub_field('link'); ?>">подробнее...</a>
      </h4>
    </div>
  <?php endwhile; endif; ?>
</div>

<div class="homepage-form">
  <form method="Post" style="margin:0px;" name="">
    <div class="home-contact-right">
      <div class="frm-title">
        <h3>Заявка на лечение в Ассуте</h3></div>
        <?php echo do_shortcode( '[contact-form-7 id="543" title="HomeForm"]' ); ?>
    </div>
  </form>
</div>
<div class="clear_both"></div>
<!-- homepage slider -->
