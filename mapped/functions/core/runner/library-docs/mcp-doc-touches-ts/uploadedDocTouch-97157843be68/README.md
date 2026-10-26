# `uploadedDocTouch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/library-docs/mcp-doc-touches.ts` · [README do módulo](../../../../../../modules/core/runner/library-docs/mcp-doc-touches-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774534-774541](../../../../../../../reference/runtime/host-main.cjs#L774534-L774541) | `FunctionDeclaration` | não | `serviceKey, uploaded` |
| [evaluation:574110-574117](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574110-L574117) | `FunctionDeclaration` | não | `serviceKey, uploaded` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774534-774541](../../../../../../../reference/runtime/host-main.cjs#L774534-L774541) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:574110-574117](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574110-L574117) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:774534

Chamadas escritas diretamente neste corpo: `connectorDocConnectorForUploadService`, `connectorDocRefFromId`, `connectorDocRefFromUrl`, `sanitizeTitle`.

SHA-256 do trecho: `bcdbd8b65ba36c5f55b504100e20334e9e9baa29dfce339e6df61079460ae402`.

### evaluation:574110

Chamadas escritas diretamente neste corpo: `connectorDocConnectorForUploadService`, `connectorDocRefFromId`, `connectorDocRefFromUrl`, `sanitizeTitle`.

SHA-256 do trecho: `bcdbd8b65ba36c5f55b504100e20334e9e9baa29dfce339e6df61079460ae402`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
