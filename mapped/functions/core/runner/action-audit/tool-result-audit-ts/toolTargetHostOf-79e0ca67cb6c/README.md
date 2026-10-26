# `toolTargetHostOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/action-audit/tool-result-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/tool-result-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:489729-489743](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489729-L489743) | `FunctionDeclaration` | não | `target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489729-489743](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489729-L489743) | 3 | 0 | 0 | 3 | 0 | 1 |

### evaluation:489729

Chamadas escritas diretamente neste corpo: `.replace`, `BARE_HOSTNAME.test`, `HTTP_URL.test`, `OTHER_SCHEME_OR_LOGIN.test`, `hostname3.toLowerCase`, `new URL`, `target.trim`.

Alvos de atribuição ou incremento: `hostname3`.

SHA-256 do trecho: `3909908eb1077708e69377583b77c08e054993cb1972148b624eb49a79e95468`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
