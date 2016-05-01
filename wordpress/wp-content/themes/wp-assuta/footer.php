      <!-- footer -->
      <tr valign="top">
        <td class="home-footer">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" class="copyright">
            <tbody>
              <tr>
                <td nowrap="1" align="right">
                  &copy; <?php echo date("Y"); ?> <?php bloginfo('name'); ?>.
                </td>
                <td nowrap="1" align="right" width="55%">
                  <a target="_blank" href="#" class="copyright" rel="publisher">Google+</a> &nbsp;|&nbsp;
                  <a class="copyright" href="#">Об "Ассуте"</a> &nbsp;|&nbsp;
                  <a class="copyright" href="#">Отделение Медицинского туризма </a> &nbsp;|&nbsp;
                </td>
                <td nowrap="1" align="right" style="padding-left:5px;" width="26%">
                </td>
              </tr>
              <tr>
                <td colspan="6" align="center" style="padding-top:20px;padding-bottom:15px;">
                  <img src="<?php echo get_template_directory_uri(); ?>/img/superbrands2015_logo.png" width="47" height="47" border="0" alt="superbrands" align="left">
                  <a style="margin:0 50px;display:inline-block;" alt="" title="Ассута - крупнейший ведущий частный медицинский центр в Израиле" href="">
                    <img src="<?php echo get_template_directory_uri(); ?>/img/assutafotterlogo.gif" width="129" height="39" border="0" alt="" title="">
                  </a>
                  <a href="http://www.jointcommissioninternational.org/about-jci/jci-accredited-organizations/?c=IL" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/img/footer-img-right.jpg" width="208" height="40" border="0" alt="JCI"></a>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
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
  $(document).ready(setMenuSize());
  var __anchorItem = null;
  if (location.hash.substr(1) != "") {
    try {
      __anchorItem = document.getElementById(location.hash.substr(1));
    } catch (e) {
      try {
        __anchorItem = document.all[location.hash.substr(1)];
      } catch (e) {}
    }
  }
  if (__anchorItem != null) {
    try {
      __anchorItem.style.border = "1px solid red";
    } catch (e) {}
  }
  </script>

</body>
</html>
