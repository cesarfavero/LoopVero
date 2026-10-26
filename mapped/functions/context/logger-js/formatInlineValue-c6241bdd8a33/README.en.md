# `formatInlineValue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225490-225550](../../../../../reference/runtime/host-main.cjs#L225490-L225550) | `FunctionDeclaration` | no | `value, options2, colors, depth, seen, path33` |
| [evaluation:1978-2038](../../../../../reference/runtime/sand-eval-runner.cjs#L1978-L2038) | `FunctionDeclaration` | no | `value, options2, colors, depth, seen, path33` |
| [state-worker:21367-21427](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21367-L21427) | `FunctionDeclaration` | no | `value, options, colors, depth, seen, path` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225490-225550](../../../../../reference/runtime/host-main.cjs#L225490-L225550) | 19 | 0 | 0 | 18 | 0 | 0 |
| [evaluation:1978-2038](../../../../../reference/runtime/sand-eval-runner.cjs#L1978-L2038) | 19 | 0 | 0 | 18 | 0 | 0 |
| [state-worker:21367-21427](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21367-L21427) | 19 | 0 | 0 | 18 | 0 | 0 |

### host:225490

Calls written directly in this body: `Array.from`, `Array.isArray`, `ArrayBuffer.isView`, `JSON.stringify`, `Number.isNaN`, `String`, `applyInlineSerializer`, `colors.cyan`, `colors.dim`, `colors.gray`, `colors.green`, `colors.magenta`, `colors.yellow`, `formatErrorSummary`, `formatInlineArray`, `formatInlineMap`, `formatInlineObject`, `isErrorLike`, `isInlineSummary`, `truncateString`, `value.getTime`, `value.toISOString`, `value.toString`, `value.values`.

Assignment or increment targets: `value`.

SHA-256 of the source span: `de002449f46cacad04ac655f42f78b9e384ca1761591feadef52bdc4fcd0e052`.

### evaluation:1978

Calls written directly in this body: `Array.from`, `Array.isArray`, `ArrayBuffer.isView`, `JSON.stringify`, `Number.isNaN`, `String`, `applyInlineSerializer`, `colors.cyan`, `colors.dim`, `colors.gray`, `colors.green`, `colors.magenta`, `colors.yellow`, `formatErrorSummary`, `formatInlineArray`, `formatInlineMap`, `formatInlineObject`, `isErrorLike`, `isInlineSummary`, `truncateString`, `value.getTime`, `value.toISOString`, `value.toString`, `value.values`.

Assignment or increment targets: `value`.

SHA-256 of the source span: `de002449f46cacad04ac655f42f78b9e384ca1761591feadef52bdc4fcd0e052`.

### state-worker:21367

Calls written directly in this body: `Array.from`, `Array.isArray`, `ArrayBuffer.isView`, `JSON.stringify`, `Number.isNaN`, `String`, `applyInlineSerializer`, `colors.cyan`, `colors.dim`, `colors.gray`, `colors.green`, `colors.magenta`, `colors.yellow`, `formatErrorSummary`, `formatInlineArray`, `formatInlineMap`, `formatInlineObject`, `isErrorLike`, `isInlineSummary`, `truncateString`, `value.getTime`, `value.toISOString`, `value.toString`, `value.values`.

Assignment or increment targets: `value`.

SHA-256 of the source span: `c3532b3116c5cfdb30c68c05ab41d3e37f7e5199fb04bf63752a76fe960f4a5f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
