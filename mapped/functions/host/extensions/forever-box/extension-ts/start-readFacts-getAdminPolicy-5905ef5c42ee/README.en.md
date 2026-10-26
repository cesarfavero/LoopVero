# `start/readFacts/getAdminPolicy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/extension.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681086-681086](../../../../../../../reference/runtime/host-main.cjs#L681086-L681086) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681086-681086](../../../../../../../reference/runtime/host-main.cjs#L681086-L681086) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:681086 uses an implicit arrow-function return.

### host:681086

Calls written directly in this body: `teamAdminPolicy.getSnapshot`.

SHA-256 of the source span: `8ffbfa765ac8f6b955b78841c310491f8a311b3d9f531ca9c18bd8fc9bf2a70b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
