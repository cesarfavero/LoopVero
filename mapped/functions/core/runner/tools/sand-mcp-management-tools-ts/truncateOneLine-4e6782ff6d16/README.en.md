# `truncateOneLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779679-779682](../../../../../../../reference/runtime/host-main.cjs#L779679-L779682) | `FunctionDeclaration` | no | `value, max` |
| [evaluation:579917-579920](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579917-L579920) | `FunctionDeclaration` | no | `value, max` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779679-779682](../../../../../../../reference/runtime/host-main.cjs#L779679-L779682) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579917-579920](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579917-L579920) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:779679

Calls written directly in this body: `.trim`, `oneLine2.slice`, `value.replace`.

SHA-256 of the source span: `2924965ef19ff1ce537858e33f523711117a124ddce63c5c37b5b6fb3e13fa68`.

### evaluation:579917

Calls written directly in this body: `.trim`, `oneLine2.slice`, `value.replace`.

SHA-256 of the source span: `2924965ef19ff1ce537858e33f523711117a124ddce63c5c37b5b6fb3e13fa68`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
