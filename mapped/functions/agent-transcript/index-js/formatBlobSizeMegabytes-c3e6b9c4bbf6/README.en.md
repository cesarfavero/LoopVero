# `formatBlobSizeMegabytes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-transcript/index.js` · [Module README](../../../../modules/agent-transcript/index-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509727-509729](../../../../../reference/runtime/host-main.cjs#L509727-L509729) | `FunctionDeclaration` | no | `bytes` |
| [evaluation:304102-304104](../../../../../reference/runtime/sand-eval-runner.cjs#L304102-L304104) | `FunctionDeclaration` | no | `bytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509727-509729](../../../../../reference/runtime/host-main.cjs#L509727-L509729) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304102-304104](../../../../../reference/runtime/sand-eval-runner.cjs#L304102-L304104) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509727

Calls written directly in this body: `.toFixed`.

SHA-256 of the source span: `962ebad43de2b8ab96f2ca323188521499402fac34bf61603ed57f5663afdaa3`.

### evaluation:304102

Calls written directly in this body: `.toFixed`.

SHA-256 of the source span: `962ebad43de2b8ab96f2ca323188521499402fac34bf61603ed57f5663afdaa3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
