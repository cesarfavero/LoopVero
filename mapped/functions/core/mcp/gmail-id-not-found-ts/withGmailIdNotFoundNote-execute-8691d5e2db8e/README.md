# `withGmailIdNotFoundNote/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-id-not-found.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-id-not-found-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584523-584534](../../../../../../reference/runtime/sand-eval-runner.cjs#L584523-L584534) | `FunctionExpression` | sim | `ctx, args, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584523-584534](../../../../../../reference/runtime/sand-eval-runner.cjs#L584523-L584534) | 3 | 0 | 1 | 4 | 0 | 0 |

### evaluation:584523

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `executor.execute`, `failureText`, `gmailIdKindOf`, `isGmailIdFailure`, `noted2.increment`, `resolveServerHost`, `withIdNote`.

SHA-256 do trecho: `559d3277f85a6de2cc31a3521a585b1174fb0e3573bb526a23810279a96dc474`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
