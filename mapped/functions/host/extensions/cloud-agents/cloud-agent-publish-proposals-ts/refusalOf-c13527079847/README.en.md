# `refusalOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agent-publish-proposals.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-publish-proposals-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:537855-537888](../../../../../../../reference/runtime/host-main.cjs#L537855-L537888) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:537855-537888](../../../../../../../reference/runtime/host-main.cjs#L537855-L537888) | 12 | 0 | 0 | 10 | 0 | 0 |

### host:537855

Calls written directly in this body: `/changed after the agent proposed|no longer describes/i.test`, `/decided elsewhere|already (published|dismissed|confirming)/i.test`, `connectRefusalTitle`, `isPublishNotConfiguredError`, `isRunGone`, `refusalDetail`.

SHA-256 of the source span: `aede361376774f1683ff96027c9a354c3b7fff5f622dbf6cc2d514b39bcc9afe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
