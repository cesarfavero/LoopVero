# `webFetchRejected`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-queries.js` · [README do módulo](../../../../modules/agent-core/interaction-queries-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475617-475632](../../../../../reference/runtime/host-main.cjs#L475617-L475632) | `FunctionExpression` | não | `queryId, reason` |
| [evaluation:254841-254856](../../../../../reference/runtime/sand-eval-runner.cjs#L254841-L254856) | `FunctionExpression` | não | `queryId, reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475617-475632](../../../../../reference/runtime/host-main.cjs#L475617-L475632) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254841-254856](../../../../../reference/runtime/sand-eval-runner.cjs#L254841-L254856) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475617

Chamadas escritas diretamente neste corpo: `new InteractionResponse`, `new WebFetchRequestResponse`, `new WebFetchRequestResponse_Rejected`.

SHA-256 do trecho: `854ed427d6ab9700f30ffdd8885724b091eaa9f0e1a56d8ecb29e4c07417859a`.

### evaluation:254841

Chamadas escritas diretamente neste corpo: `new InteractionResponse`, `new WebFetchRequestResponse`, `new WebFetchRequestResponse_Rejected`.

SHA-256 do trecho: `854ed427d6ab9700f30ffdd8885724b091eaa9f0e1a56d8ecb29e4c07417859a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
