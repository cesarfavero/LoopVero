# `createSandBrowserOpRunner/run`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726893-726949](../../../../../../../reference/runtime/host-main.cjs#L726893-L726949) | `FunctionExpression` | yes | `ctx, op, args` |
| [evaluation:561508-561564](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561508-L561564) | `FunctionExpression` | yes | `ctx, op, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726893-726949](../../../../../../../reference/runtime/host-main.cjs#L726893-L726949) | 12 | 0 | 3 | 5 | 0 | 1 |
| [evaluation:561508-561564](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561508-L561564) | 12 | 0 | 3 | 5 | 0 | 1 |

### host:726893

Calls written directly in this body: `.execute`, `.toString`, `Date.now`, `JSON.stringify`, `Object.hasOwn`, `buildHostShellArgs`, `deps.resourceAccessor.get`, `describeSandBrowserShellError`, `ensureUploaded`, `errorMessage`, `import_node_buffer6.Buffer.from`, `parseDriverResponse`, `sensitiveRequest`.

Assignment or increment targets: `result`.

SHA-256 of the source span: `da00f2b553b6a24807c0a03602076667ad1b2b746285b8848c608b03a0c29493`.

### evaluation:561508

Calls written directly in this body: `.execute`, `.toString`, `Date.now`, `JSON.stringify`, `Object.hasOwn`, `buildHostShellArgs`, `deps.resourceAccessor.get`, `describeSandBrowserShellError`, `ensureUploaded`, `errorMessage2`, `import_node_buffer10.Buffer.from`, `parseDriverResponse`, `sensitiveRequest`.

Assignment or increment targets: `result`.

SHA-256 of the source span: `a23a5140a79d76519f3264cce74156b28886e72d635435eeb95ad80affba84f8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
