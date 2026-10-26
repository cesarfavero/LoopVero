# `ProtoSerde.serialize`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-kv/serde.js` · [README do módulo](../../../../modules/agent-kv/serde-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:615883-615885](../../../../../reference/runtime/host-main.cjs#L615883-L615885) | `method` | não | `value` |
| [evaluation:284668-284670](../../../../../reference/runtime/sand-eval-runner.cjs#L284668-L284670) | `method` | não | `value` |
| [state-worker:21687-21689](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21687-L21689) | `method` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615883-615885](../../../../../reference/runtime/host-main.cjs#L615883-L615885) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284668-284670](../../../../../reference/runtime/sand-eval-runner.cjs#L284668-L284670) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:21687-21689](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21687-L21689) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615883

Chamadas escritas diretamente neste corpo: `value.toBinary`.

SHA-256 do trecho: `9b6b7523d61a66a568bec9cabd27b1ba1418c1c11095fa9b28e2509b441b845e`.

### evaluation:284668

Chamadas escritas diretamente neste corpo: `value.toBinary`.

SHA-256 do trecho: `9b6b7523d61a66a568bec9cabd27b1ba1418c1c11095fa9b28e2509b441b845e`.

### state-worker:21687

Chamadas escritas diretamente neste corpo: `value.toBinary`.

SHA-256 do trecho: `9b6b7523d61a66a568bec9cabd27b1ba1418c1c11095fa9b28e2509b441b845e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
