# `dueChange`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/ios-write-reminders.ts` · [Module README](../../../../../modules/core/device-local-tools/ios-write-reminders-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758990-758992](../../../../../../reference/runtime/host-main.cjs#L758990-L758992) | `FunctionDeclaration` | no | `due` |
| [evaluation:549150-549152](../../../../../../reference/runtime/sand-eval-runner.cjs#L549150-L549152) | `FunctionDeclaration` | no | `due` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758990-758992](../../../../../../reference/runtime/host-main.cjs#L758990-L758992) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549150-549152](../../../../../../reference/runtime/sand-eval-runner.cjs#L549150-L549152) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:758990

Calls written directly in this body: `dueText`.

SHA-256 of the source span: `173d2b7d400dcfa1fbb3bf8a005ca1407705b83cadfaa2a6532224eb94beaa97`.

### evaluation:549150

Calls written directly in this body: `dueText`.

SHA-256 of the source span: `173d2b7d400dcfa1fbb3bf8a005ca1407705b83cadfaa2a6532224eb94beaa97`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
