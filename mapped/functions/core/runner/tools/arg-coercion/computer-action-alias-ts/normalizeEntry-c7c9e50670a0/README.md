# `normalizeEntry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/arg-coercion/computer-action-alias.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/arg-coercion/computer-action-alias-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776787-776816](../../../../../../../../reference/runtime/host-main.cjs#L776787-L776816) | `FunctionDeclaration` | não | `entry` |
| [evaluation:576432-576461](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576432-L576461) | `FunctionDeclaration` | não | `entry` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776787-776816](../../../../../../../../reference/runtime/host-main.cjs#L776787-L776816) | 4 | 1 | 0 | 5 | 0 | 0 |
| [evaluation:576432-576461](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576432-L576461) | 4 | 1 | 0 | 5 | 0 | 0 |

### host:776787

Chamadas escritas diretamente neste corpo: `COMPUTER_ACTION_ALIASES.get`, `JSON.stringify`, `isUnknownRecord2`, `sameValue`.

SHA-256 do trecho: `61fe9caa2801ab38cb87d0c708b653d63f922e8a7e068502aa4046090914ad75`.

### evaluation:576432

Chamadas escritas diretamente neste corpo: `COMPUTER_ACTION_ALIASES.get`, `JSON.stringify`, `isUnknownRecord2`, `sameValue`.

SHA-256 do trecho: `61fe9caa2801ab38cb87d0c708b653d63f922e8a7e068502aa4046090914ad75`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
