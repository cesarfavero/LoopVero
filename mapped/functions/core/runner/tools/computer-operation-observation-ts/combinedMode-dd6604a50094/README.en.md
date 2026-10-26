# `combinedMode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-operation-observation.ts` · [Module README](../../../../../../modules/core/runner/tools/computer-operation-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776339-776347](../../../../../../../reference/runtime/host-main.cjs#L776339-L776347) | `FunctionDeclaration` | no | `getSelection` |
| [evaluation:575993-576001](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575993-L576001) | `FunctionDeclaration` | no | `getSelection` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776339-776347](../../../../../../../reference/runtime/host-main.cjs#L776339-L776347) | 2 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:575993-576001](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575993-L576001) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:776339

Calls written directly in this body: `getSelection`.

SHA-256 of the source span: `caf80329b366e9c6f345e9a0a5ee47a89eb57ecb1626a28f074796f74abc6a13`.

### evaluation:575993

Calls written directly in this body: `getSelection`.

SHA-256 of the source span: `caf80329b366e9c6f345e9a0a5ee47a89eb57ecb1626a28f074796f74abc6a13`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
