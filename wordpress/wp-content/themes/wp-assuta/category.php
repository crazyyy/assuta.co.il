<?php get_header(); ?>

<table width="1010" height="100%" align="center" cellpadding="0" cellspacing="0" border="0">
  <tr valign="top">

    <?php get_sidebar('left-page'); ?>

    <td class="CenterPanel" width="100%" height="100%">
      <table border="0" cellspacing="0" cellpadding="0">

        <tr valign="top">
          <td class="centerzone centerzone-category">
            <?php if (function_exists('easy_breadcrumbs')) easy_breadcrumbs(); ?>

            <h1 class="cat-title inner-title"><?php _e( 'Categories for', 'wpeasy' ); the_category(', '); ?></h1>
            <?php get_template_part('loop'); ?>
            <?php get_template_part('pagination'); ?>

          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

<?php get_footer(); ?>
