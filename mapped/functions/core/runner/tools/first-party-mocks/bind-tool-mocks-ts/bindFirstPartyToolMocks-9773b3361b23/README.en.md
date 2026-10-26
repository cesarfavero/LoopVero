# `bindFirstPartyToolMocks`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/first-party-mocks/bind-tool-mocks.ts` · [Module README](../../../../../../../modules/core/runner/tools/first-party-mocks/bind-tool-mocks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:556003-556076](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L556003-L556076) | `FunctionDeclaration` | no | `handle, mocks, withheld = /* @__PURE__ */ new Set()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:556003-556076](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L556003-L556076) | 13 | 4 | 0 | 1 | 1 | 0 |

### evaluation:556003

Calls written directly in this body: `.filter`, `.map`, `.sort`, `SAND_EVAL_NEVER_FORWARDED_TOOL_NAMES.has`, `ToolSetHandle.fromTools`, `candidates.every`, `candidates.filter`, `firstParty.get`, `firstParty.keys`, `firstPartyToolsForMockTool`, `fitSchemaToMock`, `forwardedTool`, `forwards.get`, `forwards.has`, `forwards.set`, `handle.getAllTools`, `handle.getDynamicToolRegistry`, `handle.getDynamicTools`, `handle.getStaticTools`, `mockSchemas.get`, `mockSchemas.has`, `mocks.tools.map`, `new Map`, `new SandEvalFirstPartyToolMocksError`, `new Set`, `parseSandToolInputSchema`, `problems.join`, `problems.push`, `replaced`, `replacements.set`, `runnerNativeTools.has`, `unmatched.map`, `unmatched.push`.

Explicit throw targets: `SandEvalFirstPartyToolMocksError`.

SHA-256 of the source span: `9e478a43ff5b83092d2b4b6f960a77ce0e0d5710ddac1dd3685a08b09188f435`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
