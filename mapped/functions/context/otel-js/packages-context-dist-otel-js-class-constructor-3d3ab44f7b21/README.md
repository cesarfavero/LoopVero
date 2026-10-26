# `../packages/context/dist/otel.js/<class>.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/otel.js` · [README do módulo](../../../../modules/context/otel-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225883-225887](../../../../../reference/runtime/host-main.cjs#L225883-L225887) | `method` | não | `ctx, span, shouldEnd = true` |
| [evaluation:2397-2401](../../../../../reference/runtime/sand-eval-runner.cjs#L2397-L2401) | `method` | não | `ctx, span, shouldEnd = true` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225883-225887](../../../../../reference/runtime/host-main.cjs#L225883-L225887) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:2397-2401](../../../../../reference/runtime/sand-eval-runner.cjs#L2397-L2401) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225883

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `this.ctx`, `this.shouldEnd`, `this.span`.

SHA-256 do trecho: `4c853ef39e7c81d3f0cc72866dee98a404378dcb48b9182b2f03a434680ce640`.

### evaluation:2397

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `this.ctx`, `this.shouldEnd`, `this.span`.

SHA-256 do trecho: `4c853ef39e7c81d3f0cc72866dee98a404378dcb48b9182b2f03a434680ce640`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
