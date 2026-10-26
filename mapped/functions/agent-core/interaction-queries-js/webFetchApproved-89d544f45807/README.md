# `webFetchApproved`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-queries.js` · [README do módulo](../../../../modules/agent-core/interaction-queries-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475603-475616](../../../../../reference/runtime/host-main.cjs#L475603-L475616) | `FunctionExpression` | não | `queryId` |
| [evaluation:254827-254840](../../../../../reference/runtime/sand-eval-runner.cjs#L254827-L254840) | `FunctionExpression` | não | `queryId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475603-475616](../../../../../reference/runtime/host-main.cjs#L475603-L475616) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254827-254840](../../../../../reference/runtime/sand-eval-runner.cjs#L254827-L254840) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475603

Chamadas escritas diretamente neste corpo: `new InteractionResponse`, `new WebFetchRequestResponse`, `new WebFetchRequestResponse_Approved`.

SHA-256 do trecho: `cf28e1e1ba8d22f90e62bb3ed150da9ff67caa89afaac0acf0f46f3f91c8656d`.

### evaluation:254827

Chamadas escritas diretamente neste corpo: `new InteractionResponse`, `new WebFetchRequestResponse`, `new WebFetchRequestResponse_Approved`.

SHA-256 do trecho: `cf28e1e1ba8d22f90e62bb3ed150da9ff67caa89afaac0acf0f46f3f91c8656d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
