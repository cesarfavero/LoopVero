# `minimalAgentSummary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `host/extensions/session/session-summaries.ts` · [Module README](../../../../../../modules/host/extensions/session/session-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722603-722646](../../../../../../../reference/runtime/host-main.cjs#L722603-L722646) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722603-722646](../../../../../../../reference/runtime/host-main.cjs#L722603-L722646) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:722603

Calls written directly in this body: `Math.floor`, `Number`, `fileProfile.name.trim`, `getSandProfilePath`, `orNull`, `readSandProfileCreationMetadata`, `readSandProfileFile`, `readSandProfileHarness`.

SHA-256 of the source span: `19c6058e34cd5c309e891b5dee73edbe08077c359e4cbb92e3aad571e5ac3706`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
