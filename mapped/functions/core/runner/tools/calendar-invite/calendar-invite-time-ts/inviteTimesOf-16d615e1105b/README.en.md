# `inviteTimesOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/calendar-invite/calendar-invite-time.ts` · [Module README](../../../../../../../modules/core/runner/tools/calendar-invite/calendar-invite-time-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763936-763968](../../../../../../../../reference/runtime/host-main.cjs#L763936-L763968) | `FunctionDeclaration` | no | `{   start,   end,   timeZone }` |
| [evaluation:557310-557342](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557310-L557342) | `FunctionDeclaration` | no | `{   start,   end,   timeZone }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763936-763968](../../../../../../../../reference/runtime/host-main.cjs#L763936-L763968) | 8 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:557310-557342](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557310-L557342) | 8 | 0 | 0 | 7 | 0 | 0 |

### host:763936

Calls written directly in this body: `DATE_ONLY3.test`, `Date.parse`, `HAS_OFFSET.test`, `ISO_DATE_TIME.test`, `Number.isFinite`, `invalid`, `midnightMs`, `realDateOf`.

SHA-256 of the source span: `a52f3017f1ffa8bc24884e45ad9a3508f4e7b5b3fe96e6aea04503602bbd4ac0`.

### evaluation:557310

Calls written directly in this body: `DATE_ONLY3.test`, `Date.parse`, `HAS_OFFSET.test`, `ISO_DATE_TIME.test`, `Number.isFinite`, `invalid`, `midnightMs`, `realDateOf`.

SHA-256 of the source span: `a52f3017f1ffa8bc24884e45ad9a3508f4e7b5b3fe96e6aea04503602bbd4ac0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
