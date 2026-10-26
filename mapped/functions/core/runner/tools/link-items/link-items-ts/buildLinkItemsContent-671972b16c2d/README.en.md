# `buildLinkItemsContent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/link-items/link-items.ts` · [Module README](../../../../../../../modules/core/runner/tools/link-items/link-items-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741095-741104](../../../../../../../../reference/runtime/host-main.cjs#L741095-L741104) | `FunctionDeclaration` | no | `lead, items` |
| [evaluation:482042-482051](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482042-L482051) | `FunctionDeclaration` | no | `lead, items` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741095-741104](../../../../../../../../reference/runtime/host-main.cjs#L741095-L741104) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:482042-482051](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482042-L482051) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:741095

Calls written directly in this body: `.join`, `items.map`, `lead.trim`.

SHA-256 of the source span: `7c105b7f353f42b31c990570176e80f3d266a3b237f894d17c7c26dfd4b397f8`.

### evaluation:482042

Calls written directly in this body: `.join`, `items.map`, `lead.trim`.

SHA-256 of the source span: `7c105b7f353f42b31c990570176e80f3d266a3b237f894d17c7c26dfd4b397f8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
