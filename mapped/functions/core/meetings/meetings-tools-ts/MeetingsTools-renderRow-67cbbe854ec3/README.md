# `_MeetingsTools.renderRow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/meetings/meetings-tools.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773101-773119](../../../../../../reference/runtime/host-main.cjs#L773101-L773119) | `method` | não | `row, nowMs2 = Date.now()` |
| [evaluation:572327-572345](../../../../../../reference/runtime/sand-eval-runner.cjs#L572327-L572345) | `method` | não | `row, nowMs = Date.now()` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773101-773119](../../../../../../reference/runtime/host-main.cjs#L773101-L773119) | 7 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572327-572345](../../../../../../reference/runtime/sand-eval-runner.cjs#L572327-L572345) | 7 | 0 | 0 | 1 | 0 | 0 |

### host:773101

Chamadas escritas diretamente neste corpo: `MeetingScheduleCopy.repeatDescription`, `_MeetingsTools.formatTime`, `_MeetingsTools.joiningIn`, `_MeetingsTools.providerSuffix`, `_MeetingsTools.titleSuffix`, `lines2.join`, `lines2.push`.

SHA-256 do trecho: `f6de036a72daffc8898eda3886370ffbf78a17716c7e2fc29fc6594d5ec239a3`.

### evaluation:572327

Chamadas escritas diretamente neste corpo: `MeetingScheduleCopy.repeatDescription`, `_MeetingsTools.formatTime`, `_MeetingsTools.joiningIn`, `_MeetingsTools.providerSuffix`, `_MeetingsTools.titleSuffix`, `lines2.join`, `lines2.push`.

SHA-256 do trecho: `92446a3964dd360943399b5b85209716bb6ff892ffd1bfb03ec65a9fbfebf9c6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
