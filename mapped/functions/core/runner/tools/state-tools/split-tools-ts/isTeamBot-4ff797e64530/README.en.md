# `isTeamBot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/split-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771652-771654](../../../../../../../../reference/runtime/host-main.cjs#L771652-L771654) | `FunctionDeclaration` | no | `deps` |
| [evaluation:570885-570887](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570885-L570887) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771652-771654](../../../../../../../../reference/runtime/host-main.cjs#L771652-L771654) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570885-570887](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570885-L570887) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:771652

Calls written directly in this body: `deps.teamBot`.

SHA-256 of the source span: `46cf55e08f2ad1c3f7be7c4fff1dc46063be36c9f57617efad5781fcc8f03273`.

### evaluation:570885

Calls written directly in this body: `deps.teamBot`.

SHA-256 of the source span: `46cf55e08f2ad1c3f7be7c4fff1dc46063be36c9f57617efad5781fcc8f03273`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
