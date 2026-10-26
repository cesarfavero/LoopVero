# `createUpdateAppHomeTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-app-home-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-app-home-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771049-771052](../../../../../../../reference/runtime/host-main.cjs#L771049-L771052) | `ArrowFunctionExpression` | sim | `_ctx, args, home` |
| [evaluation:570155-570158](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570155-L570158) | `ArrowFunctionExpression` | sim | `_ctx, args, home` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771049-771052](../../../../../../../reference/runtime/host-main.cjs#L771049-L771052) | 2 | 0 | 2 | 1 | 0 | 0 |
| [evaluation:570155-570158](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570155-L570158) | 2 | 0 | 2 | 1 | 0 | 0 |

### host:771049

Chamadas escritas diretamente neste corpo: `home.clear`, `home.publish`, `sandAppHomeDocumentFromArgs`.

SHA-256 do trecho: `60630ca0b5f0c20f7b23147b81d54c9647449c1275aa9ef2738de13744c06743`.

### evaluation:570155

Chamadas escritas diretamente neste corpo: `home.clear`, `home.publish`, `sandAppHomeDocumentFromArgs`.

SHA-256 do trecho: `60630ca0b5f0c20f7b23147b81d54c9647449c1275aa9ef2738de13744c06743`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
