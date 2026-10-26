# `explainMissingSourcePath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/upload-file-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/upload-file-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774591-774600](../../../../../../../reference/runtime/host-main.cjs#L774591-L774600) | `FunctionDeclaration` | no | `value, ctx` |
| [evaluation:574194-574203](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574194-L574203) | `FunctionDeclaration` | no | `value, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774591-774600](../../../../../../../reference/runtime/host-main.cjs#L774591-L774600) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574194-574203](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574194-L574203) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:774591

Calls written directly in this body: `ctx.addIssue`, `isUnknownRecord2`.

SHA-256 of the source span: `44ccc8d0b71dd60b94130eea3cc9723da5372d6fe64428d2e5d2bfca6db972e6`.

### evaluation:574194

Calls written directly in this body: `ctx.addIssue`, `isUnknownRecord2`.

SHA-256 of the source span: `141215916d77e1578e792641a33a94480caec1305a06f9e39f8bf20eb601fcb1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
