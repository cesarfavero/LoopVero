# `formatDeviceLocalToolResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/device-local-tool.ts` · [Module README](../../../../../modules/core/device-local-tools/device-local-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758423-758441](../../../../../../reference/runtime/host-main.cjs#L758423-L758441) | `FunctionDeclaration` | no | `result, tool` |
| [evaluation:548583-548601](../../../../../../reference/runtime/sand-eval-runner.cjs#L548583-L548601) | `FunctionDeclaration` | no | `result, tool` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758423-758441](../../../../../../reference/runtime/host-main.cjs#L758423-L758441) | 8 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:548583-548601](../../../../../../reference/runtime/sand-eval-runner.cjs#L548583-L548601) | 8 | 0 | 0 | 6 | 0 | 0 |

### host:758423

Calls written directly in this body: `JSON.stringify`, `sandNoPhoneForLocalToolMessage`.

SHA-256 of the source span: `ecf47a50fef2dd5a3143594a3013e7c8b034d59579795206a8a09c8d404a4ba8`.

### evaluation:548583

Calls written directly in this body: `JSON.stringify`, `sandNoPhoneForLocalToolMessage`.

SHA-256 of the source span: `ecf47a50fef2dd5a3143594a3013e7c8b034d59579795206a8a09c8d404a4ba8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
