# `startPromptArtifactProvisioning/provisionLatest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `host/extensions/forever-box/prompt-artifacts.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/prompt-artifacts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680803-680811](../../../../../../../reference/runtime/host-main.cjs#L680803-L680811) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680803-680811](../../../../../../../reference/runtime/host-main.cjs#L680803-L680811) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:680803

Calls written directly in this body: `JSON.stringify`, `deps.provision`, `deps.readFacts`.

Assignment or increment targets: `failures2`, `lastRendered`.

SHA-256 of the source span: `06fae664c834050809803185badf312e91a9d7a1ca6fcf635ce3d385ddd410b4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
