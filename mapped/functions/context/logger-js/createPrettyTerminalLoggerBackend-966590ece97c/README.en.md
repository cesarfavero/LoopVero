# `createPrettyTerminalLoggerBackend`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225642-225708](../../../../../reference/runtime/host-main.cjs#L225642-L225708) | `FunctionDeclaration` | no | `options2 = {}` |
| [evaluation:2130-2196](../../../../../reference/runtime/sand-eval-runner.cjs#L2130-L2196) | `FunctionDeclaration` | no | `options2 = {}` |
| [state-worker:21519-21585](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21519-L21585) | `FunctionDeclaration` | no | `options = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225642-225708](../../../../../reference/runtime/host-main.cjs#L225642-L225708) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:2130-2196](../../../../../reference/runtime/sand-eval-runner.cjs#L2130-L2196) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:21519-21585](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21519-L21585) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225642

Calls written directly in this body: `createColorPalette`, `resolveRenderOptions`, `shouldUseColors`.

SHA-256 of the source span: `48d8bb26e65048b7291f9541a7cf979684cda3a8add5c3fb8a7c6acbe144484c`.

### evaluation:2130

Calls written directly in this body: `createColorPalette`, `resolveRenderOptions`, `shouldUseColors`.

SHA-256 of the source span: `48d8bb26e65048b7291f9541a7cf979684cda3a8add5c3fb8a7c6acbe144484c`.

### state-worker:21519

Calls written directly in this body: `createColorPalette`, `resolveRenderOptions`, `shouldUseColors`.

SHA-256 of the source span: `0a65772ac53acd8f2ae2351a00b37ac1e00a919828b81245a21c3d0281da5963`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
