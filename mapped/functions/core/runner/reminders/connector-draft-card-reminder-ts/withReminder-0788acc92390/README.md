# `withReminder`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/reminders/connector-draft-card-reminder.ts` · [README do módulo](../../../../../../modules/core/runner/reminders/connector-draft-card-reminder-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585539-585548](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585539-L585548) | `FunctionDeclaration` | não | `result, reminder` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585539-585548](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585539-L585548) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:585539

Chamadas escritas diretamente neste corpo: `new McpResult`, `new McpTextContent`, `new McpToolResultContentItem`, `result.result.value.clone`, `success2.content.push`.

SHA-256 do trecho: `240276564e09322a41527480f7e8fa072cec19b50d0432f318564e5ebf7ea4c5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
