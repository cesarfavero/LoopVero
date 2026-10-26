# `sandUiActUnlocked`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/in-app-links-guidance.ts` · [README do módulo](../../../../../modules/core/runner/in-app-links-guidance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557634-557636](../../../../../../reference/runtime/host-main.cjs#L557634-L557636) | `FunctionDeclaration` | não | `gates` |
| [evaluation:546081-546083](../../../../../../reference/runtime/sand-eval-runner.cjs#L546081-L546083) | `FunctionDeclaration` | não | `gates` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557634-557636](../../../../../../reference/runtime/host-main.cjs#L557634-L557636) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546081-546083](../../../../../../reference/runtime/sand-eval-runner.cjs#L546081-L546083) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557634

Chamadas escritas diretamente neste corpo: `sandUiOpenUnlocked`.

SHA-256 do trecho: `d65a3dead4046dc78db10078a4e0e60e8cf468748b03cbf66a0a6142ba6a7875`.

### evaluation:546081

Chamadas escritas diretamente neste corpo: `sandUiOpenUnlocked`.

SHA-256 do trecho: `d65a3dead4046dc78db10078a4e0e60e8cf468748b03cbf66a0a6142ba6a7875`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
