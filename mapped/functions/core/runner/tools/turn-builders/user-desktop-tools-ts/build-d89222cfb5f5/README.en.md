# `build`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/user-desktop-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/user-desktop-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781877-781877](../../../../../../../../reference/runtime/host-main.cjs#L781877-L781877) | `ArrowFunctionExpression` | no | `{ host, scopeLocalTool }` |
| [evaluation:582222-582222](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582222-L582222) | `ArrowFunctionExpression` | no | `{ host, scopeLocalTool }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781877-781877](../../../../../../../../reference/runtime/host-main.cjs#L781877-L781877) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:781877 uses an implicit arrow-function return.
| [evaluation:582222-582222](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582222-L582222) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:582222 uses an implicit arrow-function return.

### host:781877

Calls written directly in this body: `.map`, `userDesktopToolsForHost`.

SHA-256 of the source span: `7009639812793be3f7e098cae00c4c09c9594a03f9f1e89b9e54c85736333920`.

### evaluation:582222

Calls written directly in this body: `.map`, `userDesktopToolsForHost`.

SHA-256 of the source span: `7009639812793be3f7e098cae00c4c09c9594a03f9f1e89b9e54c85736333920`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
