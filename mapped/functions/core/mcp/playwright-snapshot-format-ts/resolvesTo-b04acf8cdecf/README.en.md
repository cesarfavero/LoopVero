# `resolvesTo`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-snapshot-format.ts` · [Module README](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742841-742847](../../../../../../reference/runtime/host-main.cjs#L742841-L742847) | `FunctionDeclaration` | no | `path33, url2, origin` |
| [evaluation:515503-515509](../../../../../../reference/runtime/sand-eval-runner.cjs#L515503-L515509) | `FunctionDeclaration` | no | `path33, url2, origin` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742841-742847](../../../../../../reference/runtime/host-main.cjs#L742841-L742847) | 0 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:515503-515509](../../../../../../reference/runtime/sand-eval-runner.cjs#L515503-L515509) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:742841

Calls written directly in this body: `new URL`.

SHA-256 of the source span: `ec1e98cc662ca34f13aea2beef2309c52f214265887851aaf65f2d5843d06ad9`.

### evaluation:515503

Calls written directly in this body: `new URL`.

SHA-256 of the source span: `ec1e98cc662ca34f13aea2beef2309c52f214265887851aaf65f2d5843d06ad9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
