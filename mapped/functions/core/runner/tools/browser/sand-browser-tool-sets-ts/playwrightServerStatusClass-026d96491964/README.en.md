# `playwrightServerStatusClass`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/sand-browser-tool-sets.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/sand-browser-tool-sets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751506-751519](../../../../../../../../reference/runtime/host-main.cjs#L751506-L751519) | `FunctionDeclaration` | no | `server` |
| [evaluation:524357-524370](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524357-L524370) | `FunctionDeclaration` | no | `server` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751506-751519](../../../../../../../../reference/runtime/host-main.cjs#L751506-L751519) | 7 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:524357-524370](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524357-L524370) | 7 | 0 | 0 | 6 | 0 | 0 |

### host:751506

Calls written directly in this body: `/MCP server is closed/.test`, `/connection closed/i.test`, `/setup_failed:([a-z_]+)/.exec`, `/timed out/i.test`, `PLAYWRIGHT_SERVER_STATUSES.has`, `PLAYWRIGHT_SETUP_FAILURES.has`, `boxStdioStatusClassOf`.

SHA-256 of the source span: `4711672251e810260d9ea6474f6d45114df2a0ec675ba3d9846a5a12a4397d4b`.

### evaluation:524357

Calls written directly in this body: `/MCP server is closed/.test`, `/connection closed/i.test`, `/setup_failed:([a-z_]+)/.exec`, `/timed out/i.test`, `PLAYWRIGHT_SERVER_STATUSES.has`, `PLAYWRIGHT_SETUP_FAILURES.has`, `boxStdioStatusClassOf`.

SHA-256 of the source span: `4711672251e810260d9ea6474f6d45114df2a0ec675ba3d9846a5a12a4397d4b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
