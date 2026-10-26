# `coverageNote`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-search-coverage.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-search-coverage-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584643-584651](../../../../../../reference/runtime/sand-eval-runner.cjs#L584643-L584651) | `FunctionDeclaration` | não | `tool, args, outcome, sweepMorePagesNote` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584643-584651](../../../../../../reference/runtime/sand-eval-runner.cjs#L584643-L584651) | 7 | 0 | 0 | 6 | 0 | 0 |

### evaluation:584643

Chamadas escritas diretamente neste corpo: `boolArg`, `isLookup`, `isWidened`, `stringArg3`, `sweepMorePagesNote`.

SHA-256 do trecho: `f3cdb35343deb1e125b29a893ef9665a5461d297acd06d74f5c6156a87434be7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
