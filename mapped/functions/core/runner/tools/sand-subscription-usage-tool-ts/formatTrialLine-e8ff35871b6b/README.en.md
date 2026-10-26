# `formatTrialLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-subscription-usage-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subscription-usage-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766629-766634](../../../../../../../reference/runtime/host-main.cjs#L766629-L766634) | `FunctionDeclaration` | no | `trialExpiresAtMs, nowMs2` |
| [evaluation:562142-562147](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562142-L562147) | `FunctionDeclaration` | no | `trialExpiresAtMs, nowMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766629-766634](../../../../../../../reference/runtime/host-main.cjs#L766629-L766634) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:562142-562147](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562142-L562147) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:766629

Calls written directly in this body: `formatCountdown`, `formatUtcTimestamp`.

SHA-256 of the source span: `a63febf5919c90102e835327ec5083fcdcb74e1c4857cd2515e08930807f5bc1`.

### evaluation:562142

Calls written directly in this body: `formatCountdown`, `formatUtcTimestamp`.

SHA-256 of the source span: `7c17e0ee48a72e4e7f37d0aca07eab018cb7727c19d0812e281dd278df5c1bfd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
