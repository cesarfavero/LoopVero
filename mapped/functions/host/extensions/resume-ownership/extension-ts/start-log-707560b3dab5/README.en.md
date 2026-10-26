# `start/log`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/resume-ownership/extension.ts` · [Module README](../../../../../../modules/host/extensions/resume-ownership/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708906-708906](../../../../../../../reference/runtime/host-main.cjs#L708906-L708906) | `ArrowFunctionExpression` | no | `message` |
| [host:708932-708932](../../../../../../../reference/runtime/host-main.cjs#L708932-L708932) | `ArrowFunctionExpression` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708906-708906](../../../../../../../reference/runtime/host-main.cjs#L708906-L708906) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:708906 uses an implicit arrow-function return.
| [host:708932-708932](../../../../../../../reference/runtime/host-main.cjs#L708932-L708932) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:708932 uses an implicit arrow-function return.

### host:708906

Calls written directly in this body: `context2.host.log`.

SHA-256 of the source span: `365ba132e52c16cd084268687673f78e2d8db45f8a122a4fbd2b074d580f2d78`.

### host:708932

Calls written directly in this body: `context2.host.log`.

SHA-256 of the source span: `365ba132e52c16cd084268687673f78e2d8db45f8a122a4fbd2b074d580f2d78`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
