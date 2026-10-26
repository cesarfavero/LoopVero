# `SandBrainDocsStore.boxAgentMemoryFiles`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/brain-docs/brain-docs-store.ts` · [README do módulo](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:629490-629493](../../../../../../reference/runtime/sand-eval-runner.cjs#L629490-L629493) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629490-629493](../../../../../../reference/runtime/sand-eval-runner.cjs#L629490-L629493) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:629490

Chamadas escritas diretamente neste corpo: `getAgentMemoryDir`, `this.boxFamilies.has`, `this.memoryFiles`.

SHA-256 do trecho: `69cad5b72d95c57512ec22183e6a1d1d7e51a2954dc8a78051391e360efeec0d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
