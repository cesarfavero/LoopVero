# `describeNewNeedsAuthCards`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/authenticate-result-notes.ts` · [Module README](../../../../../modules/core/mcp/authenticate-result-notes-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779286-779303](../../../../../../reference/runtime/host-main.cjs#L779286-L779303) | `FunctionDeclaration` | no | `cards, followUp` |
| [evaluation:579460-579477](../../../../../../reference/runtime/sand-eval-runner.cjs#L579460-L579477) | `FunctionDeclaration` | no | `cards, followUp` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779286-779303](../../../../../../reference/runtime/host-main.cjs#L779286-L779303) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:579460-579477](../../../../../../reference/runtime/sand-eval-runner.cjs#L579460-L579477) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:779286

Calls written directly in this body: `.join`, `cardShownNote`, `cards.map`, `describeCardSurfaceOutcomes`, `describeConnectCardFollowUp`, `relay.trimStart`.

SHA-256 of the source span: `8dd5973d8be07fe4d534037d9c24623c5e8363233934df29c8a0627b5d4fd62d`.

### evaluation:579460

Calls written directly in this body: `.join`, `cardShownNote`, `cards.map`, `describeCardSurfaceOutcomes`, `describeConnectCardFollowUp`, `relay.trimStart`.

SHA-256 of the source span: `8dd5973d8be07fe4d534037d9c24623c5e8363233934df29c8a0627b5d4fd62d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
