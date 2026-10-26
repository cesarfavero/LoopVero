# `startHostPluginRegistry/onStopFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/registry.ts` · [Module README](../../../../../modules/host/extensions/registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786233-786233](../../../../../../reference/runtime/host-main.cjs#L786233-L786233) | `ArrowFunctionExpression` | no | `extensionId, error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786233-786233](../../../../../../reference/runtime/host-main.cjs#L786233-L786233) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:786233 uses an implicit arrow-function return.

### host:786233

Calls written directly in this body: `errorLogTag`, `host.log`.

SHA-256 of the source span: `7e67fe5f1d94faa0977640fa6e3e2c9b2131414171d407c6581b3bf863f714a3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
