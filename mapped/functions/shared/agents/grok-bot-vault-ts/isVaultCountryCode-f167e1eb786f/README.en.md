# `isVaultCountryCode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/grok-bot-vault.ts` · [Module README](../../../../../modules/shared/agents/grok-bot-vault-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724359-724363](../../../../../../reference/runtime/host-main.cjs#L724359-L724363) | `FunctionDeclaration` | no | `code` |
| [evaluation:549871-549875](../../../../../../reference/runtime/sand-eval-runner.cjs#L549871-L549875) | `FunctionDeclaration` | no | `code` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724359-724363](../../../../../../reference/runtime/host-main.cjs#L724359-L724363) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:549871-549875](../../../../../../reference/runtime/sand-eval-runner.cjs#L549871-L549875) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:724359

Calls written directly in this body: `.of`, `/^[A-Z]{2}$/.test`, `isNonCountryRegionCode`, `new Intl.DisplayNames`.

SHA-256 of the source span: `85dd7f948003a9a89ece19f11456fdf7352ec4d616d2c5d9c4915b8757329449`.

### evaluation:549871

Calls written directly in this body: `.of`, `/^[A-Z]{2}$/.test`, `isNonCountryRegionCode`, `new Intl.DisplayNames`.

SHA-256 of the source span: `85dd7f948003a9a89ece19f11456fdf7352ec4d616d2c5d9c4915b8757329449`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
