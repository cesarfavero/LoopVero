# `boundedConnectorTag`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/observability/README.md).

**Módulo:** `shared/observability/connector-auth-telemetry.ts` · [README do módulo](../../../../../modules/shared/observability/connector-auth-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:455584-455592](../../../../../../reference/runtime/host-main.cjs#L455584-L455592) | `FunctionDeclaration` | não | `serverName, serverUrl` |
| [evaluation:477380-477388](../../../../../../reference/runtime/sand-eval-runner.cjs#L477380-L477388) | `FunctionDeclaration` | não | `serverName, serverUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:455584-455592](../../../../../../reference/runtime/host-main.cjs#L455584-L455592) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:477380-477388](../../../../../../reference/runtime/sand-eval-runner.cjs#L477380-L477388) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:455584

Chamadas escritas diretamente neste corpo: `.replace`, `CONNECTOR_TAG_ALIASES.get`, `SAND_KNOWN_CONNECTOR_TAGS.has`, `proxiedConnectorTag`, `serverName.toLowerCase`.

SHA-256 do trecho: `81431782e9a0feec6b3e08fe92b06288b6244c49ef44a6a9acb2024bc72004cb`.

### evaluation:477380

Chamadas escritas diretamente neste corpo: `.replace`, `CONNECTOR_TAG_ALIASES.get`, `SAND_KNOWN_CONNECTOR_TAGS.has`, `proxiedConnectorTag`, `serverName.toLowerCase`.

SHA-256 do trecho: `81431782e9a0feec6b3e08fe92b06288b6244c49ef44a6a9acb2024bc72004cb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
