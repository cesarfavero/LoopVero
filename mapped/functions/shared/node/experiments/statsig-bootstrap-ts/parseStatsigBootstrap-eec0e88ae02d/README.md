# `parseStatsigBootstrap`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/statsig-bootstrap.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/statsig-bootstrap-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552364-552371](../../../../../../../reference/runtime/host-main.cjs#L552364-L552371) | `FunctionDeclaration` | não | `config2, appVersion` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552364-552371](../../../../../../../reference/runtime/host-main.cjs#L552364-L552371) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:552364

Chamadas escritas diretamente neste corpo: `JSON.parse`, `JSON.stringify`, `isUnknownRecord2`.

SHA-256 do trecho: `cf89811be14f4a39f676582cca30577f5424b1618e64ab1f843391c6e9f59b83`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
