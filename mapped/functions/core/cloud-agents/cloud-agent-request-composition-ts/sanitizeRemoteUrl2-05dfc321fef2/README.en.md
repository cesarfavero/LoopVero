# `sanitizeRemoteUrl2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-request-composition.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-request-composition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:510205-510216](../../../../../../reference/runtime/host-main.cjs#L510205-L510216) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:510205-510216](../../../../../../reference/runtime/host-main.cjs#L510205-L510216) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:510205

Calls written directly in this body: `.toLowerCase`, `new URL`, `raw.trim`, `toSanitizationCandidate2`, `trimRemotePath2`.

SHA-256 of the source span: `57dd142d6a3fa202c895ae67fc48fcdc7228d082ccdff96a36bc09a3687d65b4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
