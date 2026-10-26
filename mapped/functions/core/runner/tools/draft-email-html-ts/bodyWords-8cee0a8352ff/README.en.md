# `bodyWords`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-email-html.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732498-732505](../../../../../../../reference/runtime/host-main.cjs#L732498-L732505) | `FunctionDeclaration` | no | `body` |
| [evaluation:539510-539517](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539510-L539517) | `FunctionDeclaration` | no | `body` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732498-732505](../../../../../../../reference/runtime/host-main.cjs#L732498-L732505) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539510-539517](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539510-L539517) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:732498

Calls written directly in this body: `.flatMap`, `body.split`.

SHA-256 of the source span: `3de5b81da1423d913e63bf96d08305395a451eea4e2ee4acd8d37ae1c04c0550`.

### evaluation:539510

Calls written directly in this body: `.flatMap`, `body.split`.

SHA-256 of the source span: `b589c52ea66bcfb6a9aaff106d10787a30f12826c2c6508f78d523e380fa3c51`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
