# `createTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/sand-browser-tool-sets.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/sand-browser-tool-sets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751582-751589](../../../../../../../../reference/runtime/host-main.cjs#L751582-L751589) | `ArrowFunctionExpression` | no | `deps` |
| [evaluation:524433-524440](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524433-L524440) | `ArrowFunctionExpression` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751582-751589](../../../../../../../../reference/runtime/host-main.cjs#L751582-L751589) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:751582 uses an implicit arrow-function return.
| [evaluation:524433-524440](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524433-L524440) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:524433 uses an implicit arrow-function return.

### host:751582

Calls written directly in this body: `createPlaywrightBrowserTools`.

SHA-256 of the source span: `0ffad2970f130c1e01cc0202fc33903cb83bf5801787ff8b978780a974b57178`.

### evaluation:524433

Calls written directly in this body: `createPlaywrightBrowserTools`.

SHA-256 of the source span: `0ffad2970f130c1e01cc0202fc33903cb83bf5801787ff8b978780a974b57178`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
