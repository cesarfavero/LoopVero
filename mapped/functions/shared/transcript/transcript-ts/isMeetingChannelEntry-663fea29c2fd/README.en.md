# `isMeetingChannelEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/transcript.ts` · [Module README](../../../../../modules/shared/transcript/transcript-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485267-485271](../../../../../../reference/runtime/host-main.cjs#L485267-L485271) | `FunctionDeclaration` | no | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485267-485271](../../../../../../reference/runtime/host-main.cjs#L485267-L485271) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:485267

Calls written directly in this body: `.trim`, `channel.slice`, `channel.startsWith`, `channelAddressOf`.

SHA-256 of the source span: `ef1531d4d40de2517a0513ac61691f6d1cf3169f7062b4f7c1ce473c9e1ca559`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
