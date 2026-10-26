# `toolCallDelta`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/redacted-interaction-updates.js` · [README do módulo](../../../../modules/agent-core/redacted-interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:615630-615645](../../../../../reference/runtime/host-main.cjs#L615630-L615645) | `FunctionExpression` | não | `callId, toolCallDelta, modelCallId, messageStartedAtMs` |
| [evaluation:284350-284365](../../../../../reference/runtime/sand-eval-runner.cjs#L284350-L284365) | `FunctionExpression` | não | `callId, toolCallDelta, modelCallId, messageStartedAtMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615630-615645](../../../../../reference/runtime/host-main.cjs#L615630-L615645) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284350-284365](../../../../../reference/runtime/sand-eval-runner.cjs#L284350-L284365) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615630

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `d4dc02c2ea7cd88fd4af29819d31fe211f8b62ac4b467f2f92a1526bf153aa77`.

### evaluation:284350

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `d4dc02c2ea7cd88fd4af29819d31fe211f8b62ac4b467f2f92a1526bf153aa77`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
