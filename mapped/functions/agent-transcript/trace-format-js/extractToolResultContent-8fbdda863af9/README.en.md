# `extractToolResultContent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-transcript/trace-format.js` · [Module README](../../../../modules/agent-transcript/trace-format-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509609-509620](../../../../../reference/runtime/host-main.cjs#L509609-L509620) | `FunctionDeclaration` | no | `toolResult2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509609-509620](../../../../../reference/runtime/host-main.cjs#L509609-L509620) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:509609

Calls written directly in this body: `tryParseJson`.

SHA-256 of the source span: `1fdcaf97302a14add74c64af0da4d8da957d9392c7e488fe89dac63031c7d64d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
