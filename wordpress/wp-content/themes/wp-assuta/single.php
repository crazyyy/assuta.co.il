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

		   <?php if (have_posts()): while (have_posts()) : the_post(); ?>
			<div id="post-<?php the_ID(); ?>" <?php post_class('HTMLtext'); ?>>

			  <?php the_content(); ?>
			  <?php edit_post_link(); ?>

			</div><!-- HTMLtext -->
		  <?php endwhile; else: // If 404 page error ?>
			<div class="HTMLtext">
				<h2 class="page-title inner-title"><?php _e( 'Sorry, nothing to display.', 'wpeasy' ); ?></h2>
			</div><!-- HTMLtext -->
		  <?php endif; ?>

          </td>
          <?php get_sidebar('right'); ?>
        </tr>
      </table>
    </td>
  </tr>
</table>

<?php get_footer(); ?>
