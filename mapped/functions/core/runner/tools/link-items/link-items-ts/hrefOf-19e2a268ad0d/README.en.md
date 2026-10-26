# `hrefOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/link-items/link-items.ts` · [Module README](../../../../../../../modules/core/runner/tools/link-items/link-items-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741107-741113](../../../../../../../../reference/runtime/host-main.cjs#L741107-L741113) | `FunctionDeclaration` | no | `raw` |
| [evaluation:482054-482060](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482054-L482060) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741107-741113](../../../../../../../../reference/runtime/host-main.cjs#L741107-L741113) | 0 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:482054-482060](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482054-L482060) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:741107

Calls written directly in this body: `new URL`.

SHA-256 of the source span: `c7ddb65e7619d62762489a949c1da6a844dcddd2e14befaf9a98f6544c84e3b2`.

### evaluation:482054

Calls written directly in this body: `new URL`.

SHA-256 of the source span: `c7ddb65e7619d62762489a949c1da6a844dcddd2e14befaf9a98f6544c84e3b2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
