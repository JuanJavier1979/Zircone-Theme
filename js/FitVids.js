


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>davatron5000/FitVids.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="davatron5000/FitVids.js" name="twitter:title" /><meta content="FitVids.js - A lightweight, easy-to-use jQuery plugin for fluid width video embeds." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/42218?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/42218?v=3&amp;s=400" property="og:image" /><meta content="davatron5000/FitVids.js" property="og:title" /><meta content="https://github.com/davatron5000/FitVids.js" property="og:url" /><meta content="FitVids.js - A lightweight, easy-to-use jQuery plugin for fluid width video embeds." property="og:description" />
      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="5322728F:12B8:1AD364:5514471E" name="octolytics-dimension-request_id" />
    
    <meta content="Rails, view, files#disambiguate" name="analytics-event" />

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="6WJRfNtU3H5yLMAKKd9xt9NqdCYLf7eYqNhnJsdwkgTs07fzv1oA38nEeZ01eSVdjcM0yt7y85+WS1MNwqT0JQ==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-72aef5c1eab64bf684cb6f55513fae147b11b63503bf2311319ec22e77d3194f.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-40d9bf14363443ccf64a2b71208f59e8739d6288d962feba121227e0608772f3.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="16f1961eb9229a014751d96dc0a55124">

      
  <meta name="description" content="FitVids.js - A lightweight, easy-to-use jQuery plugin for fluid width video embeds.">
  <meta name="go-import" content="github.com/davatron5000/FitVids.js git https://github.com/davatron5000/FitVids.js.git">

  <meta content="42218" name="octolytics-dimension-user_id" /><meta content="davatron5000" name="octolytics-dimension-user_login" /><meta content="2310615" name="octolytics-dimension-repository_id" /><meta content="davatron5000/FitVids.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2310615" name="octolytics-dimension-repository_network_root_id" /><meta content="davatron5000/FitVids.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/davatron5000/FitVids.js/commits/master.atom" rel="alternate" title="Recent Commits to FitVids.js:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production macintosh vis-public">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      


        
        <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Fdavatron5000%2FFitVids.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <form accept-charset="UTF-8" action="/davatron5000/FitVids.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/davatron5000/FitVids.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="(Logged out) Header, go to blog, text:blog">Blog</a>
          </li>
      </ul>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fdavatron5000%2FFitVids.js"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/davatron5000/FitVids.js/watchers">
    181
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fdavatron5000%2FFitVids.js"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/davatron5000/FitVids.js/stargazers">
      3,715
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fdavatron5000%2FFitVids.js"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/davatron5000/FitVids.js/network" class="social-count">
        883
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/davatron5000" class="url fn" itemprop="url" rel="author"><span itemprop="title">davatron5000</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/davatron5000/FitVids.js" class="js-current-repository" data-pjax="#js-repo-pjax-container">FitVids.js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline with-full-navigation ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/davatron5000/FitVids.js/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/davatron5000/FitVids.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /davatron5000/FitVids.js">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/davatron5000/FitVids.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /davatron5000/FitVids.js/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/davatron5000/FitVids.js/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /davatron5000/FitVids.js/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/davatron5000/FitVids.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /davatron5000/FitVids.js/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/davatron5000/FitVids.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /davatron5000/FitVids.js/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/davatron5000/FitVids.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /davatron5000/FitVids.js/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/davatron5000/FitVids.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/davatron5000/FitVids.js" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a> or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="https://mac.github.com" class="btn btn-sm sidebar-button" title="Save davatron5000/FitVids.js to your computer and use it in GitHub Desktop." aria-label="Save davatron5000/FitVids.js to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/davatron5000/FitVids.js/archive/master.zip"
                   class="btn btn-sm sidebar-button"
                   aria-label="Download the contents of davatron5000/FitVids.js as a zip file"
                   title="Download the contents of davatron5000/FitVids.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          
<span id="js-show-full-navigation"></span>

<div class="repository-meta js-details-container ">
    <div class="repository-description">
      A lightweight, easy-to-use jQuery plugin for fluid width video embeds.
    </div>

    <div class="repository-website">
      <p><a href="http://fitvidsjs.com" rel="nofollow">http://fitvidsjs.com</a></p>
    </div>


</div>

