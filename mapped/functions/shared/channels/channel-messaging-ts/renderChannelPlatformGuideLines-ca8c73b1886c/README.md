# `renderChannelPlatformGuideLines`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/channels/channel-messaging.ts` · [README do módulo](../../../../../modules/shared/channels/channel-messaging-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:474575-474585](../../../../../../reference/runtime/sand-eval-runner.cjs#L474575-L474585) | `FunctionDeclaration` | não | `manifests` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:474575-474585](../../../../../../reference/runtime/sand-eval-runner.cjs#L474575-L474585) | 1 | 2 | 0 | 1 | 0 | 0 |

### evaluation:474575

Chamadas escritas diretamente neste corpo: `connectorCopyForPrompt`, `lines2.push`, `manifest.connectGuide.split`.

SHA-256 do trecho: `bb56b65fb2dd92162ada9bb33e67987c7e5980844da6b41ce46555b40b5b5fdc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
