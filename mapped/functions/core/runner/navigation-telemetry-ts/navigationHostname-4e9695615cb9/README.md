# `navigationHostname`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/observability/README.md).

**Módulo:** `core/runner/navigation-telemetry.ts` · [README do módulo](../../../../../modules/core/runner/navigation-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:484601-484609](../../../../../../reference/runtime/sand-eval-runner.cjs#L484601-L484609) | `FunctionDeclaration` | não | `record4` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484601-484609](../../../../../../reference/runtime/sand-eval-runner.cjs#L484601-L484609) | 2 | 0 | 0 | 3 | 0 | 1 |

### evaluation:484601

Chamadas escritas diretamente neste corpo: `.hostname.toLowerCase`, `new URL`.

SHA-256 do trecho: `bf218fb5f87e0a2023aafb9dc424692decac49eccced354cccf9e6d943907114`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
