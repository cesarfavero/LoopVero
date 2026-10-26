# `jsonReviver`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-transcript/index.js` · [Module README](../../../../modules/agent-transcript/index-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509716-509722](../../../../../reference/runtime/host-main.cjs#L509716-L509722) | `FunctionDeclaration` | no | `_key, value` |
| [evaluation:304091-304097](../../../../../reference/runtime/sand-eval-runner.cjs#L304091-L304097) | `FunctionDeclaration` | no | `_key, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509716-509722](../../../../../reference/runtime/host-main.cjs#L509716-L509722) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:304091-304097](../../../../../reference/runtime/sand-eval-runner.cjs#L304091-L304097) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:509716

Calls written directly in this body: `createTranscriptBinaryPlaceholder`.

SHA-256 of the source span: `ea2f578a7a83d5f53c3ade6cdcb5c04bf484d9d8e4cee38470362d4ce760addb`.

### evaluation:304091

Calls written directly in this body: `createTranscriptBinaryPlaceholder`.

SHA-256 of the source span: `ea2f578a7a83d5f53c3ade6cdcb5c04bf484d9d8e4cee38470362d4ce760addb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
