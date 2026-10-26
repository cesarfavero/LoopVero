# `formatCountdown`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-subscription-usage-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-subscription-usage-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766592-766595](../../../../../../../reference/runtime/host-main.cjs#L766592-L766595) | `FunctionDeclaration` | não | `verb, atMs, nowMs2` |
| [evaluation:562105-562108](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562105-L562108) | `FunctionDeclaration` | não | `verb, atMs, nowMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766592-766595](../../../../../../../reference/runtime/host-main.cjs#L766592-L766595) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:562105-562108](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562105-L562108) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:766592

Chamadas escritas diretamente neste corpo: `formatDurationMs`, `formatUtcTimestamp`.

SHA-256 do trecho: `b1512eabda7b93e73c881379235460319dfd571b193aae00144373bc169ddc0b`.

### evaluation:562105

Chamadas escritas diretamente neste corpo: `formatDurationMs`, `formatUtcTimestamp`.

SHA-256 do trecho: `e1f89043062b299b0bbfd1aff8f33e1b276ee6faf07c7449634847d8256936ca`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
