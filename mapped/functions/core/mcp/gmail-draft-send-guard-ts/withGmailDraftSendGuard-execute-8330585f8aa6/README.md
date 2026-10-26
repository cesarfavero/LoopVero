# `withGmailDraftSendGuard/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-draft-send-guard.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-draft-send-guard-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584438-584444](../../../../../../reference/runtime/sand-eval-runner.cjs#L584438-L584444) | `FunctionExpression` | sim | `ctx, args, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584438-584444](../../../../../../reference/runtime/sand-eval-runner.cjs#L584438-L584444) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:584438

Chamadas escritas diretamente neste corpo: `executor.execute`, `ignoredDraftSendFields`, `recordMcpExecRefusedBeforeDispatch`, `refusalResult2`, `refusals.increment`.

SHA-256 do trecho: `8bd2cbd640de8d1a6f5e9d7c9d4fad13edc6e95969eaa731d1d8e1f274c60d06`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
