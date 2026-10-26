# `queryWebSearch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-queries.js` · [README do módulo](../../../../modules/agent-core/interaction-queries-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475541-475552](../../../../../reference/runtime/host-main.cjs#L475541-L475552) | `FunctionDeclaration` | sim | `listener, ctx, args` |
| [evaluation:254753-254764](../../../../../reference/runtime/sand-eval-runner.cjs#L254753-L254764) | `FunctionDeclaration` | sim | `listener, ctx, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475541-475552](../../../../../reference/runtime/host-main.cjs#L475541-L475552) | 1 | 0 | 1 | 1 | 1 | 0 |
| [evaluation:254753-254764](../../../../../reference/runtime/sand-eval-runner.cjs#L254753-L254764) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:475541

Chamadas escritas diretamente neste corpo: `listener.query`, `new Error`, `new InteractionQuery`, `new WebSearchRequestQuery`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `f490681c972f8b4c2966ebfc365225d4ba2fc206c38e167d1bc3ee90c2abd1ba`.

### evaluation:254753

Chamadas escritas diretamente neste corpo: `listener.query`, `new Error`, `new InteractionQuery`, `new WebSearchRequestQuery`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `f490681c972f8b4c2966ebfc365225d4ba2fc206c38e167d1bc3ee90c2abd1ba`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
