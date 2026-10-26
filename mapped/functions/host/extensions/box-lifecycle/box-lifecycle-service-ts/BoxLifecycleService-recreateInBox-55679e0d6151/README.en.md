# `BoxLifecycleService.recreateInBox`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-lifecycle/box-lifecycle-service.ts` · [Module README](../../../../../../modules/host/extensions/box-lifecycle/box-lifecycle-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506325-506331](../../../../../../../reference/runtime/host-main.cjs#L506325-L506331) | `method` | yes | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506325-506331](../../../../../../../reference/runtime/host-main.cjs#L506325-L506331) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:506325

Calls written directly in this body: `this.client.recreateSandBox`.

SHA-256 of the source span: `245f4eca1ec548118d03a1594dbaa31af097de63b0db59a676b5474796bc4d62`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
