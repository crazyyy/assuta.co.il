<?php if ( is_page_template( 'front-page.php' ) ) { ?>
<?php } else { ?>
  <table width="1010" height="100%" align="center" cellpadding="0" cellspacing="0" border="0">
<?php } ?>
    <!-- footer -->
    <tr valign="top">
      <td class="home-footer">
        <div class="home-footer-block">
          <ul class="home-footer-contacts">
            <li>
              <h4>Главный офис в Израиле</h4>
              <span>Адрес: <span>Тель Авив, ул. Барзель 19</span></span>
              <span>Тел: <a href="tel:+972747020202">+972 747-02-02-02</a></span>
              <span>Факс: <a href="tel:+972772070297">+972 772-07-02-97</a></span>
              <span>Email: <a href="mailto:info@monada-israel.com">info@monada-israel.com</a></span>
            </li>
            <li>
              <h4>Представительство в России</h4>
              <span>Адрес: <span>Москва, проспект Андропова 22</span></span>
              <span>Бесп. тел: <a href="tel:88003330238">8 800-333-02-38</a></span>
            </li>
            <li>
              <h4>Представительство в Украине</h4>
              <span>Адрес: <span>Киев, ул. Рыбальская 22</span></span>
              <span>Бесп. тел: <a href="tel:0800502083">0 800-502-083</a></span>

            </li>
            <li>
              <h4>Представительство в Казахстане</h4>
              <span>Адрес: <span>Алматы, Тимирязева 15б</span></span>
              <span>Тел: <a href="tel:+77273505450">+7 727-350-54-50</a></span>
            </li>
            <li>
              <h4>Представительство в США</h4>
              <span>Адрес: <span>Тампа, 3000 Байпорт драйв, 33607</span></span>
              <span>Тел: <a href="tel:+18139923191">+1 813-992-31-91</a></span>

            </li>
          </ul><!-- home-footer-contacts -->
        </div><!-- /.home-footer-block -->
      </td>
    </tr>
  </table>

  <?php wp_footer(); ?>
  <script src="<?php echo get_template_directory_uri(); ?>/js/idangerous.swiper.min.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/c_config.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/c_smartmenus.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/functionjs.js"></script>
  <script>
  // showContent('11');
  $(document).ready(function() {
    // swiper2 - main
    var mySwiper2 = new Swiper('.home-swiper2 .swiper-container', {
      autoplay: 5000,
      pagination: '.pagination2',
      loop: true,
      grabCursor: true,
      paginationClickable: true
    });
  });
  </script>

</body>
</html>
