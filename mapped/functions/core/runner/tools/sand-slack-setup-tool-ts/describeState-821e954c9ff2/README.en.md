# `describeState`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-slack-setup-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-slack-setup-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781307-781324](../../../../../../../reference/runtime/host-main.cjs#L781307-L781324) | `FunctionDeclaration` | no | `state` |
| [evaluation:581654-581671](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581654-L581671) | `FunctionDeclaration` | no | `state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781307-781324](../../../../../../../reference/runtime/host-main.cjs#L781307-L781324) | 11 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:581654-581671](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581654-L581671) | 11 | 0 | 0 | 7 | 0 | 0 |

### host:781307

Calls written directly in this body: `.join`, `inWorkspace`, `state.workspaces.map`.

SHA-256 of the source span: `e689fc5ee2c44db435b17d18ea3fe47646c3794eb3f6f8242150d674d66b7186`.

### evaluation:581654

Calls written directly in this body: `.join`, `inWorkspace`, `state.workspaces.map`.

SHA-256 of the source span: `e689fc5ee2c44db435b17d18ea3fe47646c3794eb3f6f8242150d674d66b7186`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
