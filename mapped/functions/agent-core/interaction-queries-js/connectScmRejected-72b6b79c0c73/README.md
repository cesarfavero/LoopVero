# `connectScmRejected`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-queries.js` · [README do módulo](../../../../modules/agent-core/interaction-queries-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475759-475774](../../../../../reference/runtime/host-main.cjs#L475759-L475774) | `FunctionExpression` | não | `queryId, reason` |
| [evaluation:254983-254998](../../../../../reference/runtime/sand-eval-runner.cjs#L254983-L254998) | `FunctionExpression` | não | `queryId, reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475759-475774](../../../../../reference/runtime/host-main.cjs#L475759-L475774) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254983-254998](../../../../../reference/runtime/sand-eval-runner.cjs#L254983-L254998) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475759

Chamadas escritas diretamente neste corpo: `new ConnectScmRequestResponse`, `new ConnectScmRequestResponse_Rejected`, `new InteractionResponse`.

SHA-256 do trecho: `97a1b6353b31f5152e62e93533d4b3a94e14e6049059916d2e11a95314a5a0cc`.

### evaluation:254983

Chamadas escritas diretamente neste corpo: `new ConnectScmRequestResponse`, `new ConnectScmRequestResponse_Rejected`, `new InteractionResponse`.

SHA-256 do trecho: `97a1b6353b31f5152e62e93533d4b3a94e14e6049059916d2e11a95314a5a0cc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
