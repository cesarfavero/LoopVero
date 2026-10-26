# `queryWebFetch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-queries.js` · [README do módulo](../../../../modules/agent-core/interaction-queries-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475553-475569](../../../../../reference/runtime/host-main.cjs#L475553-L475569) | `FunctionDeclaration` | sim | `listener, ctx, args, options2` |
| [evaluation:254765-254781](../../../../../reference/runtime/sand-eval-runner.cjs#L254765-L254781) | `FunctionDeclaration` | sim | `listener, ctx, args, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475553-475569](../../../../../reference/runtime/host-main.cjs#L475553-L475569) | 2 | 0 | 1 | 1 | 1 | 0 |
| [evaluation:254765-254781](../../../../../reference/runtime/sand-eval-runner.cjs#L254765-L254781) | 2 | 0 | 1 | 1 | 1 | 0 |

### host:475553

Chamadas escritas diretamente neste corpo: `listener.query`, `new Error`, `new InteractionQuery`, `new WebFetchRequestQuery`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `ca49a778d7f1e40d72e57498539813302194e7218c8fdac78c506522f3639fb2`.

### evaluation:254765

Chamadas escritas diretamente neste corpo: `listener.query`, `new Error`, `new InteractionQuery`, `new WebFetchRequestQuery`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `ca49a778d7f1e40d72e57498539813302194e7218c8fdac78c506522f3639fb2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
