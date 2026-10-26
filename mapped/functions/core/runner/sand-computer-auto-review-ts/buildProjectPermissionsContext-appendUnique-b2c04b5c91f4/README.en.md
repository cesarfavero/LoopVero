# `buildProjectPermissionsContext/appendUnique`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699367-699374](../../../../../../reference/runtime/host-main.cjs#L699367-L699374) | `ArrowFunctionExpression` | no | `target, seen, values` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699367-699374](../../../../../../reference/runtime/host-main.cjs#L699367-L699374) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:699367

Calls written directly in this body: `seen.add`, `seen.has`, `target.push`, `value.trim`.

SHA-256 of the source span: `a67f3f7df298f24983d6cd6f10f94b73ee73924371a7a644283b46745ef3666c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
