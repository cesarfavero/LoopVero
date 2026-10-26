# `droppedArgNames`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750549-750556](../../../../../../../reference/runtime/host-main.cjs#L750549-L750556) | `FunctionDeclaration` | no | `{   raw,   kept }` |
| [evaluation:523400-523407](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523400-L523407) | `FunctionDeclaration` | no | `{   raw,   kept }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750549-750556](../../../../../../../reference/runtime/host-main.cjs#L750549-L750556) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:523400-523407](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523400-L523407) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:750549

Calls written directly in this body: `.filter`, `.join`, `.map`, `.sort`, `Object.keys`, `new Set`.

SHA-256 of the source span: `49ec0af5e326e851f6e3b579c952ff81b2191724425b81c73932857492c3e63a`.

### evaluation:523400

Calls written directly in this body: `.filter`, `.join`, `.map`, `.sort`, `Object.keys`, `new Set`.

SHA-256 of the source span: `49ec0af5e326e851f6e3b579c952ff81b2191724425b81c73932857492c3e63a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