<div class="overall-summary overall-summary-bottomless">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">
    <div class="stats-switcher-wrapper">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/davatron5000/FitVids.js/commits/master">
            <span class="octicon octicon-history"></span>
            <span class="num text-emphasized">
              87
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/davatron5000/FitVids.js/branches">
          <span class="octicon octicon-git-branch"></span>
          <span class="num text-emphasized">
            3
          </span>
          branches
        </a>
      </li>

      <li>
        <a data-pjax href="/davatron5000/FitVids.js/releases">
          <span class="octicon octicon-tag"></span>
          <span class="num text-emphasized">
            4
          </span>
          releases
        </a>
      </li>

      <li>
        
  <a href="/davatron5000/FitVids.js/graphs/contributors">
    <span class="octicon octicon-organization"></span>
    <span class="num text-emphasized">
      21
    </span>
    contributors
  </a>
      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/davatron5000/FitVids.js/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">100%</span>
              </a>
          </li>
        </ol>
      </div>
    </div>
  </div>

</div>

  <div class="repository-lang-stats-graph js-toggle-lang-stats" title="Click for language details">
    <span class="language-color" aria-label="JavaScript 100%" style="width:100%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span>
  </div>

<include-fragment src="/davatron5000/FitVids.js/show_partial?partial=recently_touched_branches_list"></include-fragment>

<div class="file-navigation in-mid-page">
  <a href="/davatron5000/FitVids.js/find/master"
        class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s right"
        data-pjax
        data-hotkey="t"
        aria-label="Quickly jump between files">
    <span class="octicon octicon-list-unordered"></span>
  </a>
    <a href="/davatron5000/FitVids.js/compare" aria-label="Compare, review, create a pull request" class="btn btn-sm btn-primary tooltipped tooltipped-s left compare-button" aria-label="Compare &amp; review" data-pjax data-ga-click="Repository, go to compare view, location:repo overview; icon:git-compare">
      <span class="octicon octicon-git-compare"></span>
    </a>

  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/davatron5000/FitVids.js/tree/develop"
               data-name="develop"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="develop">
                develop
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/davatron5000/FitVids.js/tree/gh-pages"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/davatron5000/FitVids.js/tree/master"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/davatron5000/FitVids.js/tree/v1.1.0"
                 data-name="v1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.0">v1.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/davatron5000/FitVids.js/tree/v1.0.3"
                 data-name="v1.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.3">v1.0.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/davatron5000/FitVids.js/tree/v1.0.2"
                 data-name="v1.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.2">v1.0.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/davatron5000/FitVids.js/tree/v1.0.1"
                 data-name="v1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.1">v1.0.1</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>



  <div class="breadcrumb"><span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/davatron5000/FitVids.js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">FitVids.js</span></a></span></span><span class="separator">/</span>
    <a class="btn-link disabled tooltipped tooltipped-e" href="#" aria-label="You must be signed in to make or propose changes">
      <span class="octicon octicon-plus"></span>
    </a>
</div>
</div>



  
  <div class="commit commit-tease js-details-container" >
    <p class="commit-title ">
        <a href="/davatron5000/FitVids.js/commit/cf5d482e50da670bd5e35ec52f7960dd86b28043" class="message" data-pjax="true" title="Merge pull request #205 from AdamScheller/patch-1

Remove illegal character causing error">Merge pull request</a> <a href="https://github.com/davatron5000/FitVids.js/pull/205" class="issue-link" title="Remove illegal character causing error">#205</a> <a href="/davatron5000/FitVids.js/commit/cf5d482e50da670bd5e35ec52f7960dd86b28043" class="message" data-pjax="true" title="Merge pull request #205 from AdamScheller/patch-1

Remove illegal character causing error">from AdamScheller/patch-1</a>
        <span class="hidden-text-expander inline"><a href="#" class="js-details-target">…</a></span>
    </p>
      <div class="commit-desc"><pre>Remove illegal character causing error</pre></div>
    <div class="commit-meta">
      <button aria-label="Copy SHA" class="js-zeroclipboard zeroclipboard-link" data-clipboard-text="cf5d482e50da670bd5e35ec52f7960dd86b28043" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
      <a href="/davatron5000/FitVids.js/commit/cf5d482e50da670bd5e35ec52f7960dd86b28043" class="sha-block" data-pjax>latest commit <span class="sha">cf5d482e50</span></a>

      <div class="authorship">
        <img alt="Dave Rupert" class="avatar" data-user="42218" height="20" src="https://avatars1.githubusercontent.com/u/42218?v=3&amp;s=40" width="20" />
        <span class="author-name"><a href="/davatron5000" rel="author">davatron5000</a></span>
        authored <time class="updated" datetime="2015-02-13T21:20:07Z" is="relative-time">Feb 13, 2015</time>

      </div>
    </div>
  </div>

  
