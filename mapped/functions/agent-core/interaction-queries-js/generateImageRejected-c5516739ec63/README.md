# `generateImageRejected`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-queries.js` · [README do módulo](../../../../modules/agent-core/interaction-queries-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475808-475823](../../../../../reference/runtime/host-main.cjs#L475808-L475823) | `FunctionExpression` | não | `queryId, reason` |
| [evaluation:255032-255047](../../../../../reference/runtime/sand-eval-runner.cjs#L255032-L255047) | `FunctionExpression` | não | `queryId, reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475808-475823](../../../../../reference/runtime/host-main.cjs#L475808-L475823) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255032-255047](../../../../../reference/runtime/sand-eval-runner.cjs#L255032-L255047) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475808

Chamadas escritas diretamente neste corpo: `new GenerateImageRequestResponse`, `new GenerateImageRequestResponse_Rejected`, `new InteractionResponse`.

SHA-256 do trecho: `0c725f41e9382cd9b313818449aadaa28defa9aff24c996b8bbae38fe5e08358`.

### evaluation:255032

Chamadas escritas diretamente neste corpo: `new GenerateImageRequestResponse`, `new GenerateImageRequestResponse_Rejected`, `new InteractionResponse`.

SHA-256 do trecho: `0c725f41e9382cd9b313818449aadaa28defa9aff24c996b8bbae38fe5e08358`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
