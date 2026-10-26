# `assignRoots`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/skill-catalog-path-roots.js` · [Module README](../../../../../modules/agent-engine/prompts/skill-catalog-path-roots-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639687-639697](../../../../../../reference/runtime/host-main.cjs#L639687-L639697) | `FunctionDeclaration` | no | `node2, root, rootByIndex` |
| [evaluation:430301-430311](../../../../../../reference/runtime/sand-eval-runner.cjs#L430301-L430311) | `FunctionDeclaration` | no | `node2, root, rootByIndex` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639687-639697](../../../../../../reference/runtime/host-main.cjs#L639687-L639697) | 2 | 2 | 0 | 0 | 0 | 0 |
| [evaluation:430301-430311](../../../../../../reference/runtime/sand-eval-runner.cjs#L430301-L430311) | 2 | 2 | 0 | 0 | 0 | 0 |

### host:639687

Calls written directly in this body: `assignRoots`, `keepRootCost`, `node2.children.values`, `openRootCost`, `rootByIndex.set`.

SHA-256 of the source span: `f825670c9633f2c2066bb3c38cca798ea41b9375619f2d4730553a9f505458dc`.

### evaluation:430301

Calls written directly in this body: `assignRoots`, `keepRootCost`, `node2.children.values`, `openRootCost`, `rootByIndex.set`.

SHA-256 of the source span: `f825670c9633f2c2066bb3c38cca798ea41b9375619f2d4730553a9f505458dc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
