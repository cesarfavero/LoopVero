# `_MeetingsTools.askConsent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/meetings/meetings-tools.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773371-773379](../../../../../../reference/runtime/host-main.cjs#L773371-L773379) | `method` | sim | `deps` |
| [evaluation:572597-572605](../../../../../../reference/runtime/sand-eval-runner.cjs#L572597-L572605) | `method` | sim | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773371-773379](../../../../../../reference/runtime/host-main.cjs#L773371-L773379) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:572597-572605](../../../../../../reference/runtime/sand-eval-runner.cjs#L572597-L572605) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:773371

Chamadas escritas diretamente neste corpo: `deps.reviewJoin.askConsent`, `reviewCallId`.

SHA-256 do trecho: `249931d1a1772eac6dc7e39cd8ba7acd1fb393bbf502f0cfd85ad55b898ea008`.

### evaluation:572597

Chamadas escritas diretamente neste corpo: `deps.reviewJoin.askConsent`, `reviewCallId`.

SHA-256 do trecho: `249931d1a1772eac6dc7e39cd8ba7acd1fb393bbf502f0cfd85ad55b898ea008`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
