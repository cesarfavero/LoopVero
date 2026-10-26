# `resolveSandDefaultModelConfig`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/sand-model-config.ts` · [Module README](../../../../../../modules/shared/node/experiments/sand-model-config-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552308-552335](../../../../../../../reference/runtime/host-main.cjs#L552308-L552335) | `FunctionDeclaration` | no | `inputs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552308-552335](../../../../../../../reference/runtime/host-main.cjs#L552308-L552335) | 8 | 1 | 0 | 9 | 0 | 0 |

### host:552308

Calls written directly in this body: `/[\s\p{Cc}]/u.test`, `ROUTED_MODEL_IDS.has`, `ids.add`, `ids.has`, `new Set`, `refuse`, `sandDefaultModelConfigSchema.safeParse`.

SHA-256 of the source span: `0c6a864657a4b299139c64b2f4cecae2c51dec1200fbac3bd6d9f47c96baa0f0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
