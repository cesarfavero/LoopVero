# `agentHasQuarantinedStoreDb`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `host/extensions/session/session-summaries.ts` · [Module README](../../../../../../modules/host/extensions/session/session-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722724-722732](../../../../../../../reference/runtime/host-main.cjs#L722724-L722732) | `FunctionDeclaration` | yes | `agentDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722724-722732](../../../../../../../reference/runtime/host-main.cjs#L722724-L722732) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:722724

Calls written directly in this body: `entries.some`, `reportFallbackUnlessAbsent`.

SHA-256 of the source span: `91035a8f4522193ccc045d8b8453abc5b07d4167078dfba1530135a37ca9df9d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
