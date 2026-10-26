# `sendToMeeting`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760548-760562](../../../../../../../reference/runtime/host-main.cjs#L760548-L760562) | `FunctionDeclaration` | sim | `{   deps,   message,   meetingId,   signal }` |
| [evaluation:551363-551377](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551363-L551377) | `FunctionDeclaration` | sim | `{   deps,   message,   meetingId,   signal }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760548-760562](../../../../../../../reference/runtime/host-main.cjs#L760548-L760562) | 2 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:551363-551377](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551363-L551377) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:760548

Chamadas escritas diretamente neste corpo: `deps.meetingChat.send`.

SHA-256 do trecho: `c2021dcba9913b2e49ada16b3989adc55ad490a349553a84f76403f4b3833c00`.

### evaluation:551363

Chamadas escritas diretamente neste corpo: `deps.meetingChat.send`.

SHA-256 do trecho: `c2021dcba9913b2e49ada16b3989adc55ad490a349553a84f76403f4b3833c00`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
