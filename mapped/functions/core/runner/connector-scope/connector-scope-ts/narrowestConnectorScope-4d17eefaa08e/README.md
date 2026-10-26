# `narrowestConnectorScope`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/connector-scope/connector-scope.ts` · [README do módulo](../../../../../../modules/core/runner/connector-scope/connector-scope-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:525841-525863](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525841-L525863) | `FunctionDeclaration` | não | `scopes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525841-525863](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525841-L525863) | 4 | 1 | 0 | 5 | 0 | 0 |

### evaluation:525841

Chamadas escritas diretamente neste corpo: `.filter`, `JSON.stringify`, `Object.fromEntries`, `common2.map`, `others.push`, `rest.every`, `scopes.flatMap`, `serverConfigsOf`.

SHA-256 do trecho: `8de91af0287a419a411f13f982109f77bb07869ab2c7e383ccb44dfb6f0347f3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
