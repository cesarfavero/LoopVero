# `createTurnRunShell/runTurn/emitRequestId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-run-shell.ts` · [README do módulo](../../../../../modules/core/runner/turn-run-shell-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:592016-592020](../../../../../../reference/runtime/sand-eval-runner.cjs#L592016-L592020) | `ArrowFunctionExpression` | não | `requestId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:592016-592020](../../../../../../reference/runtime/sand-eval-runner.cjs#L592016-L592020) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:592016

Chamadas escritas diretamente neste corpo: `host.emitUpdate`, `idleCompaction.noteRequestId`, `options2.onRequestId`.

SHA-256 do trecho: `7aaf10188a8520dcd94862c9c3006a2be674c1090c241dce44a5da21cc88b340`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
