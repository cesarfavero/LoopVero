# `tryParseJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-transcript/trace-format.js` · [Module README](../../../../modules/agent-transcript/trace-format-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509587-509595](../../../../../reference/runtime/host-main.cjs#L509587-L509595) | `FunctionDeclaration` | no | `str3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509587-509595](../../../../../reference/runtime/host-main.cjs#L509587-L509595) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:509587

Calls written directly in this body: `JSON.parse`.

SHA-256 of the source span: `974530c43a5968875210104a2a6a8e46f2491136cdea512aae6cf44f0e575165`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
