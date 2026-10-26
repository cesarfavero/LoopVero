# `readJpegDimensions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/image-dimensions.ts` · [README do módulo](../../../../../modules/shared/media/image-dimensions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497571-497579](../../../../../../reference/runtime/host-main.cjs#L497571-L497579) | `FunctionDeclaration` | não | `buffer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497571-497579](../../../../../../reference/runtime/host-main.cjs#L497571-L497579) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:497571

Chamadas escritas diretamente neste corpo: `dataViewOf`, `jpegFrameHeaderOffset`, `toImageDimensions`, `view.getUint16`.

SHA-256 do trecho: `76728dff24c8c91bbd7e0ecda275996cbe655af11b6a700fd140b4198dc25c38`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
