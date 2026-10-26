# `hostedGmailSearchSuccess`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-search-coverage.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-search-coverage-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584626-584632](../../../../../../reference/runtime/sand-eval-runner.cjs#L584626-L584632) | `FunctionDeclaration` | não | `args, result, resolveServerHost` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584626-584632](../../../../../../reference/runtime/sand-eval-runner.cjs#L584626-L584632) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:584626

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `resolveServerHost`.

SHA-256 do trecho: `5110390b359156b994d674b707a96e9c743bb5253927db146c5ec0de746d1ccb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
