# `isVaultCardValue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-value-guard.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-value-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767601-767603](../../../../../../../../reference/runtime/host-main.cjs#L767601-L767603) | `FunctionDeclaration` | no | `entry` |
| [evaluation:563118-563120](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563118-L563120) | `FunctionDeclaration` | no | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767601-767603](../../../../../../../../reference/runtime/host-main.cjs#L767601-L767603) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563118-563120](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563118-L563120) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:767601

Calls written directly in this body: `VAULT_CARD_FIELD_SUFFIX.test`, `entry.name.slice`, `entry.name.startsWith`.

SHA-256 of the source span: `bea6424d9459b4b7cf176f3e127b4153e9aa7e75eba162804c5521f733f77420`.

### evaluation:563118

Calls written directly in this body: `VAULT_CARD_FIELD_SUFFIX.test`, `entry.name.slice`, `entry.name.startsWith`.

SHA-256 of the source span: `bea6424d9459b4b7cf176f3e127b4153e9aa7e75eba162804c5521f733f77420`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
