# `changedSandProfileFields`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/agent-state.ts` · [Module README](../../../../../modules/core/runner/agent-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:554666-554674](../../../../../../reference/runtime/sand-eval-runner.cjs#L554666-L554674) | `FunctionDeclaration` | no | `patch2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554666-554674](../../../../../../reference/runtime/sand-eval-runner.cjs#L554666-L554674) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:554666

Calls written directly in this body: `Object.keys`, `fields3.push`, `isKeyOf`.

SHA-256 of the source span: `1f671b98257536f73d23b5abb581434ec2347e71d4270566fe89c540b5f307a5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
