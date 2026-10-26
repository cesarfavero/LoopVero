# `jsonReplacer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-transcript/index.js` · [Module README](../../../../modules/agent-transcript/index-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509701-509712](../../../../../reference/runtime/host-main.cjs#L509701-L509712) | `FunctionDeclaration` | no | `_key, value` |
| [evaluation:304076-304087](../../../../../reference/runtime/sand-eval-runner.cjs#L304076-L304087) | `FunctionDeclaration` | no | `_key, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509701-509712](../../../../../reference/runtime/host-main.cjs#L509701-L509712) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:304076-304087](../../../../../reference/runtime/sand-eval-runner.cjs#L304076-L304087) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:509701

Calls written directly in this body: `toHex`, `value.toString`.

SHA-256 of the source span: `068ad71bf9907878f8e0a1f2535aa01a5a5b344fb7e19fbb8f1dfd267e10217b`.

### evaluation:304076

Calls written directly in this body: `toHex3`, `value.toString`.

SHA-256 of the source span: `d32e5480808aa10da307e4db56e76ff977946978648f20588281446e35192108`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
