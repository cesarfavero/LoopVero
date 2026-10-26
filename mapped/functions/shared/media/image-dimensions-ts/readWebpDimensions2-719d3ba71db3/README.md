# `readWebpDimensions2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/image-dimensions.ts` · [README do módulo](../../../../../modules/shared/media/image-dimensions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497449-497474](../../../../../../reference/runtime/host-main.cjs#L497449-L497474) | `FunctionDeclaration` | não | `buffer` |
| [evaluation:515144-515169](../../../../../../reference/runtime/sand-eval-runner.cjs#L515144-L515169) | `FunctionDeclaration` | não | `buffer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497449-497474](../../../../../../reference/runtime/host-main.cjs#L497449-L497474) | 7 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:515144-515169](../../../../../../reference/runtime/sand-eval-runner.cjs#L515144-L515169) | 7 | 0 | 0 | 7 | 0 | 0 |

### host:497449

Chamadas escritas diretamente neste corpo: `dataViewOf`, `fourCharTag`, `readU24LE`, `toImageDimensions`, `view.getUint16`, `view.getUint32`.

SHA-256 do trecho: `0152c23ff7596e7eb2aff9de1335454295a8bb08f2d4b457358ab145499b3f29`.

### evaluation:515144

Chamadas escritas diretamente neste corpo: `dataViewOf`, `fourCharTag`, `readU24LE`, `toImageDimensions`, `view.getUint16`, `view.getUint32`.

SHA-256 do trecho: `0152c23ff7596e7eb2aff9de1335454295a8bb08f2d4b457358ab145499b3f29`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
