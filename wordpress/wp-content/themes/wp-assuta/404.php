<?php get_header(); ?>

<table width="1010" height="100%" align="center" cellpadding="0" cellspacing="0" border="0">
  <tr valign="top">

    <?php get_sidebar('left-page'); ?>

    <td class="CenterPanel" width="100%" height="100%">
      <table border="0" cellspacing="0" cellpadding="0">

        <tr valign="top">
          <td class="centerzone centerzone-category">

            <h1 class="ctitle"><?php _e( 'Page not found', 'wpeasy' ); ?></h1>
            <h2><a href="<?php echo home_url(); ?>"><?php _e( 'Return home?', 'wpeasy' ); ?></a></h2>

          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

<?php get_footer(); ?>
