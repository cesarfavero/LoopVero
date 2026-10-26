# `forwardedTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/first-party-mocks/bind-tool-mocks.ts` · [Module README](../../../../../../../modules/core/runner/tools/first-party-mocks/bind-tool-mocks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:555969-555999](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555969-L555999) | `FunctionDeclaration` | no | `tool, target, schema3, mocks, mockSchemas, unmocked` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555969-555999](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555969-L555999) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:555969

Calls written directly in this body: `communicateToolCall`, `jsonSchema2`, `withSafeParsedArgs`, `withSpotlightedToolResult`.

SHA-256 of the source span: `a399619a7e5fa151aac2490349579ba4e33abb203cc9cfac98eaa0dcfa9b07de`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
