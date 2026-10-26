# `_MeetingsTools.joinNotApproved`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/meetings/meetings-tools.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773244-773246](../../../../../../reference/runtime/host-main.cjs#L773244-L773246) | `method` | não | `reason, answered` |
| [evaluation:572470-572472](../../../../../../reference/runtime/sand-eval-runner.cjs#L572470-L572472) | `method` | não | `reason, answered` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773244-773246](../../../../../../reference/runtime/host-main.cjs#L773244-L773246) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572470-572472](../../../../../../reference/runtime/sand-eval-runner.cjs#L572470-L572472) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:773244

Chamadas escritas diretamente neste corpo: `_MeetingsTools.answeredNote`.

SHA-256 do trecho: `dcd19f82cca93ded5523a38c7ed092b4dad2c77b31cb3f41dbf53c78adb31617`.

### evaluation:572470

Chamadas escritas diretamente neste corpo: `_MeetingsTools.answeredNote`.

SHA-256 do trecho: `dcd19f82cca93ded5523a38c7ed092b4dad2c77b31cb3f41dbf53c78adb31617`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
