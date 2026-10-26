# `renderChannelsSystemPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/channels/channel-messaging.ts` · [README do módulo](../../../../../modules/shared/channels/channel-messaging-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:474586-474632](../../../../../../reference/runtime/sand-eval-runner.cjs#L474586-L474632) | `FunctionDeclaration` | não | `manifests, connections, location, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:474586-474632](../../../../../../reference/runtime/sand-eval-runner.cjs#L474586-L474632) | 6 | 1 | 0 | 3 | 0 | 0 |

### evaluation:474586

Chamadas escritas diretamente neste corpo: `.join`, `channelsAddressLine`, `channelsLocationLine`, `comingSoon.map`, `describeConnection`, `hasChannelsToShow`, `hasLiveConnection`, `lines2.join`, `lines2.push`, `manifests.filter`, `renderChannelPlatformGuideLines`, `shownManifests.filter`.

SHA-256 do trecho: `a62cb5e4008ceb9663fac2c3bee9884b459e35ad122a4a59d56a36946b98607e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
