<template>
	<div class="app">
		<div class="mb-5 p-1">
			<div class="d-flex">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/">SodoMusic</a>
        <button class="navbar-toggler hidden-lg-up" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/" aria-current="page">Home <span class="visually-hidden">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/best">Top song</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/auth">Log In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   </div>
		</div>
		<router-view></router-view>
	</div>
</template>

<style >
body {
  background: #100a14;
}
.text {
  color: #f2f8f8 !important;
}
.block {
  background: #f2f8f8;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>