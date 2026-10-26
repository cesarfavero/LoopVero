# `formatGrokBotAttachmentAlias`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/store/attachment-alias.ts` · [Module README](../../../../../modules/core/store/attachment-alias-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759585-759595](../../../../../../reference/runtime/host-main.cjs#L759585-L759595) | `FunctionDeclaration` | no | `{   agentDir,   bucket,   hex: hex3,   ext: ext2 }` |
| [evaluation:549753-549763](../../../../../../reference/runtime/sand-eval-runner.cjs#L549753-L549763) | `FunctionDeclaration` | no | `{   agentDir,   bucket,   hex: hex3,   ext: ext2 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759585-759595](../../../../../../reference/runtime/host-main.cjs#L759585-L759595) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:549753-549763](../../../../../../reference/runtime/sand-eval-runner.cjs#L549753-L549763) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:759585

Calls written directly in this body: `ALIAS_EXT.test`, `ALIAS_HEX.test`, `isAliasBucket`, `isGrokBotAttachmentAgentId`, `new Error`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `8d90772dc18a6ff7e38e80d2a82947588e07478424add66e63f1cf0818e88b6c`.

### evaluation:549753

Calls written directly in this body: `ALIAS_EXT.test`, `ALIAS_HEX.test`, `isAliasBucket`, `isGrokBotAttachmentAgentId`, `new Error`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `8d90772dc18a6ff7e38e80d2a82947588e07478424add66e63f1cf0818e88b6c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
