# `connectorScopeOfSend`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/connector-scope/connector-scope.ts` · [README do módulo](../../../../../../modules/core/runner/connector-scope/connector-scope-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:525837-525840](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525837-L525840) | `FunctionDeclaration` | não | `mcpConfigJson` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525837-525840](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525837-L525840) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:525837

Chamadas escritas diretamente neste corpo: `mcpConfigJson.trim`, `validConnectorScope`.

SHA-256 do trecho: `691e23af00df03261fce741aa8c4e7a563ee8e158256e6e85dcd26750489cece`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
