# `timeZoneOrUtc`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/calendar-invite/calendar-invite-time.ts` · [Module README](../../../../../../../modules/core/runner/tools/calendar-invite/calendar-invite-time-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763927-763935](../../../../../../../../reference/runtime/host-main.cjs#L763927-L763935) | `FunctionDeclaration` | no | `timeZone` |
| [evaluation:557301-557309](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557301-L557309) | `FunctionDeclaration` | no | `timeZone` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763927-763935](../../../../../../../../reference/runtime/host-main.cjs#L763927-L763935) | 1 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:557301-557309](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557301-L557309) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:763927

Calls written directly in this body: `new Intl.DateTimeFormat`.

SHA-256 of the source span: `691b9d7046aad2d5e1d58a75748bd1b8d7d85a653ac19b3eb20bdc29c42549d2`.

### evaluation:557301

Calls written directly in this body: `new Intl.DateTimeFormat`.

SHA-256 of the source span: `691b9d7046aad2d5e1d58a75748bd1b8d7d85a653ac19b3eb20bdc29c42549d2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
