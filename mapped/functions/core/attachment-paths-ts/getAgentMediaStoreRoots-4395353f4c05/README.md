# `getAgentMediaStoreRoots`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `core/attachment-paths.ts` · [README do módulo](../../../../modules/core/attachment-paths-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:530340-530342](../../../../../reference/runtime/sand-eval-runner.cjs#L530340-L530342) | `FunctionDeclaration` | não | `agentDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:530340-530342](../../../../../reference/runtime/sand-eval-runner.cjs#L530340-L530342) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:530340

Chamadas escritas diretamente neste corpo: `getAgentAssetsDir`, `getAgentAttachmentsDir`.

SHA-256 do trecho: `305dc411f630887ce38880ec2f894cc5379ecb55bfbcb1b928e4b4cd0b97514f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
