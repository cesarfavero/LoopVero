# `_MicrosoftTeamsSite.parse`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/meetings/meeting-site.ts` · [README do módulo](../../../../../modules/shared/meetings/meeting-site-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772337-772357](../../../../../../reference/runtime/host-main.cjs#L772337-L772357) | `method` | não | `raw` |
| [evaluation:571566-571586](../../../../../../reference/runtime/sand-eval-runner.cjs#L571566-L571586) | `method` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772337-772357](../../../../../../reference/runtime/host-main.cjs#L772337-L772357) | 9 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:571566-571586](../../../../../../reference/runtime/sand-eval-runner.cjs#L571566-L571586) | 9 | 1 | 0 | 3 | 0 | 0 |

### host:772337

Chamadas escritas diretamente neste corpo: `MeetingHosts.siteOf`, `MeetingSite.httpsUrl`, `_MicrosoftTeamsSite.leadingLink.exec`, `_MicrosoftTeamsSite.leadingToken.exec`, `_MicrosoftTeamsSite.linksOtherSite`, `_MicrosoftTeamsSite.parseDialIn`, `_MicrosoftTeamsSite.parseLink`, `_MicrosoftTeamsSite.splitIdTail.test`, `linked.replace`, `raw.trim`, `rest.matchAll`, `trimmed.slice`.

SHA-256 do trecho: `69e07a78ebf66eca53d5db2e54a7869279cf8eec81904dbba478c2f729b9144f`.

### evaluation:571566

Chamadas escritas diretamente neste corpo: `MeetingHosts.siteOf`, `MeetingSite.httpsUrl`, `_MicrosoftTeamsSite.leadingLink.exec`, `_MicrosoftTeamsSite.leadingToken.exec`, `_MicrosoftTeamsSite.linksOtherSite`, `_MicrosoftTeamsSite.parseDialIn`, `_MicrosoftTeamsSite.parseLink`, `_MicrosoftTeamsSite.splitIdTail.test`, `linked.replace`, `raw.trim`, `rest.matchAll`, `trimmed.slice`.

SHA-256 do trecho: `0b7a50cb9af50ab742ffda19d2207491ae81a54157897b8028e22642c8458b79`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
