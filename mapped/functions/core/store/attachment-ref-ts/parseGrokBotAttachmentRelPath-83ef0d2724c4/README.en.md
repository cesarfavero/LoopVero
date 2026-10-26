# `parseGrokBotAttachmentRelPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/store/attachment-ref.ts` · [Module README](../../../../../modules/core/store/attachment-ref-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:752277-752285](../../../../../../reference/runtime/host-main.cjs#L752277-L752285) | `FunctionDeclaration` | no | `relPath` |
| [evaluation:530355-530363](../../../../../../reference/runtime/sand-eval-runner.cjs#L530355-L530363) | `FunctionDeclaration` | no | `relPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752277-752285](../../../../../../reference/runtime/host-main.cjs#L752277-L752285) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:530355-530363](../../../../../../reference/runtime/sand-eval-runner.cjs#L530355-L530363) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:752277

Calls written directly in this body: `.split`, `isGrokBotAttachmentKey`, `relPath.slice`, `relPath.startsWith`.

SHA-256 of the source span: `065f81795345bf303a85bc122e186db948acd07af4c84e92c521d4553f9f4df7`.

### evaluation:530355

Calls written directly in this body: `.split`, `isGrokBotAttachmentKey`, `relPath.slice`, `relPath.startsWith`.

SHA-256 of the source span: `065f81795345bf303a85bc122e186db948acd07af4c84e92c521d4553f9f4df7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
