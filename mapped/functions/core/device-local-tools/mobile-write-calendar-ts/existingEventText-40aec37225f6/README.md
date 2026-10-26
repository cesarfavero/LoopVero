# `existingEventText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/mobile-write-calendar.ts` · [README do módulo](../../../../../modules/core/device-local-tools/mobile-write-calendar-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:759290-759297](../../../../../../reference/runtime/host-main.cjs#L759290-L759297) | `FunctionDeclaration` | não | `{   currentTitle,   currentStart }` |
| [evaluation:549450-549457](../../../../../../reference/runtime/sand-eval-runner.cjs#L549450-L549457) | `FunctionDeclaration` | não | `{   currentTitle,   currentStart }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759290-759297](../../../../../../reference/runtime/host-main.cjs#L759290-L759297) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:549450-549457](../../../../../../reference/runtime/sand-eval-runner.cjs#L549450-L549457) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:759290

Chamadas escritas diretamente neste corpo: `isAllDay`, `isBlank`, `timeText`.

SHA-256 do trecho: `0dbae27c6c07356a3613495bbd51ecfe3a93cd2a92b50411b8782d1280984172`.

### evaluation:549450

Chamadas escritas diretamente neste corpo: `isAllDay`, `isBlank`, `timeText`.

SHA-256 do trecho: `0dbae27c6c07356a3613495bbd51ecfe3a93cd2a92b50411b8782d1280984172`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
