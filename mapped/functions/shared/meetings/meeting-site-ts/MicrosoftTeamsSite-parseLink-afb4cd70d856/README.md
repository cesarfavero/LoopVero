# `_MicrosoftTeamsSite.parseLink`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/meetings/meeting-site.ts` · [README do módulo](../../../../../modules/shared/meetings/meeting-site-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772358-772378](../../../../../../reference/runtime/host-main.cjs#L772358-L772378) | `method` | não | `link` |
| [evaluation:571587-571607](../../../../../../reference/runtime/sand-eval-runner.cjs#L571587-L571607) | `method` | não | `link` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772358-772378](../../../../../../reference/runtime/host-main.cjs#L772358-L772378) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:571587-571607](../../../../../../reference/runtime/sand-eval-runner.cjs#L571587-L571607) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:772358

Chamadas escritas diretamente neste corpo: `.filter`, `_MicrosoftTeamsSite.meetLink`, `_MicrosoftTeamsSite.meetupJoinLink`, `head.toLowerCase`, `link.hostname.toLowerCase`, `link.pathname.split`, `link.searchParams.get`, `second.toLowerCase`.

SHA-256 do trecho: `f22c361f1f08a6653a9311f488618472d99583d92830c49c25a7f60c9aafa541`.

### evaluation:571587

Chamadas escritas diretamente neste corpo: `.filter`, `_MicrosoftTeamsSite.meetLink`, `_MicrosoftTeamsSite.meetupJoinLink`, `head.toLowerCase`, `link.hostname.toLowerCase`, `link.pathname.split`, `link.searchParams.get`, `second.toLowerCase`.

SHA-256 do trecho: `f22c361f1f08a6653a9311f488618472d99583d92830c49c25a7f60c9aafa541`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
