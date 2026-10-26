# `isNonCountryRegionCode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/grok-bot-vault.ts` · [Module README](../../../../../modules/shared/agents/grok-bot-vault-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724352-724354](../../../../../../reference/runtime/host-main.cjs#L724352-L724354) | `FunctionDeclaration` | no | `code` |
| [evaluation:549864-549866](../../../../../../reference/runtime/sand-eval-runner.cjs#L549864-L549866) | `FunctionDeclaration` | no | `code` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724352-724354](../../../../../../reference/runtime/host-main.cjs#L724352-L724354) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549864-549866](../../../../../../reference/runtime/sand-eval-runner.cjs#L549864-L549866) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724352

Calls written directly in this body: `NON_COUNTRY_REGION_CODES.has`.

SHA-256 of the source span: `dd03105f90a28bac004d21e79eaf516d99072bb91db08a863d4e2a6dc25947fc`.

### evaluation:549864

Calls written directly in this body: `NON_COUNTRY_REGION_CODES.has`.

SHA-256 of the source span: `dd03105f90a28bac004d21e79eaf516d99072bb91db08a863d4e2a6dc25947fc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
