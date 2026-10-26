# `capitalizeLeadingWord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726296-726300](../../../../../../../reference/runtime/host-main.cjs#L726296-L726300) | `FunctionDeclaration` | no | `title` |
| [evaluation:560911-560915](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560911-L560915) | `FunctionDeclaration` | no | `title` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726296-726300](../../../../../../../reference/runtime/host-main.cjs#L726296-L726300) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:560911-560915](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560911-L560915) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:726296

Calls written directly in this body: `.toUpperCase`, `leadingWord.toLowerCase`, `title.charAt`, `title.slice`, `title.split`.

SHA-256 of the source span: `dcfb5ba03811802bbc95de73ad5df50ba57be236fc6085aeb27e35d1700f5f56`.

### evaluation:560911

Calls written directly in this body: `.toUpperCase`, `leadingWord.toLowerCase`, `title.charAt`, `title.slice`, `title.split`.

SHA-256 of the source span: `dcfb5ba03811802bbc95de73ad5df50ba57be236fc6085aeb27e35d1700f5f56`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
