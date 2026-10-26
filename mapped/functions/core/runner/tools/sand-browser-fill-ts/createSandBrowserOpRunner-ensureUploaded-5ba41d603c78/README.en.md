# `createSandBrowserOpRunner/ensureUploaded`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726802-726813](../../../../../../../reference/runtime/host-main.cjs#L726802-L726813) | `ArrowFunctionExpression` | no | `ctx` |
| [evaluation:561417-561428](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561417-L561428) | `ArrowFunctionExpression` | no | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726802-726813](../../../../../../../reference/runtime/host-main.cjs#L726802-L726813) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:561417-561428](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561417-L561428) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726802

Calls written directly in this body: `.catch`, `deps.agentBox.uploadFile`, `import_node_buffer6.Buffer.from`.

Assignment or increment targets: `uploaded`.

SHA-256 of the source span: `7c7f7992fe12c9a49833a134cb7e3fa2ac555de5306962b1f95cec7b4049f8e4`.

### evaluation:561417

Calls written directly in this body: `.catch`, `deps.agentBox.uploadFile`, `import_node_buffer10.Buffer.from`.

Assignment or increment targets: `uploaded`.

SHA-256 of the source span: `c37f7e2e088f84eb3bead5644bcc9118c4e5e156a164b4de8cd5d29fdf749469`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
