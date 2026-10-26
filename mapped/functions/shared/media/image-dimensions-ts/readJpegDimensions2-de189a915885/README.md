# `readJpegDimensions2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/image-dimensions.ts` · [README do módulo](../../../../../modules/shared/media/image-dimensions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:515266-515274](../../../../../../reference/runtime/sand-eval-runner.cjs#L515266-L515274) | `FunctionDeclaration` | não | `buffer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:515266-515274](../../../../../../reference/runtime/sand-eval-runner.cjs#L515266-L515274) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:515266

Chamadas escritas diretamente neste corpo: `dataViewOf`, `jpegFrameHeaderOffset`, `toImageDimensions`, `view.getUint16`.

SHA-256 do trecho: `42eef6b736ade7d0580f02e9355a106587fac8dc5de9d2d592d72d8258e8ee20`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
