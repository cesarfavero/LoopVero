# `plan`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/image-display-rendition.ts` · [Module README](../../../../../../modules/host/extensions/attachments/image-display-rendition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498279-498304](../../../../../../../reference/runtime/host-main.cjs#L498279-L498304) | `FunctionExpression` | yes | `{ path: path33, ioPath }, step` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498279-498304](../../../../../../../reference/runtime/host-main.cjs#L498279-L498304) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:498279

Calls written directly in this body: `displayFilterGraph`, `needsDisplayRendition`, `step.attempt`.

SHA-256 of the source span: `e484240f9df420cb2ad1835f9d99de92fe84ccbfd11e26514f8fc6a5739a0772`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
