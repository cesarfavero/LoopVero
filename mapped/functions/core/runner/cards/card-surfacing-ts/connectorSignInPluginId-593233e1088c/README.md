# `connectorSignInPluginId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/cards/card-surfacing.ts` · [README do módulo](../../../../../../modules/core/runner/cards/card-surfacing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763839-763843](../../../../../../../reference/runtime/host-main.cjs#L763839-L763843) | `FunctionDeclaration` | não | `card, resolved` |
| [evaluation:557173-557177](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557173-L557177) | `FunctionDeclaration` | não | `card, resolved` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763839-763843](../../../../../../../reference/runtime/host-main.cjs#L763839-L763843) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557173-557177](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557173-L557177) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:763839

Chamadas escritas diretamente neste corpo: `PLUGIN_ID_PATTERN.test`.

SHA-256 do trecho: `53c5e3b96aabd1921d6c1d113b3212422225ba2305d652d0d764c94b2aca4b81`.

### evaluation:557173

Chamadas escritas diretamente neste corpo: `PLUGIN_ID_PATTERN.test`.

SHA-256 do trecho: `53c5e3b96aabd1921d6c1d113b3212422225ba2305d652d0d764c94b2aca4b81`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
