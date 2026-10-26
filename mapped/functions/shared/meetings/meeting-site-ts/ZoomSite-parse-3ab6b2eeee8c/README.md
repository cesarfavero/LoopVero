# `_ZoomSite.parse`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/meetings/meeting-site.ts` · [README do módulo](../../../../../modules/shared/meetings/meeting-site-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772287-772297](../../../../../../reference/runtime/host-main.cjs#L772287-L772297) | `method` | não | `raw` |
| [evaluation:571516-571526](../../../../../../reference/runtime/sand-eval-runner.cjs#L571516-L571526) | `method` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772287-772297](../../../../../../reference/runtime/host-main.cjs#L772287-L772297) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:571516-571526](../../../../../../reference/runtime/sand-eval-runner.cjs#L571516-L571526) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:772287

Chamadas escritas diretamente neste corpo: `.filter`, `MeetingHosts.siteOf`, `MeetingSite.httpsUrl`, `_ZoomSite.meetingId`, `_ZoomSite.password`, `encodeURIComponent`, `parsed2.pathname.split`, `raw.trim`.

SHA-256 do trecho: `0c650c7b2b3b35713aad30bad5ed8cd459dd23fedc3569384bf1d8aa6df6c863`.

### evaluation:571516

Chamadas escritas diretamente neste corpo: `.filter`, `MeetingHosts.siteOf`, `MeetingSite.httpsUrl`, `_ZoomSite.meetingId`, `_ZoomSite.password`, `encodeURIComponent`, `parsed.pathname.split`, `raw.trim`.

SHA-256 do trecho: `a9f9233dc2463fb83abfa35f24d39b31794f03184b3eb96667276ff84250b8c0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
