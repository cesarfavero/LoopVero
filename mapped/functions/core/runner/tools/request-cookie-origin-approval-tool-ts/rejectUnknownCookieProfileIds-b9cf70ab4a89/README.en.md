# `rejectUnknownCookieProfileIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/tools/request-cookie-origin-approval-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/request-cookie-origin-approval-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775140-775152](../../../../../../../reference/runtime/host-main.cjs#L775140-L775152) | `FunctionDeclaration` | no | `requestedIds, items` |
| [evaluation:574787-574799](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574787-L574799) | `FunctionDeclaration` | no | `requestedIds, items` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775140-775152](../../../../../../../reference/runtime/host-main.cjs#L775140-L775152) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:574787-574799](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574787-L574799) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:775140

Calls written directly in this body: `.join`, `.map`, `complaints.join`, `complaints.push`, `items.map`, `new Map`, `new Set`, `requestedIds.filter`, `unknown3.map`.

SHA-256 of the source span: `a3d9eca92fec8bf79e6b944a19b909fd35801c41349fa55de6aafb12456517fd`.

### evaluation:574787

Calls written directly in this body: `.join`, `.map`, `complaints.join`, `complaints.push`, `items.map`, `new Map`, `new Set`, `requestedIds.filter`, `unknown2.map`.

SHA-256 of the source span: `07ae171884a3a952afa300380b0d0f2c4eafad9fb2d09477a4bf98e751efbcf9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
