# `sandUiActionAcceptsValue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-ui-map/types.ts` · [README do módulo](../../../../../../modules/core/runner/sand-ui-map/types-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557800-557808](../../../../../../../reference/runtime/host-main.cjs#L557800-L557808) | `FunctionDeclaration` | não | `action, value` |
| [evaluation:550629-550637](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550629-L550637) | `FunctionDeclaration` | não | `action, value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557800-557808](../../../../../../../reference/runtime/host-main.cjs#L557800-L557808) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:550629-550637](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550629-L550637) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:557800

Chamadas escritas diretamente neste corpo: `.includes`, `.test`, `new RegExp`, `sandUiActionValueIds`.

SHA-256 do trecho: `e8f5db8d6bdf29723bcb2d6136bef2135055258160d9c57ba8898e124b159c78`.

### evaluation:550629

Chamadas escritas diretamente neste corpo: `.includes`, `.test`, `new RegExp`, `sandUiActionValueIds`.

SHA-256 do trecho: `e8f5db8d6bdf29723bcb2d6136bef2135055258160d9c57ba8898e124b159c78`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
