<script lang="ts">
	import type { CommonComponentParameters } from "../types/CommonComponentParameters.ts";
	export let params: CommonComponentParameters;
	export let value: any;
</script>

<!-- event which calls pathChanged should be after all bindings so 'value' will have been updated -->
	<input id={params.path.join('.')} name={params.path.join('.')}
		type="hidden" value={value || ''}
	/>