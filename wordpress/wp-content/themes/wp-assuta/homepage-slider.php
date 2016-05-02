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
      <div class="frm-content">
        <label>*Имя, фамилия</label>
        <input type="Text" name="firstname" id="call_firstname_bottom" class="input-text">
        <div class="clear_both"></div>
        <label>*Телефон</label>
        <input type="Text" name="phone1" id="call_phone1_bottom" class="input-text">
        <div class="clear_both"></div>
        <label>*E-mail</label>
        <input type="Text" name="email" id="call_email_bottom" class="input-text">
        <div class="clear_both"></div>
        <label class="wide">Текст обращения</label>
        <textarea name="message" id="call_message_bottom" class="txt-msg"></textarea>
        <div class="submit-btn">
          <input width="93" type="image" height="27" src="<?php echo get_template_directory_uri(); ?>/img/home-frm-btn.jpg" alt="Свяжитесь с нами - Ассута ведущий медицинский центр в Израиле">
        </div>
      </div>
    </div>
  </form>
</div>
<div class="clear_both"></div>
<!-- homepage slider -->
