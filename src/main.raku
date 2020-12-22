my $project_root_dir = $?FILE.IO.parent.dirname;
my $dist_dir = "$project_root_dir/dist";

my $content_dir = "$project_root_dir/content";
my $static_dir_src = "$content_dir/static";
my $static_dir_dest = "$dist_dir/static";
my $layout_src = "$content_dir/layout.html";
my $nav_src = "$content_dir/nav.html";

my @pages = ['about_me', 'contact', 'index'];

my $layout_content = $layout_src.IO.slurp;
my $nav_content = $nav_src.IO.slurp;
$layout_content ~~ s/\{\{\s*nav\s*\}\}/$nav_content/;

mkdir $dist_dir;
qqx{cp -r $static_dir_src $static_dir_dest};
for @pages -> $page {
    my $src = "$content_dir/$page.html";
    my $dest = "$dist_dir/$page.html";
    my $main = $src.IO.slurp;
    my $content = $layout_content;
    $content ~~ s/\{\{\s*main\s*\}\}/$main/;
    $dest.IO.spurt($content);
}
