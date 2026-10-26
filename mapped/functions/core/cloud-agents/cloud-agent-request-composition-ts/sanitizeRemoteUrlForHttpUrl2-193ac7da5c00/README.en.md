# `sanitizeRemoteUrlForHttpUrl2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-request-composition.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-request-composition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:510217-510230](../../../../../../reference/runtime/host-main.cjs#L510217-L510230) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:510217-510230](../../../../../../reference/runtime/host-main.cjs#L510217-L510230) | 3 | 0 | 0 | 3 | 0 | 1 |

### host:510217

Calls written directly in this body: `new URL`, `parsed2.host.toLowerCase`, `raw.trim`, `sanitizeRemoteUrl2`, `toSanitizationCandidate2`, `trimRemotePath2`.

SHA-256 of the source span: `42d7e0c64c858aee7da9339a72b111eb13df65ecd47c3b809c7e5ebbde3b4b22`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
