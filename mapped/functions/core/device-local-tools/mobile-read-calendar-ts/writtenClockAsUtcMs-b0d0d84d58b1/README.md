# `writtenClockAsUtcMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/mobile-read-calendar.ts` · [README do módulo](../../../../../modules/core/device-local-tools/mobile-read-calendar-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:759146-759150](../../../../../../reference/runtime/host-main.cjs#L759146-L759150) | `FunctionDeclaration` | não | `value, bound` |
| [evaluation:549306-549310](../../../../../../reference/runtime/sand-eval-runner.cjs#L549306-L549310) | `FunctionDeclaration` | não | `value, bound` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759146-759150](../../../../../../reference/runtime/host-main.cjs#L759146-L759150) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:549306-549310](../../../../../../reference/runtime/sand-eval-runner.cjs#L549306-L549310) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:759146

Chamadas escritas diretamente neste corpo: `Date.parse`, `Number.isNaN`, `boundFormOf`, `value.replace`.

SHA-256 do trecho: `b6a7743b6ecf2614e415d19246273e5ae1508965ae10b5c2ff47e0ab07042ff8`.

### evaluation:549306

Chamadas escritas diretamente neste corpo: `Date.parse`, `Number.isNaN`, `boundFormOf`, `value.replace`.

SHA-256 do trecho: `c0447b8c7685d73a5e1dafa3ebc70123dce85bac28e5ec3602b8da2bc457f2c4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
