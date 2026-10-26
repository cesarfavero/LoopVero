# `realDateOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/calendar-invite/calendar-invite-time.ts` · [Module README](../../../../../../../modules/core/runner/tools/calendar-invite/calendar-invite-time-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763996-764002](../../../../../../../../reference/runtime/host-main.cjs#L763996-L764002) | `FunctionDeclaration` | no | `value` |
| [evaluation:557370-557376](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557370-L557376) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763996-764002](../../../../../../../../reference/runtime/host-main.cjs#L763996-L764002) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:557370-557376](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557370-L557376) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:763996

Calls written directly in this body: `DATE_PREFIX.exec`, `Date.UTC`, `Number`, `new Date`, `utc.getUTCDate`, `utc.getUTCFullYear`, `utc.getUTCMonth`.

SHA-256 of the source span: `5e41cb61829a15e3b182650ac0235c303ec13cf1c521280759cd666a2e7964e1`.

### evaluation:557370

Calls written directly in this body: `DATE_PREFIX.exec`, `Date.UTC`, `Number`, `new Date`, `utc.getUTCDate`, `utc.getUTCFullYear`, `utc.getUTCMonth`.

SHA-256 of the source span: `5e41cb61829a15e3b182650ac0235c303ec13cf1c521280759cd666a2e7964e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
