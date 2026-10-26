# `_GoogleMeetSite.parse`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/meetings/meeting-site.ts` · [README do módulo](../../../../../modules/shared/meetings/meeting-site-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772259-772266](../../../../../../reference/runtime/host-main.cjs#L772259-L772266) | `method` | não | `raw` |
| [evaluation:571488-571495](../../../../../../reference/runtime/sand-eval-runner.cjs#L571488-L571495) | `method` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772259-772266](../../../../../../reference/runtime/host-main.cjs#L772259-L772266) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:571488-571495](../../../../../../reference/runtime/sand-eval-runner.cjs#L571488-L571495) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:772259

Chamadas escritas diretamente neste corpo: `MeetingHosts.siteOf`, `MeetingSite.httpsUrl`, `_GoogleMeetSite.codeOfPath`, `_GoogleMeetSite.meetingCode.test`, `_GoogleMeetSite.urlOf`, `raw.trim`.

SHA-256 do trecho: `676114594b527d98f437330e0636b1ea938b11c28ff5258c7a70a1da9f1451e4`.

### evaluation:571488

Chamadas escritas diretamente neste corpo: `MeetingHosts.siteOf`, `MeetingSite.httpsUrl`, `_GoogleMeetSite.codeOfPath`, `_GoogleMeetSite.meetingCode.test`, `_GoogleMeetSite.urlOf`, `raw.trim`.

SHA-256 do trecho: `9d651fe6ad86edb37445e8dfcb6303f189bf8b74faedc6d16e595c91155080e5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
