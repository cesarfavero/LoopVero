# `SandExperimentServiceCore.setIsWorkAccount`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552763-552767](../../../../../../../reference/runtime/host-main.cjs#L552763-L552767) | `method` | não | `isWorkAccount` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552763-552767](../../../../../../../reference/runtime/host-main.cjs#L552763-L552767) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:552763

Chamadas escritas diretamente neste corpo: `this.refreshSnapshot`.

Alvos de atribuição ou incremento: `this.isWorkAccount`.

SHA-256 do trecho: `c9228fcc4ae498017f6a54b421e6aa9e545b311a29cd0835706796b9e2912804`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
