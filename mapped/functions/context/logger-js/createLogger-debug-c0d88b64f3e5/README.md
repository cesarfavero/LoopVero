# `createLogger/debug`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/logger.js` · [README do módulo](../../../../modules/context/logger-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225719-225721](../../../../../reference/runtime/host-main.cjs#L225719-L225721) | `ArrowFunctionExpression` | não | `ctx, message, metadata2` |
| [evaluation:2207-2209](../../../../../reference/runtime/sand-eval-runner.cjs#L2207-L2209) | `ArrowFunctionExpression` | não | `ctx, message, metadata2` |
| [state-worker:21601-21603](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21601-L21603) | `ArrowFunctionExpression` | não | `ctx, message, metadata` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225719-225721](../../../../../reference/runtime/host-main.cjs#L225719-L225721) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:2207-2209](../../../../../reference/runtime/sand-eval-runner.cjs#L2207-L2209) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:21601-21603](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21601-L21603) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225719

Chamadas escritas diretamente neste corpo: `log5`.

SHA-256 do trecho: `be54847eabc92a20fd6786972e6d59e82d09a21c49a477328d272d5af1c39252`.

### evaluation:2207

Chamadas escritas diretamente neste corpo: `log5`.

SHA-256 do trecho: `be54847eabc92a20fd6786972e6d59e82d09a21c49a477328d272d5af1c39252`.

### state-worker:21601

Chamadas escritas diretamente neste corpo: `log`.

SHA-256 do trecho: `04ef2b3c5c2a01a15d0730274b1e1c948e1956904d4dfe4ffa922fc714cbb2a9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
