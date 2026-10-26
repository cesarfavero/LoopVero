# `start/log5`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/extension.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681837-681837](../../../../../../../reference/runtime/host-main.cjs#L681837-L681837) | `ArrowFunctionExpression` | no | `level, message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681837-681837](../../../../../../../reference/runtime/host-main.cjs#L681837-L681837) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:681837 uses an implicit arrow-function return.

### host:681837

Calls written directly in this body: `context2.deps.telemetry.logs.reportHostLog`.

SHA-256 of the source span: `cc5ae64c39d68a80a3366baf1b924c5526bd12d60dd1fda372d8299a28d1d359`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
