# `withDeviceToolPermissionCards`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/device-tool-permission-cards.ts` · [Module README](../../../../../modules/core/device-local-tools/device-tool-permission-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769963-770020](../../../../../../reference/runtime/host-main.cjs#L769963-L770020) | `FunctionDeclaration` | no | `port, host` |
| [evaluation:566122-566179](../../../../../../reference/runtime/sand-eval-runner.cjs#L566122-L566179) | `FunctionDeclaration` | no | `port, host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769963-770020](../../../../../../reference/runtime/host-main.cjs#L769963-L770020) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:566122-566179](../../../../../../reference/runtime/sand-eval-runner.cjs#L566122-L566179) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:769963

Calls written directly in this body: `new Set`.

SHA-256 of the source span: `e58f351dc79efb9c739c7ed11e674d5d91e4feb585c08be172017d2a9f05f3c3`.

### evaluation:566122

Calls written directly in this body: `new Set`.

SHA-256 of the source span: `e58f351dc79efb9c739c7ed11e674d5d91e4feb585c08be172017d2a9f05f3c3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