<div class="file-wrap">

  <table class="files" data-pjax>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><span class="octicon octicon-alert"></span></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/davatron5000/FitVids.js/blob/master/CONTRIBUTING.md" class="js-directory-link" id="6a3371457528722a734f3c51d9238c13-2e18c0a114e305647ac870ff49d7f3731c5cce80" title="CONTRIBUTING.md">CONTRIBUTING.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/davatron5000/FitVids.js/commit/f635d1db23e1916ac4ace978b8979551295b15ed" class="message" data-pjax="true" title="Contributing and issue requirements">Contributing and issue requirements</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2013-08-21T01:47:02Z" is="time-ago">Aug 20, 2013</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/davatron5000/FitVids.js/blob/master/README.md" class="js-directory-link" id="04c6e90faac2675aa89e2176d2eec7d8-65b749ea6531a59420ce1b6aef729b1b3005cc4b" title="README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/davatron5000/FitVids.js/commit/b28a84ded66e62e45c92e6e4be472a0e362213dd" class="message" data-pjax="true" title="Added support for disable selectors">Added support for disable selectors</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-04-07T20:33:52Z" is="time-ago">Apr 7, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/davatron5000/FitVids.js/blob/master/bower.json" class="js-directory-link" id="0a08a7565aba4405282251491979bb6b-c5d682f34a19b5f50c97fb3aa45c1f03ee166ac2" title="bower.json">bower.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/davatron5000/FitVids.js/commit/73b1628003de5d43f49ce1996aca6e49a4628191" class="message" data-pjax="true" title="Change package name in bower.json.

Change package name in bower.json to match registered package name.">Change package name in bower.json.</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-05-29T00:26:37Z" is="time-ago">May 28, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/davatron5000/FitVids.js/blob/master/jquery.fitvids.js" class="js-directory-link" id="9215100b711874a836983c3aba0f636d-f8d6b97766987dd275fff3d58df9f98b25fc924c" title="jquery.fitvids.js">jquery.fitvids.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/davatron5000/FitVids.js/commit/baec620e61b73bb147c8f7339f1afca5cee821d1" class="message" data-pjax="true" title="Remove illegal character causing error

Removed ) from  var videoID = &#39;fitvid&#39; + count);">Remove illegal character causing error</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-02-13T20:39:06Z" is="time-ago">Feb 13, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/davatron5000/FitVids.js/blob/master/tests.html" class="js-directory-link" id="1bc60d552b88b6da17ccc3f7faa84e2f-bade6f761c464cef4b40e317dc8ed4bc146488b3" title="tests.html">tests.html</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/davatron5000/FitVids.js/commit/f4ad1cc17315946d9d07d3f965bbd321146310b4" class="message" data-pjax="true" title="Fix indentation in tests.html">Fix indentation in tests.html</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-10-13T18:22:43Z" is="time-ago">Oct 13, 2014</time></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>


  <div id="readme" class="boxed-group flush clearfix announce instapaper_body md">
    <h3>
      <span class="octicon octicon-book"></span>
      README.md
    </h3>

    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1>
<a id="user-content-introducing-fitvidsjs" class="anchor" href="#introducing-fitvidsjs" aria-hidden="true"><span class="octicon octicon-link"></span></a>Introducing FitVids.js</h1>

<p>A lightweight, easy-to-use jQuery plugin for fluid width video embeds.</p>

<p>FitVids automates <a href="http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/">the Intrinsic Ratio Method by Thierry Koblentz</a> to achieve fluid width videos in your responsive web design.</p>

<h2>
<a id="user-content-how-do-i-use-it" class="anchor" href="#how-do-i-use-it" aria-hidden="true"><span class="octicon octicon-link"></span></a>How Do I Use It?</h2>

