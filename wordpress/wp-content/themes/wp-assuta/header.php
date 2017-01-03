<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="user-scalable=yes, width=1010">

  <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>

  <!-- icons -->
  <link href="<?php echo get_template_directory_uri(); ?>/favicon.ico" rel="shortcut icon">

  <!--[if lt IE 9]>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/html5shiv.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/selectivizr.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/respond.js"></script>
  <![endif]-->
  <!-- css + javascript -->
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<a name="top"></a>
<table width="1010" height="100%" align="center" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td>
      <div class="headerok clearfix">
        <h1 class="AssutaMainTitle"><?php bloginfo( 'name' ); ?></h1>
          <div class="header-container">
            <img src="<?php echo get_template_directory_uri(); ?>/img/JCI_logo50.jpg" style="float:right;margin-right: 10px;">
            <table border="0" class="topmenuh" cellspacing="0" cellpadding="0" style="padding-top:20px;">
              <tr>
                <td>
                  <table name="SearchBar" cellpadding="0" cellspacing="0" border="0" align="center">
                    <tbody>
                      <tr>
                        <td valign="top">
                          <form name="searchform" method="get" style="margin:0px;" action="<?php bloginfo('url'); ?>/">
                          <input type="text" name="s" class="search_input" placeholder="Поиск">
                        </td>
                        <td>
                          <input src="<?php echo get_template_directory_uri(); ?>/img/search_button1.gif" value="submit" type="image" border="0" alt="Поиск">
                          </form>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td class="topMenu"><?php echo date("d"); ?>/<?php echo date("m"); ?>/<?php echo date("Y"); ?></td>
                <td class="topMenu"></td>
                <td class="topMenu"></td>
                <td class="topMenu">
<!--                   <a href="#" target="_blank">
  <img src="<?php echo get_template_directory_uri(); ?>/img/new_fb_icon.png" border="0" alt="">
</a> -->
                </td>
                <td class="topMenu">
<!--                   <a target="_blank" href="#">
  <img src="<?php echo get_template_directory_uri(); ?>/img/youtube.jpg" height="18" border="0" alt="">
</a> -->
                </td>
                <td class="topMenu">
<!--                   <a target="_blank" href="#">
  <img src="<?php echo get_template_directory_uri(); ?>/img/vk.png" border="0" height="18" alt="">
</a> -->
                </td>
              </tr>
            </table>
          </div><!-- header-container -->

        <div class="header_right_div">
          <a href="<?php echo home_url(); ?>/contact.htm">
            <div class="contact_title">Консультация бесплатно</div>
            <ul class="contact-phones">
              <li class="phone-hb">+972 747-02-02-02</li>
              <li class="phone-ru">8 800-333-02-38</li>
              <li class="phone-ua">0 800-502-083</li>
              <li class="phone-kz"> +7 727-350-54-50</li>
            </ul><!-- contact-phones -->
          </a>
        </div><!-- header_right_div -->

        <div class="top-header">
          <div class="logo">
            <?php if ( is_front_page() && is_home() ){ } else { ?>
              <a href="<?php echo home_url(); ?>">
            <?php  } ?>
              <h2 class="top-logo">Монада Медикал Центр</h2>
              <h3 class="top-description">Мы ценим доверие наших клиентов</h3>
            <?php if ( is_front_page() && is_home() ){ } else { ?>
              </a>
            <?php } ?>
          </div><!-- /logo -->
          <?php wpeHeadNav(); ?>
        </div><!-- top-header -->
        <div class="header-bottom-menu">
          <h5 class="header-bottom-descr">Лечение в Израиле</h5>
          <?php wpeHeadNavBott(); ?>
        </div><!-- /.header-bottom-menu -->
      </div><!-- headerok -->

<?php if ( is_page_template( 'front-page.php' ) ) { ?>

<?php } else { ?>
    </td>
  </tr>
</table>
<?php } ?>
<!-- header -->
