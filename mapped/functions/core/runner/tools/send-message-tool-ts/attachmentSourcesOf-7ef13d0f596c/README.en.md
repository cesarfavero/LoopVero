# `attachmentSourcesOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760602-760605](../../../../../../../reference/runtime/host-main.cjs#L760602-L760605) | `FunctionDeclaration` | no | `rawArgs` |
| [evaluation:551417-551420](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551417-L551420) | `FunctionDeclaration` | no | `rawArgs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760602-760605](../../../../../../../reference/runtime/host-main.cjs#L760602-L760605) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:551417-551420](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551417-L551420) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:760602

Calls written directly in this body: `.map`.

SHA-256 of the source span: `c91561c7adb489aeade1f98530c54c905ad47a3f48b5d40782a8187d815474f6`.

### evaluation:551417

Calls written directly in this body: `.map`.

SHA-256 of the source span: `c91561c7adb489aeade1f98530c54c905ad47a3f48b5d40782a8187d815474f6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
