<?php

// Includes
include(get_theme_file_path('/includes/setup/enqueue.php'));

// Hooks
add_action('wp_enqueue_scripts', 'aa_enqueue');
