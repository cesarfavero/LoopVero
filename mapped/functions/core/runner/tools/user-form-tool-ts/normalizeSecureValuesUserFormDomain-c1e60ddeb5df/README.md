# `normalizeSecureValuesUserFormDomain`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/user-form-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726252-726264](../../../../../../../reference/runtime/host-main.cjs#L726252-L726264) | `FunctionDeclaration` | não | `raw` |
| [evaluation:560870-560882](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560870-L560882) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726252-726264](../../../../../../../reference/runtime/host-main.cjs#L726252-L726264) | 5 | 0 | 0 | 5 | 0 | 1 |
| [evaluation:560870-560882](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560870-L560882) | 5 | 0 | 0 | 5 | 0 | 1 |

### host:726252

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `new URL`, `normalizeUserFormDomain`, `raw.trim`, `value.includes`.

SHA-256 do trecho: `13f24faca81ea092bfa8bb9b6139627d8d50ddc44b7c2c99978a5aaa11b7ee6c`.

### evaluation:560870

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `new URL`, `normalizeUserFormDomain`, `raw.trim`, `value.includes`.

SHA-256 do trecho: `02694148fa31789dd8c1804701cffc1b66ed645c48200acd45428fb4f52df58c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
