# `createComputerUseCoordination/uploadDriver`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/computer-use.ts` · [Module README](../../../../../modules/core/runner/computer-use-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:525302-525317](../../../../../../reference/runtime/sand-eval-runner.cjs#L525302-L525317) | `ArrowFunctionExpression` | no | `ctx, boxId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525302-525317](../../../../../../reference/runtime/sand-eval-runner.cjs#L525302-L525317) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:525302

Calls written directly in this body: `.catch`, `deps.remoteBox.uploadFile`, `driverUploadByBox.get`, `driverUploadByBox.set`, `import_node_buffer5.Buffer.from`.

Assignment or increment targets: `upload`.

SHA-256 of the source span: `f9fd2ab89321b7079478be6874b1bc507ed43720608063d304e4bcb103ff1f22`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
