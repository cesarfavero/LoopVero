# `createLogger/error`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/logger.js` · [README do módulo](../../../../modules/context/logger-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225728-225730](../../../../../reference/runtime/host-main.cjs#L225728-L225730) | `ArrowFunctionExpression` | não | `ctx, message, error64, metadata2` |
| [evaluation:2216-2218](../../../../../reference/runtime/sand-eval-runner.cjs#L2216-L2218) | `ArrowFunctionExpression` | não | `ctx, message, error63, metadata2` |
| [state-worker:21610-21612](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21610-L21612) | `ArrowFunctionExpression` | não | `ctx, message, error, metadata` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225728-225730](../../../../../reference/runtime/host-main.cjs#L225728-L225730) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:2216-2218](../../../../../reference/runtime/sand-eval-runner.cjs#L2216-L2218) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:21610-21612](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21610-L21612) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225728

Chamadas escritas diretamente neste corpo: `log5`.

SHA-256 do trecho: `9e4cea518aae3d584115ed7ee665a8fb192c36bbbb9f9ee27e3a1433f37756ca`.

### evaluation:2216

Chamadas escritas diretamente neste corpo: `log5`.

SHA-256 do trecho: `d8d097f02875312c792a400820ebcc5f9d87dd5ce7b8a11b15dcac882ed339ee`.

### state-worker:21610

Chamadas escritas diretamente neste corpo: `log`.

SHA-256 do trecho: `fb94aec9f91abfada11a60fb89fbabf4e028a54aeb6ad05791754254f2edbbea`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
