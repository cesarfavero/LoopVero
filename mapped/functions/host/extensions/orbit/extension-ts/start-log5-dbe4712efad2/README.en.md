# `start/log5`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/extension.ts` · [Module README](../../../../../../modules/host/extensions/orbit/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706415-706415](../../../../../../../reference/runtime/host-main.cjs#L706415-L706415) | `ArrowFunctionExpression` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706415-706415](../../../../../../../reference/runtime/host-main.cjs#L706415-L706415) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:706415 uses an implicit arrow-function return.

### host:706415

Calls written directly in this body: `context2.host.log`.

SHA-256 of the source span: `22c5ab6c2c98bc7e1a4b7a52bb645b362269f49e58d74b3b3780b3cf5e6956dc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
