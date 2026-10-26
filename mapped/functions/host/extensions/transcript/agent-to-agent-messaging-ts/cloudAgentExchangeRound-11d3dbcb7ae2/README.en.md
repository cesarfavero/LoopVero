# `cloudAgentExchangeRound`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-to-agent-messaging.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-to-agent-messaging-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734399-734403](../../../../../../../reference/runtime/host-main.cjs#L734399-L734403) | `FunctionDeclaration` | no | `entries, bcId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734399-734403](../../../../../../../reference/runtime/host-main.cjs#L734399-L734403) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:734399

Calls written directly in this body: `entries.filter`.

SHA-256 of the source span: `fef6178645afa6f68e5ed35ab5130af87206abfb3502938bc55da5fda8ab68ed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
