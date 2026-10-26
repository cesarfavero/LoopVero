# `createOversizeBlobOmittedMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-transcript/index.js` · [Module README](../../../../modules/agent-transcript/index-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509730-509735](../../../../../reference/runtime/host-main.cjs#L509730-L509735) | `FunctionDeclaration` | no | `blobSizeBytes` |
| [evaluation:304105-304110](../../../../../reference/runtime/sand-eval-runner.cjs#L304105-L304110) | `FunctionDeclaration` | no | `blobSizeBytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509730-509735](../../../../../reference/runtime/host-main.cjs#L509730-L509735) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304105-304110](../../../../../reference/runtime/sand-eval-runner.cjs#L304105-L304110) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509730

Calls written directly in this body: `formatBlobSizeMegabytes`.

SHA-256 of the source span: `83a2f56b5655ea374affbb51f994863e1c9076862bc853a6f16244bc0b257406`.

### evaluation:304105

Calls written directly in this body: `formatBlobSizeMegabytes`.

SHA-256 of the source span: `83a2f56b5655ea374affbb51f994863e1c9076862bc853a6f16244bc0b257406`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
