# `isSendMessageReminderMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/send-message-reminder-middleware.ts` · [README do módulo](../../../../../modules/core/runner/send-message-reminder-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:483093-483096](../../../../../../reference/runtime/sand-eval-runner.cjs#L483093-L483096) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483093-483096](../../../../../../reference/runtime/sand-eval-runner.cjs#L483093-L483096) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:483093

Chamadas escritas diretamente neste corpo: `getUserMessageText`, `text3.includes`.

SHA-256 do trecho: `97f52dcf9c74df5df93afc022e39845975df116566ed4cefc1da42d833f50852`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
