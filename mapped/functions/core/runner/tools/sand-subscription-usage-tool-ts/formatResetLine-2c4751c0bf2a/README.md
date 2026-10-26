# `formatResetLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-subscription-usage-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-subscription-usage-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766635-766640](../../../../../../../reference/runtime/host-main.cjs#L766635-L766640) | `FunctionDeclaration` | não | `nextResetMs, nowMs2` |
| [evaluation:562148-562153](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562148-L562153) | `FunctionDeclaration` | não | `nextResetMs, nowMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766635-766640](../../../../../../../reference/runtime/host-main.cjs#L766635-L766640) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:562148-562153](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562148-L562153) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:766635

Chamadas escritas diretamente neste corpo: `formatCountdown`.

SHA-256 do trecho: `e133b9e2353d2cafd451660a425941f3113a35e39d9f49d2b39c077d4363afdf`.

### evaluation:562148

Chamadas escritas diretamente neste corpo: `formatCountdown`.

SHA-256 do trecho: `cd87be52b04084cecfb6301da30dd730ce969673ffd54bbd4ce0587abf8b73b4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
