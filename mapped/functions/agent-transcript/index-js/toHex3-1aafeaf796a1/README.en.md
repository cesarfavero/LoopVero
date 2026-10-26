# `toHex3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-transcript/index.js` · [Module README](../../../../modules/agent-transcript/index-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:304073-304075](../../../../../reference/runtime/sand-eval-runner.cjs#L304073-L304075) | `FunctionDeclaration` | no | `bytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:304073-304075](../../../../../reference/runtime/sand-eval-runner.cjs#L304073-L304075) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:304073

Calls written directly in this body: `.join`, `.map`, `Array.from`.

SHA-256 of the source span: `c4ca7626b3cbcc6bfaf847a3d64a761207d196fa4184d7d3634b97c3afc2e9e6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
