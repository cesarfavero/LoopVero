# `toModelVisibleAssistantContent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/model-visible-path-middleware.ts` · [Module README](../../../../../modules/core/runner/model-visible-path-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586768-586781](../../../../../../reference/runtime/sand-eval-runner.cjs#L586768-L586781) | `FunctionDeclaration` | no | `content` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586768-586781](../../../../../../reference/runtime/sand-eval-runner.cjs#L586768-L586781) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:586768

Calls written directly in this body: `mapPreservingIdentity`, `toModelVisibleText`.

SHA-256 of the source span: `6c0d6413150caf3625e848e2d483597cdad85e150d2e738c6ac77d0d10516720`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
