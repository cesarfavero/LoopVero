# `formatInlineArray`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225568-225590](../../../../../reference/runtime/host-main.cjs#L225568-L225590) | `FunctionDeclaration` | no | `value, options2, colors, depth, seen, path33` |
| [evaluation:2056-2078](../../../../../reference/runtime/sand-eval-runner.cjs#L2056-L2078) | `FunctionDeclaration` | no | `value, options2, colors, depth, seen, path33` |
| [state-worker:21445-21467](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21445-L21467) | `FunctionDeclaration` | no | `value, options, colors, depth, seen, path` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225568-225590](../../../../../reference/runtime/host-main.cjs#L225568-L225590) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:2056-2078](../../../../../reference/runtime/sand-eval-runner.cjs#L2056-L2078) | 4 | 0 | 0 | 4 | 0 | 0 |
| [state-worker:21445-21467](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21445-L21467) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:225568

Calls written directly in this body: `.map`, `Math.min`, `colors.dim`, `items.join`, `items.push`, `seen.add`, `seen.delete`, `seen.has`, `value.slice`.

SHA-256 of the source span: `dd47c4b050487753c5637c4e5ba9e20c49c62eaea6d744b78dfb29c57e90bb08`.

### evaluation:2056

Calls written directly in this body: `.map`, `Math.min`, `colors.dim`, `items.join`, `items.push`, `seen.add`, `seen.delete`, `seen.has`, `value.slice`.

SHA-256 of the source span: `310342c057dba3225aa22f6c4b651d63ad6fdb1abad71e65baf905a569c332c3`.

### state-worker:21445

Calls written directly in this body: `.map`, `Math.min`, `colors.dim`, `items.join`, `items.push`, `seen.add`, `seen.delete`, `seen.has`, `value.slice`.

SHA-256 of the source span: `582fa2e6854542ae045f7da53916236267ecae81c1a5b69ed7d50ee4db9622f3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
