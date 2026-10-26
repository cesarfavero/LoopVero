# `provesOsPermissionGranted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/sand-device-local-tools.ts` · [Module README](../../../../../modules/core/device-local-tools/sand-device-local-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759530-759532](../../../../../../reference/runtime/host-main.cjs#L759530-L759532) | `FunctionDeclaration` | no | `toolId` |
| [evaluation:549690-549692](../../../../../../reference/runtime/sand-eval-runner.cjs#L549690-L549692) | `FunctionDeclaration` | no | `toolId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759530-759532](../../../../../../reference/runtime/host-main.cjs#L759530-L759532) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549690-549692](../../../../../../reference/runtime/sand-eval-runner.cjs#L549690-L549692) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:759530

Calls written directly in this body: `COMPUTER_USE_TOOLS_WITHOUT_OS_PERMISSION.has`.

SHA-256 of the source span: `cd206551632ce1795efa201ec286243cfa72238646d0a3cefb1258f8b762fe42`.

### evaluation:549690

Calls written directly in this body: `COMPUTER_USE_TOOLS_WITHOUT_OS_PERMISSION.has`.

SHA-256 of the source span: `cd206551632ce1795efa201ec286243cfa72238646d0a3cefb1258f8b762fe42`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
