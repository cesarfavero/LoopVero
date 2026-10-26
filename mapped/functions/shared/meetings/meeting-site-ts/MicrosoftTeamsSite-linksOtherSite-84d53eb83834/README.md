# `_MicrosoftTeamsSite.linksOtherSite`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/meetings/meeting-site.ts` · [README do módulo](../../../../../modules/shared/meetings/meeting-site-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772392-772398](../../../../../../reference/runtime/host-main.cjs#L772392-L772398) | `method` | não | `text3` |
| [evaluation:571621-571627](../../../../../../reference/runtime/sand-eval-runner.cjs#L571621-L571627) | `method` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772392-772398](../../../../../../reference/runtime/host-main.cjs#L772392-L772398) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:571621-571627](../../../../../../reference/runtime/sand-eval-runner.cjs#L571621-L571627) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:772392

Chamadas escritas diretamente neste corpo: `MeetingHosts.siteOf`, `MeetingSites.linksIn`, `URL.canParse`, `new URL`.

SHA-256 do trecho: `b524d9d82597989cbd372d6271a8bc8cc42dbf6a94d9fa2b5ffb779107307827`.

### evaluation:571621

Chamadas escritas diretamente neste corpo: `MeetingHosts.siteOf`, `MeetingSites.linksIn`, `URL.canParse`, `new URL`.

SHA-256 do trecho: `b524d9d82597989cbd372d6271a8bc8cc42dbf6a94d9fa2b5ffb779107307827`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
