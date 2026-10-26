# `formatUtcOffset`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-sections/time-zone-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/time-zone-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:538907-538920](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538907-L538920) | `FunctionDeclaration` | não | `now, timeZone` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538907-538920](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538907-L538920) | 2 | 0 | 0 | 3 | 0 | 1 |

### evaluation:538907

Chamadas escritas diretamente neste corpo: `.formatToParts`, `new Intl.DateTimeFormat`, `parts.find`, `raw.replace`.

SHA-256 do trecho: `fcf26c629883588578270f86e65649b9c6da26d64687a7ffbfe5bd6d0e3d8a21`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
