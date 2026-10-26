# `awaitUntilCallAborted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/inference/README.en.md).

**Module:** `shared/node/cursor-backend/cursor-inference.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225086-225106](../../../../../../../reference/runtime/host-main.cjs#L225086-L225106) | `FunctionDeclaration` | yes | `signal, work` |
| [evaluation:512149-512169](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512149-L512169) | `FunctionDeclaration` | yes | `signal, work` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225086-225106](../../../../../../../reference/runtime/host-main.cjs#L225086-L225106) | 1 | 0 | 1 | 1 | 1 | 0 |
| [evaluation:512149-512169](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512149-L512169) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:225086

Calls written directly in this body: `ConnectError.from`, `new Promise`.

Explicit throw targets: `ConnectError.from`.

SHA-256 of the source span: `6df291091240d1783ed49fa8116a91fb2cdc90e06033a8e3788a21f0b970df0e`.

### evaluation:512149

Calls written directly in this body: `ConnectError.from`, `new Promise`.

Explicit throw targets: `ConnectError.from`.

SHA-256 of the source span: `0dd4346ff351308718f194174d87d28b851083d8d559ac9abeab456b454b0a63`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
