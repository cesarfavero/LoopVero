# `parseGrokBotAttachmentAlias`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/store/attachment-alias.ts` · [Module README](../../../../../modules/core/store/attachment-alias-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759617-759632](../../../../../../reference/runtime/host-main.cjs#L759617-L759632) | `FunctionDeclaration` | no | `path33` |
| [evaluation:549785-549800](../../../../../../reference/runtime/sand-eval-runner.cjs#L549785-L549800) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759617-759632](../../../../../../reference/runtime/host-main.cjs#L759617-L759632) | 4 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:549785-549800](../../../../../../reference/runtime/sand-eval-runner.cjs#L549785-L549800) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:759617

Calls written directly in this body: `.split`, `ALIAS_FILE.exec`, `ALIAS_ROOTS.find`, `bare.slice`, `barePathOf`, `formatGrokBotAttachmentAlias`, `isAliasBucket`, `isGrokBotAttachmentAgentId`.

SHA-256 of the source span: `65b73d322f422788cd8ace27c832bb99e1c8aa4848f77dc25b444bac273d54aa`.

### evaluation:549785

Calls written directly in this body: `.split`, `ALIAS_FILE.exec`, `ALIAS_ROOTS.find`, `bare.slice`, `barePathOf`, `formatGrokBotAttachmentAlias`, `isAliasBucket`, `isGrokBotAttachmentAgentId`.

SHA-256 of the source span: `65b73d322f422788cd8ace27c832bb99e1c8aa4848f77dc25b444bac273d54aa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
