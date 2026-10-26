# `isChildSpanNameSuppressed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/otel.js` · [README do módulo](../../../../modules/context/otel-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225776-225778](../../../../../reference/runtime/host-main.cjs#L225776-L225778) | `FunctionDeclaration` | não | `spanName` |
| [evaluation:2264-2266](../../../../../reference/runtime/sand-eval-runner.cjs#L2264-L2266) | `FunctionDeclaration` | não | `spanName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225776-225778](../../../../../reference/runtime/host-main.cjs#L225776-L225778) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:2264-2266](../../../../../reference/runtime/sand-eval-runner.cjs#L2264-L2266) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225776

Chamadas escritas diretamente neste corpo: `childSpanSuppressionPredicate`.

SHA-256 do trecho: `10df2cb6b2e1c8d74c54525c5c7ee847383d00948ba168923ac36057792cd3eb`.

### evaluation:2264

Chamadas escritas diretamente neste corpo: `childSpanSuppressionPredicate`.

SHA-256 do trecho: `10df2cb6b2e1c8d74c54525c5c7ee847383d00948ba168923ac36057792cd3eb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
