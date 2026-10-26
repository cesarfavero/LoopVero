# `dueText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/ios-write-reminders.ts` · [Module README](../../../../../modules/core/device-local-tools/ios-write-reminders-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758954-758959](../../../../../../reference/runtime/host-main.cjs#L758954-L758959) | `FunctionDeclaration` | no | `due` |
| [evaluation:549114-549119](../../../../../../reference/runtime/sand-eval-runner.cjs#L549114-L549119) | `FunctionDeclaration` | no | `due` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758954-758959](../../../../../../reference/runtime/host-main.cjs#L758954-L758959) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:549114-549119](../../../../../../reference/runtime/sand-eval-runner.cjs#L549114-L549119) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:758954

Calls written directly in this body: `.replace`, `DUE_ZONE.exec`, `due.slice`.

SHA-256 of the source span: `32a24fd74ccd19bc1e3af1c3bd1243ffe7ff6484050560033e6595eb495f105c`.

### evaluation:549114

Calls written directly in this body: `.replace`, `DUE_ZONE.exec`, `due.slice`.

SHA-256 of the source span: `32a24fd74ccd19bc1e3af1c3bd1243ffe7ff6484050560033e6595eb495f105c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
