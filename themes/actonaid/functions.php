<?php

// Includes
include(get_theme_file_path('/includes/setup/enqueue.php'));
include(get_theme_file_path('/includes/setup/head.php'));
include(get_theme_file_path('/includes/setup/setup.php'));

// Hooks
add_action('wp_enqueue_scripts', 'aa_enqueue');
add_action('after_setup_theme', 'aa_enqueue_editor_styles');
add_action('wp_head', 'aa_head', 5);
add_action('after_setup_theme', 'aa_setup_theme');
add_action('after_setup_theme', 'aa_theme_register_menus');