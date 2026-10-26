# `_MeetingScheduleCopy.summary`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/meetings/meetings-shared.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-shared-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772693-772698](../../../../../../reference/runtime/host-main.cjs#L772693-L772698) | `method` | não | `review` |
| [evaluation:571919-571924](../../../../../../reference/runtime/sand-eval-runner.cjs#L571919-L571924) | `method` | não | `review` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772693-772698](../../../../../../reference/runtime/host-main.cjs#L772693-L772698) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571919-571924](../../../../../../reference/runtime/sand-eval-runner.cjs#L571919-L571924) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:772693

Chamadas escritas diretamente neste corpo: `.map`, `Object.entries`, `_MeetingScheduleCopy.reviewRecord`, `facts.join`.

SHA-256 do trecho: `51ed81e0ebe45d49cd679868246eb5bdf1cce0b943988d8918948a29d9904464`.

### evaluation:571919

Chamadas escritas diretamente neste corpo: `.map`, `Object.entries`, `_MeetingScheduleCopy.reviewRecord`, `facts.join`.

SHA-256 do trecho: `51ed81e0ebe45d49cd679868246eb5bdf1cce0b943988d8918948a29d9904464`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