<p>Include jQuery 1.7+ and FitVids.js in your layout and target your videos container with <code>fitVids()</code>.</p>

<div class="highlight highlight-html"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>path/to/jquery.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>path/to/jquery.fitvids.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
<span class="pl-s1">&lt;<span class="pl-ent">script</span>&gt;</span>
<span class="pl-s1">  $(<span class="pl-c1">document</span>).ready(<span class="pl-k">function</span>(){</span>
<span class="pl-s1">    <span class="pl-c">// Target your .container, .wrapper, .post, etc.</span></span>
<span class="pl-s1">    $(<span class="pl-s"><span class="pl-pds">"</span>#thing-with-videos<span class="pl-pds">"</span></span>).fitVids();</span>
<span class="pl-s1">  });</span>
<span class="pl-s1">&lt;/<span class="pl-ent">script</span>&gt;</span></pre></div>

<p>This will wrap each video in a <code>div.fluid-width-video-wrapper</code> and apply the necessary CSS. After the initial Javascript call, it's all percentage-based CSS magic.</p>

<h2>
<a id="user-content-currently-supported-players" class="anchor" href="#currently-supported-players" aria-hidden="true"><span class="octicon octicon-link"></span></a>Currently Supported Players</h2>

<table>
<tr>
<td>YouTube</td>
<td>Y</td>
</tr>
<tr>
<td>Vimeo</td>
<td>Y</td>
</tr>
<tr>
<td>Blip.tv</td>
<td>Y*</td>
</tr>
<tr>
<td>Viddler</td>
<td>Y*</td>
</tr>
<tr>
<td>Kickstarter</td>
<td> Y*</td>
</tr>
</table>

<p><code>*</code> means native support for these may be deprecated. If your video platform is not currently supported, try adding it via a <code>customSelector</code>...</p>

<h2>
<a id="user-content-add-your-own-video-vendor" class="anchor" href="#add-your-own-video-vendor" aria-hidden="true"><span class="octicon octicon-link"></span></a>Add Your Own Video Vendor</h2>

<p>Have a custom video player? We now have a <code>customSelector</code> option where you can add your own specific video vendor selector (<em>mileage may vary depending on vendor and fluidity of player</em>):</p>

<div class="highlight highlight-javascript"><pre>  $(<span class="pl-s"><span class="pl-pds">"</span>#thing-with-videos<span class="pl-pds">"</span></span>).fitVids({ customSelector<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>iframe[src^='http://mycoolvideosite.com'], iframe[src^='http://myviiids.com']<span class="pl-pds">"</span></span>});
  <span class="pl-c">// Selectors are comma separated, just like CSS</span></pre></div>

<p><em>Note:</em> This will be the quickest way to add your own custom vendor as well as test your player's compatibility with FitVids.</p>

<h2>
<a id="user-content-ignore-with-class" class="anchor" href="#ignore-with-class" aria-hidden="true"><span class="octicon octicon-link"></span></a>Ignore With Class</h2>

<p>Have a video you want FitVids to ignore? You can slap a class of <code>fitvidsignore</code> on your object or container and your video will be displayed as it is defined.</p>

<p>If you'd like to add a custom block to ignore FitVids, use the <code>ignore</code> option.</p>

<div class="highlight highlight-javascript"><pre>  $(<span class="pl-s"><span class="pl-pds">"</span>#thing-with-videos<span class="pl-pds">"</span></span>).fitVids({ ignore<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>.mycooldiv, #myviiid<span class="pl-pds">'</span></span>});
  <span class="pl-c">// Selectors are comma separated, just like CSS</span></pre></div>

<h2>
<a id="user-content-known-issues" class="anchor" href="#known-issues" aria-hidden="true"><span class="octicon octicon-link"></span></a>Known issues</h2>

<ul class="task-list">
<li>Vimeo Autoplay API is not compatible with FitVids in IE11. You must manually wrap videos you want to autoplay.</li>
</ul>
</article>
  </div>


        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.03926s from github-fe135-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-d22b59d0085e83b7549ba4341ec9e68f80c2f29c8e49213ee182003dc8d568c6.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-504dff3e8e0e391a1b545db0b1d117e086a912948fd385da44a23112ae1063a4.js"></script>
      
      

  </body>
</html>

