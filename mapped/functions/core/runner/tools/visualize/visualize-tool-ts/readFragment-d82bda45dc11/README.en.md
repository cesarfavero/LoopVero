# `readFragment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/visualize/visualize-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/visualize/visualize-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768523-768547](../../../../../../../../reference/runtime/host-main.cjs#L768523-L768547) | `FunctionDeclaration` | yes | `ctx, source, readBoxFile` |
| [evaluation:564038-564062](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564038-L564062) | `FunctionDeclaration` | yes | `ctx, source, readBoxFile` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768523-768547](../../../../../../../../reference/runtime/host-main.cjs#L768523-L768547) | 4 | 0 | 1 | 2 | 4 | 1 |
| [evaluation:564038-564062](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564038-L564062) | 4 | 0 | 1 | 2 | 4 | 1 |

### host:768523

Calls written directly in this body: `.decode`, `isBoxFileMissingError`, `isBoxRootPath`, `new SandToolInputError`, `new TextDecoder`, `readBoxFile`, `resolveBoxWorkspacePath`.

Explicit throw targets: `SandToolInputError`, `error64`.

SHA-256 of the source span: `8751f559bc2c0213765c59d46ebd450e77bb98c2ed055dddd482e302699fcfae`.

### evaluation:564038

Calls written directly in this body: `.decode`, `isBoxFileMissingError`, `isBoxRootPath`, `new SandToolInputError`, `new TextDecoder`, `readBoxFile`, `resolveBoxWorkspacePath`.

Explicit throw targets: `SandToolInputError`, `error63`.

SHA-256 of the source span: `6370bbe5668e106d51f1754821146ad61426c4199bd5e51c3aa6a8322f738726`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
