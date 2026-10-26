# `formatInlineObject`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225614-225641](../../../../../reference/runtime/host-main.cjs#L225614-L225641) | `FunctionDeclaration` | no | `value, options2, colors, depth, seen, path33` |
| [evaluation:2102-2129](../../../../../reference/runtime/sand-eval-runner.cjs#L2102-L2129) | `FunctionDeclaration` | no | `value, options2, colors, depth, seen, path33` |
| [state-worker:21491-21518](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21491-L21518) | `FunctionDeclaration` | no | `value, options, colors, depth, seen, path` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225614-225641](../../../../../reference/runtime/host-main.cjs#L225614-L225641) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:2102-2129](../../../../../reference/runtime/sand-eval-runner.cjs#L2102-L2129) | 4 | 0 | 0 | 4 | 0 | 0 |
| [state-worker:21491-21518](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21491-L21518) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:225614

Calls written directly in this body: `.map`, `Math.min`, `Object.entries`, `colors.dim`, `entries.slice`, `items.join`, `items.push`, `seen.add`, `seen.delete`, `seen.has`.

SHA-256 of the source span: `dc38b0b6a831bd93f94a15269b07f8e9a6c174db3d4118b59d081c55b5d2faac`.

### evaluation:2102

Calls written directly in this body: `.map`, `Math.min`, `Object.entries`, `colors.dim`, `entries.slice`, `items.join`, `items.push`, `seen.add`, `seen.delete`, `seen.has`.

SHA-256 of the source span: `c9f5e6b59888f696ad3bae2f8a0797b4c9fc98736bd0ba0d560cf89bbb50bf21`.

### state-worker:21491

Calls written directly in this body: `.map`, `Math.min`, `Object.entries`, `colors.dim`, `entries.slice`, `items.join`, `items.push`, `seen.add`, `seen.delete`, `seen.has`.

SHA-256 of the source span: `9f5fa7966de56649ec14fd67b3291004ba78c9253848f5ca5eae376f97eb7f41`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
