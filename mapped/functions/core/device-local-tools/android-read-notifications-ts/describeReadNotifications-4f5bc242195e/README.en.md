# `describeReadNotifications`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/android-read-notifications.ts` · [Module README](../../../../../modules/core/device-local-tools/android-read-notifications-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759067-759074](../../../../../../reference/runtime/host-main.cjs#L759067-L759074) | `FunctionDeclaration` | no | `app` |
| [evaluation:549227-549234](../../../../../../reference/runtime/sand-eval-runner.cjs#L549227-L549234) | `FunctionDeclaration` | no | `app` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759067-759074](../../../../../../reference/runtime/host-main.cjs#L759067-L759074) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:549227-549234](../../../../../../reference/runtime/sand-eval-runner.cjs#L549227-L549234) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:759067

Calls written directly in this body: `.trim`, `app.replace`, `words2.slice`.

SHA-256 of the source span: `54a6e2ca421a24260530f583e45d159acbded4340e1126cb3c529689b46f8434`.

### evaluation:549227

Calls written directly in this body: `.trim`, `app.replace`, `words.slice`.

SHA-256 of the source span: `dfc9dc5ef405a7fbab7f45b70f134766d9584cdac691a169366e92f2fa4f076d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
