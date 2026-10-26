# `hiddenClickReplyReminder`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/wake-outcomes.ts` · [README do módulo](../../../../../modules/core/runner/wake-outcomes-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725674-725679](../../../../../../reference/runtime/host-main.cjs#L725674-L725679) | `FunctionDeclaration` | não | `clicked` |
| [evaluation:538731-538736](../../../../../../reference/runtime/sand-eval-runner.cjs#L538731-L538736) | `FunctionDeclaration` | não | `clicked` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725674-725679](../../../../../../reference/runtime/host-main.cjs#L725674-L725679) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:538731-538736](../../../../../../reference/runtime/sand-eval-runner.cjs#L538731-L538736) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725674

Chamadas escritas diretamente neste corpo: `systemReminder`.

SHA-256 do trecho: `491bb9e389d3587b047d5bb02307dfbe64d1758123eef038d015de33d94f6218`.

### evaluation:538731

Chamadas escritas diretamente neste corpo: `systemReminder`.

SHA-256 do trecho: `491bb9e389d3587b047d5bb02307dfbe64d1758123eef038d015de33d94f6218`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
