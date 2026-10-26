# `SandExperimentOverrideStore.clearParam`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/experiment-overrides.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/experiment-overrides-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552058-552071](../../../../../../../reference/runtime/host-main.cjs#L552058-L552071) | `method` | não | `{     experiment,     param   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552058-552071](../../../../../../../reference/runtime/host-main.cjs#L552058-L552071) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:552058

Chamadas escritas diretamente neste corpo: `.filter`, `Object.entries`, `Object.fromEntries`, `Object.hasOwn`, `Object.keys`, `this.overrides.delete`, `this.overrides.get`, `this.overrides.set`.

SHA-256 do trecho: `8fc38cd8cd7ff27af6f203aaf077460c9218e84443093be8c54098d8ebbff768`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
