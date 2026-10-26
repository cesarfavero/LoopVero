# `_MeetingsTools.renderList`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/meetings/meetings-tools.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773120-773132](../../../../../../reference/runtime/host-main.cjs#L773120-L773132) | `method` | não | `page, args, nowMs2 = Date.now()` |
| [evaluation:572346-572358](../../../../../../reference/runtime/sand-eval-runner.cjs#L572346-L572358) | `method` | não | `page, args, nowMs = Date.now()` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773120-773132](../../../../../../reference/runtime/host-main.cjs#L773120-L773132) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:572346-572358](../../../../../../reference/runtime/sand-eval-runner.cjs#L572346-L572358) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:773120

Chamadas escritas diretamente neste corpo: `_MeetingsTools.emptyPage`, `_MeetingsTools.renderPage`, `rows.map`.

SHA-256 do trecho: `7f46d51434a4061112d3d15e188cf709d567722ccdcc0afeabbadbb50630d33f`.

### evaluation:572346

Chamadas escritas diretamente neste corpo: `_MeetingsTools.emptyPage`, `_MeetingsTools.renderPage`, `rows.map`.

SHA-256 do trecho: `ce2caa1a20dd432ea11ac8fee3f99af4a3263b99678eaa942eae8fe97b174f83`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
