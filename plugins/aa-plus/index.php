<?php
/*
 * Plugin Name:       AA Plus
 * Description:       A plugin for adding blocks to a theme
 * Version:           1.0.0
 * Requires at least: 5.9
 * Requires PHP:      7.2
 * Author:            Daisy Designs
 * Author URI:        https://daisy-webdesign.co.uk
 * Text Domain:       aa-plus
 * Domain Path:       /languages
 */

 if(!function_exists('add_action')) {
   echo 'Seems like you stumbled here by accident';
   exit;
}

// Setup
define('AA_PLUGIN_DIR', plugin_dir_path(__FILE__));

// Includes
include(AA_PLUGIN_DIR . 'includes/register-blocks.php');
include(AA_PLUGIN_DIR . 'includes/blocks/aa-navigation.php');
include(AA_PLUGIN_DIR . 'includes/frontend/enqueue.php');
// include(IA_PLUGIN_DIR . 'includes/activate.php');

// Hooks
add_action('init', 'aa_register_blocks');
add_action('wp_enqueue_scripts', 'aa_enqueue_navigation_script'); 
add_action('enqueue_block_editor_assets', 'aa_enqueue_editor_scripts'); 
// register_activation_hook(__FILE__, 'aa_activate_plugin');

