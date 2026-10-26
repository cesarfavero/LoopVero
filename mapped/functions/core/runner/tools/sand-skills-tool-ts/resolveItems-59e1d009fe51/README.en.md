# `resolveItems`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `core/runner/tools/sand-skills-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-skills-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535992-536013](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535992-L536013) | `FunctionDeclaration` | no | `items, library, taken` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535992-536013](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535992-L536013) | 5 | 1 | 0 | 3 | 0 | 0 |

### evaluation:535992

Calls written directly in this body: `drafts.push`, `library.find`, `slugOf`, `taken.add`, `taken.has`.

SHA-256 of the source span: `501339bdbe981b68abf2f9978a5f11d84d41706e2edf8c401ddee825cfd3f3be`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
