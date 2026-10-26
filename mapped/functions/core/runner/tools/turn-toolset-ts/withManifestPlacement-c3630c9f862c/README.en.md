# `withManifestPlacement`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-toolset.ts` · [Module README](../../../../../../modules/core/runner/tools/turn-toolset-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:582652-582661](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582652-L582661) | `FunctionDeclaration` | no | `tool, placementOf` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582652-582661](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582652-L582661) | 3 | 0 | 0 | 3 | 0 | 0 |

### evaluation:582652

Calls written directly in this body: `GROK_BOT_TOOL_ID_BY_MODEL_NAME.get`, `placementOf`.

SHA-256 of the source span: `81946bebe8f6b424ebf36f9ffe7e5805e31feb98fe76fb41c418e0be2c04f019`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
