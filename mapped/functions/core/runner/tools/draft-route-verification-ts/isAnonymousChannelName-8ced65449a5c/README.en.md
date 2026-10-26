# `isAnonymousChannelName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735190-735192](../../../../../../../reference/runtime/host-main.cjs#L735190-L735192) | `FunctionDeclaration` | no | `headerName, channelId` |
| [evaluation:540764-540766](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540764-L540766) | `FunctionDeclaration` | no | `headerName, channelId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735190-735192](../../../../../../../reference/runtime/host-main.cjs#L735190-L735192) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540764-540766](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540764-L540766) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:735190

Calls written directly in this body: `/^DM\s*\(/.test`, `SLACK_CONVERSATION_ID.test`.

SHA-256 of the source span: `5b053cf181eb0e20e14e25ca8e34fb7ecf4d8ac36317e4219183d38204f13dc0`.

### evaluation:540764

Calls written directly in this body: `/^DM\s*\(/.test`, `SLACK_CONVERSATION_ID.test`.

SHA-256 of the source span: `5b053cf181eb0e20e14e25ca8e34fb7ecf4d8ac36317e4219183d38204f13dc0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
