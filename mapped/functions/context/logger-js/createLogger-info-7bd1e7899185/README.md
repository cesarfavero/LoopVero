# `createLogger/info`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/logger.js` · [README do módulo](../../../../modules/context/logger-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225722-225724](../../../../../reference/runtime/host-main.cjs#L225722-L225724) | `ArrowFunctionExpression` | não | `ctx, message, metadata2` |
| [evaluation:2210-2212](../../../../../reference/runtime/sand-eval-runner.cjs#L2210-L2212) | `ArrowFunctionExpression` | não | `ctx, message, metadata2` |
| [state-worker:21604-21606](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21604-L21606) | `ArrowFunctionExpression` | não | `ctx, message, metadata` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225722-225724](../../../../../reference/runtime/host-main.cjs#L225722-L225724) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:2210-2212](../../../../../reference/runtime/sand-eval-runner.cjs#L2210-L2212) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:21604-21606](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21604-L21606) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225722

Chamadas escritas diretamente neste corpo: `log5`.

SHA-256 do trecho: `1a7f5f795ca6839717a67944b526983904be69fa56326ca8fd0736b317adcd0b`.

### evaluation:2210

Chamadas escritas diretamente neste corpo: `log5`.

SHA-256 do trecho: `1a7f5f795ca6839717a67944b526983904be69fa56326ca8fd0736b317adcd0b`.

### state-worker:21604

Chamadas escritas diretamente neste corpo: `log`.

SHA-256 do trecho: `bde746df81c7bd5f684b5dd6f8734a5efcaf9094d7d92f86fa81cd10c328577a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
