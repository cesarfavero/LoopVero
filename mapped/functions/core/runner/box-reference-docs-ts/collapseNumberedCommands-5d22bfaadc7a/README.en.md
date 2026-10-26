# `collapseNumberedCommands`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/box-reference-docs.ts` · [Module README](../../../../../modules/core/runner/box-reference-docs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:558312-558335](../../../../../../reference/runtime/host-main.cjs#L558312-L558335) | `FunctionDeclaration` | no | `commands` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558312-558335](../../../../../../reference/runtime/host-main.cjs#L558312-L558335) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:558312

Calls written directly in this body: `.filter`, `collapsed.push`, `commands.map`, `last.hotkey.mac.slice`, `last.hotkey.other.slice`, `new Set`, `numbered.findLast`, `numberedCommand`, `seenPrefixes.add`, `seenPrefixes.has`.

SHA-256 of the source span: `ad702baa46dbd420072b4323bcf786bc2a8251952731499b4fc32433b55ca48f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
