# `startPromptArtifactProvisioning`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `host/extensions/forever-box/prompt-artifacts.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/prompt-artifacts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680792-680851](../../../../../../../reference/runtime/host-main.cjs#L680792-L680851) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680792-680851](../../../../../../../reference/runtime/host-main.cjs#L680792-L680851) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:680792

Calls written directly in this body: `Promise.resolve`, `createRetryPolicy`, `deps.subscribe.map`, `schedule`.

SHA-256 of the source span: `33cd07ed5a7967f02d3d8627815ff0c664f14afe6e291e4bad87fd1b0378a945`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
