<?php get_header(); ?>

<table width="1010" height="100%" align="center" cellpadding="0" cellspacing="0" border="0">
  <tr valign="top">

    <?php get_sidebar('left-page'); ?>

    <td class="CenterPanel center-panel-width" width="100%" height="100%">
      <table border="0" cellspacing="0" cellpadding="0">

        <tr valign="top">
          <td class="centerzone">
            <?php if (function_exists('easy_breadcrumbs')) easy_breadcrumbs(); ?>

            <h1 class="page-title"><?php the_title(); ?></h1>

            <div class="HTMLtext">
              <?php the_content(); ?>
            </div><!-- HTMLtext -->

          </td>
          <?php get_sidebar('right'); ?>
        </tr>
      </table>
    </td>
  </tr>
</table>

<?php get_footer(); ?>
