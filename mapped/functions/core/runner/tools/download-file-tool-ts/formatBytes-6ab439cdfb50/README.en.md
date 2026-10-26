# `formatBytes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/download-file-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/download-file-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773822-773826](../../../../../../../reference/runtime/host-main.cjs#L773822-L773826) | `FunctionDeclaration` | no | `bytes` |
| [evaluation:573043-573047](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573043-L573047) | `FunctionDeclaration` | no | `bytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773822-773826](../../../../../../../reference/runtime/host-main.cjs#L773822-L773826) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:573043-573047](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573043-L573047) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:773822

Calls written directly in this body: `.toFixed`.

SHA-256 of the source span: `0d9bb19f494e6564bf540f921afb3ec6ba734e4966b79574e25d989922f61631`.

### evaluation:573043

Calls written directly in this body: `.toFixed`.

SHA-256 of the source span: `0d9bb19f494e6564bf540f921afb3ec6ba734e4966b79574e25d989922f61631`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
