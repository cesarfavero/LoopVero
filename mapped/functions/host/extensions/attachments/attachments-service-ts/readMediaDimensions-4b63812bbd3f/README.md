# `readMediaDimensions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/attachments-service.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:498994-499000](../../../../../../../reference/runtime/host-main.cjs#L498994-L499000) | `FunctionDeclaration` | sim | `filePath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498994-499000](../../../../../../../reference/runtime/host-main.cjs#L498994-L499000) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:498994

Chamadas escritas diretamente neste corpo: `getSandRootDir`, `isPathWithin`, `readImageDimensions`, `readVideoDimensions`, `reanchorHostPath`, `servableImageMimeFromPath`, `videoMimeFromPath`.

SHA-256 do trecho: `77c69c971ce44cfff8d88fecee7f797485ed6f2d3d8b277dc21be2aeca18622d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
