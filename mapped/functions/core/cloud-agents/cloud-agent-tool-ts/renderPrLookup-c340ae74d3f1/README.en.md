# `renderPrLookup`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-tool.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:568058-568087](../../../../../../reference/runtime/sand-eval-runner.cjs#L568058-L568087) | `FunctionDeclaration` | no | `lookup3, view` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:568058-568087](../../../../../../reference/runtime/sand-eval-runner.cjs#L568058-L568087) | 4 | 0 | 0 | 2 | 0 | 0 |

### evaluation:568058

Calls written directly in this body: `lines2.join`, `lines2.push`, `lookup3.coordinators.map`, `lookup3.involved.map`, `lookup3.other.map`, `new Map`.

SHA-256 of the source span: `6c2481767980257dbb548a832f2bd1c95d9617fd0c804b6c847757488d625dc3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
