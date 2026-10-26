# `takeNextUserTask`

[English](README.en.md) · [Português (Brasil)](README.md)

**Primary source:** [host-main.cjs:739619–739623](../../../reference/runtime/host-main.cjs#L739619-L739623).

**Component:** [scheduling](../../components/scheduling/README.en.md). **Evidence:** compiled implementation inspected statically; the original was not executed.

## Contract

Accepts a mutable array of pending user-lane items and returns the removed item, or `undefined` if empty.

## Exact algorithm

Finds the first item whose `source` differs from `group-member`. If found, removes it by index. If all items are group members, removes index zero.

Purely static example: for `[group-member A, user B, user C]`, the first choice is B; on the next call, C; then A. Within the preferred category, relative order remains arrival order. This consequence is deduced directly from `findIndex` and `splice`.

## Effects

Mutates the original array. It does not execute the task, check deadlines, or change its `source`. The caller is `SandRunScheduler.pump`, after checking that there is a pending user item.

## Implication

The scheduler prefers a human user over a member turn within the `user` lane itself. Documenting it as simple FIFO would lose this behavior. The code does not show a specific starvation bound in this function.
