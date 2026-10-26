# `formatUtcTimestamp`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-subscription-usage-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subscription-usage-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766589-766591](../../../../../../../reference/runtime/host-main.cjs#L766589-L766591) | `FunctionDeclaration` | no | `ms2` |
| [evaluation:562102-562104](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562102-L562104) | `FunctionDeclaration` | no | `ms2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766589-766591](../../../../../../../reference/runtime/host-main.cjs#L766589-L766591) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:562102-562104](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562102-L562104) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:766589

Calls written directly in this body: `.replace`, `.toISOString`, `new Date`.

SHA-256 of the source span: `89a146fa0d30c2532c5937f1e130fb7ab165e4e56c6fc2a02a52c12cd6f49858`.

### evaluation:562102

Calls written directly in this body: `.replace`, `.toISOString`, `new Date`.

SHA-256 of the source span: `89a146fa0d30c2532c5937f1e130fb7ab165e4e56c6fc2a02a52c12cd6f49858`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
