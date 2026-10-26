# `queryMcpAuth`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-queries.js` · [README do módulo](../../../../modules/agent-core/interaction-queries-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:254782-254793](../../../../../reference/runtime/sand-eval-runner.cjs#L254782-L254793) | `FunctionDeclaration` | sim | `listener, ctx, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:254782-254793](../../../../../reference/runtime/sand-eval-runner.cjs#L254782-L254793) | 1 | 0 | 1 | 1 | 1 | 0 |

### evaluation:254782

Chamadas escritas diretamente neste corpo: `listener.query`, `new Error`, `new InteractionQuery`, `new McpAuthRequestQuery`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `d0211b79ce4b4f9e5494ba1c330cc6b1167076840c37a000048389a865755b70`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
