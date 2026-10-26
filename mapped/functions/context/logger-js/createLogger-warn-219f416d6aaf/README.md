# `createLogger/warn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/logger.js` · [README do módulo](../../../../modules/context/logger-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225725-225727](../../../../../reference/runtime/host-main.cjs#L225725-L225727) | `ArrowFunctionExpression` | não | `ctx, message, metadata2` |
| [evaluation:2213-2215](../../../../../reference/runtime/sand-eval-runner.cjs#L2213-L2215) | `ArrowFunctionExpression` | não | `ctx, message, metadata2` |
| [state-worker:21607-21609](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21607-L21609) | `ArrowFunctionExpression` | não | `ctx, message, metadata` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225725-225727](../../../../../reference/runtime/host-main.cjs#L225725-L225727) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:2213-2215](../../../../../reference/runtime/sand-eval-runner.cjs#L2213-L2215) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:21607-21609](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21607-L21609) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225725

Chamadas escritas diretamente neste corpo: `log5`.

SHA-256 do trecho: `9d8b688bb0dd1f7192f748d632f1663c7517fefd68e59f9bf619cbf54019f626`.

### evaluation:2213

Chamadas escritas diretamente neste corpo: `log5`.

SHA-256 do trecho: `9d8b688bb0dd1f7192f748d632f1663c7517fefd68e59f9bf619cbf54019f626`.

### state-worker:21607

Chamadas escritas diretamente neste corpo: `log`.

SHA-256 do trecho: `367dd05cff7c957b1268fd797ec266875817bba442e09ae383a13afb18637534`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
