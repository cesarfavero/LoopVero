# `SandSourceMap.getOrCreate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/source-map/source-map-service.ts` · [Module README](../../../../../../modules/host/extensions/source-map/source-map-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454393-454401](../../../../../../../reference/runtime/host-main.cjs#L454393-L454401) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454393-454401](../../../../../../../reference/runtime/host-main.cjs#L454393-L454401) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:454393

Calls written directly in this body: `crypto.randomUUID`, `this.load`, `this.save`.

Assignment or increment targets: `map4[computed]`.

SHA-256 of the source span: `87ee557ccc9228b98031c558eb40c743a42c56eb475f007f92c3bec7e6487094`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
