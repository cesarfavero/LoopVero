# `SandSourceMap.setMode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/source-map/source-map-service.ts` · [Module README](../../../../../../modules/host/extensions/source-map/source-map-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454409-454419](../../../../../../../reference/runtime/host-main.cjs#L454409-L454419) | `method` | yes | `agentId, mode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454409-454419](../../../../../../../reference/runtime/host-main.cjs#L454409-L454419) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:454409

Calls written directly in this body: `crypto.randomUUID`, `this.load`, `this.save`.

Assignment or increment targets: `map4[computed]`.

SHA-256 of the source span: `755d839e066f06d5a005e3e9eee0ce0515609f115ee603f38185158bee03a548`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
