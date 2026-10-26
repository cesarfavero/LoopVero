# `isTerminalHarnessMigrationRpcError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/resume-ownership/extension.ts` · [Module README](../../../../../../modules/host/extensions/resume-ownership/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708810-708812](../../../../../../../reference/runtime/host-main.cjs#L708810-L708812) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708810-708812](../../../../../../../reference/runtime/host-main.cjs#L708810-L708812) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:708810

Calls written directly in this body: `ConnectError.from`, `TERMINAL_MIGRATION_RPC_CODES.has`.

SHA-256 of the source span: `59db05f15f9512baf5cd3c5d9b41b203f35fb510799810f73a08317433eaaea0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
