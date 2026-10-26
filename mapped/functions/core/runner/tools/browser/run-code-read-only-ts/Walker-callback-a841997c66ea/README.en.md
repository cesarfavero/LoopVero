# `Walker.callback`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750130-750140](../../../../../../../../reference/runtime/host-main.cjs#L750130-L750140) | `method` | no | `fn, scope, paramKinds` |
| [evaluation:522981-522991](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522981-L522991) | `method` | no | `fn, scope, paramKinds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750130-750140](../../../../../../../../reference/runtime/host-main.cjs#L750130-L750140) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:522981-522991](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522981-L522991) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:750130

Calls written directly in this body: `fail2`, `fn.params.forEach`, `new Scope3`, `this.functionBody`.

Assignment or increment targets: `this.callbackDepth`.

SHA-256 of the source span: `333077d614950ef57ea91a1d639f68d4277b4dbe3ad577f5fb0d3f95552390a5`.

### evaluation:522981

Calls written directly in this body: `fail`, `fn.params.forEach`, `new Scope3`, `this.functionBody`.

Assignment or increment targets: `this.callbackDepth`.

SHA-256 of the source span: `5065d34a5dfb332f59aa42f871881fd69aa6c927584d0298a01a9087cf08cea6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
