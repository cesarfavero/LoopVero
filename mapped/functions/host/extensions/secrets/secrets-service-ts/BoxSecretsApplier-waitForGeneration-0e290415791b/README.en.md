# `BoxSecretsApplier.waitForGeneration`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/secrets/secrets-service.ts` · [Module README](../../../../../../modules/host/extensions/secrets/secrets-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:709264-709285](../../../../../../../reference/runtime/host-main.cjs#L709264-L709285) | `method` | yes | `generation, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709264-709285](../../../../../../../reference/runtime/host-main.cjs#L709264-L709285) | 1 | 1 | 1 | 0 | 1 | 0 |

### host:709264

Calls written directly in this body: `new Promise`.

Explicit throw targets: `signal.reason`.

SHA-256 of the source span: `e5cdeda1e00366c43a135f9354bb77c56deeafda727b1c3d6b244484003065d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
