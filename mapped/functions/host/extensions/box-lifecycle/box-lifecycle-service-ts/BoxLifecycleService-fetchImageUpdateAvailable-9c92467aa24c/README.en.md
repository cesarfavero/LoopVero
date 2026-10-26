# `BoxLifecycleService.fetchImageUpdateAvailable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-lifecycle/box-lifecycle-service.ts` · [Module README](../../../../../../modules/host/extensions/box-lifecycle/box-lifecycle-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506321-506324](../../../../../../../reference/runtime/host-main.cjs#L506321-L506324) | `method` | yes | `signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506321-506324](../../../../../../../reference/runtime/host-main.cjs#L506321-L506324) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:506321

Calls written directly in this body: `this.client.getSandBoxRunState`.

SHA-256 of the source span: `08c5c45d6d8742d42fd7373980e460a3529d49f3215e401e6b598c156db94d20`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
