# `_BackendConnectErrors.walk`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-run-error.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-run-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736725-736745](../../../../../../../reference/runtime/host-main.cjs#L736725-L736745) | `method` | no | `error64, seen, matches` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736725-736745](../../../../../../../reference/runtime/host-main.cjs#L736725-L736745) | 5 | 1 | 0 | 1 | 0 | 0 |

### host:736725

Calls written directly in this body: `Array.isArray`, `_BackendConnectErrors.asConnectError`, `_BackendConnectErrors.usageLimitEntry`, `_BackendConnectErrors.walk`, `connectError.findDetails`, `seen.add`, `seen.has`.

Assignment or increment targets: `matches.detailed`, `matches.first`, `matches.usageLimit`.

SHA-256 of the source span: `fce89f1c3a57baaad269f191f2eecabc06fbd7f478eaac3d10a280e18d8f0adf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
