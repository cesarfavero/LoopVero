# `SandExperimentServiceCore.getDynamicConfig`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:553188-553198](../../../../../../../reference/runtime/host-main.cjs#L553188-L553198) | `method` | não | `name18, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553188-553198](../../../../../../../reference/runtime/host-main.cjs#L553188-L553198) | 3 | 0 | 0 | 2 | 0 | 1 |

### host:553188

Chamadas escritas diretamente neste corpo: `entry.parse`, `envDynamicConfigOverride`, `this.client.getDynamicConfig`, `this.reportConfigParseFailure`.

SHA-256 do trecho: `3e642f2f38c31e0c8532dcb43f2ceef9c17f9257e4ff9000548376396f674f29`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
