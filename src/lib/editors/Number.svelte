<script lang="ts">
	import type { CommonComponentParameters } from "../types/CommonComponentParameters.ts";
	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: any;
</script>

<!-- event which calls pathChanged should be after all bindings so 'value' will have been updated -->
<svelte:component this={params.components['fieldWrapper']} {params} {schema}>
	<input id={params.path.join('.')} name={params.path.join('.')}
		type="number" value={value || ''} class="input px-4 py-2"
		placeholder="0"
		disabled={schema.readOnly || params.containerReadOnly}
		on:input={ev => {
			let val = parseFloat(ev.currentTarget.value);
			params.pathChanged(params.path, isNaN(val) ? undefined : val);
		}}
	/>
</svelte:component>