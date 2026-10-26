# `CoreMessageSerde.deserialize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-transcript/index.js` · [Module README](../../../../modules/agent-transcript/index-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509755-509761](../../../../../reference/runtime/host-main.cjs#L509755-L509761) | `method` | no | `blob` |
| [evaluation:304130-304136](../../../../../reference/runtime/sand-eval-runner.cjs#L304130-L304136) | `method` | no | `blob` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509755-509761](../../../../../reference/runtime/host-main.cjs#L509755-L509761) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:304130-304136](../../../../../reference/runtime/sand-eval-runner.cjs#L304130-L304136) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:509755

Calls written directly in this body: `JSON.parse`, `json3.includes`, `textDecoder.decode`.

SHA-256 of the source span: `61e89e0130c1904c4039f40b059d8e6b005309b54995d376240cf2b8852395ca`.

### evaluation:304130

Calls written directly in this body: `JSON.parse`, `json3.includes`, `textDecoder.decode`.

SHA-256 of the source span: `61e89e0130c1904c4039f40b059d8e6b005309b54995d376240cf2b8852395ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
