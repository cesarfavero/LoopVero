# `_MeetingRequestPrompt.header`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/meetings/meeting-request-prompt.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-request-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754077-754079](../../../../../../reference/runtime/host-main.cjs#L754077-L754079) | `method` | não | `request5` |
| [evaluation:535873-535875](../../../../../../reference/runtime/sand-eval-runner.cjs#L535873-L535875) | `method` | não | `request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754077-754079](../../../../../../reference/runtime/host-main.cjs#L754077-L754079) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:535873-535875](../../../../../../reference/runtime/sand-eval-runner.cjs#L535873-L535875) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754077

Chamadas escritas diretamente neste corpo: `.join`, `_MeetingRequestPrompt.headerLines`.

SHA-256 do trecho: `eb5551fafd3d3814093a2af8d967ed23376ad59006f212e3a6f2bd8a2a2d14de`.

### evaluation:535873

Chamadas escritas diretamente neste corpo: `.join`, `_MeetingRequestPrompt.headerLines`.

SHA-256 do trecho: `718471ae5269c1dd2991a308ace978ecb778f8b86cc3f15d775713efe9182ca9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
