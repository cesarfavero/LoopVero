# `mcpStillLoadingReminderMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/reminders/mcp-still-loading-reminder-middleware.ts` · [README do módulo](../../../../../../modules/core/runner/reminders/mcp-still-loading-reminder-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586846-586851](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586846-L586851) | `FunctionDeclaration` | não | `serverNames` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586846-586851](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586846-L586851) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:586846

Chamadas escritas diretamente neste corpo: `serverNames.join`, `systemReminder`.

SHA-256 do trecho: `6723d96295d8fcc0a46ad977c5ccd89737b2f30fe6fb498c2f5537887d4cfd95`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
