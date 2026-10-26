# `readLinesTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meeting-request-tools.ts` · [Module README](../../../../../modules/core/meetings/meeting-request-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763353-763375](../../../../../../reference/runtime/host-main.cjs#L763353-L763375) | `FunctionDeclaration` | no | `deps` |
| [evaluation:556318-556340](../../../../../../reference/runtime/sand-eval-runner.cjs#L556318-L556340) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763353-763375](../../../../../../reference/runtime/host-main.cjs#L763353-L763375) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556318-556340](../../../../../../reference/runtime/sand-eval-runner.cjs#L556318-L556340) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:763353

Calls written directly in this body: `defineCommunicateTool`, `external_exports2.object`.

SHA-256 of the source span: `928de635d4b9c41dedef169414d9fe2db28f5e623032acb1c61e81cfada13e7a`.

### evaluation:556318

Calls written directly in this body: `defineCommunicateTool`, `external_exports3.object`.

SHA-256 of the source span: `f8362a84f13d20236a700fb0f05d0ac076a48eb261c6e8fd945be3f29833a246`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
