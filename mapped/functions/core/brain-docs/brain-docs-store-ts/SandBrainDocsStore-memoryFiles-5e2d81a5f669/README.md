# `SandBrainDocsStore.memoryFiles`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/brain-docs/brain-docs-store.ts` · [README do módulo](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:629413-629420](../../../../../../reference/runtime/sand-eval-runner.cjs#L629413-L629420) | `method` | não | `memoryDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629413-629420](../../../../../../reference/runtime/sand-eval-runner.cjs#L629413-L629420) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:629413

Chamadas escritas diretamente neste corpo: `logs.set`, `new Map`, `this.read`, `this.textFilesUnder`.

SHA-256 do trecho: `8a55618dab1b0119ef0e34af77f212922d421fa734ed0454aa9c53ca9591d282`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
