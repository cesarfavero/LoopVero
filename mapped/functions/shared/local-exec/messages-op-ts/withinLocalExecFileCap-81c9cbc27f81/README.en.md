# `withinLocalExecFileCap`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/local-exec/messages-op.ts` · [Module README](../../../../../modules/shared/local-exec/messages-op-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:486551-486553](../../../../../../reference/runtime/host-main.cjs#L486551-L486553) | `FunctionDeclaration` | no | `bytesBase64` |
| [evaluation:548425-548427](../../../../../../reference/runtime/sand-eval-runner.cjs#L548425-L548427) | `FunctionDeclaration` | no | `bytesBase64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486551-486553](../../../../../../reference/runtime/host-main.cjs#L486551-L486553) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:548425-548427](../../../../../../reference/runtime/sand-eval-runner.cjs#L548425-L548427) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:486551

Calls written directly in this body: `Math.floor`.

SHA-256 of the source span: `6c159ad53553d956af038f2a15b19a9551e921cffd7d9ec4c85e4f13da3c743b`.

### evaluation:548425

Calls written directly in this body: `Math.floor`.

SHA-256 of the source span: `6c159ad53553d956af038f2a15b19a9551e921cffd7d9ec4c85e4f13da3c743b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
