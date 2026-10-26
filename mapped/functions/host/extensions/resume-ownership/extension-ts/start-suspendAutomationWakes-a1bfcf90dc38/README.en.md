# `start/suspendAutomationWakes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/resume-ownership/extension.ts` · [Module README](../../../../../../modules/host/extensions/resume-ownership/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708915-708915](../../../../../../../reference/runtime/host-main.cjs#L708915-L708915) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708915-708915](../../../../../../../reference/runtime/host-main.cjs#L708915-L708915) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:708915 uses an implicit arrow-function return.

### host:708915

Calls written directly in this body: `automations.suspendWakes`.

SHA-256 of the source span: `39019dc26184b6b73c8d4279fdb8694475b592b8fe0aad39c626fd36fee4ef77`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
