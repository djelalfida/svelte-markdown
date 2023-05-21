<script>
	export let fileName = '';
	export let fileType = '';

	const fileIcon = {
		svelte: '/images/icons/svelte.svg',
		csharp: '/images/icons/csharp.svg',
		js: '/images/icons/js.svg',
		json: '/images/icons/json.svg',
		md: '/images/icons/md.svg'
	};
</script>

<div class="file-name">
	<span class="file-icon">
		<img src={fileIcon[fileType]} alt={fileType} />
	</span>
	{fileName === fileType ? fileName : `${fileName}.${fileType}`}
</div>

<style>
	.file-name {
		position: relative;
		bottom: -22px;
		z-index: 50;
		display: inline-flex;
		align-items: center;
		border-top-width: 2px !important;
		border-left-width: 2px !important;
		border-right-width: 2px !important;
		--tw-border-opacity: 1;
		border-color: rgb(42 46 53 / var(--tw-border-opacity));
		--tw-bg-opacity: 1;
		background-color: rgb(18 24 27 / var(--tw-bg-opacity));
		padding: 0.5rem 1rem 0.5rem 0.5rem;
		--tw-text-opacity: 1;
		color: rgb(108 121 131 / var(--tw-text-opacity));
		border: 0px solid rgb(42 46 53 / var(--tw-border-opacity));
	}

	.file-name .file-icon img {
		margin-right: 0.5rem;
		display: block;
		width: 1.25rem;
	}
</style>
