# `parseSandProfileFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/agents/agent-files.ts` · [Module README](../../../../../modules/core/agents/agent-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629047-629050](../../../../../../reference/runtime/sand-eval-runner.cjs#L629047-L629050) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629047-629050](../../../../../../reference/runtime/sand-eval-runner.cjs#L629047-L629050) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:629047

Calls written directly in this body: `parseProfileJson`, `profileConfigFromJson`.

SHA-256 of the source span: `7ddfbdf97527a7d55ab00e3918ecd8ba63461bd51ffeabf2791b6c96644cfbac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
