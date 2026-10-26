# `imageRecipe/plan`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/image-preview-rendition.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/image-preview-rendition-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:498403-498426](../../../../../../../reference/runtime/host-main.cjs#L498403-L498426) | `FunctionExpression` | sim | `{ path: path33, ioPath }, step` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498403-498426](../../../../../../../reference/runtime/host-main.cjs#L498403-L498426) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:498403

Chamadas escritas diretamente neste corpo: `PREVIEW_SOURCE_EXTENSIONS.has`, `extensionOf`, `sizeOf`, `step.attempt`.

SHA-256 do trecho: `c49aef42fba7bcaa8451fe36998d6172aac890477c5ed2108a75df41961bfee9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
