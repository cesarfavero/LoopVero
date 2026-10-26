# `start/carryToBot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/secrets/extension.ts` · [Module README](../../../../../../modules/host/extensions/secrets/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:709368-709375](../../../../../../../reference/runtime/host-main.cjs#L709368-L709375) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709368-709375](../../../../../../../reference/runtime/host-main.cjs#L709368-L709375) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:709368 uses an implicit arrow-function return.

### host:709368

Calls written directly in this body: `carryBoxSecretsToBot`.

SHA-256 of the source span: `eefd3d11b084d336eee3223af06624a57de9bdd4a4bb3a9177689e8edea31005`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
