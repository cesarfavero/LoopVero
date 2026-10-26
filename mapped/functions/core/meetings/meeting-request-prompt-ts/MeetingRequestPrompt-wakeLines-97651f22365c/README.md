# `_MeetingRequestPrompt.wakeLines`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/meetings/meeting-request-prompt.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-request-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754061-754072](../../../../../../reference/runtime/host-main.cjs#L754061-L754072) | `method` | não | `{ summary, lines: lines2, omitted }` |
| [evaluation:535857-535868](../../../../../../reference/runtime/sand-eval-runner.cjs#L535857-L535868) | `method` | não | `{ summary, lines: lines2, omitted }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754061-754072](../../../../../../reference/runtime/host-main.cjs#L754061-L754072) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:535857-535868](../../../../../../reference/runtime/sand-eval-runner.cjs#L535857-L535868) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:754061

Chamadas escritas diretamente neste corpo: `_MeetingRequestPrompt.omittedLine`.

SHA-256 do trecho: `771a8fb4f25f928c6a6d9c864d7c4ecbbcf7dfd470e439b0331c682809691399`.

### evaluation:535857

Chamadas escritas diretamente neste corpo: `_MeetingRequestPrompt.omittedLine`.

SHA-256 do trecho: `771a8fb4f25f928c6a6d9c864d7c4ecbbcf7dfd470e439b0331c682809691399`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
