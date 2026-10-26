# `sanitizeSource`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/spotlight/sand-spotlight.ts` · [README do módulo](../../../../../modules/shared/spotlight/sand-spotlight-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761630-761632](../../../../../../reference/runtime/host-main.cjs#L761630-L761632) | `FunctionDeclaration` | não | `source` |
| [evaluation:552445-552447](../../../../../../reference/runtime/sand-eval-runner.cjs#L552445-L552447) | `FunctionDeclaration` | não | `source` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761630-761632](../../../../../../reference/runtime/host-main.cjs#L761630-L761632) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:552445-552447](../../../../../../reference/runtime/sand-eval-runner.cjs#L552445-L552447) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761630

Chamadas escritas diretamente neste corpo: `.replaceAll`, `stripSpotlightTag`.

SHA-256 do trecho: `a72ec92687d7bd12d6f8499c21beadfe7810eac31e939c6eca90ee045c0ee736`.

### evaluation:552445

Chamadas escritas diretamente neste corpo: `.replaceAll`, `stripSpotlightTag`.

SHA-256 do trecho: `a72ec92687d7bd12d6f8499c21beadfe7810eac31e939c6eca90ee045c0ee736`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
