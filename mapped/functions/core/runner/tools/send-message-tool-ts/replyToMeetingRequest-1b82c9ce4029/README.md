# `replyToMeetingRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760563-760601](../../../../../../../reference/runtime/host-main.cjs#L760563-L760601) | `FunctionDeclaration` | sim | `{   deps,   message,   meetingId,   key }` |
| [evaluation:551378-551416](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551378-L551416) | `FunctionDeclaration` | sim | `{   deps,   message,   meetingId,   key }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760563-760601](../../../../../../../reference/runtime/host-main.cjs#L760563-L760601) | 6 | 0 | 1 | 6 | 0 | 0 |
| [evaluation:551378-551416](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551378-L551416) | 6 | 0 | 1 | 6 | 0 | 0 |

### host:760563

Chamadas escritas diretamente neste corpo: `deps.replyToMeetingRequest`.

SHA-256 do trecho: `456c5819736b91629457ca2dfe49df0da7e572e271672faecc31eaa9568d1384`.

### evaluation:551378

Chamadas escritas diretamente neste corpo: `deps.replyToMeetingRequest`.

SHA-256 do trecho: `456c5819736b91629457ca2dfe49df0da7e572e271672faecc31eaa9568d1384`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
