# `readImageDimensions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/attachments-service.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:498948-498964](../../../../../../../reference/runtime/host-main.cjs#L498948-L498964) | `FunctionDeclaration` | sim | `filePath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498948-498964](../../../../../../../reference/runtime/host-main.cjs#L498948-L498964) | 3 | 0 | 2 | 5 | 0 | 1 |

### host:498948

Chamadas escritas diretamente neste corpo: `getSandRootDir`, `holdAttachmentFile`, `isPathWithin`, `realSandDataFile`, `reanchorHostPath`, `reportFallbackUnlessAbsent`, `servableImageMimeFromPath`.

SHA-256 do trecho: `0c306f539a785cddaf014ea0b24e5a9fd7a1a541986599f289568ea00589d82d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
